import Layout from '../../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  let paths: { params: { slug: string } }[] = [];
  if (fs.existsSync(postsDirectory)) {
    const files = fs.readdirSync(postsDirectory);
    console.log('Blog post files found:', files);
    paths = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => ({ params: { slug: file.replace(/\.md$/, '') } }));
    console.log('Blog post paths generated:', paths);
  }
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    props: {
      title: data.title || slug,
      date: typeof data.date === 'string' ? data.date : (data.date ? String(data.date) : ''),
      contentHtml,
    },
  };
};

type BlogPostProps = {
  title: string;
  date: string;
  contentHtml: string;
};

export default function BlogPost({ title, date, contentHtml }: BlogPostProps) {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans">
        <section className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-primary dark:text-accent">{title}</h1>
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-8">{date}</div>
          <article className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </section>
      </div>
    </Layout>
  );
} 
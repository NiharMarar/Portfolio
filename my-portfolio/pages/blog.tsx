import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'my-portfolio/posts');
  let posts = [];
  if (fs.existsSync(postsDirectory)) {
    posts = fs.readdirSync(postsDirectory)
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const slug = file.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        return {
          slug,
          title: data.title || slug,
          date: data.date || '',
          excerpt: data.excerpt || '',
        };
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans">
        <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-primary dark:text-accent text-center">Blog</h1>
          {posts.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-200 font-sans mb-2">No blog posts yet.</p>
              <p className="text-gray-500 dark:text-gray-400 font-sans">Check back soon for technical articles, tutorials, and project write-ups!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <div key={post.slug} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-primary dark:text-accent mb-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">{post.date}</div>
                  <p className="text-gray-700 dark:text-gray-200 font-sans mb-2">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-secondary hover:underline font-medium">Read More</Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
} 
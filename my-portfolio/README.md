# Nihar Marar - Portfolio

A modern, interactive portfolio website built with Next.js, featuring a unique terminal interface and traditional portfolio pages.

## 🚀 Features

### Terminal Interface
- **Interactive Terminal**: Start your journey with an authentic terminal experience
- **Command Navigation**: Use familiar commands like `help`, `ls`, `cat`, `whoami`
- **Command History**: Navigate through previous commands with arrow keys
- **Tab Completion**: Auto-complete commands with the Tab key
- **Seamless Navigation**: Commands like `projects`, `about`, `contact` navigate to full pages

### Traditional Portfolio Pages
- **Home Page**: Classic portfolio layout with projects and skills
- **About**: Detailed information about background and experience
- **Projects**: Comprehensive project showcase with detailed descriptions
- **Skills**: Technical skills and proficiency levels
- **Experience**: Professional experience and achievements
- **Blog**: Technical blog posts and insights
- **Contact**: Get in touch form with Formspree integration
- **Testimonials**: Client and colleague testimonials

### Technical Features
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for all device sizes
- **Animations**: Smooth Framer Motion animations throughout
- **SEO Optimized**: Meta tags and Open Graph support
- **Performance**: Optimized images and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Contact Form**: Formspree
- **Blog**: Markdown with gray-matter and remark

## 🎮 Terminal Commands

| Command | Description |
|---------|-------------|
| `help` | Show available commands |
| `about` | Learn about Nihar |
| `projects` | View projects |
| `skills` | See technical skills |
| `experience` | View experience |
| `contact` | Get in touch |
| `blog` | Read blog posts |
| `resume` | Download resume |
| `whoami` | Show current user |
| `ls` | List files/directories |
| `cat` | Display file contents |
| `clear` | Clear terminal |
| `exit` | Exit terminal mode |

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run the development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
my-portfolio/
├── components/          # React components
│   ├── Terminal.tsx    # Terminal interface
│   ├── Layout.tsx      # Page layout wrapper
│   ├── Navbar.tsx      # Navigation bar
│   └── Footer.tsx      # Footer component
├── pages/              # Next.js pages
│   ├── index.tsx       # Terminal landing page
│   ├── home.tsx        # Traditional home page
│   ├── about.tsx       # About page
│   ├── projects.tsx    # Projects page
│   └── ...             # Other pages
├── posts/              # Blog markdown files
├── public/             # Static assets
└── styles/             # Global styles
```

## 🎨 Customization

### Adding New Terminal Commands
1. Add the command to the `commands` object in `components/Terminal.tsx`
2. Define the output and description
3. Add navigation logic if needed

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `styles/globals.css` for custom animations
- Terminal styles are in the global CSS file

### Content
- Update project data in respective page files
- Add blog posts as markdown files in the `posts/` directory
- Modify contact information in the terminal and contact page

## 🌐 Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ by Nihar Marar**

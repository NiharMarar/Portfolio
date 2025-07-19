import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

interface Command {
  command: string;
  output: string | React.ReactNode;
  timestamp: Date;
}

const commands = {
  help: {
    description: 'Show available commands',
    output: (
      <div className="space-y-2">
        <div className="text-green-400">Available commands:</div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div><span className="text-blue-400">help</span> - Show this help message</div>
          <div><span className="text-blue-400">cd</span> - Change directory</div>
          <div><span className="text-blue-400">ls</span> - List files/directories</div>
          <div><span className="text-blue-400">cat</span> - Display file contents</div>
          <div><span className="text-blue-400">pwd</span> - Show current directory</div>
          <div><span className="text-blue-400">whoami</span> - Show current user</div>
          <div><span className="text-blue-400">date</span> - Show current date/time</div>
          <div><span className="text-blue-400">echo</span> - Display text</div>
          <div><span className="text-blue-400">clear</span> - Clear terminal</div>
          <div><span className="text-blue-400">exit</span> - Exit terminal mode</div>
        </div>
        <div className="text-yellow-400 mt-2">Directories: about, projects, skills, experience, contact, blog, coursework, testimonials</div>
      </div>
    )
  },
  cd: {
    description: 'Change directory',
    output: (args: string, setCurrentDir: (dir: string) => void) => {
      const dir = args.trim();
      if (!dir) {
        return <div className="text-gray-300">Usage: cd [directory]</div>;
      }
      
      const directories = ['about', 'projects', 'skills', 'experience', 'contact', 'blog', 'coursework', 'testimonials'];
      
      if (directories.includes(dir)) {
        // Update current directory
        setCurrentDir(dir);
        // Show content for the directory
        const content = getDirectoryContent(dir);
        return (
          <div className="space-y-2">
            <div className="text-green-400">Changed to directory: {dir}</div>
            <div className="text-gray-300">{content}</div>
          </div>
        );
      } else if (dir === '..' || dir === '../') {
        // Go back to root
        setCurrentDir('');
        return <div className="text-green-400">Back to portfolio root</div>;
      } else {
        return <div className="text-red-400">Directory not found: {dir}</div>;
      }
    }
  },
  whoami: {
    description: 'Show current user',
    output: (
      <div className="space-y-2">
        <div className="text-green-400">Current user:</div>
        <div className="text-gray-300">visitor@portfolio</div>
                    <div className="text-yellow-400 mt-2">Welcome to Nihar&apos;s portfolio terminal!</div>
      </div>
    )
  },
  pwd: {
    description: 'Show current directory',
    output: (currentDir: string) => (
      <div className="text-gray-300">
        {currentDir ? `/home/visitor/portfolio/${currentDir}` : '/home/visitor/portfolio'}
      </div>
    )
  },
  date: {
    description: 'Show current date/time',
    output: (
      <div className="text-gray-300">{new Date().toLocaleString()}</div>
    )
  },
  echo: {
    description: 'Display text',
    output: (args: string) => (
      <div className="text-gray-300">{args || 'Usage: echo [text]'}</div>
    )
  },
  ls: {
    description: 'List files/directories',
    output: (
      <div className="space-y-2">
        <div className="text-green-400">Directory listing:</div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-blue-400">📁 about/</div>
          <div className="text-blue-400">📁 projects/</div>
          <div className="text-blue-400">📁 skills/</div>
          <div className="text-blue-400">📁 experience/</div>
          <div className="text-blue-400">📁 contact/</div>
          <div className="text-blue-400">📁 blog/</div>
          <div className="text-blue-400">📁 coursework/</div>
          <div className="text-blue-400">📁 testimonials/</div>
          <div className="text-green-400">📄 resume.pdf</div>
          <div className="text-yellow-400">📄 README.md</div>
        </div>
      </div>
    )
  },
  cat: {
    description: 'Display file contents',
    output: (
      <div className="space-y-2">
        <div className="text-green-400">File contents:</div>
        <div className="text-gray-300 text-sm">
          <div># Nihar Marar - Portfolio</div>
          <div>Full-Stack Developer & Machine Learning Engineer</div>
          <div></div>
          <div>## Quick Start</div>
          <div>- Type &apos;help&apos; for available commands</div>
          <div>- Type &apos;cd about&apos; to learn more about me</div>
          <div>- Type &apos;cd projects&apos; to see my work</div>
          <div>- Type &apos;cd contact&apos; to get in touch</div>
          <div></div>
          <div>## Skills</div>
          <div>- Python, React, Next.js, AWS, SQL, Java, C++</div>
          <div></div>
          <div>## Education</div>
          <div>- Computer Science Major</div>
          <div>- Relevant coursework in Data Structures, OS, ML</div>
        </div>
      </div>
    )
  },
  clear: {
    description: 'Clear terminal',
    output: null
  },
  exit: {
    description: 'Exit terminal mode',
    output: null
  }
};

// Directory content function
const getDirectoryContent = (dir: string) => {
  const content = {
    about: (
      <div className="space-y-4">
        <div className="text-green-400 text-lg font-semibold">About Nihar Marar</div>
        <div className="text-gray-300 space-y-3">
          <p>
            I&apos;m a passionate Full-Stack Developer and Machine Learning Engineer with expertise in building scalable web applications. 
            I love working with modern technologies and solving complex problems.
          </p>
          <div className="border-l-2 border-blue-400 pl-4">
            <div className="text-blue-400 font-semibold">Education</div>
            <div className="text-gray-300">Computer Science Major</div>
            <div className="text-gray-300 text-sm">Focus on Software Engineering and Machine Learning</div>
          </div>
          <div className="border-l-2 border-green-400 pl-4">
            <div className="text-green-400 font-semibold">Interests</div>
            <div className="text-gray-300">Web Development, Machine Learning, System Design, Open Source</div>
          </div>
          <div className="border-l-2 border-yellow-400 pl-4">
            <div className="text-yellow-400 font-semibold">Location</div>
            <div className="text-gray-300">Available for remote work worldwide</div>
          </div>
        </div>
        <div className="text-yellow-400 mt-4">Type &apos;cd projects&apos; to see my work or &apos;cd contact&apos; to get in touch!</div>
      </div>
    ),
    projects: (
      <div className="space-y-4">
        <div className="text-green-400 text-lg font-semibold">Featured Projects</div>
        <div className="space-y-4">
          <div className="border border-gray-600 rounded p-4">
            <div className="text-blue-400 font-semibold text-lg">NEXUS Shopping Website</div>
            <div className="text-gray-300 text-sm mb-2">Full-stack e-commerce platform with Next.js, Supabase, and Stripe</div>
            <div className="text-gray-400 text-xs">
              <span className="text-green-400">Tech:</span> Next.js, React, Supabase, Stripe, Tailwind CSS
            </div>
            <div className="text-gray-400 text-xs">
              <span className="text-green-400">Link:</span> https://shopping-website-zeta-rose.vercel.app/
            </div>
          </div>
          <div className="border border-gray-600 rounded p-4">
            <div className="text-blue-400 font-semibold text-lg">Atomic Archipelago</div>
            <div className="text-gray-300 text-sm mb-2">OS concurrency and scheduling puzzle in Java</div>
            <div className="text-gray-400 text-xs">
              <span className="text-green-400">Tech:</span> Java, Nachos, OS, Concurrency
            </div>
            <div className="text-gray-400 text-xs">
              <span className="text-green-400">Link:</span> https://github.com/NiharMarar/Atomic-Archipelago
            </div>
          </div>
          <div className="border border-gray-600 rounded p-4">
            <div className="text-blue-400 font-semibold text-lg">HealthSync</div>
            <div className="text-gray-300 text-sm mb-2">Hospital database management system with Flask</div>
            <div className="text-gray-400 text-xs">
              <span className="text-green-400">Tech:</span> Python, SQL, Flask
            </div>
            <div className="text-gray-400 text-xs">
              <span className="text-green-400">Link:</span> https://github.com/NiharMarar/HealthSync-Database-Application
            </div>
          </div>
        </div>
        <div className="text-yellow-400 mt-4">Type &apos;cd skills&apos; to see my technical skills!</div>
      </div>
    ),
    skills: (
      <div className="space-y-4">
        <div className="text-green-400 text-lg font-semibold">Technical Skills</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-blue-400 font-semibold">Programming Languages</div>
            <div className="space-y-1 text-sm">
              <div><span className="text-green-400">🐍 Python</span> - Advanced</div>
              <div><span className="text-green-400">☕ Java</span> - Advanced</div>
              <div><span className="text-green-400">💻 C++</span> - Intermediate</div>
              <div><span className="text-green-400">📜 JavaScript</span> - Advanced</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-blue-400 font-semibold">Web Technologies</div>
            <div className="space-y-1 text-sm">
              <div><span className="text-green-400">⚛️ React</span> - Advanced</div>
              <div><span className="text-green-400">🚀 Next.js</span> - Advanced</div>
              <div><span className="text-green-400">🎨 Tailwind</span> - Advanced</div>
              <div><span className="text-green-400">🗄️ SQL</span> - Advanced</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-blue-400 font-semibold">Cloud & DevOps</div>
            <div className="space-y-1 text-sm">
              <div><span className="text-green-400">☁️ AWS</span> - Intermediate</div>
              <div><span className="text-green-400">🚀 Vercel</span> - Advanced</div>
              <div><span className="text-green-400">🐳 Docker</span> - Intermediate</div>
              <div><span className="text-green-400">📦 Git</span> - Advanced</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-blue-400 font-semibold">Tools & Frameworks</div>
            <div className="space-y-1 text-sm">
              <div><span className="text-green-400">🤖 TensorFlow</span> - Intermediate</div>
              <div><span className="text-green-400">📊 Pandas</span> - Advanced</div>
              <div><span className="text-green-400">🔧 Supabase</span> - Advanced</div>
              <div><span className="text-green-400">💳 Stripe</span> - Intermediate</div>
            </div>
          </div>
        </div>
      </div>
    ),
    experience: (
      <div className="space-y-4">
        <div className="text-green-400 text-lg font-semibold">Professional Experience</div>
        <div className="space-y-4">
          <div className="border-l-2 border-green-400 pl-4">
            <div className="text-green-400 font-semibold">Full-Stack Developer</div>
            <div className="text-gray-300 text-sm">2023 - Present</div>
            <div className="text-gray-300 mt-2">
              Building scalable web applications with modern technologies like React, Next.js, and Node.js. 
              Specializing in e-commerce platforms and real-time applications.
            </div>
            <div className="text-gray-400 text-xs mt-2">
              <span className="text-green-400">Key Skills:</span> React, Next.js, TypeScript, Node.js, PostgreSQL
            </div>
          </div>
          <div className="border-l-2 border-blue-400 pl-4">
            <div className="text-blue-400 font-semibold">Machine Learning Engineer</div>
            <div className="text-gray-300 text-sm">2022 - Present</div>
            <div className="text-gray-300 mt-2">
              Developing ML models and data pipelines for various applications. 
              Working with TensorFlow, PyTorch, and cloud-based ML services.
            </div>
            <div className="text-gray-400 text-xs mt-2">
              <span className="text-green-400">Key Skills:</span> Python, TensorFlow, AWS SageMaker, Data Analysis
            </div>
          </div>
          <div className="border-l-2 border-yellow-400 pl-4">
            <div className="text-yellow-400 font-semibold">Open Source Contributor</div>
            <div className="text-gray-300 text-sm">2021 - Present</div>
            <div className="text-gray-300 mt-2">
              Contributing to various open source projects and maintaining personal repositories. 
              Focus on web development and educational tools.
            </div>
          </div>
        </div>
      </div>
    ),
    contact: (
      <div className="space-y-4">
        <div className="text-green-400 text-lg font-semibold">Contact Information</div>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="text-blue-400">📧 Email:</span>
            <span className="text-gray-300">nihar.marar@example.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-blue-400">💼 LinkedIn:</span>
            <span className="text-gray-300">linkedin.com/in/niharmarar</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-blue-400">🐙 GitHub:</span>
            <span className="text-gray-300">github.com/NiharMarar</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-blue-400">🌐 Portfolio:</span>
            <span className="text-gray-300">nihar-marar.vercel.app</span>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-3">
          <div className="text-yellow-400 text-sm">
            💡 <span className="text-gray-300">I&apos;m always open to discussing new opportunities, collaborations, or just chatting about technology!</span>
          </div>
        </div>
      </div>
    ),
    blog: (
      <div className="space-y-4">
        <div className="text-green-400 text-lg font-semibold">Blog Posts</div>
        <div className="space-y-3">
          <div className="border border-gray-600 rounded p-3">
            <div className="text-blue-400 font-semibold">Getting Started with Next.js</div>
            <div className="text-gray-300 text-sm">A comprehensive guide to building modern web applications with Next.js</div>
            <div className="text-gray-400 text-xs mt-1">Published: 2024-01-15</div>
          </div>
        </div>
        <div className="text-yellow-400 mt-4">More posts coming soon! Type &apos;cd contact&apos; to get in touch.</div>
      </div>
    ),
    coursework: (
      <div className="space-y-4">
        <div className="text-green-400 text-lg font-semibold">Relevant Coursework</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-blue-400 font-semibold">Core Computer Science</div>
            <div className="space-y-1 text-sm">
              <div><span className="text-green-400">📚 Data Structures & Algorithms</span></div>
              <div><span className="text-green-400">🖥️ Operating Systems</span></div>
              <div><span className="text-green-400">🌐 Computer Networks</span></div>
              <div><span className="text-green-400">🗄️ Database Systems</span></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-blue-400 font-semibold">Specialized Topics</div>
            <div className="space-y-1 text-sm">
              <div><span className="text-green-400">🤖 Machine Learning</span></div>
              <div><span className="text-green-400">🌐 Web Development</span></div>
              <div><span className="text-green-400">🔒 Computer Security</span></div>
              <div><span className="text-green-400">📊 Software Engineering</span></div>
            </div>
          </div>
        </div>
      </div>
    ),
    testimonials: (
      <div className="space-y-4">
        <div className="text-green-400 text-lg font-semibold">Testimonials</div>
        <div className="text-gray-300 text-center py-8">
          <div className="text-4xl mb-4">🚧</div>
          <div className="text-lg font-semibold text-yellow-400">Coming Soon!</div>
          <div className="text-sm mt-2">Testimonials section is under construction.</div>
          <div className="text-xs mt-4 text-gray-400">Check back later for client and colleague testimonials.</div>
        </div>
      </div>
    )
  };
  
  return content[dir as keyof typeof content] || <div className="text-red-400">Directory not found</div>;
};

const commandList = Object.keys(commands);
const directories = ['about', 'projects', 'skills', 'experience', 'contact', 'blog', 'coursework', 'testimonials'];

export default function Terminal() {
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentDir, setCurrentDir] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus();
    
    // Add welcome message after a short delay
    setTimeout(() => {
      setCommandHistory([{
        command: '',
        output: (
          <div className="space-y-2">
            <div className="text-green-400">Welcome to Nihar&apos;s Portfolio Terminal!</div>
            <div className="text-gray-300">Type &apos;help&apos; to see available commands.</div>
          </div>
        ),
        timestamp: new Date()
      }]);
      setIsLoaded(true);
    }, 300);
  }, []);

  useEffect(() => {
    // Scroll to bottom when new commands are added
    if (terminalRef.current && isLoaded) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory, isLoaded]);

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const [command, ...args] = trimmedCmd.split(' ');
    
    if (!command) return;

    const commandObj = commands[command.toLowerCase() as keyof typeof commands];
    
    if (command.toLowerCase() === 'clear') {
      setCommandHistory([]);
      return;
    }
    
    if (command.toLowerCase() === 'exit') {
      // Exit terminal mode and go to regular homepage
      router.push('/home');
      return;
    }

    if (command.toLowerCase() === 'echo') {
      const newCommand: Command = {
        command: cmd,
        output: commandObj.output(args.join(' ')),
        timestamp: new Date()
      };
      setCommandHistory(prev => [...prev, newCommand]);
      return;
    }

    if (command.toLowerCase() === 'cd') {
      const newCommand: Command = {
        command: cmd,
        output: commandObj.output(args.join(' '), setCurrentDir),
        timestamp: new Date()
      };
      setCommandHistory(prev => [...prev, newCommand]);
      return;
    }

    if (command.toLowerCase() === 'pwd') {
      const newCommand: Command = {
        command: cmd,
        output: commandObj.output(currentDir),
        timestamp: new Date()
      };
      setCommandHistory(prev => [...prev, newCommand]);
      return;
    }

    const newCommand: Command = {
      command: cmd,
      output: commandObj ? commandObj.output : (
        <div className="text-red-400">
          Command not found: {command}. Type &apos;help&apos; for available commands.
        </div>
      ),
      timestamp: new Date()
    };

    setCommandHistory(prev => [...prev, newCommand]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      // Navigate command history
      const commands = commandHistory.map(cmd => cmd.command).filter(cmd => cmd);
      if (commands.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commands.length - 1);
        setHistoryIndex(newIndex);
        setInput(commands[commands.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const commands = commandHistory.map(cmd => cmd.command).filter(cmd => cmd);
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(newIndex >= 0 ? commands[commands.length - 1 - newIndex] : '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Enhanced tab completion
      const words = input.split(' ');
      const lastWord = words[words.length - 1].toLowerCase();
      
      if (words.length === 1) {
        // Completing command
        const matches = commandList.filter(cmd => cmd.startsWith(lastWord));
        if (matches.length === 1) {
          setInput(matches[0]);
        } else if (matches.length > 1) {
          // Show suggestions
          const suggestion = matches[0];
          setInput(suggestion);
        }
      } else if (words.length === 2 && words[0].toLowerCase() === 'cd') {
        // Completing directory for cd command
        const matches = directories.filter(dir => dir.startsWith(lastWord));
        if (matches.length === 1) {
          setInput(`cd ${matches[0]}`);
        } else if (matches.length > 1) {
          // Show suggestions
          const suggestion = matches[0];
          setInput(`cd ${suggestion}`);
        }
      }
    }
  };

  const goToWebsite = () => {
    router.push('/home');
  };

  // Generate prompt based on current directory
  const getPrompt = () => {
    if (currentDir) {
      return `visitor@portfolio/${currentDir}:~$`;
    }
    return 'visitor@portfolio:~$';
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        {/* Terminal Header */}
        <div className="bg-gray-800 rounded-t-lg p-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="text-gray-400 text-sm ml-4">Nihar&apos;s Portfolio Terminal</div>
          </div>
          <button
            onClick={goToWebsite}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
          >
            🌐 Website
          </button>
        </div>

        {/* Terminal Body */}
        <div 
          ref={terminalRef}
          className="bg-black rounded-b-lg p-4 h-[70vh] overflow-y-auto border border-gray-700 terminal-scrollbar"
        >
          {/* Command History */}
          {commandHistory.map((cmd, index) => (
            <div key={index} className="mb-4">
              {cmd.command && (
                <div className="mb-2">
                  <span className="text-blue-400">{getPrompt()} </span>
                  <span className="text-white">{cmd.command}</span>
                </div>
              )}
              {cmd.output && (
                <div className="ml-4 text-gray-300">
                  {cmd.output}
                </div>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-blue-400">{getPrompt()} </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white outline-none ml-2"
              placeholder="Type a command..."
              autoComplete="off"
            />
            <div className="w-2 h-5 bg-green-400 terminal-cursor ml-2"></div>
          </form>
        </div>

        {/* Terminal Footer */}
        <div className="text-gray-500 text-xs mt-2 text-center">
          Press &apos;help&apos; for commands • Use ↑↓ to navigate history • Tab for completion • Type &apos;exit&apos; or click Website to leave terminal
        </div>
      </motion.div>
    </div>
  );
} 
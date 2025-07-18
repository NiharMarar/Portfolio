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
          <div><span className="text-blue-400">about</span> - Learn about me</div>
          <div><span className="text-blue-400">projects</span> - View my projects</div>
          <div><span className="text-blue-400">skills</span> - See my technical skills</div>
          <div><span className="text-blue-400">experience</span> - View my experience</div>
          <div><span className="text-blue-400">contact</span> - Get in touch</div>
          <div><span className="text-blue-400">blog</span> - Read my blog</div>
          <div><span className="text-blue-400">resume</span> - Download my resume</div>
          <div><span className="text-blue-400">whoami</span> - Show current user</div>
          <div><span className="text-blue-400">ls</span> - List files/directories</div>
          <div><span className="text-blue-400">cat</span> - Display file contents</div>
          <div><span className="text-blue-400">clear</span> - Clear terminal</div>
          <div><span className="text-blue-400">exit</span> - Exit terminal mode</div>
        </div>
      </div>
    )
  },
  whoami: {
    description: 'Show current user',
    output: (
      <div className="space-y-2">
        <div className="text-green-400">Current user:</div>
        <div className="text-gray-300">visitor@portfolio</div>
        <div className="text-yellow-400 mt-2">Welcome to Nihar's portfolio terminal!</div>
      </div>
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
          <div>- Type 'help' for available commands</div>
          <div>- Type 'about' to learn more about me</div>
          <div>- Type 'projects' to see my work</div>
          <div>- Type 'contact' to get in touch</div>
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
  about: {
    description: 'Learn about me',
    output: (
      <div className="space-y-2">
        <div className="text-green-400">About Nihar Marar:</div>
        <div className="text-gray-300">
          I'm a passionate Full-Stack Developer and Machine Learning Engineer with expertise in building scalable web applications. 
          I love working with modern technologies like React, Next.js, Python, and AWS.
        </div>
        <div className="text-yellow-400 mt-2">Type 'projects' to see my work or 'contact' to get in touch!</div>
      </div>
    )
  },
  projects: {
    description: 'View my projects',
    output: (
      <div className="space-y-2">
        <div className="text-green-400">Featured Projects:</div>
        <div className="space-y-3">
          <div className="border-l-2 border-blue-400 pl-3">
            <div className="text-blue-400 font-semibold">NEXUS Shopping Website</div>
            <div className="text-gray-300 text-sm">Full-stack e-commerce platform with Next.js, Supabase, and Stripe</div>
          </div>
          <div className="border-l-2 border-blue-400 pl-3">
            <div className="text-blue-400 font-semibold">Atomic Archipelago</div>
            <div className="text-gray-300 text-sm">OS concurrency and scheduling puzzle in Java</div>
          </div>
          <div className="border-l-2 border-blue-400 pl-3">
            <div className="text-blue-400 font-semibold">HealthSync</div>
            <div className="text-gray-300 text-sm">Hospital database management system with Flask</div>
          </div>
        </div>
        <div className="text-yellow-400 mt-2">Type 'projects' to navigate to the full projects page!</div>
      </div>
    )
  },
  skills: {
    description: 'See my technical skills',
    output: (
      <div className="space-y-2">
        <div className="text-green-400">Technical Skills:</div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div><span className="text-blue-400">🐍 Python</span> - Advanced</div>
          <div><span className="text-blue-400">⚛️ React</span> - Advanced</div>
          <div><span className="text-blue-400">☁️ AWS</span> - Intermediate</div>
          <div><span className="text-blue-400">🗄️ SQL</span> - Advanced</div>
          <div><span className="text-blue-400">💻 C++</span> - Intermediate</div>
          <div><span className="text-blue-400">☕ Java</span> - Advanced</div>
          <div><span className="text-blue-400">🚀 Next.js</span> - Advanced</div>
          <div><span className="text-blue-400">🎨 Tailwind</span> - Advanced</div>
        </div>
      </div>
    )
  },
  experience: {
    description: 'View my experience',
    output: (
      <div className="space-y-2">
        <div className="text-green-400">Experience:</div>
        <div className="space-y-3">
          <div className="border-l-2 border-green-400 pl-3">
            <div className="text-green-400 font-semibold">Full-Stack Developer</div>
            <div className="text-gray-300 text-sm">Building scalable web applications with modern technologies</div>
          </div>
          <div className="border-l-2 border-green-400 pl-3">
            <div className="text-green-400 font-semibold">Machine Learning Engineer</div>
            <div className="text-gray-300 text-sm">Developing ML models and data pipelines</div>
          </div>
        </div>
      </div>
    )
  },
  contact: {
    description: 'Get in touch',
    output: (
      <div className="space-y-2">
        <div className="text-green-400">Contact Information:</div>
        <div className="space-y-1 text-sm">
          <div><span className="text-blue-400">📧 Email:</span> nihar.marar@example.com</div>
          <div><span className="text-blue-400">💼 LinkedIn:</span> linkedin.com/in/niharmarar</div>
          <div><span className="text-blue-400">🐙 GitHub:</span> github.com/NiharMarar</div>
        </div>
        <div className="text-yellow-400 mt-2">Type 'contact' to navigate to the contact page!</div>
      </div>
    )
  },
  blog: {
    description: 'Read my blog',
    output: (
      <div className="space-y-2">
        <div className="text-green-400">Blog Posts:</div>
        <div className="space-y-2 text-sm">
          <div className="text-blue-400">• Getting Started with Next.js</div>
          <div className="text-blue-400">• Building Scalable E-commerce Platforms</div>
          <div className="text-blue-400">• OS Concurrency Best Practices</div>
        </div>
        <div className="text-yellow-400 mt-2">Type 'blog' to navigate to the full blog!</div>
      </div>
    )
  },
  resume: {
    description: 'Download my resume',
    output: (
      <div className="space-y-2">
        <div className="text-green-400">Resume Download:</div>
        <div className="text-gray-300">
          <a href="/NiharMarar_Resume.pdf" download className="text-blue-400 hover:underline">
            📄 Download NiharMarar_Resume.pdf
          </a>
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

const commandList = Object.keys(commands);

export default function Terminal() {
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus();
    
    // Show welcome message with delay
    setTimeout(() => {
      setShowWelcome(true);
      setCommandHistory([{
        command: '',
        output: (
          <div className="space-y-2">
            <div className="text-green-400">Welcome to Nihar's Portfolio Terminal!</div>
            <div className="text-gray-300">Type 'help' to see available commands.</div>
          </div>
        ),
        timestamp: new Date()
      }]);
    }, 500);
  }, []);

  useEffect(() => {
    // Scroll to bottom when new commands are added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    const command = commands[trimmedCmd as keyof typeof commands];
    
    if (trimmedCmd === 'clear') {
      setCommandHistory([]);
      return;
    }
    
    if (trimmedCmd === 'exit') {
      // Exit terminal mode and go to regular homepage
      router.push('/home');
      return;
    }

    if (trimmedCmd === 'projects' || trimmedCmd === 'about' || trimmedCmd === 'contact' || 
        trimmedCmd === 'skills' || trimmedCmd === 'experience' || trimmedCmd === 'blog') {
      // Navigate to the actual page
      router.push(`/${trimmedCmd}`);
      return;
    }

    const newCommand: Command = {
      command: cmd,
      output: command ? command.output : (
        <div className="text-red-400">
          Command not found: {trimmedCmd}. Type 'help' for available commands.
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
      // Command completion
      const partial = input.toLowerCase();
      const matches = commandList.filter(cmd => cmd.startsWith(partial));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        // Show suggestions
        const suggestion = matches[0];
        setInput(suggestion);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Terminal Header */}
        <div className="bg-gray-800 rounded-t-lg p-3 flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="text-gray-400 text-sm ml-4">Nihar's Portfolio Terminal</div>
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
                  <span className="text-blue-400">visitor@portfolio:~$ </span>
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
            <span className="text-blue-400">visitor@portfolio:~$ </span>
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
          Press 'help' for commands • Use ↑↓ to navigate history • Tab for completion • Type 'exit' to leave terminal
        </div>
      </motion.div>
    </div>
  );
} 
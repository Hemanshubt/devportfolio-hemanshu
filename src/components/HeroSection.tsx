
import React from 'react';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Terminal from './Terminal';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 pb-10 relative bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hello,
              <br />This is <span className="text-gradient">HEMANSHU</span>, 
              <br />I'm an <span className="text-gradient">DevOps</span> Enthusiast.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Transforming ideas into scalable cloud-native solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="group bg-accent1 hover:bg-accent1/80 text-black font-medium px-6 py-5">
                <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Contact Me
              </Button>
              <Button variant="outline" className="group border-accent2 text-accent2 hover:bg-accent2/10">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Get Resume
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent1 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent1 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="mailto:youremail@example.com" className="text-foreground hover:text-accent1 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent1 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Mail, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent1 to-accent2 mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            Feel free to reach out for opportunities or just to say hi!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-accent1/10 text-accent1">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-accent1">your.email@example.com</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-accent2/10 text-accent2">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-muted-foreground">Shirpur, Maharashtra, India</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Connect with me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <form className="space-y-6 neo-blur p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-accent1 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-accent1 focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-accent1 focus:outline-none"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-accent1 focus:outline-none resize-none"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-accent1 to-accent2 hover:opacity-90 text-black font-medium"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

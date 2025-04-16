
import React from 'react';
import { Heart, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-muted">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hemanshu Mahajan. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <span className="text-sm text-muted-foreground flex items-center">
              Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> and <Coffee className="h-4 w-4 mx-1 text-amber-500" /> by Hemanshu
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

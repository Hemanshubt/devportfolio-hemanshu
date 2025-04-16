
import React from 'react';
import { Server, Cloud, GitBranch, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent1 to-accent2 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              I'm a passionate <span className="text-accent1">DevOps enthusiast</span> and <span className="text-accent2">entry-level cloud engineer</span> with a strong foundation in cloud infrastructure, containerization, CI/CD pipelines, and automation. 
            </p>
            <p className="text-lg">
              My goal is to bridge the gap between development and operations, ensuring streamlined workflows, reduced deployment times, and enhanced application reliability.
            </p>
            <p className="text-lg">
              I'm constantly learning and exploring new technologies to improve system efficiency and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="neo-blur p-6 rounded-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <Server className="w-12 h-12 text-accent1 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
              <p className="text-muted-foreground">Designing and managing cloud-native infrastructure solutions.</p>
            </div>

            <div className="neo-blur p-6 rounded-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <Cloud className="w-12 h-12 text-accent2 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
              <p className="text-muted-foreground">AWS services and cloud management expertise.</p>
            </div>

            <div className="neo-blur p-6 rounded-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <GitBranch className="w-12 h-12 text-accent1 mb-4" />
              <h3 className="text-xl font-semibold mb-2">CI/CD</h3>
              <p className="text-muted-foreground">Implementing automated pipelines for efficient deployments.</p>
            </div>

            <div className="neo-blur p-6 rounded-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <Globe className="w-12 h-12 text-accent2 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Containerization</h3>
              <p className="text-muted-foreground">Docker and Kubernetes for scalable applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

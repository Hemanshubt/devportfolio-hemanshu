
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
              I'm a passionate <span className="text-accent1">DevOps enthusiast</span> and <span className="text-accent2">Entry-Level Cloud Engineer</span> with a strong foundation in cloud infrastructure, containerization, CI/CD pipelines, and automation.
            </p>
            <p className="text-lg">
              My goal is to bridge the gap between development and operations, ensuring streamlined workflows, reduced deployment times, and enhanced application reliability.
            </p>
            <p className="text-lg">
              I'm constantly learning and exploring new technologies to improve system efficiency and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { 
                icon: <Server />, 
                title: 'Infrastructure', 
                description: 'Designing and managing cloud-native infrastructure solutions.',
                color: 'accent1'
              },
              { 
                icon: <Cloud />, 
                title: 'Cloud Computing', 
                description: 'AWS services and cloud management expertise.',
                color: 'accent2'
              },
              { 
                icon: <GitBranch />, 
                title: 'CI/CD', 
                description: 'Implementing automated pipelines for efficient deployments.',
                color: 'accent1'
              },
              { 
                icon: <Globe />, 
                title: 'Containerization', 
                description: 'Docker and Kubernetes for scalable applications.',
                color: 'accent2'
              }
            ].map((item) => (
              <div 
                key={item.title} 
                className="neo-blur p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 hover:translate-y-[-10px] hover:scale-[1.05] hover:border-accent1/50 group"
              >
                <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-br from-${item.color} to-${item.color}/50 group-hover:rotate-12 transition-transform`}>
                  {React.cloneElement(item.icon, { 
                    className: `w-8 h-8 text-white group-hover:scale-110 transition-transform` 
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent1 transition-colors">{item.title}</h3>
                <p className="text-muted-foreground group-hover:text-white transition-colors">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

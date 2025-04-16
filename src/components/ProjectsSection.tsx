import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: 'Two-tier Flaskapp Deployment',
      description: 'A comprehensive CI/CD pipeline for deploying a two-tier Flask application using Docker containers and Kubernetes orchestration.',
      technologies: ['Docker', 'Kubernetes', 'Flask', 'MySQL', 'Jenkins'],
      githubUrl: 'https://github.com/Hemanshubt/two-tier-flaskapp.git',
      // demoUrl: 'https://demo-url.com',
      image: '/project1.png',
    },
    {
      title: 'Node.js To-Do CI/CD Pipeline',
      description: 'Implemented an automated CI/CD pipeline for a Node.js To-Do application using Jenkins, Docker, and AWS infrastructure.',
      technologies: ['Node.js', 'Jenkins', 'Docker', 'AWS', 'Terraform'],
      githubUrl: 'https://github.com/Hemanshubt/Node-todo-app-main.git',
      // demoUrl: 'https://demo-url.com',
      image: '/placeholder.svg',
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent1 to-accent2 mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            Some of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="neo-blur rounded-lg overflow-hidden group transform transition duration-300 hover:translate-y-[-15px] hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="h-48 md:h-64 bg-muted relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent1 transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 group-hover:text-white transition-colors">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs rounded-full bg-muted text-foreground transition-colors group-hover:bg-accent1/20 group-hover:text-accent1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent1 text-accent1 hover:bg-accent1/10 group-hover:bg-accent1/20 group-hover:border-accent1/50"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover:animate-pulse" /> Code
                    </a>
                  </Button>
                  
                  {project.demoUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-accent2 text-accent2 hover:bg-accent2/10 group-hover:bg-accent2/20 group-hover:border-accent2/50"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:animate-pulse" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

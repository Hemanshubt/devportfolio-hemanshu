
import React from 'react';
import { Briefcase, Calendar, Building, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Cloud/DevOps Engineer Intern",
      company: "Brillium Technologies",
      period: "March 2024 - Present",
      description: "Working with AWS services including EC2, S3, IAM, VPC, and implementing CI/CD pipelines with Jenkins and GitHub Actions. Deploying applications using Docker and Kubernetes for containerization.",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions"],
      link: "https://www.brilliumtech.com/"
    },
    {
      title: "DevOps Intern",
      company: "Infotech Hub",
      period: "Jan 2024 - Feb 2024",
      description: "Managed Linux servers, developed automation scripts using Bash and Python, and implemented infrastructure as code using Terraform. Configured monitoring solutions with Nagios and Prometheus.",
      skills: ["Linux", "Bash", "Python", "Terraform", "Nagios", "Prometheus"],
      link: "https://www.infotechhub.com/"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent1 to-accent2 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="neo-blur border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="flex items-center gap-2 group-hover:text-accent1 transition-colors">
                      <Briefcase className="text-accent1 group-hover:rotate-12 transition-transform" size={20} />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Building className="text-accent2 group-hover:scale-110 transition-transform" size={16} />
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent1 transition-colors flex items-center gap-1 group-hover:underline"
                      >
                        {exp.company}
                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </CardDescription>
                  </div>
                  <span className="text-accent2 flex items-center gap-1 text-sm group-hover:font-medium transition-all">
                    <Calendar size={16} className="group-hover:animate-pulse" />
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-muted-foreground group-hover:text-foreground transition-colors">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map((skill, i) => (
                    <HoverCard key={i}>
                      <HoverCardTrigger>
                        <span 
                          className="text-xs px-2 py-1 rounded bg-accent/30 text-accent1 hover:bg-accent1 hover:text-black transition-colors cursor-pointer"
                        >
                          {skill}
                        </span>
                      </HoverCardTrigger>
                      <HoverCardContent className="neo-blur border-none w-48 text-center">
                        <p className="text-sm font-medium">{skill}</p>
                        <p className="text-xs text-muted-foreground">Used in {exp.company}</p>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

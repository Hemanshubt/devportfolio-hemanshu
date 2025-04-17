
import React from 'react';
import { Briefcase, Calendar, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

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
            <Card key={index} className="neo-blur border-none hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="text-accent1" size={20} />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Building className="text-accent2" size={16} />
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent1 transition-colors"
                      >
                        {exp.company}
                      </a>
                    </CardDescription>
                  </div>
                  <span className="text-accent2 flex items-center gap-1 text-sm">
                    <Calendar size={16} />
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded bg-accent/30 text-accent1"
                    >
                      {skill}
                    </span>
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

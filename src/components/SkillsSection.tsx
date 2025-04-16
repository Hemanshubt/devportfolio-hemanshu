
import React from 'react';
import { Terminal, Server, Database, BarChart4, Code2 } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['Python', 'Java', 'Shell Scripting']
    },
    {
      name: 'Cloud & IaC',
      icon: <Server className="w-6 h-6" />,
      skills: ['AWS', 'Terraform', 'Ansible']
    },
    {
      name: 'Containers & CI/CD',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Docker', 'Kubernetes', 'Helm', 'Jenkins', 'GitLab']
    },
    {
      name: 'Monitoring',
      icon: <BarChart4 className="w-6 h-6" />,
      skills: ['Prometheus', 'Grafana']
    },
    {
      name: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent1 to-accent2 mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name} 
              className="neo-blur rounded-lg p-6 transform transition duration-300 hover:translate-y-[-5px]"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full mr-3 bg-gradient-to-br from-accent1 to-accent2">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-accent1 to-accent2 h-2 rounded-full" 
                        style={{ width: `${70 + Math.random() * 30}%` }}
                      ></div>
                    </div>
                    <span className="ml-3 min-w-[80px] text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import React from 'react';
import {
  Terminal,
  Server,
  Database,
  BarChart4,
  Code2,
  Monitor,
  GitBranch,
} from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 0 to 100
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 85 },
        { name: 'Shell Scripting', level: 80 },
      ],
    },
    {
      name: 'Cloud & IaC',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Terraform', level: 85 },
        { name: 'Ansible', level: 80 },
      ],
    },
    {
      name: 'Containers & CI/CD',
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Helm', level: 80 },
        { name: 'Jenkins', level: 90 },
        { name: 'GitLab', level: 85 },
      ],
    },
    {
      name: 'Monitoring',
      icon: <BarChart4 className="w-6 h-6" />,
      skills: [
        { name: 'Prometheus', level: 85 },
        { name: 'Grafana', level: 90 },
      ],
    },
    {
      name: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'MySQL', level: 90 },
      ],
    },
    {
      name: 'Operating Systems',
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: 'Linux', level: 95 },
        { name: 'Windows', level: 80 },
      ],
    },
    {
      name: 'Version Control & SCM',
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: 'Git', level: 95 },
        { name: 'GitHub', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent1 to-accent2 mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="neo-blur rounded-lg p-6 transform transition duration-300 hover:translate-y-[-10px] hover:scale-[1.03] hover:border-accent1/50"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full mr-3 bg-gradient-to-br from-accent1 to-accent2 transition-transform group-hover:rotate-12">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-accent1 transition-colors">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center group">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-accent1 to-accent2 h-2 rounded-full group-hover:w-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }} // Use skill level here
                      ></div>
                    </div>
                    <span className="ml-3 min-w-[80px] text-sm group-hover:text-accent1 transition-colors">
                      {skill.name}
                    </span>
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

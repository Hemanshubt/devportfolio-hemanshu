
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Integrated MCA',
      institution: 'R. C. Patel Institute of Management',
      period: '2020 - 2025',
      details: 'CGPA 8.7',
    }
  ];

  const certifications = [
    {
      title: 'AWS Cloud Essentials',
      issuer: 'Amazon Web Services',
      date: '2023',
    },
    {
      title: 'Kubernetes for Beginners',
      issuer: 'Udemy',
      date: '2023',
    },
    {
      title: 'Docker Mastery',
      issuer: 'Udemy',
      date: '2022',
    }
  ];

  const achievements = [
    {
      title: '3rd Rank in CSI Project Competition',
      details: 'Recognized for innovative DevOps solution',
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & <span className="text-gradient">Certifications</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent1 to-accent2 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div id="education" className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center">
              <GraduationCap className="mr-3 text-accent1" /> Education
            </h3>
            
            {education.map((item, index) => (
              <div key={index} className="neo-blur p-6 rounded-lg">
                <div className="flex justify-between flex-wrap gap-2">
                  <h4 className="text-xl font-medium">{item.degree}</h4>
                  <span className="text-accent2">{item.period}</span>
                </div>
                <p className="text-muted-foreground">{item.institution}</p>
                <p className="mt-2">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center">
              <Award className="mr-3 text-accent1" /> Certifications & Achievements
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="neo-blur p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-accent2">{cert.date}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Achievements</h3>
              {achievements.map((achievement, index) => (
                <div key={index} className="neo-blur p-4 rounded-lg mb-4">
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;


import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: 'Integrated MCA',
      institution: 'R. C. Patel Institute of Management Research and Development College Shirpur.',
      period: '2020 - 2025',
      details: 'CGPA 8.7',
    },
    {
      degree: 'Higher Secondary Certificate (XII)',
      institution: 'R.C.Patel. Arts Commerce & Science College Shirpur.',
      period: '2018 - 2020',
      details: 'PCT 74.47%',
    },
    {
      degree: 'Secondary School Certificate (X)',
      institution: 'R.C.Patel Main building secondary School Shirpur.',
      period: '2008 - 2018',
      details: 'PCT 82.00%',
    }
  ];

  const certifications = [
    {
      title: 'AWS Knowledge: Amazon EKS',
      issuer: 'AWS Training and Certification',
      date: 'Apr 05, 2024',
      link: 'https://www.credly.com/badges/915866ce-2169-4217-8d11-33396f3439ea/public_url',
    },
    {
      title: 'AWS Knowledge: Cloud Essentials',
      issuer: 'AWS Training and Certification',
      date: 'Dec 21, 2023',
      link: 'https://www.credly.com/badges/8ed7d7ad-9993-479c-a919-b8f173f9aef8/public_url',
    },
    {
      title: 'Kubernetes for the Absolute Beginners Hands-on Tutorial',
      issuer: 'Kodekloud',
      date: 'Apr 21, 2024',
      link: 'https://learn.kodekloud.com/user/certificate/2D1466DFC0C5-2D1460E91B48-2D145B4F88C5',
    }
  ];

  const achievements = [
    {
      title: 'Computer Society Of India (CSI)',
      details: '3rd Rank Project Competition',
      link: 'https://drive.google.com/file/d/1laqZANHF1I9w6SYAn_AInm85kxRYiPZk/view?usp=drive_link',
      date: 'Apr 7, 2024',
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent1 to-accent2 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div id="education" className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center">
              <GraduationCap className="mr-3 text-accent1" /> Education
            </h3>

            {education.map((item, index) => (
              <div 
                key={index} 
                className="neo-blur p-6 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-accent1/30 group"
              >
                <div className="flex justify-between flex-wrap gap-2">
                  <h4 className="text-xl font-medium group-hover:text-accent1 transition-colors duration-300">{item.degree}</h4>
                  <span className="text-accent2 group-hover:scale-105 transition-transform duration-300">{item.period}</span>
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.institution}</p>
                <p className="mt-2 group-hover:font-medium transition-all duration-300">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold flex items-center">
              <Award className="mr-3 text-accent1" /> Certifications & Achievements
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="neo-blur p-4 rounded-lg flex justify-between items-center transition-all duration-300 
                          hover:scale-[1.02] hover:shadow-lg hover:border-accent1/30 group"
                >
                  <div>
                    <h4 className="font-medium">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent1 hover:underline group-hover:text-accent1/90 transition-colors duration-300 flex items-center gap-1"
                      >
                        {cert.title}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-accent2 group-hover:scale-105 transition-transform duration-300">{cert.date}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Achievements</h3>
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="neo-blur p-4 rounded-lg mb-4 flex justify-between items-start flex-wrap gap-2 
                          transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-accent2/30 group"
                >
                  <div>
                    <h4 className="font-medium">
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent1 hover:underline group-hover:text-accent1/90 transition-colors duration-300 flex items-center gap-1"
                      >
                        {achievement.title}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{achievement.details}</p>
                  </div>
                  <span className="text-sm text-accent2 group-hover:scale-105 transition-transform duration-300">{achievement.date}</span>
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

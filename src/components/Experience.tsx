import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Code Engineer",
      company: "Web Development",
      period: "2024 - 2025",
      description:
        "I craft beautiful, functional websites and applications that bring ideas to life.",
      type: "work"
    },
    {
      title: "Tutor",
      company: "Private Tutoring",
      period: "2022 - 2025",
      description:
        "Delivered personalized tuition in all core school subjects, including Mathematics, Science, English, and Social Studies. Developed tailored lesson plans to meet individual student needs, improved academic performance, and fostered a positive and engaging learning environment.",
      type: "work"
    },
    {
      title: "Teacher",
      company: "Saeed Public School & College, Charsadda",
      period: "2023 - 2025",
      description:
        "Taught students in mathematics, computer science, and English while developing lesson plans, classroom materials, and individualized support to help learners succeed.",
      type: "work"
    }
  ];

  const education = [
    {
      degree: "BS Computer Science",
      institution: "GALAXY MODEL COLLEGE",
      period: "In Progress",
      description: "Currently pursuing Bachelor of Science in Computer Science"
    },
    {
      degree: "FSC",
      institution: "Commerce College Charsadda",
      period: "2024",
      description: "Pre-Medical"
    },
    {
      degree: "Matric",
      institution: "IIUI SCHOOL CHARSADDA CAMPUS",
      period: "2022",
      description: "Science"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Experience & Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 shadow-card hover:border-primary transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-semibold">{exp.title}</h4>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 shadow-card hover:border-primary transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <p className="text-primary">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

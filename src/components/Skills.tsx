const Skills = () => {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React JS", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Git", level: 80 }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Technologies and tools I work with
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { lang: "Urdu", level: "Native / Fluent" },
              { lang: "English", level: "Fluent / Professional" },
              { lang: "Pushto", level: "Conversational" }
            ].map((lang, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg px-6 py-3 shadow-card hover:border-primary transition-all duration-300"
              >
                <span className="font-semibold">{lang.lang}</span>
                <span className="text-muted-foreground ml-2">• {lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

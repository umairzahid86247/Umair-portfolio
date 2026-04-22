import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful interfaces with attention to detail"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and excellent user experience"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">About Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          I'm a passionate and results-driven MERN Full Stack Developer with a strong foundation in
          JavaScript, React, Node.js, Express, and MongoDB. I specialize in building responsive
          interfaces, scalable backend services, and seamless full-stack applications that deliver
          strong performance and excellent user experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:border-primary transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

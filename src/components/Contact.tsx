import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "0323-9163221",
      href: "tel:03239163221"
    },
    {
      icon: Mail,
      label: "Email",
      value: "umairzahid17101@gmail.com",
      href: "mailto:umairzahid17101@gmail.com"
    },
    {
      icon: Mail,
      label: "Alternative Email",
      value: "trevor.james409@gmail.com",
      href: "mailto:trevor.james409@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Distt & Tehsil Charsadda, Khyber Pakhtunkhwa",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:border-primary transition-all duration-300 group animate-fade-in flex items-start gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            className="gradient-primary hover:opacity-90 transition-opacity"
            size="lg"
            asChild
          >
            <a href="mailto:umairzahid17101@gmail.com" className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Send Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">UMAIR ZAHID</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              MERN FULL STACK DEVELOPER
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Building end-to-end web solutions with React, Node.js, Express, and MongoDB.
              I deliver responsive user interfaces, scalable backend APIs, and polished applications
              that bridge frontend design and backend logic.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="gradient-primary hover:opacity-90 transition-opacity">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="secondary" className="hover:bg-secondary/80">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex flex-col gap-3 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>0323-9163221</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>umairzahid17101@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Charsadda, Khyber Pakhtunkhwa</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          {/* Right Image */}
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary blur-2xl opacity-40 animate-glow"></div>
              <img
                src={profile}
                alt="Umair Zahid"
                className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-primary shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

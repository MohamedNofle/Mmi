/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Search, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  Monitor,
  Cpu,
  Gamepad2,
  Twitter,
  Instagram,
  Linkedin,
  Globe
} from "lucide-react";
import { cn } from "@/src/lib/utils";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between border-b border-white/5 backdrop-blur-sm bg-black/5">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center">
        <div className="w-4 h-4 rounded border-2 border-white rotate-45" />
      </div>
      <span className="font-display font-semibold tracking-tighter text-xl">NeoVision</span>
    </div>
    
    <div className="hidden md:flex items-center gap-10">
      {["Home", "About", "Services", "Contact"].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`} 
          className="text-xs uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors"
        >
          {item}
        </a>
      ))}
    </div>
    
    <div className="relative group">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="w-4 h-4 text-white/40" />
      </div>
      <input 
        type="text" 
        placeholder="I am looking for..."
        className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs w-48 focus:outline-none focus:border-white/30 transition-all focus:w-64"
      />
    </div>
  </nav>
);

const SectionLabel = ({ children, number }: { children: ReactNode; number?: string }) => (
  <div className="flex items-center gap-3 mb-4">
    {number && <span className="text-[10px] font-mono text-white/40">{number}</span>}
    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60">{children}</span>
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className,
  icon: Icon
}: { 
  children: ReactNode; 
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  icon?: any;
}) => {
  const variants = {
    primary: "bg-white text-black hover:bg-black hover:text-white",
    outline: "border border-white/20 text-white hover:bg-white/5",
    ghost: "text-white/60 hover:text-white"
  };
  
  return (
    <button className={cn(
      "px-8 py-3 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2",
      variants[variant],
      className
    )}>
      {children}
      {Icon && <Icon className="w-3 h-3" />}
    </button>
  );
};

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl w-48">
    <div className="text-4xl font-display font-light mb-1">{value}</div>
    <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">{label}</div>
  </div>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden">
    <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionLabel number="05">Futuristic</SectionLabel>
        <h1 className="text-6xl md:text-[5.5rem] font-display font-light leading-[0.95] tracking-tight mb-10">
          NEW DIGITAL <br /> <span className="font-normal italic">UNIVERSE</span>
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 mb-16">
          <Button className="rounded-full">Get Started</Button>
          <button className="text-[10px] uppercase tracking-widest font-bold text-white/60 hover:text-white flex items-center gap-2 group transition-all">
            Contact Us
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 mt-20 pt-10 border-t border-white/5">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-black overflow-hidden bg-brand-gray-light bg-cover" style={{ backgroundImage: `url(https://i.pravatar.cc/100?u=${i+10})` }}>
              </div>
            ))}
          </div>
          <div className="text-2xl font-display font-medium">20+</div>
          <div className="h-10 w-px bg-white/20 mx-4" />
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] leading-relaxed max-w-[200px]">
             Trusted by pioneers world wide in the metaverse
          </p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative flex justify-center"
      >
        <div className="relative z-10 w-full max-w-lg aspect-[4/5] rounded-[5rem] overflow-hidden border border-white/10 shadow-2xl bg-brand-gray-dark">
          <img 
            src="https://picsum.photos/seed/neo-vr-1/1000/1200" 
            alt="Human in VR headset" 
            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Floating Stat */}
        <div className="absolute bottom-[20%] -left-16 z-20">
          <StatCard label="Reality" value="47.2%" />
        </div>
        
        {/* Abstract shape */}
        <div className="absolute -top-20 -right-20 w-[120%] h-[120%] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      </motion.div>
    </div>
  </section>
);

const LogoBar = () => (
  <div className="py-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto w-full px-6 md:px-20 flex justify-center md:justify-start gap-20 items-center opacity-30 grayscale invert">
      {["Logoipsum", "Logoipsum"].map((logo, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded border border-white rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 bg-white" />
          </div>
          <span className="text-lg font-display font-medium tracking-tighter uppercase">{logo}</span>
        </div>
      ))}
    </div>
  </div>
);

const About = () => (
  <section id="about" className="py-32 px-6 md:px-20">
    <div className="grid md:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="rounded-[4rem] overflow-hidden">
          <img 
            src="https://picsum.photos/seed/helmet-front/1000/1200" 
            alt="Futuristic Helmet" 
            className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      <div>
        <SectionLabel>About Us</SectionLabel>
        <h2 className="text-5xl md:text-7xl font-display font-light leading-tight mb-8">
          THE DIGITAL <br /> FRONTIER
        </h2>
        
        <div className="flex gap-4 mb-8">
          {["Digital", "Reality", "Next"].map(tag => (
            <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/60">
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-sm text-white/50 leading-relaxed max-w-md mb-10">
           Step into the Digital Frontier, where the boundaries between reality and virtual innovation disappear. This is the next era of immersive technology.
        </p>
        
        <div className="flex items-center gap-8">
          <Button variant="outline">Learn More</Button>
          <button className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-white/80 hover:text-white transition-colors group">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-white" />
            </div>
            Watch a Video
          </button>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <div className="group bg-brand-gray/40 border border-white/5 p-12 rounded-[3.5rem] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-white/10 transition-all">
      <Icon className="w-6 h-6 text-white/80" />
    </div>
    
    <h3 className="text-2xl font-display font-medium mb-6">{title}</h3>
    <p className="text-xs text-white/40 leading-[1.8] mb-10 max-w-xs">{desc}</p>
    
    <button className="text-[10px] uppercase tracking-widest font-bold text-white/60 group-hover:text-white flex items-center gap-2">
      Learn More
      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
    </button>
  </div>
);

const Services = () => (
  <section id="services" className="py-32 px-6 md:px-20">
    <div className="flex justify-between items-end mb-20">
      <h2 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tight">Our Service</h2>
      <div className="flex gap-4">
        <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      <ServiceCard 
        icon={Monitor} 
        title="Reality Development"
        desc="Step into the future with our custom VR development services, designed to create immersive digital experiences."
      />
      <ServiceCard 
        icon={Cpu} 
        title="Digital Assistants"
        desc="Enhance customer engagement and operational efficiency with our AI-driven virtual assistants. These intelligent avatars."
      />
      <ServiceCard 
        icon={Gamepad2} 
        title="Gaming Solutions"
        desc="Revolutionize the gaming industry with our next-generation VR game development services, and entertain your players."
      />
    </div>
  </section>
);

const Features = () => (
  <section className="py-32 px-6 md:px-20">
    <h2 className="text-5xl md:text-7xl font-display font-light mb-24 max-w-4xl leading-none">
      LIMITLESS POSSIBILITIES <br /> WITH NEOVISION
    </h2>
    
    <div className="grid md:grid-cols-[200px_1fr_400px] gap-12 items-center">
      <div className="flex flex-col gap-8">
        {["Innovation", "Technology", "Experience"].map((tab, i) => (
          <button 
            key={tab} 
            className={cn(
              "text-left text-[11px] uppercase tracking-widest font-bold transition-all",
              i === 0 ? "text-white" : "text-white/30 hover:text-white/60"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="rounded-3xl overflow-hidden grayscale brightness-75">
        <img 
          src="https://picsum.photos/seed/tech-profile/1000/1000" 
          alt="Technical" 
          className="w-full aspect-square object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="pl-10">
        <h3 className="text-2xl font-display font-medium mb-6 leading-tight text-white/90">
          How VR is Transforming <br /> Our Digital World
        </h3>
        <p className="text-xs text-white/40 leading-relaxed mb-8">
          Virtual Reality (VR) is no longer a concept of the future — it's a reality reshaping how we interact, work, and entertain ourselves.
        </p>
        <button className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-white pb-1 mb-16">Learn More</button>
        
        <div className="flex items-center justify-between pt-10 border-t border-white/10">
          <span className="text-[10px] text-white/40 font-mono">08 February 2025</span>
          <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Henry Leonardo</span>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ content, author }: { content: string; author: string }) => (
  <div className="bg-brand-gray/30 border border-white/5 p-10 rounded-[3rem] group hover:bg-white/[0.05] transition-all duration-500">
    <div className="flex items-center justify-between gap-6">
      <p className="text-xs italic text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">{content}</p>
      <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all border border-white/10">
        <img 
          src={`https://i.pravatar.cc/100?u=${author}`} 
          alt={author} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
    <div className="mt-4 text-[10px] uppercase tracking-widest font-bold text-white/40 group-hover:text-white/80 transition-colors">
      {author}
    </div>
  </div>
);

const Testimonials = () => (
  <section className="py-32 px-6 md:px-20 mt-20">
    <div className="grid md:grid-cols-2 gap-20">
      <div>
        <h2 className="text-5xl md:text-7xl font-display font-light mb-12 flex flex-col uppercase tracking-tight">
          Voices of THE <br /> FUTURE
        </h2>
        <p className="text-xs text-white/40 leading-relaxed max-w-sm">
           Here, you'll hear firsthand from users, pioneers, and tech enthusiasts who are shaping the next generation of virtual reality and futuristic technology. Explore their stories and discover how we is transforming the way we interact with the digital world.
        </p>
      </div>
      
      <div className="flex flex-col gap-4">
        <TestimonialCard 
          author="James Rizki"
          content="NeoVision completely transformed the way I interact with virtual reality."
        />
        <TestimonialCard 
          author="Samantha Leonardo"
          content="Our team has adopted NeoVision's VR collaboration tools."
        />
        <TestimonialCard 
          author="Mark Trevor"
          content="I've been gaming in VR for years, but NeoVision's technology is a game-changer."
        />
      </div>
    </div>
  </section>
);

const CallToAction = () => (
  <section className="py-32 px-6 md:px-20 relative overflow-hidden">
    <div className="relative z-10 grid gap-10">
       <div className="flex flex-col items-center text-center">
         <h2 className="text-7xl md:text-9xl font-display font-light uppercase tracking-tighter mb-10">
           DIVE INTO THE <br /> FUTURE
         </h2>
         
         <div className="relative group cursor-pointer mb-20">
           <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
             <Play className="w-10 h-10 fill-white" />
           </div>
         </div>
         
         <p className="max-w-xl text-xs text-white/40 leading-relaxed uppercase tracking-widest">
            Prepare to immerse yourself in the groundbreaking world of NeoVision. Explore the limitless possibilities of futuristic technology and virtual reality.
         </p>
       </div>
    </div>
    
    {/* Background Image Effect */}
    <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
      <img 
        src="https://picsum.photos/seed/universe-cta/1920/1080" 
        alt="Galaxy Background" 
        className="w-full h-full object-cover grayscale brightness-50"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black" />
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-32 pb-10 px-6 md:px-20 bg-brand-gray/20">
    <div className="grid md:grid-cols-4 gap-16 mb-24">
      <div className="col-span-1">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full border border-white" />
          </div>
          <span className="font-display font-semibold tracking-tighter text-lg uppercase">NeoVision</span>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2 font-bold">Email</div>
            <div className="text-[11px]">contact@neovision.com</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2 font-bold">Address</div>
            <div className="text-[11px] leading-relaxed">
              NeoVision Technologies 123 <br /> FutureTech Blvd
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Phone Number</div>
        <div className="text-[11px]">+1 (800) 123-4567</div>
      </div>
      
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Quick Links</div>
          <ul className="space-y-4 text-[10px] uppercase tracking-widest text-white/40 font-medium">
            <li className="hover:text-white transition-colors cursor-pointer text-white/100">Home</li>
            <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
            <li className="hover:text-white transition-colors cursor-pointer">Services</li>
            <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Explore</div>
          <ul className="space-y-4 text-[10px] uppercase tracking-widest text-white/40 font-medium">
            <li className="hover:text-white transition-colors cursor-pointer">Product Demos</li>
            <li className="hover:text-white transition-colors cursor-pointer">Case Studies</li>
            <li className="hover:text-white transition-colors cursor-pointer">Testimonials</li>
            <li className="hover:text-white transition-colors cursor-pointer">Media & Press</li>
            <li className="hover:text-white transition-colors cursor-pointer">Events & Webinars</li>
          </ul>
        </div>
      </div>
      
      <div>
        <h4 className="text-xl font-display font-medium uppercase leading-tight mb-8">
          FUTURISTIC TECH & <br /> VR WEBSITE
        </h4>
        <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest mb-10">
          Dive into a world where technology and virtual reality converge to create mind-blowing experiences.
        </p>
        
        <div className="flex gap-4">
          {[Globe, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
              <Icon className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="pt-10 border-t border-white/5 flex flex-wrap justify-between gap-10 opacity-20 grayscale invert mt-20">
       {["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"].map((logo, i) => (
         <div key={i} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border border-white" />
            <span className="text-sm font-display font-medium">{logo}</span>
         </div>
       ))}
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-brand-black text-brand-white min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <LogoBar />
        <About />
        <Services />
        
        <div className="bg-brand-gray/10 py-10">
          <Features />
          <Testimonials />
        </div>
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
}

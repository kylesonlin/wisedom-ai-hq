import Footer from '@/components/sections/Footer';
import { Users, Target, Award, TrendingUp, Heart, Handshake } from 'lucide-react';

const About = () => {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
              <span className="mr-2">🚀</span>
              About Wisedom
            </div>
            <h1 className="text-hero max-w-4xl mx-auto">
              Pioneering the Future of Business Intelligence
            </h1>
            <p className="text-corporate max-w-3xl mx-auto">
              We're building the next generation of tools that understand not just data, 
              but the human relationships that drive every successful business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-display mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wisedom.ai was born out of a simple but overwhelming reality: in today's hyperconnected world, we all juggle thousands of relationships across emails, texts, calendars, and social platforms — yet there's no central brain that helps us keep track.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Our founder experienced this problem firsthand while building companies, investing in startups, and managing a network of over 10,000 professional and personal contacts. Every project brought new opportunities, but also new headaches: scattered conversations, missed follow-ups, outdated contact info, and the impossible task of manually keeping a CRM current.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Instead of hiring more assistants or relying on siloed tools, we asked: What if the assistant itself could be replaced with intelligence? Wisedom.ai began as a vision to create a personal operating system for relationships — one that syncs your contacts, understands context, remembers every interaction, and nudges you at the right moment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  From this need, RelationshipOS was built: the first step toward a larger vision of an ecosystem where your network becomes a living, searchable, and constantly updating map of opportunities. We're building Wisedom.ai to take the work out of managing relationships, so you can focus on what really matters: the conversations, the trust, and the opportunities that drive your life forward.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="card-corporate text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Mission</h4>
                <p className="text-sm text-muted-foreground">
                  Democratize relationship intelligence for every business
                </p>
              </div>

              <div className="card-corporate text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-4">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Vision</h4>
                <p className="text-sm text-muted-foreground">
                  Intelligence that amplifies human potential, not replaces it
                </p>
              </div>

              <div className="card-corporate text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/30 rounded-xl mb-4">
                  <Heart className="h-6 w-6 text-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Values</h4>
                <p className="text-sm text-muted-foreground">
                  Innovation, integrity, and human-centric relationships
                </p>
              </div>

              <div className="card-corporate text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-4">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Connection</h4>
                <p className="text-sm text-muted-foreground">
                  Building meaningful relationships that drive growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Leadership</h2>
            <p className="text-corporate max-w-2xl mx-auto">
              Meet the founder transforming how professionals 
              manage and leverage their business relationships
            </p>
          </div>

          <div className="max-w-md mx-auto text-center">
            <div className="w-40 h-40 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-8 flex items-center justify-center overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/cf03481e-7684-4920-8e53-e26cd12e70f9.png" 
                alt="Kyle Sonlin, Founder & CEO" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-3xl font-bold mb-2">Kyle Sonlin</h4>
            <p className="text-primary font-semibold text-lg mb-6">Founder & CEO</p>
            
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://www.linkedin.com/in/kylesonlin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/KyleSonlin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
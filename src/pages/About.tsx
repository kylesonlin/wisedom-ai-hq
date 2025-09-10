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
            <h2 className="text-display mb-6">Leadership Team</h2>
            <p className="text-corporate max-w-2xl mx-auto">
              Our dedicated team is passionate about transforming how professionals 
              manage and leverage their business relationships through AI
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="card-corporate">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/cf03481e-7684-4920-8e53-e26cd12e70f9.png" 
                  alt="Kyle Sonlin, Founder & CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold mb-2">Kyle Sonlin</h4>
              <p className="text-primary font-semibold mb-4">Founder & CEO</p>
              <div className="text-left space-y-4 max-w-3xl mx-auto">
                <p className="text-muted-foreground">
                  Kyle Sonlin is an entrepreneur, investor, and bestselling author who has been at the forefront of blockchain technology since 2015. As CEO of Global Settlement Network, he leads a blockchain and tokenization firm focused on compliant issuance of stablecoins and tokenized commodities cross-chain, collaborating with financial services companies on the cutting edge of capital markets.
                </p>
                <p className="text-muted-foreground">
                  Previously, Kyle built a private market securities index, STM, which exceeded $25 billion in assets. Across his career, he has raised over $6M in funding for his portfolio companies and serves as General Partner of two investment funds: Outliers Fund and Aurum Fund, both focused on the crypto industry.
                </p>
                <p className="text-muted-foreground">
                  Kyle achieved critical acclaim as #1 bestselling co-author of "Blockchain Explained: Your Ultimate Guide to the Tokenization of Finance," widely adopted by universities nationwide including University of Miami, UCLA, Stanford University, and Florida International University's Graduate Law School, where he has lectured extensively.
                </p>
                <p className="text-muted-foreground">
                  He is the youngest board member in the 65-year history of Camillus House, Miami's leading non-profit foundation, and supports various charitable organizations through the Sonlin Foundation. Kyle founded Wisedom.ai to solve the overwhelming challenge of managing thousands of relationships across our hyperconnected world, creating a personal operating system for relationships that transforms how we connect and grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
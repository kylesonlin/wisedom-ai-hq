import Footer from '@/components/sections/Footer';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
              <span className="mr-2">🚀</span>
              About Wisedom.ai
            </div>
            <h1 className="text-hero max-w-4xl mx-auto">
              Pioneering the Future of AI Business Intelligence
            </h1>
            <p className="text-corporate max-w-3xl mx-auto">
              We're building the next generation of AI-powered tools that understand not just data, 
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
                  Founded in 2024, Wisedom.ai emerged from a simple observation: the most successful 
                  businesses aren't just driven by data—they're powered by relationships. 
                  Our founders recognized that while AI had revolutionized how we process information, 
                  it had barely scratched the surface of understanding human connections.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Today, we're building a comprehensive platform that transforms how enterprises 
                  understand, nurture, and leverage their professional networks for unprecedented growth.
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
                  AI that amplifies human potential, not replaces it
                </p>
              </div>

              <div className="card-corporate text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/30 rounded-xl mb-4">
                  <Users className="h-6 w-6 text-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Values</h4>
                <p className="text-sm text-muted-foreground">
                  Innovation, integrity, and human-centric design
                </p>
              </div>

              <div className="card-corporate text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Empowering exponential business growth
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
              Meet the visionaries building the future of AI business intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-corporate text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">JD</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Jane Doe</h4>
              <p className="text-primary font-medium mb-2">CEO & Co-Founder</p>
              <p className="text-muted-foreground text-sm">
                Former VP of AI at TechCorp, 15+ years in enterprise software and relationship intelligence
              </p>
            </div>

            <div className="card-corporate text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/80 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-2xl">JS</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">John Smith</h4>
              <p className="text-secondary font-medium mb-2">CTO & Co-Founder</p>
              <p className="text-muted-foreground text-sm">
                Former Principal Engineer at Google, PhD in AI/ML with focus on relationship modeling
              </p>
            </div>

            <div className="card-corporate text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/80 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-2xl">AB</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Alice Brown</h4>
              <p className="text-foreground font-medium mb-2">VP of Product</p>
              <p className="text-muted-foreground text-sm">
                Former Product Lead at LinkedIn, expert in social networks and user experience design
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
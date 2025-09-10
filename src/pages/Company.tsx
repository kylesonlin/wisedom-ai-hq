import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Award, Users, MapPin, TrendingUp } from 'lucide-react';

// Logo imports for showcase  
import wisedomPrismBrain from '@/assets/wisedom-logo-prism-brain.png';

const Company = () => {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
              <Briefcase className="mr-2 h-4 w-4" />
              Join Our Team
            </div>
            <h1 className="text-hero max-w-4xl mx-auto">
              Build the Future of Relationship Intelligence
            </h1>
            <p className="text-corporate max-w-3xl mx-auto">
              Join a team of visionary engineers, designers, and business leaders 
              who are reshaping how the world understands and leverages relationships.
            </p>
          </div>
        </div>
      </section>

          {/* Logo Showcase Section */}
      <section className="py-24 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">New Wisedom Logo</h2>
            <p className="text-corporate max-w-2xl mx-auto">
              Here's the new Dark Side of the Moon inspired Wisedom logo with prismatic brain effect.
              RelationshipOS will keep the existing command icon logo.
            </p>
          </div>

          {/* Wisedom Logo */}
          <div className="flex justify-center">
            <div className="card-corporate text-center p-8 max-w-md">
              <img src={wisedomPrismBrain} alt="Wisedom Prism Brain Logo" className="w-48 h-48 mx-auto mb-6 object-contain" />
              <h3 className="text-2xl font-bold mb-4">Wisedom Prism Brain</h3>
              <p className="text-muted-foreground">
                Inspired by Dark Side of the Moon - a brain dispersing white light into a colorful spectrum, 
                representing the transformation of raw data into intelligent insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Open Positions</h2>
            <p className="text-corporate max-w-2xl mx-auto">
              We're looking for exceptional talent to join our mission of democratizing 
              relationship intelligence for every business
            </p>
          </div>

          <div className="grid gap-6">
            <div className="card-corporate hover:card-glow transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Senior Software Engineer</h3>
                  <p className="text-muted-foreground mb-4">
                    Lead development of our core relationship intelligence platform and data systems
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Full-Stack</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">React/Node.js</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">Remote</span>
                  </div>
                </div>
                <Button className="btn-primary">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="card-corporate hover:card-glow transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Product Designer</h3>
                  <p className="text-muted-foreground mb-4">
                    Shape the user experience for next-generation relationship intelligence tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Design</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">UX/UI</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">San Francisco</span>
                  </div>
                </div>
                <Button className="btn-primary">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="card-corporate hover:card-glow transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Enterprise Sales Manager</h3>
                  <p className="text-muted-foreground mb-4">
                    Drive enterprise adoption of RelationshipOS and build strategic partnerships
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Sales</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Enterprise</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">New York</span>
                  </div>
                </div>
                <Button className="btn-primary">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits? We're always looking for exceptional talent.
            </p>
            <Button variant="ghost" className="btn-ghost">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Why Join Wisedom?</h2>
            <p className="text-corporate max-w-2xl mx-auto">
              We believe great people do great work when they're empowered, supported, and inspired
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-corporate text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation First</h3>
              <p className="text-muted-foreground">
                Work on cutting-edge technology that's reshaping business intelligence. 
                We give you the freedom to experiment and push boundaries.
              </p>
            </div>

            <div className="card-corporate text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">World-Class Team</h3>
              <p className="text-muted-foreground">
                Collaborate with exceptional talent from leading tech companies. 
                Learn from the best while making a meaningful impact.
              </p>
            </div>

            <div className="card-corporate text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-6">
                <TrendingUp className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Growth Opportunity</h3>
              <p className="text-muted-foreground">
                Join us at the ground floor of the relationship intelligence revolution. 
                Grow your career while building products that transform how businesses network.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background/50 p-6 rounded-xl border border-border">
              <h4 className="font-semibold mb-2">Competitive Equity</h4>
              <p className="text-sm text-muted-foreground">Meaningful ownership in our mission</p>
            </div>
            <div className="bg-background/50 p-6 rounded-xl border border-border">
              <h4 className="font-semibold mb-2">Health & Wellness</h4>
              <p className="text-sm text-muted-foreground">Comprehensive medical, dental, vision</p>
            </div>
            <div className="bg-background/50 p-6 rounded-xl border border-border">
              <h4 className="font-semibold mb-2">Flexible Work</h4>
              <p className="text-sm text-muted-foreground">Remote-first with optional office access</p>
            </div>
            <div className="bg-background/50 p-6 rounded-xl border border-border">
              <h4 className="font-semibold mb-2">Learning Budget</h4>
              <p className="text-sm text-muted-foreground">$3K annual education allowance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-display mb-6">Press & Media</h2>
                <p className="text-corporate">
                  Get the latest news about Wisedom, access our press kit, 
                  and connect with our media relations team.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button className="btn-primary w-full sm:w-auto">
                  Download Press Kit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="ghost" className="btn-ghost w-full sm:w-auto">
                  Media Inquiries
                </Button>
              </div>
            </div>

            <div className="card-corporate">
              <h3 className="text-xl font-bold mb-6">Recent News</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold">Meet the Drapers Season 7</h4>
                  <p className="text-sm text-muted-foreground">Kyle Sonlin selected as finalist for prestigious pitch show in Miami Beach</p>
                  <p className="text-xs text-muted-foreground mt-1">2024</p>
                </div>
                <div className="border-l-2 border-secondary/30 pl-4">
                  <h4 className="font-semibold">RelationshipOS Launch</h4>
                  <p className="text-sm text-muted-foreground">Public launch of relationship intelligence platform</p>
                  <p className="text-xs text-muted-foreground mt-1">2024</p>
                </div>
                <div className="border-l-2 border-accent/30 pl-4">
                  <h4 className="font-semibold">Platform Development</h4>
                  <p className="text-sm text-muted-foreground">Continuous improvement and feature expansion</p>
                  <p className="text-xs text-muted-foreground mt-1">Ongoing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Company;
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Network, TrendingUp, Shield, Zap, Users } from 'lucide-react';

const Products = () => {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
              <Brain className="mr-2 h-4 w-4" />
              Wisedom Product Suite
            </div>
            <h1 className="text-hero max-w-4xl mx-auto">
              AI-Powered Business Intelligence Products
            </h1>
            <p className="text-corporate max-w-3xl mx-auto">
              Discover our comprehensive suite of AI tools designed to transform how your business 
              understands relationships, identifies opportunities, and drives growth.
            </p>
          </div>
        </div>
      </section>

      {/* RelationshipOS - Featured Product */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-corporate card-glow max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-4">
                    Available Now
                  </div>
                  <h2 className="text-4xl font-bold mb-4">RelationshipOS</h2>
                  <p className="text-xl text-muted-foreground">
                    AI-powered relationship intelligence platform that helps you understand, 
                    manage, and leverage your professional network for better business outcomes.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Network className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Smart Network Mapping</h4>
                      <p className="text-muted-foreground text-sm">Visualize connections and discover hidden opportunities in your network</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold">Growth Analytics</h4>
                      <p className="text-muted-foreground text-sm">Track relationship strength and measure networking ROI</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-accent-foreground mt-1" />
                    <div>
                      <h4 className="font-semibold">Enterprise Security</h4>
                      <p className="text-muted-foreground text-sm">Enterprise-grade security and data protection</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://app.relationshipos.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Try RelationshipOS Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Button variant="ghost" className="btn-ghost">
                    View Demo
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 border border-primary/30">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-background/10 rounded-lg backdrop-blur-sm">
                      <span className="font-medium">Network Analysis</span>
                      <span className="text-primary">●</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background/10 rounded-lg backdrop-blur-sm">
                      <span className="font-medium">Relationship Tracking</span>
                      <span className="text-secondary">●</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background/10 rounded-lg backdrop-blur-sm">
                      <span className="font-medium">Opportunity Detection</span>
                      <span className="text-primary">●</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background/10 rounded-lg backdrop-blur-sm">
                      <span className="font-medium">Growth Insights</span>
                      <span className="text-secondary">●</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Products */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-medium mb-6">
              <Zap className="mr-2 h-4 w-4" />
              Coming Soon
            </div>
            <h2 className="text-display mb-6">The Complete Wisedom Platform</h2>
            <p className="text-corporate max-w-3xl mx-auto">
              RelationshipOS is just the beginning. We're building a comprehensive ecosystem 
              of AI-powered business intelligence tools.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-corporate">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-6">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Future Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                AI-powered opportunity detection that identifies potential partnerships, 
                deals, and growth vectors within your network.
              </p>
              <div className="inline-flex items-center text-muted-foreground font-medium">
                <span>In Development</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            <div className="card-corporate">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-6">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Enhanced business intelligence features that provide deeper insights 
                into your professional network and relationship dynamics.
              </p>
              <div className="inline-flex items-center text-muted-foreground font-medium">
                <span>Coming Soon</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            <div className="card-corporate">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/30 rounded-xl mb-6">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Team Collaboration</h3>
              <p className="text-muted-foreground mb-4">
                Multi-user features that enable teams to share relationship intelligence
                and collaborate on networking strategies.
              </p>
              <div className="inline-flex items-center text-muted-foreground font-medium">
                <span>Roadmap</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Network, TrendingUp, Shield } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display mb-6">Meet RelationshipOS</h2>
          <p className="text-corporate max-w-3xl mx-auto">
            Our flagship AI platform that transforms how you understand, manage, and leverage 
            your professional relationships for unprecedented business growth.
          </p>
        </div>

        {/* Product Hero */}
        <div className="mb-16">
          <div className="card-corporate card-glow max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">AI-Powered Relationship Intelligence</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Discover hidden opportunities, strengthen connections, and accelerate growth 
              with the world's most advanced relationship mapping technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://app.relationshipos.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Button variant="ghost" className="btn-ghost">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-corporate text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
              <Network className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Smart Network Mapping</h4>
            <p className="text-muted-foreground">
              Visualize your entire network with AI-powered insights that reveal 
              hidden connections and opportunities.
            </p>
          </div>

          <div className="card-corporate text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-4">
              <TrendingUp className="h-6 w-6 text-secondary" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Growth Analytics</h4>
            <p className="text-muted-foreground">
              Track relationship strength, identify growth patterns, and measure 
              the ROI of your networking efforts.
            </p>
          </div>

          <div className="card-corporate text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/30 rounded-xl mb-4">
              <Shield className="h-6 w-6 text-foreground" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Enterprise Security</h4>
            <p className="text-muted-foreground">
              Bank-level security with SOC2 compliance, ensuring your sensitive 
              relationship data is always protected.
            </p>
          </div>
        </div>

        {/* Product Roadmap Teaser */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-medium mb-6">
            <span className="mr-2">🔮</span>
            More AI Products Coming Soon
          </div>
          <h3 className="text-2xl font-bold mb-4">The Wisedom.ai Platform</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            RelationshipOS is just the beginning. We're building a comprehensive suite 
            of AI-powered business intelligence tools to transform every aspect of enterprise operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
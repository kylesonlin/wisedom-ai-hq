import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Network, TrendingUp, Shield } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-display mb-8">Feel the Power of Perfect Memory</h2>
          <p className="text-corporate max-w-3xl mx-auto">
            Experience the confidence that comes from having every connection, 
            every detail, and every opportunity mapped in your mind.
          </p>
        </div>

        {/* Product Hero */}
        <div className="mb-16">
          <div className="card-corporate card-glow max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Your Network, Supercharged</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Feel unstoppable knowing exactly who to reach out to, when, and why. 
              Every opportunity becomes visible. Every relationship becomes strategic.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-muted-foreground">
                <strong>Starting at $300/month</strong> — less than what most spend on coffee, 
                for intelligence that transforms how you do business.
              </p>
            </div>
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
            <h4 className="text-xl font-semibold mb-3">See Every Connection That Matters</h4>
            <p className="text-muted-foreground">
              Walk into any room knowing exactly who you need to meet and why. 
              Feel the confidence of perfect preparation.
            </p>
          </div>

          <div className="card-corporate text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-4">
              <TrendingUp className="h-6 w-6 text-secondary" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Know Where Opportunities Hide</h4>
            <p className="text-muted-foreground">
              Experience the thrill of discovering hidden paths to success. 
              Never wonder "what if" again.
            </p>
          </div>

          <div className="card-corporate text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/30 rounded-xl mb-4">
              <Shield className="h-6 w-6 text-foreground" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Sleep Well at Night</h4>
            <p className="text-muted-foreground">
              Rest easy knowing your most valuable business data is protected 
              by enterprise-grade security.
            </p>
          </div>
        </div>

        {/* Product Roadmap Teaser */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-medium mb-6">
            <span className="mr-2">🔮</span>
            More AI Products Coming Soon
          </div>
          <h3 className="text-2xl font-bold mb-4">The Wisedom Platform</h3>
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
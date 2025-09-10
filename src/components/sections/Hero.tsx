import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-up">
          {/* Company Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium backdrop-blur-sm">
            <span className="mr-2">🧠</span>
            Wisedom's RelationshipOS
          </div>
          
          {/* Main Headline */}
          <h1 className="text-hero max-w-5xl mx-auto">
            Always know your next best call
          </h1>
          
          {/* Subheadline */}
          <p className="text-corporate max-w-3xl mx-auto">
            Feel the confidence of having every relationship detail at your fingertips. 
            Walk into meetings fully prepared. Never forget what matters.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href="https://app.wisedom.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              Try RelationshipOS Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Button variant="ghost" className="btn-ghost inline-flex items-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Benefits */}
          <div className="pt-16">
            <p className="text-sm text-muted-foreground mb-8">Join professionals who never miss an opportunity</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
              <div className="text-lg">$300/month vs $5,000/month human assistant</div>
              <div className="text-lg">24/7 availability</div>
              <div className="text-lg">Reliable memory</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
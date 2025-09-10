import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Network, TrendingUp, Shield, Zap, Users, Check } from 'lucide-react';

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
              Business Intelligence Products
            </h1>
            <p className="text-corporate max-w-3xl mx-auto">
              Discover our comprehensive suite of tools designed to transform how your business 
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
                    Relationship intelligence platform that helps you understand, 
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
                    href="https://app.wisedom.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Try RelationshipOS Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a 
                    href="https://app.wisedom.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" className="btn-ghost">
                      View Demo
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                  <img 
                    src="/lovable-uploads/a1d8ca80-5a5a-44e5-8b69-13cc73bb5e80.png" 
                    alt="RelationshipOS Interface - AI-Powered Relationship Management" 
                    className="w-full h-auto"
                  />
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
              of business intelligence tools.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-corporate">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-6">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Closer</h3>
              <p className="text-muted-foreground mb-4">
                A sales platform that allows you to connect with clients and investors in your network 
                without your manual oversight, creating meaningful relationships at scale.
              </p>
              <div className="inline-flex items-center text-muted-foreground font-medium">
                <span>2026</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            <div className="card-corporate">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-6">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Legacy</h3>
              <p className="text-muted-foreground mb-4">
                A platform dedicated to preserving your actual wisdom, capturing the essence of your 
                decision-making and insights to create a lasting knowledge foundation.
              </p>
              <div className="inline-flex items-center text-muted-foreground font-medium">
                <span>2027</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            <div className="card-corporate">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/30 rounded-xl mb-6">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Synthesis</h3>
              <p className="text-muted-foreground mb-4">
                The connection between software and a fully functioning digital brain, creating 
                unprecedented integration between human intelligence and technological capability.
              </p>
              <div className="inline-flex items-center text-muted-foreground font-medium">
                <span>2028</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshots Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">See RelationshipOS in Action</h2>
            <p className="text-corporate max-w-3xl mx-auto">
              Experience the power of AI-driven relationship intelligence through our comprehensive platform
            </p>
          </div>

          <div className="space-y-16">
            {/* AI Oracle Insights */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  AI Oracle
                </div>
                <h3 className="text-3xl font-bold">Get Strategic Insights Instantly</h3>
                <p className="text-lg text-muted-foreground">
                  Ask your AI Oracle questions about your relationships and get intelligent, 
                  context-aware responses that help you make better networking decisions.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Who should I prioritize this week?</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />What's the context for my meetings?</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" />Which relationships need attention?</li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                <img 
                  src="/lovable-uploads/a7dfe688-502f-4e65-8571-fe5ade45cc1c.png" 
                  alt="AI Oracle Insights - Get intelligent relationship recommendations" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Meeting Preparation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                <img 
                  src="/lovable-uploads/8db71225-c4bd-4165-b30d-24fafcf10f83.png" 
                  alt="AI Meeting Preparation - Intelligent briefings and context" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  Meeting Prep
                </div>
                <h3 className="text-3xl font-bold">Never Walk Into Meetings Unprepared</h3>
                <p className="text-lg text-muted-foreground">
                  Get intelligent briefings with context, talking points, and relationship insights 
                  automatically generated for every meeting.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center"><Check className="h-4 w-4 text-secondary mr-2" />Auto-generated meeting briefs</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-secondary mr-2" />Relationship history and context</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-secondary mr-2" />Strategic talking points</li>
                </ul>
              </div>
            </div>

            {/* Follow-up Automation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-accent/30 text-accent-foreground rounded-full text-sm font-medium">
                  Automation
                </div>
                <h3 className="text-3xl font-bold">Smart Follow-up Management</h3>
                <p className="text-lg text-muted-foreground">
                  Never miss important follow-ups again. Our AI automatically suggests and schedules 
                  relationship maintenance activities based on your communication patterns.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center"><Check className="h-4 w-4 text-accent-foreground mr-2" />Automated follow-up suggestions</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-accent-foreground mr-2" />Priority-based scheduling</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-accent-foreground mr-2" />82% average response rate</li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                <img 
                  src="/lovable-uploads/3fc312e2-5e53-49e9-92a5-f35e142418ba.png" 
                  alt="Follow-up Automation - Smart relationship maintenance" 
                  className="w-full h-auto"
                />
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
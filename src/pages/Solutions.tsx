import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, TrendingUp, Building2 } from 'lucide-react';

const Solutions = () => {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
              <Building2 className="mr-2 h-4 w-4" />
              Enterprise Solutions
            </div>
            <h1 className="text-hero max-w-4xl mx-auto">
              AI Solutions for Every Business Challenge
            </h1>
            <p className="text-corporate max-w-3xl mx-auto">
              Whether you're a C-suite executive, sales leader, or entrepreneur, 
              Wisedom has tailored solutions to accelerate your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {/* For Executives */}
            <div className="card-corporate card-glow">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">For Executives</h2>
                    <p className="text-lg text-muted-foreground">
                      Transform your leadership approach with AI-powered relationship intelligence 
                      that reveals strategic opportunities and strengthens key partnerships.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <p className="text-muted-foreground">Board relationship management and stakeholder mapping</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <p className="text-muted-foreground">Strategic partnership identification and nurturing</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <p className="text-muted-foreground">Executive network expansion and influence tracking</p>
                    </div>
                  </div>
                  <Button className="btn-primary">
                    Schedule Executive Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                  <h4 className="font-bold mb-4">Executive Dashboard</h4>
                  <div className="space-y-3">
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Strategic Relationships</span>
                        <span className="text-primary font-bold">247</span>
                      </div>
                    </div>
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Partnership Opportunities</span>
                        <span className="text-secondary font-bold">12</span>
                      </div>
                    </div>
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Network Influence Score</span>
                        <span className="text-primary font-bold">8.7/10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* For Sales Teams */}
            <div className="card-corporate">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8 order-2 lg:order-1">
                  <h4 className="font-bold mb-4">Sales Intelligence</h4>
                  <div className="space-y-3">
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Warm Introductions</span>
                        <span className="text-secondary font-bold">34</span>
                      </div>
                    </div>
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Pipeline Value</span>
                        <span className="text-secondary font-bold">$2.4M</span>
                      </div>
                    </div>
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Conversion Rate</span>
                        <span className="text-secondary font-bold">+47%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl">
                    <Briefcase className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">For Sales Teams</h2>
                    <p className="text-lg text-muted-foreground">
                      Accelerate your sales cycle with AI that identifies the best paths to prospects 
                      through your existing network and relationships.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                      <p className="text-muted-foreground">Warm introduction paths to target prospects</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                      <p className="text-muted-foreground">Account-based relationship mapping and insights</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                      <p className="text-muted-foreground">Sales pipeline optimization through network leverage</p>
                    </div>
                  </div>
                  <Button className="btn-secondary">
                    Boost Sales Performance
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* For Entrepreneurs */}
            <div className="card-corporate">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl">
                    <TrendingUp className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">For Entrepreneurs</h2>
                    <p className="text-lg text-muted-foreground">
                      Build and scale your startup with AI-powered networking that connects you 
                      to investors, advisors, and strategic partners at the right moment.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full mt-3"></div>
                      <p className="text-muted-foreground">Investor and advisor network discovery</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full mt-3"></div>
                      <p className="text-muted-foreground">Strategic partnership and collaboration opportunities</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full mt-3"></div>
                      <p className="text-muted-foreground">Customer and market validation through connections</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="btn-ghost">
                    Scale Your Network
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl p-8">
                  <h4 className="font-bold mb-4">Growth Metrics</h4>
                  <div className="space-y-3">
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Network Growth</span>
                        <span className="text-accent-foreground font-bold">+156%</span>
                      </div>
                    </div>
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Funding Connections</span>
                        <span className="text-accent-foreground font-bold">23</span>
                      </div>
                    </div>
                    <div className="bg-background/50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Partnership Deals</span>
                        <span className="text-accent-foreground font-bold">8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of professionals who are already leveraging AI to unlock 
            the hidden potential in their networks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://app.wisedom.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Button variant="ghost" className="btn-ghost">
              Schedule Custom Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Solutions;
import { Check, X, Calculator, TrendingUp } from 'lucide-react';

const ROIComparison = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-medium mb-8">
            <Calculator className="mr-2 h-4 w-4" />
            Human Assistant vs AI Comparison
          </div>
          <h2 className="text-display mb-8">Stop Feeling Scattered</h2>
          <p className="text-corporate max-w-3xl mx-auto">
            Imagine never again scrambling to remember who you met where, 
            or missing opportunities because you forgot to follow up.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Executive Assistant */}
          <div className="card-corporate">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-muted/50 rounded-2xl mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Executive Assistant</h3>
              <div className="text-4xl font-black text-muted-foreground mb-2">$5,000</div>
              <p className="text-muted-foreground">per month</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <X className="h-5 w-5 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">Limited to business hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <X className="h-5 w-5 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">Human memory limitations</span>
              </div>
              <div className="flex items-center space-x-3">
                <X className="h-5 w-5 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">Single point of failure</span>
              </div>
              <div className="flex items-center space-x-3">
                <X className="h-5 w-5 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">No data analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <X className="h-5 w-5 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">Manual relationship tracking</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-lg font-semibold text-destructive">Annual Cost: $60,000+</div>
                <p className="text-sm text-muted-foreground mt-1">Plus benefits, training, management overhead</p>
              </div>
            </div>
          </div>

          {/* Wisedom RelationshipOS */}
          <div className="card-corporate card-glow relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Best Value
              </div>
            </div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">RelationshipOS</h3>
              <div className="text-4xl font-black text-primary mb-2">$300</div>
              <p className="text-muted-foreground">per month</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>24/7 availability</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Reliable memory & instant recall</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Infinitely scalable</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Advanced analytics & insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>AI-powered relationship mapping</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-primary/20">
              <div className="text-center">
                <div className="text-lg font-semibold text-primary">Annual Cost: $3,600</div>
                <p className="text-sm text-muted-foreground mt-1">94% cost savings vs. human assistant</p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Dashboard Showcase */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Real Executive ROI Dashboard</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the measurable business impact your AI team delivers vs. traditional $5,000/month VA
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              <img 
                src="/lovable-uploads/52c43199-b9df-4e14-9073-569728f73070.png" 
                alt="Executive ROI Dashboard showing $4,901 monthly savings and 4,951% annual ROI" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="space-y-2">
                <div className="text-3xl font-black text-primary">$4,901</div>
                <div className="text-lg font-semibold">Monthly Savings</div>
                <p className="text-sm text-muted-foreground">98% cost reduction</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-black text-secondary">15</div>
                <div className="text-lg font-semibold">Tasks Automated</div>
                <p className="text-sm text-muted-foreground">Daily operations</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-black text-primary">5h</div>
                <div className="text-lg font-semibold">Weekly Time Saved</div>
                <p className="text-sm text-muted-foreground">Executive focus time</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-black text-secondary">4,951%</div>
                <div className="text-lg font-semibold">Annual ROI</div>
                <p className="text-sm text-muted-foreground">$58,812 savings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROIComparison;
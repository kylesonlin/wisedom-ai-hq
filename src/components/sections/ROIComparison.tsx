import { Check, X, Calculator, TrendingUp } from 'lucide-react';

const ROIComparison = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-medium mb-8">
            <Calculator className="mr-2 h-4 w-4" />
            ROI Calculator
          </div>
          <h2 className="text-display mb-8">The Smart Choice is Clear</h2>
          <p className="text-corporate max-w-3xl mx-auto">
            Why pay $60,000+ annually for limited human insights when you can get 
            superhuman AI intelligence that never sleeps?
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
              <h3 className="text-2xl font-bold mb-2">Wisedom AI</h3>
              <div className="text-4xl font-black text-primary mb-2">$49</div>
              <p className="text-muted-foreground">per month</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>24/7 availability</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Perfect memory & instant recall</span>
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
                <div className="text-lg font-semibold text-primary">Annual Cost: $588</div>
                <p className="text-sm text-muted-foreground mt-1">99% cost savings vs. traditional assistant</p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Stats */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-black text-primary">99%</div>
              <div className="text-lg font-semibold">Cost Savings</div>
              <p className="text-sm text-muted-foreground">vs. Executive Assistant</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-secondary">24/7</div>
              <div className="text-lg font-semibold">Availability</div>
              <p className="text-sm text-muted-foreground">Never stops working</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-primary">∞</div>
              <div className="text-lg font-semibold">Scalability</div>
              <p className="text-sm text-muted-foreground">Grows with your business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROIComparison;
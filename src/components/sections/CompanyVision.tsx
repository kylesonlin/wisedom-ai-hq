import { Target, Lightbulb, Users, Zap } from 'lucide-react';

const CompanyVision = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-display mb-8">Think Different About Intelligence</h2>
              <p className="text-corporate">
                At Wisedom, we believe the future belongs to businesses that harness AI not just for automation, 
                but for the profound understanding of human relationships that drive every breakthrough.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
                  <p className="text-muted-foreground">
                    To democratize superhuman intelligence, making the insights of elite executive assistants 
                    accessible to every business at revolutionary price points.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Innovation First</h4>
                  <p className="text-muted-foreground">
                    We're pioneering the next generation of AI that understands not just what you know, 
                    but who you know and how those connections can drive growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Human-Centric AI</h4>
                  <p className="text-muted-foreground">
                    Our technology amplifies human potential rather than replacing it, 
                    making relationship building more strategic and impactful.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="card-corporate card-glow p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Platform Vision</h3>
                <p className="text-muted-foreground">
                  Building the world's most comprehensive AI business intelligence ecosystem
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <span className="font-medium">RelationshipOS</span>
                  <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">Live</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg">
                  <span className="font-medium">OpportunityOS</span>
                  <span className="text-sm bg-secondary/20 text-secondary px-2 py-1 rounded">Q2 2024</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
                  <span className="font-medium">IntelligenceOS</span>
                  <span className="text-sm bg-accent/30 text-foreground px-2 py-1 rounded">Q4 2024</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">EnterpriseOS</span>
                  <span className="text-sm bg-muted text-muted-foreground px-2 py-1 rounded">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyVision;
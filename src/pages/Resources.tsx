import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Video, FileText, Calendar, TrendingUp } from 'lucide-react';

const Resources = () => {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
              <BookOpen className="mr-2 h-4 w-4" />
              Knowledge Center
            </div>
            <h1 className="text-hero max-w-4xl mx-auto">
              Learn, Grow, and Succeed with AI
            </h1>
            <p className="text-corporate max-w-3xl mx-auto">
              Explore our comprehensive library of resources, insights, and educational content 
              to master the art of AI-powered business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog */}
            <div className="card-corporate card-glow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-6">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Latest Blog Posts</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with the latest insights on AI, relationship intelligence, 
                and business strategy from our team of experts.
              </p>
              <div className="space-y-4 mb-6">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold">The Future of AI in Business Relationships</h4>
                  <p className="text-sm text-muted-foreground">How AI is transforming professional networking</p>
                </div>
                <div className="border-l-2 border-secondary/30 pl-4">
                  <h4 className="font-semibold">Building Strategic Partnerships with AI</h4>
                  <p className="text-sm text-muted-foreground">Leverage data to identify key opportunities</p>
                </div>
                <div className="border-l-2 border-accent/30 pl-4">
                  <h4 className="font-semibold">ROI of Relationship Intelligence</h4>
                  <p className="text-sm text-muted-foreground">Measuring the business impact of network insights</p>
                </div>
              </div>
              <Button className="btn-primary w-full">
                Read All Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Case Studies */}
            <div className="card-corporate">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-6">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
              <p className="text-muted-foreground mb-6">
                Discover how leading companies are using RelationshipOS to transform 
                their business outcomes and accelerate growth.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <h4 className="font-semibold">TechCorp</h4>
                  <p className="text-sm text-muted-foreground">300% increase in partnership deals</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold">InnovateLab</h4>
                  <p className="text-sm text-muted-foreground">$5M in new revenue from network insights</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold">FutureScale</h4>
                  <p className="text-sm text-muted-foreground">50% faster deal closure rates</p>
                </div>
              </div>
              <Button variant="ghost" className="btn-ghost w-full">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Webinars & Events */}
            <div className="card-corporate">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-xl mb-6">
                <Video className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Webinars & Events</h3>
              <p className="text-muted-foreground mb-6">
                Join our experts for live sessions, product demonstrations, 
                and deep-dive discussions on AI business intelligence.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Mastering RelationshipOS</h4>
                    <p className="text-sm text-muted-foreground">March 15, 2024 • 2:00 PM EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold">AI Strategy Workshop</h4>
                    <p className="text-sm text-muted-foreground">March 22, 2024 • 1:00 PM EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-accent-foreground mt-1" />
                  <div>
                    <h4 className="font-semibold">Enterprise Implementation</h4>
                    <p className="text-sm text-muted-foreground">March 29, 2024 • 3:00 PM EST</p>
                  </div>
                </div>
              </div>
              <Button variant="ghost" className="btn-ghost w-full">
                Register for Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Explore by Category</h2>
            <p className="text-corporate max-w-2xl mx-auto">
              Find the resources that match your specific needs and business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-corporate text-center hover:card-glow transition-all duration-300 cursor-pointer">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Getting Started</h4>
              <p className="text-sm text-muted-foreground">Beginner guides and tutorials</p>
            </div>

            <div className="card-corporate text-center hover:card-glow transition-all duration-300 cursor-pointer">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-secondary/10 rounded-lg mb-4">
                <TrendingUp className="h-5 w-5 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Best Practices</h4>
              <p className="text-sm text-muted-foreground">Proven strategies and tips</p>
            </div>

            <div className="card-corporate text-center hover:card-glow transition-all duration-300 cursor-pointer">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-accent/20 rounded-lg mb-4">
                <Video className="h-5 w-5 text-accent-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Video Tutorials</h4>
              <p className="text-sm text-muted-foreground">Step-by-step walkthroughs</p>
            </div>

            <div className="card-corporate text-center hover:card-glow transition-all duration-300 cursor-pointer">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/20 rounded-lg mb-4">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Whitepapers</h4>
              <p className="text-sm text-muted-foreground">Research and insights</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Resources;
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
              <MessageSquare className="mr-2 h-4 w-4" />
              Get in Touch
            </div>
            <h1 className="text-hero max-w-4xl mx-auto">
              Let's Build the Future Together
            </h1>
            <p className="text-corporate max-w-3xl mx-auto">
              Ready to transform your business with AI-powered relationship intelligence? 
              Our team is here to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Whether you're looking to implement RelationshipOS for your enterprise, 
                  explore partnership opportunities, or have general inquiries, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-muted-foreground">hello@wisedom.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">123 Innovation Drive</p>
                    <p className="text-muted-foreground">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-corporate">
                <h3 className="font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a 
                    href="https://app.wisedom.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <h4 className="font-semibold text-primary">Try RelationshipOS</h4>
                    <p className="text-sm text-muted-foreground">Start your free trial today</p>
                  </a>
                  <button className="w-full text-left p-3 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors">
                    <h4 className="font-semibold text-secondary">Schedule Demo</h4>
                    <p className="text-sm text-muted-foreground">See RelationshipOS in action</p>
                  </button>
                  <button className="w-full text-left p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                    <h4 className="font-semibold">Partnership Inquiry</h4>
                    <p className="text-sm text-muted-foreground">Explore collaboration opportunities</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-corporate card-glow">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="enterprise">Enterprise Sales</SelectItem>
                        <SelectItem value="demo">Product Demo</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your needs, goals, or questions..." 
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="btn-primary flex-1">
                      Send Message
                    </Button>
                    <Button variant="ghost" className="btn-ghost flex-1" type="button">
                      Schedule Call Instead
                    </Button>
                  </div>
                </form>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service. 
                    We'll never share your information with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Need Immediate Help?</h2>
            <p className="text-corporate max-w-2xl mx-auto">
              Explore our support resources or connect with our team for faster assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-corporate text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Help Center</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Browse our comprehensive documentation and FAQs
              </p>
              <Button variant="ghost" className="btn-ghost" size="sm">
                Visit Help Center
              </Button>
            </div>

            <div className="card-corporate text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-4">
                <MessageSquare className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Live Chat</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Chat with our support team in real-time
              </p>
              <Button variant="ghost" className="btn-ghost" size="sm">
                Start Chat
              </Button>
            </div>

            <div className="card-corporate text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-xl mb-4">
                <Phone className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-bold mb-2">Phone Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Speak directly with our technical experts
              </p>
              <Button variant="ghost" className="btn-ghost" size="sm">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
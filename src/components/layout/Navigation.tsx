import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-bold text-xl">Wisedom</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span>Products</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4">
                    <Link to="/products" className="block p-3 hover:bg-accent rounded-lg transition-colors">
                      <div className="font-semibold">RelationshipOS</div>
                      <div className="text-sm text-muted-foreground">AI-powered relationship intelligence</div>
                    </Link>
                    <div className="p-3 text-sm text-muted-foreground">
                      More products coming soon...
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/solutions" className="text-foreground hover:text-primary transition-colors">Solutions</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/resources" className="text-foreground hover:text-primary transition-colors">Resources</Link>
              <Link to="/company" className="text-foreground hover:text-primary transition-colors">Company</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/contact">
                <Button variant="ghost" size="sm">Contact Sales</Button>
              </Link>
              <a href="https://app.relationshipos.ai" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Try RelationshipOS
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link to="/products" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Products</Link>
              <Link to="/solutions" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Solutions</Link>
              <Link to="/about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/resources" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Resources</Link>
              <Link to="/company" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Company</Link>
              <Link to="/contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Contact Sales</Link>
              <div className="pt-4">
                <a href="https://app.relationshipos.ai" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                  Try RelationshipOS
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Briefcase, FolderOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: '首页', icon: Home },
    { href: '/about', label: '关于', icon: User },
    { href: '/services', label: '服务', icon: Briefcase },
    { href: '/projects', label: '项目', icon: FolderOpen },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 gradient-cyber rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">AI</span>
              </div>
              <span className="text-gradient-cyber font-bold text-lg">PM Portfolio</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Button
                  key={href}
                  variant={isActive(href) ? 'cyber' : 'ghost'}
                  size="sm"
                  asChild
                  className="text-sm"
                >
                  <Link to={href} className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-16 left-0 right-0 glass-effect border-b border-primary/20 p-4">
            <div className="flex flex-col gap-2">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Button
                  key={href}
                  variant={isActive(href) ? 'cyber' : 'ghost'}
                  size="sm"
                  asChild
                  className="justify-start text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={href} className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
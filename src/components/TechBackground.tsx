import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const TechBackground = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 6,
    size: Math.random() * 4 + 2,
  }));

  // Generate holographic orbs
  const holograms = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    x: 20 + (i * 30),
    y: 30 + (i * 20),
    size: 200 + (i * 100),
    delay: i * 2,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic gradient background that follows mouse */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            hsl(188 100% 50% / 0.3) 0%, 
            hsl(271 100% 50% / 0.2) 35%, 
            hsl(330 100% 70% / 0.1) 70%, 
            transparent 100%)`,
        }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Holographic orbs */}
      {holograms.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full animate-pulse-glow"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, 
              hsl(188 100% 50% / 0.1) 0%, 
              hsl(271 100% 50% / 0.05) 50%, 
              transparent 100%)`,
            filter: 'blur(30px)',
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}

      {/* Sparkle effects */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-accent rounded-full animate-sparkle"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};
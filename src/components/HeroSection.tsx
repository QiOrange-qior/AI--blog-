import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Brain, Zap, ArrowRight, Copy, Mail, Github, Linkedin } from 'lucide-react';
import aiManagerAvatar from '@/assets/ai-manager-avatar.jpg';

export const HeroSection = () => {
  const { toast } = useToast();
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ai.pm@example.com');
      toast({
        title: "邮箱已复制",
        description: "ai.pm@example.com 已复制到剪贴板",
      });
    } catch (error) {
      toast({
        title: "复制失败",
        description: "请手动复制邮箱地址",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full text-sm font-medium">
          <Zap className="w-4 h-4 text-accent animate-pulse" />
          <Brain className="w-4 h-4 text-secondary animate-pulse" />
          <span className="text-gradient-cyber">AI产品经理</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-primary">技术创新者</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-accent">数字化转型专家</span>
        </div>

        {/* Avatar */}
        <div className="relative inline-block">
          <div 
            className={`relative w-32 h-32 mx-auto rounded-full overflow-hidden transition-transform duration-500 ${
              isAvatarHovered ? 'scale-110 glow-cyber' : 'scale-100'
            }`}
            onMouseEnter={() => setIsAvatarHovered(true)}
            onMouseLeave={() => setIsAvatarHovered(false)}
          >
            <div className="absolute inset-0 gradient-cyber opacity-70 rounded-full animate-pulse-glow" />
            <img
              src={aiManagerAvatar}
              alt="AI产品经理头像"
              className="relative w-full h-full object-cover rounded-full border-2 border-primary/50"
            />
          </div>
          
          {/* Avatar glow effect */}
          <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-cyber opacity-20 blur-xl animate-pulse-glow" />
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span className="text-gradient-cyber">AI驱动</span>
            <br />
            <span className="text-foreground">Product</span>{' '}
            <span className="text-gradient-cyber">Manager</span>
          </h1>
          
           <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             <span className="text-accent font-semibold">6年+产品经验</span>·<span className="text-secondary font-semibold">10000h+项目实战</span>·<span className="text-primary font-semibold">PMP/NPDP认证</span>
             <br />从0到1构建AI产品生态，让智能技术真正赋能商业价值
           </p>
        </div>

        {/* Info Card */}
        <Card className="glass-effect max-w-2xl mx-auto p-6 border-primary/30">
          <div className="flex items-center gap-4 text-left">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 gradient-cyber rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                专业背景
              </h3>
               <p className="text-muted-foreground leading-relaxed">
                 WaytoAGI社区专栏成员 • Prompt设计师 • 主导5+个AI应用产品落地
                 <br />
                 营销获客成本降低80% • 素材产出效率提升12倍 • 避免损失150万美元
               </p>
            </div>
          </div>
        </Card>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="hero"
            size="lg"
            className="group"
          >
            查看作品集
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="glass"
            size="lg"
            onClick={handleCopyEmail}
            className="group"
          >
            <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
            联系我
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 pt-8">
          <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
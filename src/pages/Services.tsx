import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Users, 
  BarChart3, 
  Lightbulb, 
  Settings, 
  Rocket,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI产品策略咨询',
      description: '帮助企业制定AI产品发展路线图，识别市场机会，设计技术实现方案',
      features: [
        'AI技术可行性评估',
        '市场竞品深度分析',
        '产品路线图规划',
        'ROI预期分析'
      ],
      price: '面议',
      popular: true
    },
    {
      icon: Users,
      title: '用户体验优化',
      description: '基于用户行为数据，优化AI产品的交互设计和用户旅程',
      features: [
        '用户调研与画像',
        'AI交互设计',
        'A/B测试方案',
        '转化率优化'
      ],
      price: '50k+',
      popular: false
    },
    {
      icon: BarChart3,
      title: '数据驱动增长',
      description: '建立完整的产品数据分析体系，实现精准的增长策略执行',
      features: [
        '数据指标体系搭建',
        '用户行为分析',
        '增长实验设计',
        '商业智能报告'
      ],
      price: '30k+',
      popular: false
    },
    {
      icon: Lightbulb,
      title: '创新孵化指导',
      description: '从0到1孵化AI创新产品，提供全程产品管理和团队指导',
      features: [
        'MVP快速验证',
        '敏捷开发指导',
        '团队协作优化',
        '产品迭代策略'
      ],
      price: '80k+',
      popular: false
    },
    {
      icon: Settings,
      title: 'AI系统架构设计',
      description: '设计可扩展的AI产品技术架构，确保系统稳定性和性能',
      features: [
        '系统架构设计',
        '技术选型建议',
        '性能优化方案',
        '扩展性规划'
      ],
      price: '面议',
      popular: false
    },
    {
      icon: Rocket,
      title: '产品上线运营',
      description: '协助AI产品成功上线，制定运营策略，实现商业化目标',
      features: [
        '产品发布策略',
        '运营活动策划',
        '用户增长计划',
        '商业化路径'
      ],
      price: '40k+',
      popular: false
    }
  ];

  const process = [
    {
      step: '01',
      title: '需求诊断',
      description: '深入了解您的业务场景和技术需求，制定个性化解决方案'
    },
    {
      step: '02',
      title: '方案设计',
      description: '基于行业最佳实践，设计符合您企业特点的AI产品策略'
    },
    {
      step: '03',
      title: '执行落地',
      description: '协助团队执行方案，提供持续的指导和优化建议'
    },
    {
      step: '04',
      title: '效果评估',
      description: '定期评估项目效果，持续优化产品表现和用户体验'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient-cyber">专业服务</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            为您的AI产品提供从策略规划到落地执行的全方位专业服务
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`relative glass-effect p-6 border-primary/30 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-accent glow-cyber' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      热门服务
                    </span>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-cyber rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                      <div className="text-2xl font-bold text-primary mt-1">{service.price}</div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="cyber" 
                    className="w-full group"
                  >
                    了解详情
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient-cyber">服务流程</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              标准化的服务流程，确保项目高质量交付
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="glass-effect p-6 border-primary/30 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 gradient-cyber rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-foreground">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="glass-effect p-8 md:p-12 border-primary/30 text-center animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient-cyber">开始合作</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              让我们一起探讨如何用AI技术为您的业务创造更大价值
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                免费咨询
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                查看案例
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
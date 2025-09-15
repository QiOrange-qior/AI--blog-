import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Zap,
  ArrowRight,
  ExternalLink,
  Calendar,
  Target,
  BarChart3,
  Gamepad2
} from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI创意素材营销平台',
      subtitle: '基于Stable Diffusion的营销素材生成平台',
      description: '从0到1构建营销领域AI素材平台，实现素材产出效率从2人天提升至4小时，CTR提升40%。',
      category: 'AI营销',
      period: '2023-2024',
      status: '已上线',
      impact: '素材产出效率提升12倍',
      tech: ['Stable Diffusion', 'Deepbooru', 'Python', 'Vue.js'],
      achievements: [
        '用户调研22个市场部门，明确需求痛点',
        '独立负责平台整体方案设计',
        '协同算法团队训练高质量生成模型',
        '内部业务场景覆盖率达50%'
      ],
      highlights: [
        { label: '效率提升', value: '12倍' },
        { label: 'CTR提升', value: '40%' },
        { label: '业务覆盖', value: '50%' }
      ]
    },
    {
      id: 2,
      title: 'AI Agents自动化营销获客系统',
      subtitle: '基于Coze/n8n的智能获客工作流',
      description: '构建从对标拆解、内容创作到数据分析的全链路AI获客系统，大幅缩短内容生产周期。',
      category: 'AI自动化',
      period: '2023-2024',
      status: '已嵌入业务',
      impact: '营销获客成本降低80%',
      tech: ['Coze', 'n8n', 'GPT-4', 'QuickBI'],
      achievements: [
        '穷举15大业务方向，聚焦7个核心场景',
        '设计智能对标拆解工作流',
        '构建自动化内容生产链路',
        '线索商机CVR提升40%'
      ],
      highlights: [
        { label: '成本降低', value: '80%' },
        { label: 'CVR提升', value: '40%' },
        { label: '场景覆盖', value: '7个' }
      ]
    },
    {
      id: 3,
      title: 'Gemini"配方驱动"AI创意工具',
      subtitle: '光影魔方·PixelShift创意平台',
      description: '基于Gemini 2.5图像能力，创新"配方驱动"交互范式，降低95%用户使用门槛。',
      category: 'AI创意',
      period: '2024',
      status: '产品化中',
      impact: '用户门槛降低95%',
      tech: ['Gemini 2.5', 'React', 'Python', 'WebGL'],
      achievements: [
        '独立设计差异化AI创意工具',
        '创建预设变换配方产品架构',
        '设计迭代式创作工作流',
        '抽象高级AI能力为可视化操作'
      ],
      highlights: [
        { label: '门槛降低', value: '95%' },
        { label: '交互创新', value: '配方驱动' },
        { label: '创作效率', value: '4小时' }
      ]
    },
    {
      id: 4,
      title: '海外ToB数据赋能中台',
      subtitle: '经营分析&责任制体系数据应用',
      description: '整合6+业务系统，构建100+核心KPI体系，实现7+业务线数据可视预警。',
      category: '数据中台',
      period: '2022-2023',
      status: '已上线',
      impact: '年度节省人工10000h',
      tech: ['Apache Spark', 'Elasticsearch', 'Grafana', 'Python'],
      achievements: [
        '整合6+业务系统数据',
        '构建100+核心KPI指标体系',
        '建设经营分析数据产品',
        '实现实时数据可视预警'
      ],
      highlights: [
        { label: '系统整合', value: '6+个' },
        { label: 'KPI体系', value: '100+' },
        { label: '节省人工', value: '10000h' }
      ]
    },
    {
      id: 5,
      title: 'AI驱动游戏创新项目',
      subtitle: '反转角色RPG & TCG卡牌生成器',
      description: '独立设计3款AI驱动游戏，探索"配方驱动"交互范式，卡牌设计效率提升至4小时。',
      category: 'AI游戏',
      period: '2021-2022',
      status: '创新探索',
      impact: '设计效率从2天到4小时',
      tech: ['Unity', 'TensorFlow', 'GPT-3', 'Stable Diffusion'],
      achievements: [
        '设计反转角色RPG游戏机制',
        '构建世代传承系统',
        '开发TCG卡牌自动生成器',
        '探索次世代游戏新形态'
      ],
      highlights: [
        { label: '效率提升', value: '12倍' },
        { label: '游戏创新', value: '3款' },
        { label: '交互范式', value: '配方驱动' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '已上线': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case '已嵌入业务': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case '产品化中': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case '创新探索': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI营销': return Brain;
      case 'AI自动化': return Zap;
      case 'AI创意': return Sparkles;
      case '数据中台': return BarChart3;
      case 'AI游戏': return Gamepad2;
      default: return Target;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient-cyber">项目作品集</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            从0到1构建多个AI产品，实现技术创新与商业价值的完美结合
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
          <Card className="glass-effect p-6 border-primary/30 text-center">
            <div className="text-3xl font-bold text-gradient-cyber mb-2">5+</div>
            <div className="text-sm text-muted-foreground">AI应用产品</div>
          </Card>
          <Card className="glass-effect p-6 border-primary/30 text-center">
            <div className="text-3xl font-bold text-gradient-cyber mb-2">80%</div>
            <div className="text-sm text-muted-foreground">获客成本降低</div>
          </Card>
          <Card className="glass-effect p-6 border-primary/30 text-center">
            <div className="text-3xl font-bold text-gradient-cyber mb-2">12×</div>
            <div className="text-sm text-muted-foreground">效率提升</div>
          </Card>
          <Card className="glass-effect p-6 border-primary/30 text-center">
            <div className="text-3xl font-bold text-gradient-cyber mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">节省工时</div>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 animate-fade-in">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <Card 
                key={project.id}
                className={`glass-effect border-primary/30 overflow-hidden hover:scale-[1.02] transition-all duration-300 ${
                  index % 2 === 0 ? 'hover:glow-primary' : 'hover:glow-secondary'
                }`}
              >
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Project Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 gradient-cyber rounded-lg flex items-center justify-center">
                              <CategoryIcon className="w-5 h-5 text-foreground" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                              <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-auto">
                            <Badge variant="secondary" className={getStatusColor(project.status)}>
                              {project.status}
                            </Badge>
                            <Badge variant="outline" className="text-accent border-accent/30">
                              {project.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {project.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-secondary flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          核心成就
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-secondary flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          技术栈
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Stats & Actions */}
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {project.period}
                        </div>
                        <div className="p-4 glass-effect rounded-lg border border-primary/20">
                          <div className="text-sm text-muted-foreground mb-2">核心影响</div>
                          <div className="text-lg font-bold text-gradient-cyber">
                            {project.impact}
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3">
                        {project.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center justify-between p-3 glass-effect rounded-lg border border-primary/10">
                            <span className="text-sm text-muted-foreground">{highlight.label}</span>
                            <span className="text-sm font-bold text-primary">{highlight.value}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="cyber" className="w-full group">
                        查看详情
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <Card className="glass-effect p-8 md:p-12 border-primary/30 text-center animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient-cyber">一起探索AI的无限可能</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              如果您对这些项目感兴趣，或者有想要讨论的AI产品创意，欢迎与我交流
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                联系合作
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                下载简历
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
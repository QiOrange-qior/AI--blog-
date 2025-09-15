import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Github, 
  Filter,
  Brain,
  BarChart3,
  Users,
  Zap,
  TrendingUp,
  ShoppingCart
} from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const categories = ['全部', 'AI推荐', '数据分析', '用户体验', '商业智能'];

  const projects = [
    {
      id: 1,
      title: '智能内容推荐系统',
      category: 'AI推荐',
      description: '基于深度学习的个性化内容推荐平台，提升用户参与度300%，月活用户达到500万+',
      image: '/api/placeholder/600/400',
      tech: ['TensorFlow', 'Python', 'Redis', 'Kubernetes'],
      metrics: [
        { label: '用户增长', value: '+300%' },
        { label: '点击率提升', value: '+85%' },
        { label: '用户停留时间', value: '+120%' }
      ],
      icon: Brain,
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: '实时用户行为分析平台',
      category: '数据分析',
      description: '构建实时数据处理管道，支持千万级用户行为分析，为产品决策提供数据支持',
      image: '/api/placeholder/600/400',
      tech: ['Apache Kafka', 'ClickHouse', 'React', 'D3.js'],
      metrics: [
        { label: '数据处理量', value: '10M+/日' },
        { label: '查询响应时间', value: '<100ms' },
        { label: '准确率', value: '99.5%' }
      ],
      icon: BarChart3,
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 3,
      title: 'AI驱动的客户服务系统',
      category: '用户体验',
      description: '集成NLP和机器学习技术的智能客服系统，自动化处理80%的客户咨询',
      image: '/api/placeholder/600/400',
      tech: ['GPT-4', 'Node.js', 'MongoDB', 'WebSocket'],
      metrics: [
        { label: '自动化率', value: '80%' },
        { label: '响应时间', value: '<3s' },
        { label: '满意度', value: '96%' }
      ],
      icon: Users,
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 4,
      title: '智能营销ROI预测模型',
      category: '商业智能',
      description: '利用机器学习预测营销活动效果，优化广告投放策略，ROI提升150%',
      image: '/api/placeholder/600/400',
      tech: ['Scikit-learn', 'PostgreSQL', 'FastAPI', 'Docker'],
      metrics: [
        { label: 'ROI提升', value: '+150%' },
        { label: '预测准确率', value: '92%' },
        { label: '成本节约', value: '30%' }
      ],
      icon: TrendingUp,
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 5,
      title: '多模态搜索引擎',
      category: 'AI推荐',
      description: '支持文本、图像、语音的多模态搜索系统，为电商平台提供智能搜索体验',
      image: '/api/placeholder/600/400',
      tech: ['CLIP', 'Elasticsearch', 'Vue.js', 'AWS'],
      metrics: [
        { label: '搜索准确率', value: '94%' },
        { label: '转化率提升', value: '+65%' },
        { label: '响应时间', value: '<200ms' }
      ],
      icon: Zap,
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 6,
      title: '智能供应链优化平台',
      category: '商业智能',
      description: '基于AI的供应链管理系统，优化库存管理和物流配送，降低成本25%',
      image: '/api/placeholder/600/400',
      tech: ['PyTorch', 'Django', 'Celery', 'GCP'],
      metrics: [
        { label: '成本降低', value: '25%' },
        { label: '库存周转率', value: '+40%' },
        { label: '配送时效', value: '+35%' }
      ],
      icon: ShoppingCart,
      link: '#',
      github: '#',
      featured: true
    }
  ];

  const filteredProjects = selectedCategory === '全部' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient-cyber">项目作品</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            展示我在AI产品管理领域的实战经验和创新成果
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-center">
            <span className="text-gradient-cyber">精选项目</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project) => {
              const Icon = project.icon;
              return (
                <Card key={project.id} className="glass-effect border-primary/30 overflow-hidden group hover:scale-105 transition-all duration-300 glow-cyber">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-primary/50" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground">精选</Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-primary/20">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button variant="cyber" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4" />
                        查看详情
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Filter & All Projects */}
        <div className="space-y-8 animate-fade-in">
          {/* Category Filter */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Filter className="w-5 h-5 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'cyber' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <Card key={project.id} className="glass-effect border-primary/30 overflow-hidden group hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-primary/40" />
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-accent text-accent-foreground text-xs">精选</Badge>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="text-xs">{project.category}</Badge>
                    </div>
                  </div>
                  
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-primary/20">
                      {project.metrics.slice(0, 3).map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-sm font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="cyber" size="sm" className="flex-1 text-xs">
                        <ExternalLink className="w-3 h-3" />
                        详情
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="glass-effect p-8 md:p-12 border-primary/30 text-center animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient-cyber">让我们合作</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              对我的项目感兴趣？让我们一起探讨如何为您的产品创造价值
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                开始项目合作
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                下载项目详情
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
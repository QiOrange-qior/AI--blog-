import { Card } from '@/components/ui/card';
import { Brain, Target, Users, Lightbulb, TrendingUp, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'AI/ML产品策略', level: 95, icon: Brain },
    { name: '用户体验设计', level: 90, icon: Users },
    { name: '数据分析洞察', level: 85, icon: TrendingUp },
    { name: '敏捷开发管理', level: 88, icon: Target },
    { name: '创新思维', level: 92, icon: Lightbulb },
    { name: '技术理解', level: 87, icon: Zap },
  ];

  const experiences = [
    {
      period: '2021-2024',
      company: 'TechAI 独角兽公司',
      role: '高级AI产品经理',
      description: '负责智能推荐系统产品线，用户增长300%，营收提升150%',
      achievements: ['构建个性化推荐算法产品', '主导多模态AI交互设计', '管理15人跨职能团队'],
    },
    {
      period: '2019-2021',
      company: 'DataInsight 科技',
      role: 'AI产品经理',
      description: '从0到1打造智能分析平台，获得行业最佳创新产品奖',
      achievements: ['设计机器学习工作流', '建立数据产品标准', '实现月活用户10万+'],
    },
    {
      period: '2017-2019',
      company: 'Innovation Lab',
      role: '产品分析师',
      description: '深入研究AI技术应用，为产品决策提供数据支持',
      achievements: ['完成50+产品分析报告', '建立产品指标体系', '优化转化率35%'],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container max-w-6xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient-cyber">关于我</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            一个热爱技术、理解用户、连接未来的AI产品经理
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="glass-effect p-8 border-primary/30 animate-fade-in">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 gradient-cyber rounded-full mx-auto flex items-center justify-center">
              <Target className="w-8 h-8 text-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-gradient-cyber">使命愿景</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              我相信AI技术的真正价值在于<span className="text-primary font-semibold">解决人类的实际问题</span>。
              作为AI产品经理，我致力于构建既具有技术深度，又贴近用户需求的智能产品。
              通过<span className="text-accent font-semibold">深度理解算法原理</span>和
              <span className="text-secondary font-semibold">敏锐洞察用户心理</span>，
              让复杂的AI技术变得简单易用，真正赋能于人。
            </p>
          </div>
        </Card>

        {/* Skills */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-center">
            <span className="text-gradient-cyber">核心技能</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={skill.name} className="glass-effect p-6 border-primary/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 gradient-cyber rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{skill.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full gradient-cyber transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-center">
            <span className="text-gradient-cyber">工作经历</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-50 transform md:-translate-x-0.5" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 gradient-cyber rounded-full transform -translate-x-2 md:-translate-x-2 glow-primary" />
                  
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="glass-effect p-6 border-primary/30">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <p className="text-muted-foreground">{exp.description}</p>
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-secondary">主要成就:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Card } from '@/components/ui/card';
import { Brain, Target, Users, Lightbulb, TrendingUp, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'AI产品策略设计', level: 98, icon: Brain },
    { name: 'AIGC应用落地', level: 95, icon: Zap },
    { name: '数据中台建设', level: 92, icon: TrendingUp },
    { name: 'Agents工作流设计', level: 90, icon: Target },
    { name: '跨部门协同管理', level: 88, icon: Users },
    { name: '创新产品孵化', level: 94, icon: Lightbulb },
  ];

  const experiences = [
    {
      period: '2022-2024',
      company: '知名出海公司',
      role: '高级AI产品经理',
      description: '主导AI营销平台建设，营销获客成本降低80%，线索商机CVR提升40%',
      achievements: ['从0到1搭建5+个AI应用产品', '构建智能问答、创意素材生成等核心功能', '实现素材产出效率提升12倍'],
    },
    {
      period: '2020-2022',
      company: '海外ToB企业',
      role: 'AI产品经理',
      description: '主导数据赋能中台建设，整合6+业务系统，构建100+核心KPI体系',
      achievements: ['建设经营分析&责任制体系数据应用产品', '实现7+业务线数据可视预警', '年度节省人工约10000h'],
    },
    {
      period: '2018-2020',
      company: '游戏科技公司',
      role: '产品经理',
      description: '独立设计3款AI驱动游戏，创新"配方驱动"交互范式',
      achievements: ['卡牌设计效率从2天提升至4小时', '探索次世代游戏新形态', '构建反转角色RPG、世代传承系统'],
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
              拥有<span className="text-primary font-semibold">6年+产品专业经验</span>和<span className="text-accent font-semibold">10000h+项目实战经验</span>，
              持有PMP、NPDP国际认证。作为<span className="text-secondary font-semibold">WaytoAGI社区专栏成员</span>和Prompt设计师，
              我专注于将复杂的AI技术转化为具有商业价值的产品解决方案。
              通过AI赋能实现多项业务突破——<span className="text-primary font-semibold">素材产出效率提升12倍</span>、
              <span className="text-accent font-semibold">培训完课率提升22%</span>、<span className="text-secondary font-semibold">重大风险预警避免损失150万美元</span>。
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
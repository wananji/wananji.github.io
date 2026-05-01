import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function CodeOperation() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-surface-canvas text-on-surface font-body-main">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -mr-96 -mt-96"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-50/80 rounded-full blur-3xl -ml-64 -mb-64"></div>
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
            <h1 className="font-hero-title text-hero-title mb-8 max-w-4xl mx-auto">
              名医 IP 数字化运营
              <div className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent inline-block">从人力密集到数字资产的跃迁</div>
            </h1>
            <p className="font-body-main text-body-main text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              我们正在重新定义医疗服务范式。通过利用先进的临床逻辑 AI，我们将专家经验转化为永久性的数字资产，超越传统的劳动力依赖模型。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium text-sm hover:opacity-90 transition-all">开始免费体验</button>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 bg-surface-soft">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-section-title text-section-title mb-4">三大运营痛点</h2>
              <p className="text-text-secondary">传统医疗服务模式面临固有的可扩展性限制</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-10 rounded-xl border border-border-subtle hover:-translate-y-1 hover:shadow-sm transition-all duration-300">
                <h3 className="font-card-title text-card-title mb-4">名医精力瓶颈</h3>
                <p className="text-text-secondary text-sm leading-relaxed">专家时间是不可再生的。每次咨询都会消耗宝贵的临床精力，如果不降低质量或导致精疲力竭，就不可能服务成千上万的人。</p>
              </div>
              <div className="bg-white p-10 rounded-xl border border-border-subtle hover:-translate-y-1 hover:shadow-sm transition-all duration-300">
                <h3 className="font-card-title text-card-title mb-4">知识迁移鸿沟</h3>
                <p className="text-text-secondary text-sm leading-relaxed">临床经验往往是含蓄的。将这种"直觉"转移给初级团队或内容创作者通常会导致高度的信息损失和品牌风险。</p>
              </div>
              <div className="bg-white p-10 rounded-xl border border-border-subtle hover:-translate-y-1 hover:shadow-sm transition-all duration-300">
                <h3 className="font-card-title text-card-title mb-4">碎裂化管理</h3>
                <p className="text-text-secondary text-sm leading-relaxed">跨社交媒体、私域流量和诊所的患者触点是支离破碎的，导致留存率低且缺乏系统的临床数据逻辑。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Logic Section */}
        <section className="py-32">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="font-section-title text-section-title mb-6">EvoLeap 核心逻辑：<br/>隐性经验硬化</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">EvoLeap 的核心是"经验固化"。我们不仅仅是记录会诊；我们提取顶级专家的底层临床逻辑树，并将其编码到 AI 引擎中。</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  将专家直觉转化为可重复的临床路径
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  标准化诊断逻辑，确保多渠道一致性
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  通过真实世界的医疗数据反馈不断进化
                </li>
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="rounded-xl overflow-hidden bg-zinc-900 p-0">
                <img alt="Logic Extraction Visualization" className="w-full h-auto object-cover" src="/去除蓝色背景.png"/>
              </div>
            </div>
          </div>
        </section>

        {/* Enablement Matrices */}
        <section className="py-24 bg-surface-soft">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-section-title text-section-title mb-4">四大赋能矩阵</h2>
              <p className="text-text-secondary">现代医疗 IP 的全方位数字赋能</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white p-8 rounded-xl border border-border-subtle hover:border-primary transition-colors">
                <h4 className="font-card-title text-card-title mb-4 group-hover:text-primary transition-colors">GEO品牌增长矩阵</h4>
                <p className="text-sm text-text-secondary">基于专家逻辑在所有社交平台上自动生成内容。</p>
              </div>
              <div className="group bg-white p-8 rounded-xl border border-border-subtle hover:border-primary transition-colors">
                <h4 className="font-card-title text-card-title mb-4 group-hover:text-primary transition-colors">数字人智慧诊室矩阵</h4>
                <p className="text-sm text-text-secondary">AI 数字人驱动的患者分诊和自动随访，确保高质量的问诊服务。</p>
              </div>
              <div className="group bg-white p-8 rounded-xl border border-border-subtle hover:border-primary transition-colors">
                <h4 className="font-card-title text-card-title mb-4 group-hover:text-primary transition-colors">内容产品矩阵</h4>
                <p className="text-sm text-text-secondary">临床数据的自动结构化，实现无缝的内容产出与增长。</p>
              </div>
              <div className="group bg-white p-8 rounded-xl border border-border-subtle hover:border-primary transition-colors">
                <h4 className="font-card-title text-card-title mb-4 group-hover:text-primary transition-colors">资产管理矩阵</h4>
                <p className="text-sm text-text-secondary">将咨询记录转化为受保护且可交易的数字知识产权。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-section-title text-section-title mb-4">运营成效显著提升</h2>
              <p className="text-text-secondary">临床生产力的量化转型</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <p className="text-xs text-text-tertiary uppercase tracking-widest mb-2">服务能力</p>
                <h3 className="text-6xl font-bold mb-4 tracking-tighter">10倍</h3>
                <p className="text-sm text-text-secondary">同时患者管理能力的增长</p>
              </div>
              <div className="border-x border-border-subtle px-6">
                <p className="text-xs text-text-tertiary uppercase tracking-widest mb-2">患者留存</p>
                <h3 className="text-6xl font-bold mb-4 tracking-tighter">45%</h3>
                <p className="text-sm text-text-secondary">长期治疗依从性和留存率的提升</p>
              </div>
              <div>
                <p className="text-xs text-text-tertiary uppercase tracking-widest mb-2">品牌价值</p>
                <h3 className="text-6xl font-bold mb-4 tracking-tighter">300%</h3>
                <p className="text-sm text-text-secondary">品牌影响力和患者信任指标的提升</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 bg-surface-canvas">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative overflow-hidden bg-zinc-950 rounded-3xl p-12 md:p-20 text-center">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-96 -mt-96"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] -ml-64 -mb-64"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">开启您的医疗 AI 进化之旅</h2>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                  选择适合的版本，即刻部署 Medical Agent OS 2.0，将医疗服务转化为领先的数字资产。
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-all">
                    试用 EvoLeap
                  </button>
                  <button className="w-full sm:w-auto px-8 py-4 border border-zinc-700 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                    联系 Enterprise 销售
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default CodeOperation

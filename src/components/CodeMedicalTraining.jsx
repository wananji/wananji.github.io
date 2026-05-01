import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function CodeMedicalTraining() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-surface-canvas text-on-surface font-body-main">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 px-8 max-w-[1200px] mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-hero-title text-primary mb-8 text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">
              医疗机构数字化转型
              <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500">人员培训方案</span>
            </h1>
            <p className="font-body-main text-text-secondary text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto">
              我们正在重新定义医疗服务范式。通过利用先进的临床逻辑 AI，我们将专家经验转化为永久性的数字资产，超越传统的劳动力依赖模型。
            </p>
            <div className="mt-12">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200">
                免费咨询
              </button>
            </div>
          </div>
        </section>

        {/* Section 1: 我们解决的问题 */}
        <section className="py-24 bg-surface-soft">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-section-title text-primary text-center text-4xl md:text-5xl font-bold tracking-tight mb-16">我们解决的问题</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-surface-canvas p-6 rounded-xl border border-border-subtle hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-card-title text-primary text-xl font-bold mb-4">买了系统不会用</h3>
                <p className="font-body-main text-text-secondary leading-relaxed text-sm">医疗机构引进了先进的 AI 系统，但一线医护人员缺乏培训，导致系统闲置，无法发挥实际效用。</p>
              </div>
              <div className="bg-surface-canvas p-6 rounded-xl border border-border-subtle hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-card-title text-primary text-xl font-bold mb-4">有数据不会挖</h3>
                <p className="font-body-main text-text-secondary leading-relaxed text-sm">积累了海量高质量的临床数据，却不知道如何利用 AI 工具进行深度挖掘和科研转化。</p>
              </div>
              <div className="bg-surface-canvas p-6 rounded-xl border border-border-subtle hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-card-title text-primary text-xl font-bold mb-4">需求沟通不畅</h3>
                <p className="font-body-main text-text-secondary leading-relaxed text-sm">临床医生与 AI 研发团队之间存在严重的认知壁垒，导致开发出的产品无法满足实际临床需求。</p>
              </div>
              <div className="bg-surface-canvas p-6 rounded-xl border border-border-subtle hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-card-title text-primary text-xl font-bold mb-4">缺乏创新思维</h3>
                <p className="font-body-main text-text-secondary leading-relaxed text-sm">面对 AI 带来的行业变革，缺乏前瞻性思维和系统的方法论，难以在激烈的竞争中保持领先。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 课程模块 */}
        <section className="py-24 bg-surface-canvas">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-section-title text-primary text-center text-4xl md:text-5xl font-bold tracking-tight mb-16">课程模块</h2>
            <div className="space-y-8">
              <div className="border border-border-subtle rounded-xl overflow-hidden">
                <div className="bg-surface-soft p-6 border-b border-border-subtle">
                  <h3 className="font-card-title text-primary text-lg font-bold">模块一：AI 医疗基础认知与全景解析</h3>
                  <p className="font-meta-data text-text-secondary mt-1 text-sm font-medium text-primary/60">目标：建立正确的 AI 认知，了解前沿趋势与应用边界。</p>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-text-tertiary mt-1">check_circle</span>
                    <div>
                      <p className="font-body-main text-primary font-medium">医疗 AI 发展史与核心概念解析</p>
                      <p className="font-meta-data text-text-secondary">从专家系统到大模型，机器学习/深度学习基础知识普及。</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-text-tertiary mt-1">check_circle</span>
                    <div>
                      <p className="font-body-main text-primary font-medium">典型应用场景深度剖析</p>
                      <p className="font-meta-data text-text-secondary">医学影像辅助诊断、电子病历智能化处理、药物研发加速器等。</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-border-subtle rounded-xl overflow-hidden">
                <div className="bg-surface-soft p-6 border-b border-border-subtle">
                  <h3 className="font-card-title text-primary text-lg font-bold">模块二：临床业务流程的 AI 重构</h3>
                  <p className="font-meta-data text-text-secondary mt-1 text-sm font-medium text-primary/60">目标：掌握利用 AI 工具优化诊疗流程、提升效率的方法。</p>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-text-tertiary mt-1">check_circle</span>
                    <div>
                      <p className="font-body-main text-primary font-medium">门诊流程智能化改造实务</p>
                      <p className="font-meta-data text-text-secondary">智能导诊分诊策略，智能语音录入与病历结构化自动生成。</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-text-tertiary mt-1">check_circle</span>
                    <div>
                      <p className="font-body-main text-primary font-medium">住院及随访管理提效</p>
                      <p className="font-meta-data text-text-secondary">AI 辅助查房信息汇总，基于大模型的智能化院外随访及患者宣教系统搭建。</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-border-subtle rounded-xl overflow-hidden">
                <div className="bg-surface-soft p-6 border-b border-border-subtle">
                  <h3 className="font-card-title text-primary text-lg font-bold">模块三：临床数据资源的 AI 激活与挖掘</h3>
                  <p className="font-meta-data text-text-secondary mt-1 text-sm font-medium text-primary/60">目标：打通数据孤岛，提升临床科研的数据利用能力。</p>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-text-tertiary mt-1">check_circle</span>
                    <div>
                      <p className="font-body-main text-primary font-medium">医疗数据资产化管理与清洗</p>
                      <p className="font-meta-data text-text-secondary">脱敏合规流程，多模态数据（文本、影像、病理）的结构化标注规范。</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-text-tertiary mt-1">check_circle</span>
                    <div>
                      <p className="font-body-main text-primary font-medium">零代码/低代码平台科研实操</p>
                      <p className="font-meta-data text-text-secondary">使用主流自动化机器学习平台进行临床预测模型构建与验证。</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-border-subtle rounded-xl overflow-hidden">
                <div className="bg-surface-soft p-6 border-b border-border-subtle">
                  <h3 className="font-card-title text-primary text-lg font-bold">模块四：医工交叉项目的管理与沟通实务</h3>
                  <p className="font-meta-data text-text-secondary mt-1 text-sm font-medium text-primary/60">目标：打破行业壁垒，建立高效的跨学科团队协作机制。</p>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-text-tertiary mt-1">check_circle</span>
                    <div>
                      <p className="font-body-main text-primary font-medium">临床需求的产品化表达</p>
                      <p className="font-meta-data text-text-secondary">如何将临床痛点转化为清晰、可执行的技术需求文档（PRD）。</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-text-tertiary mt-1">check_circle</span>
                    <div>
                      <p className="font-body-main text-primary font-medium">AI 医疗产品评估与伦理审查</p>
                      <p className="font-meta-data text-text-secondary">模型鲁棒性、可解释性评估体系，医疗 AI 伦理及数据安全合规红线防范。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 培训方式 */}
        <section className="py-24 bg-surface-soft">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-section-title text-primary text-center text-4xl md:text-5xl font-bold tracking-tight mb-16">培训方式</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              <div className="bg-surface-canvas p-6 rounded-xl border border-border-subtle text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">40%</div>
                <p className="font-card-title text-text-secondary">理论讲授 (Lectures)</p>
                <p className="font-meta-data text-text-tertiary mt-2">核心知识体系构建</p>
              </div>
              <div className="bg-surface-canvas p-6 rounded-xl border border-border-subtle text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">35%</div>
                <p className="font-card-title text-text-secondary">实操演练 (Hands-on)</p>
                <p className="font-meta-data text-text-tertiary mt-2">工具使用与案例复盘</p>
              </div>
              <div className="bg-surface-canvas p-6 rounded-xl border border-border-subtle text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">25%</div>
                <p className="font-card-title text-text-secondary">互动研讨 (Discussion)</p>
                <p className="font-meta-data text-text-tertiary mt-2">院内真实痛点共创解决方案</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-canvas p-8 rounded-xl border border-border-subtle">
                <h3 className="font-card-title text-red-600 mb-6 flex items-center gap-2 font-bold">
                  <span className="material-symbols-outlined text-red-600">cancel</span>
                  我们「不提供」什么？
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-text-tertiary">close</span>
                    <span className="font-body-main text-text-secondary">不教授枯燥复杂的底层代码编写（如从零手写神经网络）。</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-text-tertiary">close</span>
                    <span className="font-body-main text-text-secondary">不推销特定厂商的软硬件黑盒产品。</span>
                  </li>
                </ul>
              </div>
              <div className="bg-surface-canvas p-8 rounded-xl border border-border-subtle">
                <h3 className="font-card-title mb-6 flex items-center gap-2 text-secondary font-bold">
                  <span className="material-symbols-outlined">check_circle</span>
                  我们「提供」什么？
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-text-tertiary">check</span>
                    <span className="font-body-main text-text-secondary">提供开箱即用的 AI 工具使用指南与 Prompt 模板库。</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-text-tertiary">check</span>
                    <span className="font-body-main text-text-secondary">传授「如何成为懂 AI 的医生 / 懂医疗的 PM」的思维模型框架。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 讲师团队 */}
        <section className="py-24 bg-surface-canvas">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-section-title text-primary text-center text-4xl md:text-5xl font-bold tracking-tight mb-16">讲师团队</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border-subtle rounded-xl p-6 text-center hover:shadow-sm transition-all duration-300">
                <div className="w-24 h-24 rounded-full bg-surface-soft mx-auto mb-4 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-text-tertiary">person</span>
                </div>
                <h3 className="font-card-title text-primary font-bold text-lg">资深医疗产品经理</h3>
                <p className="font-meta-data text-text-secondary">Medical PM</p>
              </div>
              <div className="border border-border-subtle rounded-xl p-6 text-center hover:shadow-sm transition-all duration-300">
                <div className="w-24 h-24 rounded-full bg-surface-soft mx-auto mb-4 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-text-tertiary">code</span>
                </div>
                <h3 className="font-card-title text-primary font-bold text-lg">医学数据工程师</h3>
                <p className="font-meta-data text-text-secondary">Data Engineer</p>
              </div>
              <div className="border border-border-subtle rounded-xl p-6 text-center hover:shadow-sm transition-all duration-300">
                <div className="w-24 h-24 rounded-full bg-surface-soft mx-auto mb-4 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-text-tertiary">medical_services</span>
                </div>
                <h3 className="font-card-title text-primary font-bold text-lg">临床应用转型顾问</h3>
                <p className="font-meta-data text-text-secondary">Medical Consultant</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: 往期反馈 */}
        <section className="py-24 bg-surface-soft">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-section-title text-primary text-center text-4xl md:text-5xl font-bold tracking-tight mb-16">往期反馈</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <blockquote className="bg-surface-canvas p-8 rounded-xl border border-border-subtle relative">
                <span className="material-symbols-outlined text-text-tertiary absolute top-6 right-6 opacity-20 text-4xl">format_quote</span>
                <p className="font-body-main text-text-secondary italic mb-6 text-lg leading-relaxed">"以前觉得大模型是计算机专家的事，上完课发现，只要掌握正确的提问技巧，它能帮我省下一半整理病历的时间。"</p>
                <footer className="font-meta-data font-medium text-primary">— 某三甲医院 主治医师</footer>
              </blockquote>
              <blockquote className="bg-surface-canvas p-8 rounded-xl border border-border-subtle relative">
                <span className="material-symbols-outlined text-text-tertiary absolute top-6 right-6 opacity-20 text-4xl">format_quote</span>
                <p className="font-body-main text-text-secondary italic mb-6 text-lg leading-relaxed">"最实用的部分是医工交叉沟通那节课，终于知道怎么跟开发团队提需求，他们才听得懂了。"</p>
                <footer className="font-meta-data font-medium text-primary">— 某医疗科技公司 临床需求分析师</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Dark CTA Section */}
        <section className="py-24 bg-surface-canvas">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="rounded-[2rem] p-12 md:p-20 text-center flex flex-col items-center relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src="/抽象图块7.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
              <h2 className="font-hero-title text-4xl md:text-5xl text-on-primary mb-6 font-bold tracking-tight">
                开启您的医疗 AI 进化之旅
              </h2>
              <p className="font-body-main text-lg text-white mb-10 max-w-2xl mx-auto">
                为您的团队提供转型传统医疗工作流所需的实战技能，释放医疗 AI 的真正潜力。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-on-primary text-primary font-nav-item px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all">
                  联系我们定制培训方案
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all">
                  联系 EvoLeap 销售
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

export default CodeMedicalTraining

import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function BeijingStomatology() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-surface-canvas text-on-surface font-body-main">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-6 pt-20 pb-24">
        {/* Hero Section */}
        <section className="py-xl flex flex-col items-start gap-md">
          <p className="font-meta-data text-meta-data text-text-tertiary uppercase tracking-widest">2026 年 4 月 27 日</p>
          <h1 className="font-hero-title text-hero-title text-text-primary max-w-4xl">
            EvoLeap AI 助力北京口腔医院突破 3D 数据标注瓶颈
          </h1>
        </section>

        {/* Full-Width Image */}
        <section className="mb-xl">
          <div className="w-full aspect-video rounded-xl overflow-hidden bg-zinc-100">
            <img alt="口腔医院新闻照片" className="w-full h-full object-cover" src="/口腔医院新闻照片.png"/>
          </div>
        </section>

        {/* Metadata Bar */}
        <section className="py-lg border-y border-border-subtle grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
          <div className="flex flex-col gap-xs">
            <span className="text-text-tertiary font-meta-data text-[12px] uppercase">机构规模</span>
            <span className="font-card-title text-[16px]">大型三甲专科</span>
          </div>
          <div className="flex flex-col gap-xs">
            <span className="text-text-tertiary font-meta-data text-[12px] uppercase">市场</span>
            <span className="font-card-title text-[16px]">中国华北</span>
          </div>
          <div className="flex flex-col gap-xs">
            <span className="text-text-tertiary font-meta-data text-[12px] uppercase">行业</span>
            <span className="font-card-title text-[16px]">口腔医疗</span>
          </div>
          <div className="flex flex-col gap-xs">
            <span className="text-text-tertiary font-meta-data text-[12px] uppercase">技术栈</span>
            <span className="font-card-title text-[16px]">EvoLeap AI Medical Agent OS 2.0</span>
          </div>
        </section>

        {/* Results Grid (2x2) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-md mb-xl">
          <div className="p-lg bg-surface-soft rounded-xl border border-border-subtle hover:shadow-sm transition-all duration-300">
            <div className="text-[56px] font-bold leading-tight tracking-tighter text-text-primary mb-2">12 万+</div>
            <p className="font-body-main text-text-secondary text-[16px]">年处理 3D 数据量</p>
          </div>
          <div className="p-lg bg-surface-soft rounded-xl border border-border-subtle hover:shadow-sm transition-all duration-300">
            <div className="text-[56px] font-bold leading-tight tracking-tighter text-text-primary mb-2">800 亿+</div>
            <p className="font-body-main text-text-secondary text-[16px]">生产环境 AI Token 消耗</p>
          </div>
          <div className="p-lg bg-surface-soft rounded-xl border border-border-subtle hover:shadow-sm transition-all duration-300">
            <div className="text-[56px] font-bold leading-tight tracking-tighter text-text-primary mb-2">60%</div>
            <p className="font-body-main text-text-secondary text-[16px]">单病例标注耗时降低</p>
          </div>
          <div className="p-lg bg-surface-soft rounded-xl border border-border-subtle hover:shadow-sm transition-all duration-300">
            <div className="text-[56px] font-bold leading-tight tracking-tighter text-text-primary mb-2">3 倍</div>
            <p className="font-body-main text-text-secondary text-[16px]">修复体设计效率提升</p>
          </div>
        </section>

        {/* Narrative: 业务背景与挑战 */}
        <section className="max-w-3xl mb-xl">
          <h2 className="font-section-title text-section-title text-text-primary mb-md">业务背景与挑战</h2>
          <div className="font-body-main text-body-main text-text-secondary space-y-md">
            <p>作为国内顶尖的口腔专科医院，北京口腔医院在数字化转型的道路上一直处于领先地位。然而，随着临床病例数量的激增，3D 数字化正畸与修复领域面临着前所未有的数据处理压力。传统的标注流程高度依赖于具有丰富临床经验的高级医师，这种模式在规模化扩展中遇到了巨大瓶颈。</p>
            <ul className="list-disc pl-5 space-y-sm">
              <li>标注一致性难以维持：不同医师在处理复杂边缘轮廓时存在主观偏差，影响最终修复体的精密程度。</li>
              <li>人力成本极高：高年资医师每天需花费 3-4 小时进行基础数据处理，而非临床决策。</li>
              <li>反馈周期长：传统 3D 模型处理流程从扫描到设计方案出炉通常需要 3-5 个工作日，无法满足患者日益增长的即刻修复需求。</li>
            </ul>
          </div>
        </section>

        {/* Large Pull Quote */}
        <section className="py-xl px-lg bg-surface-soft rounded-xl mb-xl text-center">
          <blockquote className="font-hero-title text-[36px] italic leading-tight text-text-primary max-w-4xl mx-auto">
            "3D 数据的获取已经不再是问题，真正的挑战在于如何将这些海量原始数据转化为临床可用的结构化智能资产。EvoLeap AI 的介入让我们看到了口腔医疗自动化的未来形态。"
          </blockquote>
        </section>

        {/* Narrative: 技术方案 */}
        <section className="mb-xl">
          <h2 className="font-section-title text-section-title text-text-primary mb-md">技术方案: AI 原生口腔智能体</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <div className="flex flex-col gap-sm">
              <h3 className="font-card-title text-card-title text-text-primary">DentalSeg Agent</h3>
              <p className="font-body-main text-body-main text-text-secondary">基于 EvoLeap 自研的多模态大模型，DentalSeg 能够实现亚毫米级的牙齿解剖结构自动分割。它不仅能识别单颗牙齿，还能精准定位牙龈沟、神经管等关键解剖标志，准确率比肩 10 年资历专科医师。</p>
            </div>
            <div className="flex flex-col gap-sm">
              <h3 className="font-card-title text-card-title text-text-primary">RestoreAgent</h3>
              <p className="font-body-main text-body-main text-text-secondary">专注于修复体自动设计建议。通过分析数十万例临床成功案例，RestoreAgent 能在数秒内生成多个候选修复方案，并自动标注出咬合干扰点，为医师提供决策参考而非简单的工具支持。</p>
            </div>
          </div>
        </section>

        {/* Narrative: 实施路径 & 核心成果 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-xl">
          <div>
            <h2 className="font-section-title text-section-title text-text-primary mb-md">实施路径</h2>
            <ol className="space-y-md">
              <li className="flex gap-md border-b border-border-subtle pb-md">
                <span className="font-bold text-text-primary">01.</span>
                <p className="font-body-main text-body-main text-text-secondary">私有化部署 EvoLeap AI Medical Agent OS，确保医疗数据在院内闭环处理，符合合规要求。</p>
              </li>
              <li className="flex gap-md border-b border-border-subtle pb-md">
                <span className="font-bold text-text-primary">02.</span>
                <p className="font-body-main text-body-main text-text-secondary">工作流集成：将 AI 智能体嵌入现有 PACS 与 CAD 系统，实现一键式数据标注与同步。</p>
              </li>
              <li className="flex gap-md border-b border-border-subtle pb-md">
                <span className="font-bold text-text-primary">03.</span>
                <p className="font-body-main text-body-main text-text-secondary">持续进化：利用院内临床标注反馈闭环，对模型进行每周迭代，提升针对特殊复杂病例的理解力。</p>
              </li>
            </ol>
          </div>
          <div>
            <h2 className="font-section-title text-section-title text-text-primary mb-md">核心成果</h2>
            <ul className="space-y-md">
              <li className="flex gap-md border-b border-border-subtle pb-md">
                <p className="font-body-main text-body-main text-text-secondary">通过自动化工作流，北京口腔医院实现了 3D 数据处理能力的线性增长，不再受限于人工标注速度。</p>
              </li>
              <li className="flex gap-md border-b border-border-subtle pb-md">
                <p className="font-body-main text-body-main text-text-secondary">正畸方案设计的中标率提升 22%，患者对即刻可视化方案的满意度显著增强。</p>
              </li>
              <li className="flex gap-md border-b border-border-subtle pb-md">
                <p className="font-body-main text-body-main text-text-secondary">每年节省医师重复性劳动工时约 1.5 万小时，使医师能够专注于更具挑战性的临床科研任务。</p>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-xl px-lg rounded-xl mb-xl text-center flex flex-col items-center gap-md relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/抽象.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <h2 className="font-section-title text-section-title text-white">开启您的医疗 AI 进化之旅</h2>
            <p className="font-body-main text-body-main text-white/90 max-w-2xl">
              加入数百家顶尖医疗机构，利用 EvoLeap AI 的智能体技术重塑您的临床工作流。
            </p>
            <button className="bg-white text-primary px-lg py-sm rounded-full font-nav-item text-nav-item hover:shadow-lg transition-all">
              试用 EvoLeap
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default BeijingStomatology

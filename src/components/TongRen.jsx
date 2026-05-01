import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function TongRen() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-surface-canvas text-on-surface font-body-main">
      <Navbar />

      <main className="pt-20 pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Hero Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-text-secondary font-meta-data text-meta-data"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-border-subtle"></span>
              <span className="text-text-secondary font-meta-data text-meta-data">2026年5月27日</span>
            </div>
            <h1 className="font-hero-title text-hero-title text-text-primary max-w-4xl mb-12">
              EvoLeap AI 助力北京同仁医院突破眼科影像标注瓶颈，推动智能诊疗专家 IP 打造
            </h1>
            {/* Hero Image */}
            <div className="w-full aspect-[21/9] rounded-xl overflow-hidden bg-zinc-100 border border-border-subtle group">
              <img
                className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700"
                alt="眼科医院新闻照片"
                src="/眼科医院新闻照片.png"
              />
            </div>
          </header>

          {/* Institutional Profiles */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border-subtle mb-16">
            <div>
              <p className="text-text-tertiary font-meta-data text-meta-data uppercase tracking-wider mb-2">机构规模</p>
              <p className="font-card-title text-card-title text-text-primary">三甲专科医院</p>
            </div>
            <div>
              <p className="text-text-tertiary font-meta-data text-meta-data uppercase tracking-wider mb-2">覆盖市场</p>
              <p className="font-card-title text-card-title text-text-primary">华北 / 全国范围</p>
            </div>
            <div>
              <p className="text-text-tertiary font-meta-data text-meta-data uppercase tracking-wider mb-2">所属行业</p>
              <p className="font-card-title text-card-title text-text-primary">眼科学 / 医疗保健</p>
            </div>
            <div>
              <p className="text-text-tertiary font-meta-data text-meta-data uppercase tracking-wider mb-2">核心技术</p>
              <p className="font-card-title text-card-title text-text-primary">Agent OS 2.0</p>
            </div>
          </section>

          {/* Large Metrics Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-xl">
            <div className="p-8 rounded-xl flex flex-col justify-between bg-surface-soft">
              <p className="text-text-tertiary font-meta-data text-meta-data mb-4">已标注数据集</p>
              <h3 className="font-hero-title text-hero-title text-text-primary">250,000+</h3>
              <p className="text-text-secondary mt-2">已处理的临床影像</p>
            </div>
            <div className="p-8 rounded-xl flex flex-col justify-between bg-surface-soft">
              <p className="text-text-tertiary font-meta-data text-meta-data mb-4">专家知识存量</p>
              <h3 className="font-hero-title text-hero-title text-text-primary">1200B+</h3>
              <p className="text-text-secondary mt-2">训练所使用的 Token 总数</p>
            </div>
            <div className="p-8 rounded-xl flex flex-col justify-between bg-surface-soft">
              <p className="text-text-tertiary font-meta-data text-meta-data mb-4">时间成本缩减</p>
              <h3 className="font-hero-title text-hero-title text-text-primary">65%</h3>
              <p className="text-text-secondary mt-2">工作流延迟降低</p>
            </div>
            <div className="p-8 rounded-xl flex flex-col justify-between bg-surface-soft">
              <p className="text-text-tertiary font-meta-data text-meta-data mb-4">Kappa 一致性系数</p>
              <h3 className="font-hero-title text-hero-title text-text-primary">0.89</h3>
              <p className="text-text-secondary mt-2">跨专家标注一致性</p>
            </div>
            <div className="p-8 rounded-xl flex flex-col justify-between bg-surface-soft">
              <p className="text-text-tertiary font-meta-data text-meta-data mb-4">效率提升倍数</p>
              <h3 className="font-hero-title text-hero-title text-text-primary">4x</h3>
              <p className="text-text-secondary mt-2">标准产出能力提升</p>
            </div>
            <div className="p-8 rounded-xl flex flex-col justify-between bg-surface-soft">
              <p className="text-text-tertiary font-meta-data text-meta-data mb-4">AI 响应速度</p>
              <h3 className="font-hero-title text-hero-title text-text-primary">15m</h3>
              <p className="text-text-secondary mt-2">单次会诊周转时间</p>
            </div>
          </section>

          {/* Main Narrative Column */}
          <div className="max-w-[720px] mx-auto">
            <section className="mb-xl">
              <h2 className="font-section-title text-section-title text-text-primary mb-8">面临的挑战</h2>
              <div className="space-y-6 text-text-secondary font-body-main text-body-main">
                <div className="flex gap-4">
                  <span className="text-text-primary font-bold">01.</span>
                  <p><span className="text-text-primary font-semibold">数据爆炸:</span> 每日产生海量 OCT 与眼底影像，传统纯人工审核标注模式已无法承载临床研究的高速增长。</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-primary font-bold">02.</span>
                  <p><span className="text-text-primary font-semibold">极高准入门槛:</span> 眼科影像判读极度依赖专家经验，普通标注员准确率低，初级医生培训周期过长。</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-primary font-bold">03.</span>
                  <p><span className="text-text-primary font-semibold">一致性难题:</span> 不同年资医生在细微病灶判定上存在主观差异，导致标注金标准难以统一。</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-primary font-bold">04.</span>
                  <p><span className="text-text-primary font-semibold">知识流失:</span> 顶尖专家的隐性诊疗思路难以结构化沉淀，导致医院宝贵的"专家 IP"资产无法规模化复制。</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-primary font-bold">05.</span>
                  <p><span className="text-text-primary font-semibold">远程医疗延迟:</span> 基层医院转诊影像上传后，等待总部专家反馈的时间长，延误了最佳干预时机。</p>
                </div>
              </div>
            </section>

            {/* Quote Block */}
            <blockquote className="my-xl p-10 bg-surface-soft border-l-4 border-primary rounded-r-xl italic">
              <p className="font-body-main text-xl text-text-primary leading-relaxed mb-6">
                "AI 不仅仅是一个工具，它是我们医学专家智慧的数字孪生。通过 EvoLeap 的 Agent 系统，我们将几十年的临床经验转化为可交互、可生长的数字资产，让优质医疗资源实现了真正的普惠。"
              </p>
              <cite className="not-italic block">
                <span className="font-bold text-text-primary">魏文斌</span>
                <span className="text-text-tertiary font-meta-data text-meta-data block">北京同仁医院 副院长 / 眼科首席专家</span>
              </cite>
            </blockquote>

            <section className="mb-xl">
              <h2 className="font-section-title text-section-title text-text-primary mb-8">技术解决方案</h2>
              <div className="space-y-6">
                <div className="group border border-border-subtle p-8 rounded-xl hover:bg-zinc-50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-zinc-900" style={{fontVariationSettings: '"FILL" 1'}}>visibility</span>
                    <h3 className="font-card-title text-card-title text-text-primary">EyeSeg 智能体</h3>
                  </div>
                  <p className="text-text-secondary font-body-main">高精度影像自动分割 Agent，针对 20+ 种细微病灶实现像素级识别，准确率突破 98.5%，极大降低了基础标注的工作量。</p>
                </div>
                <div className="group border border-border-subtle p-8 rounded-xl hover:bg-zinc-50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/1a8ff1b0e6ae83467713ffc14ff163d4.jpg" alt="专家 IP 数字孪生" className="w-6 h-6 object-cover rounded" />
                    <h3 className="font-card-title text-card-title text-text-primary">专家 IP 数字孪生</h3>
                  </div>
                  <p className="text-text-secondary font-body-main">通过多轮对话与临床案例学习，构建顶级专家的"数字分身"，模拟其判读逻辑提供辅助建议，确保标注标准的高一致性。</p>
                </div>
                <div className="group border border-border-subtle p-8 rounded-xl hover:bg-zinc-50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-zinc-900" style={{fontVariationSettings: '"FILL" 1'}}>support_agent</span>
                    <h3 className="font-card-title text-card-title text-text-primary">ConsultAgent 咨询助手</h3>
                  </div>
                  <p className="text-text-secondary font-body-main">面向基层连接的咨询智能体，能够自动生成结构化影像报告初稿，协助医生快速决策，响应时间从数小时缩短至分钟级。</p>
                </div>
              </div>
            </section>

            <section className="mb-xl">
              <h2 className="font-section-title text-section-title text-text-primary mb-8">实施路径</h2>
              <div className="relative pl-8 border-l border-zinc-200 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-900 border-4 border-white"></div>
                  <h4 className="font-card-title text-card-title text-text-primary mb-2">第一阶段：知识注入与训练</h4>
                  <p className="text-text-secondary">整理同仁医院 20 年来的脱敏典型病例，利用 Agent OS 的强化学习机制进行领域知识对齐。</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-200 border-4 border-white"></div>
                  <h4 className="font-card-title text-card-title text-text-primary mb-2">第二阶段：人机协作闭环</h4>
                  <p className="text-text-secondary">建立"AI 预标注 - 专家复核 - 误差回传"的闭环，让 AI 在纠错中持续进化，逼近专家判读水平。</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-200 border-4 border-white"></div>
                  <h4 className="font-card-title text-card-title text-text-primary mb-2">第三阶段：多中心规模化部署</h4>
                  <p className="text-text-secondary">将验证成熟的智能体能力下沉至同仁医联体基层单位，实现跨地域的医疗质量同质化。</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-section-title text-section-title text-text-primary mb-8">管理经验与启示</h2>
              <ul className="space-y-4 text-text-secondary font-body-main">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-zinc-400 mt-1">check_circle</span>
                  <span>数字化转型的核心不是替换人，而是通过 Agent 释放高价值劳动力的创造力。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-zinc-400 mt-1">check_circle</span>
                  <span>医疗数据的质量远比数量重要，结构化的专家逻辑是 AI 时代的"石油精炼厂"。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-zinc-400 mt-1">check_circle</span>
                  <span>坚持医学伦理优先，确保 AI 的每一个决策都有迹可循、可追溯、可审计。</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default TongRen

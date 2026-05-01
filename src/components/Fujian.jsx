import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Fujian() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-surface-canvas text-on-surface font-body-main">
      <Navbar />

      <main className="pt-20 pb-24">
        {/* Hero Section */}
        <header className="max-w-[1200px] mx-auto px-8 mb-24">
          <h1 className="font-hero-title text-hero-title text-primary mb-8 leading-[1.1] tracking-tight text-left max-w-4xl">
            EvoLeap AI 助力福建医科大学附属第一医院打造自动医疗报告解读平台
          </h1>
          <p className="font-body-main text-body-main text-text-secondary max-w-2xl mb-8 text-xl text-left">
            多模态 AI 驱动的智能报告处理系统，通过深度理解医疗报告语义，消弭医患沟通鸿沟，加速临床数据资产向科研成果的转化。
          </p>
          <div className="flex items-center gap-4 text-text-tertiary font-meta-data text-meta-data justify-start">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> 2026 年 4 月 27 日</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> 阅读需 8 分钟</span>
          </div>
        </header>

        {/* Key Stats Grid */}
        <section className="max-w-[1200px] mx-auto px-8 mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 border-t border-border-subtle pt-12">
            <div className="bg-surface-soft p-lg rounded-xl border border-border-subtle">
              <div className="text-4xl font-bold text-primary mb-2">450 万+</div>
              <div className="font-meta-data text-meta-data text-text-secondary">年处理医疗报告量</div>
            </div>
            <div className="bg-surface-soft p-lg rounded-xl border border-border-subtle">
              <div className="text-4xl font-bold text-primary mb-2">1500 亿+</div>
              <div className="font-meta-data text-meta-data text-text-secondary">生产环境 AI Token 消耗</div>
            </div>
            <div className="bg-surface-soft p-lg rounded-xl border border-border-subtle">
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <div className="font-meta-data text-meta-data text-text-secondary">报告自动解读覆盖率</div>
            </div>
            <div className="bg-surface-soft p-lg rounded-xl border border-border-subtle">
              <div className="text-4xl font-bold text-primary mb-2">87%</div>
              <div className="font-meta-data text-meta-data text-text-secondary">患者理解度提升</div>
            </div>
            <div className="bg-surface-soft p-lg rounded-xl border border-border-subtle">
              <div className="text-4xl font-bold text-primary mb-2">58%</div>
              <div className="font-meta-data text-meta-data text-text-secondary">医生报告沟通时间降低</div>
            </div>
            <div className="bg-surface-soft p-lg rounded-xl border border-border-subtle">
              <div className="text-4xl font-bold text-primary mb-2">30 秒</div>
              <div className="font-meta-data text-meta-data text-text-secondary">异常指标预警响应时间</div>
            </div>
            <div className="bg-surface-soft p-lg rounded-xl border border-border-subtle">
              <div className="text-4xl font-bold text-primary mb-2">6 倍</div>
              <div className="font-meta-data text-meta-data text-text-secondary">科研数据结构化提取效率</div>
            </div>
            <div className="bg-surface-soft p-lg rounded-xl border border-border-subtle">
              <div className="text-4xl font-bold text-primary mb-2">Top 10</div>
              <div className="font-meta-data text-meta-data text-text-secondary">全国智慧医院排名跃升</div>
            </div>
          </div>
        </section>

        {/* Business Challenges */}
        <section className="max-w-[800px] mx-auto px-6 mb-32">
          <h2 className="font-section-title text-section-title mb-12">业务背景与挑战</h2>
          <div className="space-y-12">
            <div className="flex gap-8 group">
              <span className="text-text-tertiary font-bold text-xl opacity-40 group-hover:opacity-100 transition-opacity">01</span>
              <div>
                <h3 className="font-card-title text-card-title mb-2">指数级增长的报告压力</h3>
                <p className="font-body-main text-body-main text-text-secondary">随着体检和临床需求激增，每年产生超过 450 万份非结构化 PDF 或纸质报告，传统人工录入已达极限。</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <span className="text-text-tertiary font-bold text-xl opacity-40 group-hover:opacity-100 transition-opacity">02</span>
              <div>
                <h3 className="font-card-title text-card-title mb-2">患者端的理解困境</h3>
                <p className="font-body-main text-body-main text-text-secondary">医学术语门槛极高，患者面对"阴性/阳性"或生僻指标往往产生过度焦虑，引发无效咨询。</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <span className="text-text-tertiary font-bold text-xl opacity-40 group-hover:opacity-100 transition-opacity">03</span>
              <div>
                <h3 className="font-card-title text-card-title mb-2">繁重的重复沟通负担</h3>
                <p className="font-body-main text-body-main text-text-secondary">医生平均每天耗费 35% 的工作时间用于向患者解释常规化验单指标，严重挤压了复杂病例的研究精力。</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <span className="text-text-tertiary font-bold text-xl opacity-40 group-hover:opacity-100 transition-opacity">04</span>
              <div>
                <h3 className="font-card-title text-card-title mb-2">危急值响应的毫秒级博弈</h3>
                <p className="font-body-main text-body-main text-text-secondary">传统预警依赖人工复核，响应延迟在 4 小时左右，对于急性重症患者存在极高安全隐患。</p>
              </div>
            </div>
            <div className="flex gap-8 group">
              <span className="text-text-tertiary font-bold text-xl opacity-40 group-hover:opacity-100 transition-opacity">05</span>
              <div>
                <h3 className="font-card-title text-card-title mb-2">沉睡的数据金矿</h3>
                <p className="font-body-main text-body-main text-text-secondary">千万级历史报告以图片或 PDF 形式存储，无法被科研系统检索，导致临床宝贵数据无法有效转化为科研成果。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Block */}
        <section className="w-full bg-surface-soft py-24 mb-32">
          <div className="max-w-[800px] mx-auto px-6">
            <blockquote className="relative">
              <span className="material-symbols-outlined absolute -top-12 -left-8 text-neutral-300 text-6xl opacity-30">format_quote</span>
              <p className="text-2xl md:text-3xl font-bold leading-relaxed text-primary mb-8">
                "AI 的本质不是取代医生，而是将医生从重复性、低价值的信息传递工作中解放出来。EvoLeap 打造的解读平台让医疗数据开始'说话'，让每一份报告都成为医患之间信任的桥梁。"
              </p>
              <cite className="not-italic">
                <div className="font-bold text-primary">康德智</div>
                <div className="text-text-secondary text-sm">福建医科大学附属第一医院 院长</div>
              </cite>
            </blockquote>
          </div>
        </section>

        {/* Technical Solution */}
        <section className="max-w-[800px] mx-auto px-6 mb-32">
          <h2 className="font-section-title text-section-title mb-4">技术方案：智能体协作架构</h2>
          <p className="font-body-main text-body-main text-text-secondary mb-12">基于 EvoLeap 多模态大模型，我们部署了四个核心智能体（Agents）协同工作的处理集群。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-border-subtle hover:shadow-sm transition-all duration-300">
              <h4 className="font-bold text-xl mb-3">ReportParse</h4>
              <p className="font-body-main text-body-main text-text-secondary">多模态 OCR 与结构化引擎。支持手写单、各类异构 PDF 报告的精准识别，自动提取 1000+ 临床核心指标。</p>
            </div>
            <div className="p-8 border border-border-subtle hover:shadow-sm transition-all duration-300">
              <h4 className="font-bold text-xl mb-3">ReportExplain</h4>
              <p className="font-body-main text-body-main text-text-secondary">语义转换引擎。将复杂的临床术语实时"翻译"为通俗易懂的自然语言，提供包含饮食建议与随访提醒的个性化说明。</p>
            </div>
            <div className="p-8 border border-border-subtle hover:shadow-sm transition-all duration-300">
              <h4 className="font-bold text-xl mb-3">AlertAgent</h4>
              <p className="font-body-main text-body-main text-text-secondary">实时风险监控智能体。结合全院临床知识库，秒级锁定危急值或异常趋势，并精准推送到相关主治医生的移动端。</p>
            </div>
            <div className="p-8 border border-border-subtle hover:shadow-sm transition-all duration-300">
              <h4 className="font-bold text-xl mb-3">ResearchMine</h4>
              <p className="font-body-main text-body-main text-text-secondary">科研挖掘智能体。对历史存量数据进行自动化分类与知识图谱构建，极大降低临床回顾性研究的数据准备周期。</p>
            </div>
          </div>
        </section>

        {/* Implementation Path */}
        <section className="max-w-[800px] mx-auto px-6 mb-32">
          <h2 className="font-section-title text-section-title mb-12">实施路径</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-bold">1</div>
              <div>
                <h4 className="font-bold mb-2">深度集成与隐私隔离</h4>
                <p className="text-text-secondary font-body-main">在医院私有云环境完成模型部署，与 HIS 和 LIS 系统实现无缝 API 对接，确保患者敏感数据不出外网。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-bold">2</div>
              <div>
                <h4 className="font-bold mb-2">多阶段临床评估</h4>
                <p className="text-text-secondary font-body-main">通过 6 个月的双盲测试，对比 AI 解读与高级专家解读的一致性，确保临床严谨度达到 99.8% 以上。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-bold">3</div>
              <div>
                <h4 className="font-bold mb-2">动态知识库注入</h4>
                <p className="text-text-secondary font-body-main">引入医院自有的临床指南与诊疗规范，通过 RAG 技术实时更新 AI 的专业知识储备。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-bold">4</div>
              <div>
                <h4 className="font-bold mb-2">无缝用户旅程覆盖</h4>
                <p className="text-text-secondary font-body-main">在公众号、自助机、App 等多个端同步上线"一键解读"功能，覆盖患者全流程就医场景。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Outcomes */}
        <section className="max-w-[800px] mx-auto px-6 mb-32">
          <div className="p-12 bg-neutral-900 text-white rounded-xl">
            <h2 className="font-section-title text-section-title mb-8 text-white">核心成果</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-400">check_circle</span>
                <span>月均 AI 解读请求峰值：12,000 次/小时</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-400">check_circle</span>
                <span>医疗纠纷投诉率降低：22%</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-400">check_circle</span>
                <span>临床报告审核效率提升：340%</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-400">check_circle</span>
                <span>科研论文产出周期缩短：4.5 个月</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-400">check_circle</span>
                <span>危急值漏判率降至 0</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-400">check_circle</span>
                <span>节省全院人力成本估值：3,500 万元/年</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Leadership Lessons */}
        <section className="max-w-[800px] mx-auto px-6 mb-32">
          <h2 className="font-section-title text-section-title mb-12">Leadership Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h5 className="font-bold mb-3 border-l-4 border-primary pl-4">从"辅助"到"内核"的转变</h5>
              <p className="text-text-secondary text-sm">不仅仅是增加一个工具，而是将 AI 深度融入临床作业流，重构信息分发机制。</p>
            </div>
            <div>
              <h5 className="font-bold mb-3 border-l-4 border-primary pl-4">数据的安全性优于功能性</h5>
              <p className="text-text-secondary text-sm">在医疗行业，模型幻觉的控制与数据脱敏是所有创新展开的先决条件。</p>
            </div>
            <div>
              <h5 className="font-bold mb-3 border-l-4 border-primary pl-4">以患者价值为终极标尺</h5>
              <p className="text-text-secondary text-sm">技术指标固然重要，但患者的满意度与焦虑度下降是衡量平台成功的核心 KPI。</p>
            </div>
            <div>
              <h5 className="font-bold mb-3 border-l-4 border-primary pl-4">开放协同的创新生态</h5>
              <p className="text-text-secondary text-sm">与技术方深度的"联合开发"而非简单的"买卖"，是实现场景深度适配的关键。</p>
            </div>
          </div>
        </section>

        {/* Institutional Profile */}
        <section className="max-w-[800px] mx-auto px-6 mb-32">
          <div className="border border-border-subtle">
            <div className="px-8 py-4 bg-surface-soft font-bold text-sm border-b border-border-subtle uppercase tracking-wider">机构档案</div>
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="border-b border-border-subtle">
                  <th className="px-8 py-4 font-semibold text-text-secondary w-1/3">机构规模</th>
                  <td className="px-8 py-4">三级甲等综合性医院 / 3,000+ 床位</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <th className="px-8 py-4 font-semibold text-text-secondary">地理市场</th>
                  <td className="px-8 py-4">中国 福建</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <th className="px-8 py-4 font-semibold text-text-secondary">核心产业</th>
                  <td className="px-8 py-4">临床医疗 / 医学教育 / 科学研究</td>
                </tr>
                <tr>
                  <th className="px-8 py-4 font-semibold text-text-secondary">技术栈</th>
                  <td className="px-8 py-4">EvoLeap LLM / Private Cloud / Hybrid Agent Architecture</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-xl px-lg rounded-xl mb-xl text-center flex flex-col items-center gap-md max-w-[1200px] mx-auto relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/抽象3.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <h2 className="font-section-title text-section-title text-white">开启您的医疗 AI 进化之旅</h2>
            <p className="font-body-main text-body-main text-white/90 max-w-2xl">
              加入数百家顶尖医疗机构，利用 EvoLeap AI 的智能技术重塑您的临床工作流。
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

export default Fujian

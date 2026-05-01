import { useState, useEffect } from 'react'

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    {
      src: '/门诊大夫办公新闻照片.png',
      alt: '门诊大夫办公',
      title: 'AI 智能体赋能门诊诊疗流程',
      subtitle: '门诊医师工作效率提升 340%',
      date: '2026 年 4 月 15 日',
    },
    {
      src: '/中医大夫抓药新闻照片.png',
      alt: '中医大夫抓药',
      title: '中医名医经验数字化传承',
      subtitle: '隐性临床思维转化为 AI 智能体资产',
      date: '2026 年 3 月 28 日',
    },
    {
      src: '/眼科医院新闻照片.png',
      alt: '眼科医院',
      title: '同仁眼科 EyeSeg 智能体落地实践',
      subtitle: '高精度影像分割突破 98.5% 准确率',
      date: '2026 年 2 月 10 日',
    },
    {
      src: '/儿童.png',
      alt: '儿童心理',
      title: '儿少心理精神规模化诊疗新范式',
      subtitle: 'AI 驱动的情感支持与长周期干预模型',
      date: '2026 年 1 月 20 日',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="aspect-[16/9] w-full rounded-xl relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <p className="text-sm font-meta-data text-white/70 mb-2">{image.date}</p>
            <h2 className="text-xl md:text-2xl font-bold mb-1">{image.title}</h2>
            <p className="text-sm md:text-base text-white/80">{image.subtitle}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function EngineModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={onClose}>
      <div className="relative z-50 w-full max-w-4xl bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border-subtle overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-start p-6 border-b border-border-subtle">
          <div>
            <h1 className="font-section-title text-section-title text-primary tracking-tight">Base + RaaS 双引擎模式</h1>
            <p className="font-body-main text-body-main text-text-secondary mt-2 max-w-2xl">底座收费 + RaaS 分成，确保任何科室合作都在第一个月内实现正向 ROI</p>
          </div>
          <button onClick={onClose} className="material-symbols-outlined text-text-tertiary hover:text-text-primary cursor-pointer">close</button>
        </div>
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-soft/30">
          <div className="bg-white border border-border-subtle rounded-lg p-6 hover:shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">dns</span>
              </div>
              <div>
                <h2 className="font-card-title text-card-title text-primary">基座费用</h2>
                <p className="font-meta-data text-meta-data text-text-secondary">免费</p>
              </div>
            </div>
            <p className="font-body-main text-body-main text-text-primary mb-4 pb-4 border-b border-border-subtle">硬件部署 + AI 系统 + 基础运营服务</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>Medical Agent OS 2.0系统</li>
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>服务器硬件上门部署</li>
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>IP试运营服务</li>
            </ul>
          </div>
          <div className="bg-white border border-border-subtle rounded-lg p-6 hover:shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <h2 className="font-card-title text-card-title text-primary">RaaS 分成</h2>
                <p className="font-meta-data text-meta-data text-text-secondary">8%-28% 增量</p>
              </div>
            </div>
            <p className="font-body-main text-body-main text-text-primary mb-4 pb-4 border-b border-border-subtle relative z-10">基于 AI 带来的超额增量收益分成</p>
            <ul className="space-y-2 relative z-10">
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>仅对 AI 带来的增量部分分成</li>
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>存量业务 100% 保护</li>
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>阶梯式分成机制</li>
            </ul>
          </div>
        </div>
        <div className="p-6 border-t border-border-subtle bg-white flex justify-end">
          <button className="bg-primary text-white px-6 py-3 rounded-md font-nav-item text-nav-item hover:opacity-90 transition-opacity flex items-center gap-2">预约咨询 <span className="material-symbols-outlined text-[18px]">arrow_forward</span></button>
        </div>
      </div>
    </div>
  )
}

function SecurityModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={onClose}>
      <div className="relative z-50 w-full max-w-4xl bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border-subtle overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-start p-6 border-b border-border-subtle">
          <div>
            <h1 className="font-section-title text-section-title text-primary tracking-tight">三层堡垒架构</h1>
            <p className="font-body-main text-body-main text-text-secondary mt-2 max-w-2xl">国家级交付保障，确保数据安全与系统稳定</p>
          </div>
          <button onClick={onClose} className="material-symbols-outlined text-text-tertiary hover:text-text-primary cursor-pointer">close</button>
        </div>
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-surface-soft/30">
          <div className="bg-white border border-border-subtle rounded-lg p-6 hover:shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">shield</span>
              </div>
              <div>
                <h2 className="font-card-title text-card-title text-primary">第一层：数据安全</h2>
              </div>
            </div>
            <p className="font-body-main text-body-main text-text-primary mb-4 pb-4 border-b border-border-subtle">医疗数据本地化闭环管理</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>院内私有化部署</li>
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>数据不出院合规保障</li>
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>端到端加密传输</li>
            </ul>
          </div>
          <div className="bg-white border border-border-subtle rounded-lg p-6 hover:shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">security</span>
              </div>
              <div>
                <h2 className="font-card-title text-card-title text-primary">第二层：系统安全</h2>
              </div>
            </div>
            <p className="font-body-main text-body-main text-text-primary mb-4 pb-4 border-b border-border-subtle">多重防护与实时监控</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>AI 模型合规审计</li>
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>访问权限精细控制</li>
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>异常行为实时告警</li>
            </ul>
          </div>
          <div className="bg-white border border-border-subtle rounded-lg p-6 hover:shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <h2 className="font-card-title text-card-title text-primary">第三层：运维安全</h2>
              </div>
            </div>
            <p className="font-body-main text-body-main text-text-primary mb-4 pb-4 border-b border-border-subtle">7×24 小时国家级运维保障</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>SLA 99.9% 可用性承诺</li>
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>自动故障转移与恢复</li>
              <li className="flex items-start gap-2 font-body-main text-body-main text-text-secondary"><span className="material-symbols-outlined text-[18px] text-text-tertiary mt-0.5">check_circle</span>定期安全渗透测试</li>
            </ul>
          </div>
        </div>
        <div className="p-6 border-t border-border-subtle bg-white flex justify-end">
          <button className="bg-primary text-white px-6 py-3 rounded-md font-nav-item text-nav-item hover:opacity-90 transition-opacity flex items-center gap-2">预约咨询 <span className="material-symbols-outlined text-[18px]">arrow_forward</span></button>
        </div>
      </div>
    </div>
  )
}

function HeroSection() {
  const [isEngineModalOpen, setIsEngineModalOpen] = useState(false)
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false)

  return (
    <>
      <section className="max-w-[1200px] mx-auto px-6 py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
          <div className="lg:col-span-2 space-y-md">
            <ImageCarousel />
            <div className="pt-sm border-t border-border-subtle">
              <h2 className="font-section-title text-section-title text-text-primary">
                EvoLeap News
              </h2>
              <p className="font-meta-data text-meta-data text-text-secondary mt-xs">
                2024年11月15日
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 flex flex-col gap-md">
            <div className="group cursor-pointer p-md border border-border-subtle rounded-xl hover:shadow-sm hover:-translate-y-1 transition-all duration-300" onClick={() => setIsSecurityModalOpen(true)}>
              <p className="font-meta-data text-meta-data text-text-secondary mb-xs">
                国家级交付保障
              </p>
              <h3 className="font-card-title text-card-title mb-sm">
                三层堡垒架构
              </h3>
              <div className="w-full h-32 rounded-lg overflow-hidden relative">
                <img
                  src="/三重盾.jpg"
                  alt="三层堡垒架构"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="group cursor-pointer p-md border border-border-subtle rounded-xl hover:shadow-sm hover:-translate-y-1 transition-all duration-300" onClick={() => setIsEngineModalOpen(true)}>
              <p className="font-meta-data text-meta-data text-text-secondary mb-xs">
                颠覆性商业模式
              </p>
              <h3 className="font-card-title text-card-title mb-sm">
                Base+RaaS
              </h3>
              <div className="w-full h-48 rounded-lg overflow-hidden relative">
                <img
                  src="/商业模式2.jpg"
                  alt="Base+RaaS"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SecurityModal isOpen={isSecurityModalOpen} onClose={() => setIsSecurityModalOpen(false)} />
      <EngineModal isOpen={isEngineModalOpen} onClose={() => setIsEngineModalOpen(false)} />
    </>
  )
}

export default HeroSection;

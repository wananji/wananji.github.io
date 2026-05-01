import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function TongRen() {
  const navigate = useNavigate()

  return (
    <div className="bg-surface-canvas font-body-main antialiased">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-32 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">合作案例</span>
                </div>
                <h1 className="font-hero-title text-hero-title max-w-2xl mb-6 text-primary leading-tight">
                  同仁眼科医院<br/>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">AI临床教学一体化平台</span>
                </h1>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  携手同仁眼科，打造国内领先的 AI 临床教学与诊疗一体化解决方案。通过深度学习与知识图谱技术，实现医疗经验的规模化复制。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                    了解详情
                  </button>
                  <button className="border border-border-subtle bg-white px-8 py-4 rounded-full font-semibold hover:bg-surface-soft transition-all">
                    观看演示
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-border-subtle">
                  <img 
                    className="w-full h-auto" 
                    alt="同仁眼科 AI 临床教学平台界面" 
                    src="/glasses.jpg" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-section-title text-section-title mb-4">项目概览</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                为同仁眼科量身打造的 AI 临床教学与辅助诊断系统，覆盖从知识沉淀到临床实践的全链路
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-surface-soft rounded-2xl border border-border-subtle">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-card-title font-card-title mb-3">临床教学培训</h3>
                <p className="text-text-secondary text-sm">
                  基于 AI 的个性化教学方案，缩短年轻医师培养周期，提升临床诊疗规范化水平。
                </p>
              </div>
              
              <div className="p-8 bg-surface-soft rounded-2xl border border-border-subtle">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-card-title font-card-title mb-3">智能辅助诊断</h3>
                <p className="text-text-secondary text-sm">
                  多模态医学影像 AI 分析，提供精准的病变识别与诊断建议，降低误诊漏诊率。
                </p>
              </div>
              
              <div className="p-8 bg-surface-soft rounded-2xl border border-border-subtle">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-card-title font-card-title mb-3">知识图谱构建</h3>
                <p className="text-text-secondary text-sm">
                  将顶尖眼科专家的隐性经验转化为可传承的数字化知识资产，实现名医经验的规模化复制。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-24 bg-surface-soft">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-section-title text-section-title text-center mb-16">核心成果</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-2xl text-center border border-border-subtle">
                <div className="text-4xl font-bold text-primary mb-2">92%</div>
                <div className="text-text-secondary text-sm">诊断准确率提升</div>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center border border-border-subtle">
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <div className="text-text-secondary text-sm">培训周期缩短</div>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center border border-border-subtle">
                <div className="text-4xl font-bold text-primary mb-2">3x</div>
                <div className="text-text-secondary text-sm">临床效率提升</div>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center border border-border-subtle">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-text-secondary text-sm">智能辅助支持</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-section-title text-section-title mb-6">实施路径</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">需求调研与知识萃取</h3>
                      <p className="text-text-secondary text-sm">深入临床一线，梳理眼科专家诊疗流程，萃取隐性临床经验。</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">AI 模型定制开发</h3>
                      <p className="text-text-secondary text-sm">基于眼科专病场景，训练专用 AI 诊断与教学模型。</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">系统集成与临床验证</h3>
                      <p className="text-text-secondary text-sm">部署至医院信息系统，进行多轮临床验证与迭代优化。</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">规模化推广与持续运营</h3>
                      <p className="text-text-secondary text-sm">形成标准化方案，向医联体及基层医疗机构推广。</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border-subtle">
                  <img 
                    className="w-full h-auto" 
                    alt="项目实施流程" 
                    src="/文件夹.jpg" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 bg-surface-soft">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <div className="text-5xl text-purple-300 mb-6">"</div>
            <blockquote className="text-xl text-text-primary leading-relaxed italic mb-8">
              EvoLeap 的 AI 平台真正理解了眼科临床的复杂性。它不仅是一个工具，更是我们培养年轻医师、传承名医经验的得力助手。
            </blockquote>
            <div>
              <div className="font-semibold text-primary">同仁眼科 主任医师</div>
              <div className="text-text-secondary text-sm">中华医学会眼科学分会常委</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-primary rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="font-hero-title text-4xl md:text-5xl mb-8 text-white">开启您的 AI 进化之旅</h2>
                <p className="text-zinc-300 text-lg mb-12 max-w-xl mx-auto">
                  了解更多医疗机构 AI 转型案例，获取定制化解决方案
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="bg-white text-primary px-10 py-5 rounded-full font-bold hover:bg-zinc-100 transition-all">
                    联系我们
                  </button>
                  <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all">
                    查看更多案例
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

export default TongRen

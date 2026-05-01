import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import NewsSection from './components/NewsSection'
import SolutionsSection from './components/SolutionsSection'
import SearchSection from './components/SearchSection'
import FooterCTA from './components/FooterCTA'
import Footer from './components/Footer'
import MedicalAgentOS from './components/MedicalAgentOS'
import TongRen from './components/TongRen'
import BeijingStomatology from './components/BeijingStomatology'
import CodeTraining from './components/CodeTraining'
import CodeOperation from './components/CodeOperation'
import CodeMedicalTraining from './components/CodeMedicalTraining'
import Fujian from './components/Fujian'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="bg-surface-canvas text-on-surface font-body-main selection:bg-secondary-container">
          <Navbar />
          <main>
            <HeroSection />
            <NewsSection />
            <SolutionsSection />
            <SearchSection />
            <FooterCTA />
          </main>
          <Footer />
        </div>
      } />
      <Route path="/medical-agent-os" element={<MedicalAgentOS />} />
      <Route path="/tongren" element={<TongRen />} />
      <Route path="/beijing-stomatology" element={<BeijingStomatology />} />
      <Route path="/code-training" element={<CodeTraining />} />
      <Route path="/code-operation" element={<CodeOperation />} />
      <Route path="/code-medical-training" element={<CodeMedicalTraining />} />
      <Route path="/fujian" element={<Fujian />} />
    </Routes>
  )
}

export default App

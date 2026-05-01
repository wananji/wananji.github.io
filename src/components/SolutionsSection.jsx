import { useNavigate } from 'react-router-dom'

function SolutionsSection() {
  const navigate = useNavigate()
  
  const solutions = [
    {
      title: "Medical Agent OS 2.0",
      description: "自动化的企业级智能助理，重塑工作流程。",
      image: "/image2.png",
      imageLabel: "Medical Agent OS 2.0",
      link: "/medical-agent-os"
    },
    {
      title: "名医数字化IP运营",
      description: "从人力密集到数字资产的跃迁",
      image: "/image4.jpg",
      imageLabel: "名医IP运营",
      link: "/code-operation"
    },
    {
      title: "医疗机构数字化转型人员培训",
      description: "手把手教您解决转型难题",
      image: "/image1.png",
      imageLabel: "人员培训",
      link: "/code-medical-training"
    }
  ];

  const handleCardClick = (link) => {
    if (link) {
      navigate(link)
    }
  }

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-xl">
      <h2 className="font-section-title text-section-title mb-lg">解决方案</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {solutions.map((solution, index) => (
          <div 
            key={index} 
            className="group cursor-pointer"
            onClick={() => handleCardClick(solution.link)}
          >
            <div
              className="aspect-square w-full rounded-xl mb-md flex items-center justify-center overflow-hidden transition-transform group-hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${solution.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <span className="text-white font-bold text-2xl tracking-widest drop-shadow-lg">
                {solution.imageLabel}
              </span>
            </div>
            <h3 className="font-card-title text-card-title">{solution.title}</h3>
            <p className="font-body-main text-body-main text-text-secondary mt-xs">
              {solution.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SolutionsSection;

'use client';

import portfolioData from '../data/portfolio.json'

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((category, index) => (
            <div key={index} className="glass-effect p-6 card-hover">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
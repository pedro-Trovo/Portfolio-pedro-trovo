import ExperienceCard from '../components/ExperienceCard'
import { experiences } from '../data/experiences'

function ExperienciaProfissional() {
  return (
    <div className="experiences-list">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} experience={exp} />
      ))}
    </div>
  )
}

export default ExperienciaProfissional

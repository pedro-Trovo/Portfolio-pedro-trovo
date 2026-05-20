import ExperienceCard from '../components/ExperienceCard'
import { experiences } from '../data/experiences'

function Experiences() {
  return (
    <section className="page experiences">
      <h1>Experiências</h1>
      <div className="experiences-list">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  )
}

export default Experiences

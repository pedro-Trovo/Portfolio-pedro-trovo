import EducationCard from '../components/EducationCard'
import { education } from '../data/education'

function ExperienciaAcademica() {
  return (
    <div className="experiences-list">
      {education.map((item) => (
        <EducationCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ExperienciaAcademica

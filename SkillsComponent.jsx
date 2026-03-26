function SkillsComponent({skill,experience}){
  return(
    <div className="class-skillsComponent">
        <p className="class-text-size4">{skill}</p>
        <p className="class-text-size1 class-white-grey">{experience}</p>
    </div>
  )
}
function ProjectComponent(
  {picture,extension,title,language,project,code,projectLink,codeLink}){
  return(
    <div className="class-projectComponent">
     <picture>

        <source 
          media="(max-width:40rem)"
          srcSet={`assets/images/${picture}-small.${extension}`}
          className="class-average-img"
       />
        
       

      <img
         src={`assets/images/${picture}-large.${extension}`}
         alt="Foto"
         className="class-average-img"
       />

  </picture>
        <p className="class-text-size3">{title}</p>
        <p className="class-text-size20 class-white-grey prog-language ">{language}</p>

        <div className="project-code">
            <a 
    href={projectLink}
    target="_blank"
    rel="noopener noreferrer"
    className="classUnderline-under"
  >
    {project}
  </a>

  <a 
    href={codeLink}
    target="_blank"
    rel="noopener noreferrer"
    className="classUnderline-under"
  >
    {code}
  </a>
        </div>
    </div>
  )
}
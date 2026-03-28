function ProjectsSection({onClick}){
return(
        <section className="class-projectsSection">
         <div className="class-projectsComponents">
           <div className="projects-header">
            <p className="class-text-size5">Projects</p>
             <button className="classUnderline-under btn-send class-text-size11"
             onClick={onClick}>
            CONTACT ME
            </button>
            {/*<p className="class-text-size11 classUnderline-under"></p>*/}
            </div>  
           <div className="projects-part">
              <div className="projects">
               {/*<ProjectComponent picture="thumbnail-project-1" extension="webp" title="DESIGN PORTFOLIO"
                language="HTML  CSS"
                project="VIEW PROJECT" code="VIEW CODE" />*/}
               <ProjectComponent picture="mortgage-calculator" extension="png" title="MORTGAGE CALCULATOR"
                language="HTML  CSS  JAVASCRIPT"
                project="VIEW PROJECT" code="VIEW CODE" 
                projectLink="https://andreschernin.github.io/mortgage-repayment-calculator/view/MyView2.html"
                 codeLink="https://github.com/AndresChernin/mortgage-repayment-calculator" />
               
              </div>
              <div className="projects">
                <ProjectComponent picture="age-calculator" extension="png" title="AGE CALCULATOR" 
               language="HTML  CSS  JAVASCRIPT  REACT" 
                project="VIEW PROJECT" code="VIEW CODE"
                projectLink="https://andreschernin.github.io/Age-Calculator-App/View3.html" 
                codeLink="https://github.com/AndresChernin/Age-Calculator-App"/>
               <ProjectComponent picture="developer-project" extension="jpg"
               title="DEVELOPER PORTFOLIO" language="HTML  CSS  JAVASCRIPT REACT"
                project="VIEW PROJECT" code="VIEW CODE" 
                projectLink="https://andreschernin.github.io/Single-page-developer-portfolio/View2.html"
                codeLink="https://github.com/AndresChernin/Single-page-developer-portfolio"/>
              {/* <ProjectComponent picture="thumbnail-project-5" extension="webp"
               title="MEMORY GAME" 
               language="HTML CSS JAVASCRIPT"
                project="VIEW PROJECT" code="VIEW CODE" /> 
               <ProjectComponent picture="thumbnail-project-6" extension="webp"
               title="ART GALLERY SHOWCASE" 
               language="HTML CSS JAVASCRIPT" 
                project="VIEW PROJECT" code="VIEW CODE"/> */}      
              </div>
          </div> 
         </div>
        </section>
    )
}
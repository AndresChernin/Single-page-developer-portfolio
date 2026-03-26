function IntroductionSection2({onClick}){
    return(
        <div className="class-introductionSection">
              <img
          
         src="assets/images/pattern-rings.svg" alt="GitHub"
         className="pattern-rings"
        
       />
       { /*<img
          
         src="assets/images/pattern-circle.svg" alt="GitHub"
         className="pattern-circle"
        
       />*/}
            <IntroductionComponent3 onClick={onClick} />
         
        </div>
    )
}
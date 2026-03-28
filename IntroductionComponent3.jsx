function IntroductionComponent3({onClick}) {
  return (
    <section className="introduction-component">
        {/*
       <img
          
         src="assets/images/pattern-rings.svg" alt="GitHub"
         className="pattern-rings"
        
       />*/}
        {/*1st row*/}
        <div className="name-part">andreschernin</div>
        <div></div>
        <div className="links-part">
          <a 
            href="https://github.com/AndresChernin"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img 
                src="assets/images/icon-github.svg" alt="GitHub" 
                className="class-small-img"
          />
          </a>
           <a 
            href="https://www.frontendmentor.io/profile/AndresChernin"
            target="_blank"
            rel="noopener noreferrer"
          >
                <img src="assets/images/icon-frontend-mentor.svg" alt="Frontend Mentor"
                 className="class-small-img"/>
           </a>

                <img src="assets/images/icon-linkedin.svg" alt="LinkedIn"
                className="class-small-img disabled-icon" />
                <img src="assets/images/icon-twitter.svg" alt="Twitter"
                className="class-small-img disabled-icon" />
        </div>
        {/*2nd row*/}
        <div></div>
       <div></div>
       {/*<div className="foto-part">
         <img src="assets/images/image-profile-desktop.webp" alt="Foto"  
         className="class-big-img"/>
       </div>*/}
       <div className="foto-part">
  <picture>

    <source 
      media="(max-width:30rem)"
      srcSet="assets/images/my-foto-mobile-1.png"
    />

    <source 
      media="(max-width:50rem)"
      srcSet="assets/images/my-foto-tablet-1.png"
    />

    <img
      src="assets/images/my-foto-desktop1.png"
      alt="Foto"
      className="class-big-img"
    />

  </picture>
  <img
          
         src="assets/images/pattern-circle.svg" alt="GitHub"
         className="pattern-circle"
        
  />
</div>
        {/*3nd row*/}
       <div className="greeting-part">
        <p>Nice to meet you! I&apos;m <span className="classUnderline">Andres Chernin</span>.</p>
        <p className="introduction-part">Based in the Germany, 
         I&apos;m a front-end developer <br/>passionate about building 
         accessible web apps<br/> that users love. </p>
         {/*<p className="contact-part classUnderline-under"
          onClick={onClick}>CONTACT ME</p>*/}
         <button
             type="button" 
             className="classUnderline-under btn-send contact-part"
             onClick={onClick}>
            CONTACT ME
            </button>
       </div>
       <div></div>
       <div></div>

        {/*4rd row*/}
        <div >
         
         
        </div>
       
       <div>

       </div>
       <div>

       </div>
        {/*5th row*/}
        <div></div>
        <div></div>
        <div></div>
      

    </section>
  );
}
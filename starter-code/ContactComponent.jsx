function ContactComponent(){
    return (
    <section className="class-contactComponent">
        {/*1 row*/ }
          <div className="grid-contact-part">
           <p className="class-text-size5">Contact</p>
          </div>
          <div className="grid-name-part">
            <p className="class-text-size10 class-no-padding-no-margin">NAME
            </p>
            
            </div>
          <div className="grid-email-part border-bottom">
            <p className="class-text-size10 class-no-padding-no-margin ">EMAIL</p>
            
            </div>
         {/*2 row*/ }
         <div className="grid-my-wisch-part">
           <p className="class-text-size1 class-white-grey">I would love to hear about your project
            and how I could help. Please fill in the form, and I'll get back to you
            as soon as possible.
           </p>
          </div>
         <div></div>
         <div className="grid-message-part ">
            <p className="class-text-size10 class-no-padding-no-margin">MESSAGE</p>
            
            </div>
            {/*3 row*/}
          <div></div>
          <div className="empty-cell-1"></div>
          <div className="empty-cell-2"></div>
          {/*4 row*/}
          <div className="empty-cell-3"></div>
          <div className="empty-cell-4"></div>
          <div className="empty-cell-5"></div>
          <div className="empty-cell-6"></div>
         
          
          <div className="grid-send-message"> 
            <p className="class-text-size11 classUnderline-under">SEND MESSAGE</p>
          </div>
          {/*5 row*/}
          <div className="grid-adam-part">adamkeyes</div>
          <div>

          </div>
          <div></div>
          <div></div>
         
          
          <div className="grid-links-part">
           <img src="assets/images/icon-github.svg" alt="GitHub" 
                className="class-small-img"/>
                <img src="assets/images/icon-frontend-mentor.svg" alt="Frontend Mentor"
                 className="class-small-img" />
                
                <img src="assets/images/icon-linkedin.svg" alt="LinkedIn"
                className="class-small-img" />
                <img src="assets/images/icon-twitter.svg" alt="Twitter"
                className="class-small-img" />
        </div>
          

   </section>
    );
}
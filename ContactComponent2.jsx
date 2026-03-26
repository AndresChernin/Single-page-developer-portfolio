function ContactComponent2({values, errors,onChange, onClick}){
    return (
    <section className="class-contactComponent">
        {/*1 row*/ }
          <div className="grid-contact-part">
           <p className="class-text-size5">Contact</p>
          </div>
          <div className="grid-name-part">
            <p className="class-text-size10 class-no-padding-no-margin grid-name">NAME
            </p>
            <input
              type="text"
              placeholder="Enter your name"
              className="input-name"
              value={values.name}
              onChange={onChange("name")}
            />
           
             
              <p className="name-controll">{errors.name}</p>
            
            </div>
           
          <div className="grid-email-part">
            
            <p className="class-text-size10 class-no-padding-no-margin grid-email ">EMAIL</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="input-name"
              value={values.email}
              onChange={onChange("email")}
            />
            <p className="name-controll">{errors.email}</p>
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
            
            <p className="class-text-size10 class-no-padding-no-margin grid-message">MESSAGE</p>
            <input
              type="text"
              placeholder="Enter your message"
              className="input-name"
              value={values.message}
              onChange={onChange("message")}
            />
             <p className="name-controll">{errors.message}</p>
            </div>
            {/*3 row*/}
          <div></div>
          <div ></div>
          <div ></div>
          {/*4 row*/}
          <div className="empty-cell-3"></div>
          <div className="empty-cell-4"></div>
          <div className="empty-cell-5"></div>
          <div className="empty-cell-6"></div>
         
          
          <div className="grid-send-message"> 
            <button className="classUnderline-under btn-send class-text-size11"
            onClick={onClick}>
            SEND MESSAGE
            </button>
          </div>
          {/*5 row*/}
          <div className="grid-adam-part">andreschernin</div>
          <div>

          </div>
          <div></div>
          <div></div>
         
          
          <div className="grid-links-part">
            <a 
            href="https://github.com/AndresChernin"
            target="_blank"
            rel="noopener noreferrer"
            >
                <img src="assets/images/icon-github.svg" alt="GitHub" 
                className="class-small-img"/>
           </a>
            <a 
            href="https://www.frontendmentor.io/profile/AndresChernin"
            target="_blank"
            rel="noopener noreferrer"
          >
                <img src="assets/images/icon-frontend-mentor.svg" alt="Frontend Mentor"
                 className="class-small-img" />
            </a>    
                <img src="assets/images/icon-linkedin.svg" alt="LinkedIn"
                className="class-small-img disabled-icon" />
                <img src="assets/images/icon-twitter.svg" alt="Twitter"
                className="class-small-img disabled-icon" />
        </div>
          

   </section>
    );
}
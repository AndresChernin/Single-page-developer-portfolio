    function ContactSection({values,errors,inputFunction,buttonFunction}){
    return(
        <section className="class-contactSection">
           
            <ContactComponent2 values={values} errors={errors} 
            onChange={inputFunction} onClick={buttonFunction}/>
           
        </section>
    );
}

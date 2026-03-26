class InputValidator{
    static validateAll(values){
        const errors={name:"",email:"",message:""};
        errors.name=InputValidator.validateName(values.name ||"");
        errors.email=InputValidator.validateEmail(values.email||"");
        errors.message=InputValidator.validateMessage(values.message||"");
        return errors;
    }
    static validateName(name) {
        if (!name.trim()) {
        return "Name is required";
    }

    if (name.trim().length < 2) {
        return "Name is too short";
    }

    if (!/^[a-zA-ZäöüÄÖÜß\s]+$/.test(name)) {
        return "Name contains invalid characters";
    }

    return "";
    }
    static validateEmail(email) {
        if (!email.trim()) {
            return "Email is required";
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {
            return "Invalid email format";
        }

        return "";
    }
    static validateMessage(message) {
        if (!message.trim()) {
            return "Message is required";
        }

        if (message.trim().length < 10) {
            return "Message is too short";
        }

        return "";
    }

}
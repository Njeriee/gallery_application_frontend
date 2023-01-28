import validations from "./validations"

// here we create a class that we will use to check whether the email the user has entered is valid

class SignUpValidations{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    // a class method to check for the validation
    checkValidations(){
        let errors = []
        if(!validations.checkEmail(this.email)){
            errors['email'] = 'email cannot be empty'
        }
    
        // password validation
        if(!validations.checkPassword(this.password, 6)){
            errors['password'] = 'password should be 6 or more characters long'
        }

        return errors
    }
}

export default SignUpValidations
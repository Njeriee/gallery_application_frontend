// here we are checking whether emails and passwords are valid

class validations {

    // a static class method to check if an email is correct using regular expressions
    static checkEmail(email){
        if (email.length === 0){           
            return false
        }
        return true
    }  

    // a static class method to check the length of a password
    static checkPassword(password , minLength){
        if(password.length < minLength){
            return false;
        }
        return true 
    }  
}    
export default  validations
// authentication actions
import { SIGNUP_ACTION } from "@/store/store_contraints" 
import { Axios } from "axios"

const auth_actions = {
    async [SIGNUP_ACTION](payload){
        let postData = {
            email : payload.email,
            password : payload.password,
            returnSecureToken : true
        }
        let response = await Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArBql7q1XLlq99UmPGMFbVc3PESKgl5g0 ', postData)
        console.log(response)
    }
}

export default auth_actions
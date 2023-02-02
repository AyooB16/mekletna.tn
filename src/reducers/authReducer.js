
import Users from "../json/users.json";
const  reducer = (state={connectedUser:""}, action)=>{
    switch (action.type){
        case "SIGN_IN" :
            return {
                connectedUser: Users.find(element => {
                    if (element.username === action.payload.username && element.password === action.payload.password) {
                      return true;
                    }})
             }
        case "SIGN_OUT" : return {connectedUser:""}
    
        default :
        return state     
    }
}
export default reducer
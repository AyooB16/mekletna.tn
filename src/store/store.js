import {createStore} from 'redux'
import authreducer from "../reducers/authReducer"

 const store = createStore(authreducer ,    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 export default store
import {getFridges} from "../services/fridgeService"
import { getUser } from "../services/userService";
const updateFridge = () => ({type: 'updateFridge'});
const updateUserData = () => ({type: 'updateUserData'});

const reducer = (state, action) => {
    if(action.type ===  'updateFridge'){
        return state ;       
    };
    if(action.type === 'updateUserData'){
        return state;
    }
}
export default reducer;
export {updateFridge, updateUserData};
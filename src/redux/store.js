import { configureStore , combineReducers} from "@reduxjs/toolkit";
import groupSlice from "./Slices/GroupSlice.js"


const rootReducer = combineReducers({
    GROUP: groupSlice
})




 const AppStore = configureStore({
    reducer: rootReducer
 })


 export default AppStore
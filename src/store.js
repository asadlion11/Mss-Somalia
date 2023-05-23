import { configureStore } from "@reduxjs/toolkit"; 
import modalReducer from "./feutures/modal/modalSlice";
import competitorReducer from "./feutures/competitors/competitorSlice"; 
export const store = configureStore({
    reducer: {
        modal:modalReducer,
        competitor:competitorReducer,
        
    }
})
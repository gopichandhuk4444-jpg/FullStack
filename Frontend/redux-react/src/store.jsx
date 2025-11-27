import { configureStore } from "@reduxjs/toolkit";
import recipereducer from "./recipeSlice";


const store = configureStore({
   reducer: {
      recipes: recipereducer, 
   },
});

export default store
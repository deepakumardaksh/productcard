import {configureStore} from "@reduxjs/toolkit"
import CardSlices from "./slices/CardSlices";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";

const store=configureStore({
    reducer:{
        cart:CardSlices,
        category: CategorySlice,
        search: SearchSlice,
    },
});
export default store;
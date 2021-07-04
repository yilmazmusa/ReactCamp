//rootReducer tüm  state leri topladığım yer.Tek bi yerde toplayım sonra uygulamaya onu ekleyim

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({

    cart :cartReducer, //cartReducer ı cart değişkenine attık(tüm state leri bi yerde topladım ve ismimi kendime göre değiştirdim)

})

export default rootReducer;
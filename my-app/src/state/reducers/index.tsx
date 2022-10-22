import { combineReducers } from "redux";
import reducerGames from "./reducer"
import reducerAnime from "./reducerAnime"
import reducerGot from "./reducerGot";


const reducers = combineReducers({
    videoGames: reducerGames,
    animeArray: reducerAnime,
    gotReducers: reducerGot

})

export default reducers

export type RootState = ReturnType<typeof reducers>
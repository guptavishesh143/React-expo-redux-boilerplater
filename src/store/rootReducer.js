
//reducer & action 
import { loginReducer } from './reducers'


//root reducer
export const rootReducer = {
    reducer: {
        login: loginReducer.reducer,
    },
}
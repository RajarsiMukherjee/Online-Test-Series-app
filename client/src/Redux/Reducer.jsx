import { EXAMNAME , EXAMLEVEL } from "./Action";


const initState = {
    examName : "",
    examLevel : ""
}

export const reducer = (store = initState , {type , payload}) => {
    console.log("stoe" , store)
    switch(type){
        case EXAMNAME:
            return {...store, examName: payload}

        case EXAMLEVEL:
            return {...store, examLevel: payload}

        default:
            return store
    }
}
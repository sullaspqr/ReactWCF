import React, {useReducer} from "react";

const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {count: state.count+1, showText: state.showText}
        case "toggleShowtext":
            return {count: state.count, showText: !state.showText}
        default:
            return state
    
    }
};
const ReducerTutorial = () => {
    const [state, dispatch] = useReducer(reducer, 
        {count: 0, showText: true})
    return (
        <div>
            <h1>{state.count}</h1>
            <button
            onClick={() =>{
                dispatch({type: "INCREMENT"});
                dispatch({type: "toggleShowtext"});
            }}
            >Kattints rám!</button>
        {state.showText && <p>Ez egy szöveg! </p>}  
        </div>
    );
};

export default ReducerTutorial;
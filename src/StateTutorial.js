import React, {useState} from "react";

const StateTutorial = () => {
    const [counter,setCounter] = useState(1);
    const [inputValue,setInputValue]=useState("valami");
    const increment = () => {
        setCounter(counter+1);
    }
    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };
 return <div>{counter}
 <button onClick={increment}>Növelés</button>
 <input placeholder="valami szöveg" onChange={onChange} />
 {inputValue}
 </div>;
};
export default StateTutorial;
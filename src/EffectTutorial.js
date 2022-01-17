import React, {useEffect, useState} from "react";
import axios from "axios";
import skoda from "./skoda105S.jpg";

function EffectTutorial() {
    const [data, setData] = useState("");
    const [data2, setData2] = useState("");
    const [data3, setData3] = useState("");
    const [data4, setData4] = useState("");
    const [count, setCount] = useState(1);
   
    useEffect(() => {
        axios.get('http://localhost:5000/Autok')
        .then((response)=>{
            console.log("API meghívódott!");
            console.log(response.data);
            setData(response.data[0].Id);
            setData2(response.data[0].Szoveg);
            setData3("<img src=localhost/backend"+response.data[1].Linkkep+">");
            setData4(response.data[0].Ar);
    });
   },  []);

    return (
      <div>
        <h1>ID: {data}</h1>
        <h1>Szöveg: {data2}</h1>
        <h1>Linkkép: {data3}</h1>
        <h1><img src= {skoda} width="300px" alt="hello" /></h1>
        <h1>Ár: {data4}</h1>
        <h1>{count}</h1>
        <button
        onClick={()=>{
            setCount(count +1);
        }}
        >Kattints ide!</button>
      </div>
    );
  };

export default EffectTutorial;
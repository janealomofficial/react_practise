import react, { useState } from "react";
const Class1State = () =>{
    const [count, setCount]= useState(0);
    const [step, setStep] = useState(1);

    return(
        <div>
            <h2>Counter</h2>
            <input type="number" value={count} placeholder="Set Count" />
            <br /><br />
            <button onClick={()=> setCount(count + step)}>+</button>
            <button onClick={()=> setCount(count - step)}>-</button>
        </div>
    )
};

export default Class1State;
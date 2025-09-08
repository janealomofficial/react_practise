import React from "react";
const Class1 = () =>{
    const name = "Jane Alom";
    const isLoggedIn = true;
    const items = ["React", "Javascript", "CSS"];

return(
    <div>
        <h2>Wlcome, {name}</h2>
        <p>{isLoggedIn ? "Logged In": "Please Log In"}</p>

        <ul>
            {items.map((item, index)=>(
                <li key={index}>{item}</li>
            ))

            }
        </ul>
    </div>
)

};

export default Class1;
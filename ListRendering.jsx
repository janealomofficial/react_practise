import React, { useState } from 'react';

const ListRendering = () =>
{
const [task, setTask] = useState([{id: 1, title: "Learn React"},{id: 2, title: "Build Project"}]);

const addTask = () =>
{
const newTask = {id: Date.now(), }
};

const removeTask = id =>
{
setTask(task.filter(task => task.id !== id))
};

return (

<div>
<button onClick={addTask}>Add task</button>

<ul>
{task.map(task =>(

<li key={task.id}>
{task.title}
<button onClick={()=>removeTask(task.id)}>Delete</button>
</li>

))}
</ul>
</div>

);
};

export default ListRendering;
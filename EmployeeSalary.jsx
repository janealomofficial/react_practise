import React, { useEffect, useState } from 'react';

const EmployeeSalary = () =>
{
const [employee, setEmployee] = useState(null);
const [incrementPercent, setIncrementPercent] = useState('');
const [updatedSalary, setUpdateSalary] = useState(null);

useEffect(()=>
{
const fetchedEmployee = {
id: 1,
name: "John Smith",
designation: "Senior Developer",
currentSalary: 50200
};

setEmployee(fetchedEmployee);
setUpdateSalary(fetchedEmployee.currentSalary);
},[]);

useEffect(()=>
{
if(employee)
{
const percent = parseFloat(incrementPercent);

if(!isNaN(percent) && percent > 0)
{
const increment = (employee.currentSalary * percent) / 100;
setUpdateSalary(employee.currentSalary + increment);
}

else
{
setUpdateSalary(employee.currentSalary)
}
}
}, [incrementPercent, employee]);

return (

<div style={{maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc'}}>

<h2>Employees Info </h2>

{employee ? (

<div>
<p><strong>Name:</strong>{employee.name}</p>
<p><strong>
Designation:</strong>{employee.designation}</p>
<p><strong>Current
Salary:</strong>{employee.currentSalary}</p>


<input

type="number"
placeholder={incrementPercent}
onChange={(e)=>setIncrementPercent(e.target.value)}
style={{padding: '5px', marginTop: '10px', width: '100%'}} />

<h4 style ={{marginTop: '20px' }}>
Updated Salary ${updatedSalary?.toFixed(2)}
</h4>
</div>




): (<p>Loading employee data...</p>)}


</div>

);




};

export default EmployeeSalary;
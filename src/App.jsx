
// JSON to JSX | Importance of Structuring Data 
// Dynamic From

import React, { useState } from 'react'

// json data
const formField = {
    "name":{
        "type":"text",
        "label":"What is your Name",
        "placeholder":"John Deo"
    },
    "email":{
        "type":"email",
        "label":"What is your Email",
        "placeholder":"John@gmail.com"
    },
    "phone":{
        "type":"tel",
        "label":"What is your Phone",
        "placeholder":"+01406...."
    },
    
    "password":{
        "type":"password",
        "label":"What is your password",
        "placeholder":"******"
    },
    
}

// step no-1 : transform the object as your need
const transformObj = (obj) =>{
    return Object.keys(obj).reduce((acc, currKey)=> {
        // console.log('accumulator',acc, currKey); // name , email,phone, password
        acc[currKey] = {
            ...obj[currKey], 
            value:'',
            
        }
    return acc
    }, {})

}

const mapObjToArray = (obj) =>{
    return Object.keys(obj).map((objKey)=> ({name: objKey, ...obj[objKey]} ))
   
}


const App= () => {
    const [formState, setFormState] = useState(transformObj(formField))
    const formData = mapObjToArray(formState);


     const changeHandler = (event) =>{
        setFormState({
            ...formState,
             [event.target.name]: {
                ...formState[event.target.name], 
                value: event.target.value,
             }
            })
     }
    

     const handleSubmit =(event)=>{
        event.preventDefault();
        const values = Object.keys(formState).reduce((acc, curKey)=>{
              acc[curKey] = formState[curKey].value
            return acc
        }, {})
      //  console.log(values); // {password:"", phone:"", email:"", name:""}
     } 



  return (
    <>
       <h1>Dynamic Form</h1>
       <form onSubmit={handleSubmit}>
          {
            formData.map((item, index)=>(
            <div key={index}>
              <label>{item.label}</label>
             <input 
               type={item.type}
               name={item.name}
               placeholder={item.placeholder}
               value={item.value} 
               onChange={changeHandler} />
            </div>
            ))}
             <div>
                <button>submit</button>
             </div>
       </form>
    </>
  )
}

export default App
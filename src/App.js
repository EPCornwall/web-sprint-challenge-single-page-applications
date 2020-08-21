import React, {useState} from "react";
import {Route} from 'react-router-dom';
import * as Yup from "yup";

import Form from './Form';
import Home from './Home';
import formSchema from './formSchema'

const initialFormValue={
name:'',
size: '',
toppings: [],
instructions: ''
}


const App = () => {
const [form, setForm] = useState(initialFormValue)
  

  const checkBoxChange = (name, isChecked) => {
    setForm({
      ...form,
      [name]: isChecked
    })
  }

  const [errors, setErrors] = useState({
    name:'',
  });

  const handleChange = (e) =>{
    Yup
    .reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    })
    .catch(err => {
      setErrors({
        ...errors,
        [e.target.name]: err.errors[0]
      });
    });

  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
  e.persist();
  };


  return (
   <div>
      
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Form form={form}
        checkBoxChange={checkBoxChange}
        handleChange={handleChange}
        errors={errors} />
      </Route>

   </div> 
  );
};
export default App;

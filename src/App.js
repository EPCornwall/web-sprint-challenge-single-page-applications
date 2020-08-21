import React, {useState, useEffect} from "react";
import {Route} from 'react-router-dom';
import * as Yup from "yup";
import axios from 'axios';

import Form from './Form';
import Home from './Home';
import formSchema from './formSchema'

const initialFormValue={
name:'',
size: '',
toppings: {
  pepperoni: false,
  olives: false,
  onions: false,
  peppers: false,
},
instructions: ''
}


const App = () => {
const [form, setForm] = useState(initialFormValue)
const [orders, setOrders] = useState({})  
const [buttonDisabled, setButtonDisabled] = useState(true)

  const checkBoxChange = (name, isChecked) => {
    setForm({
      ...form,
      toppings: {
        ...form.toppings,
        [name]: isChecked
      }
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

  const handleSubmit = (e) =>{
    e.preventDefault()
    const newOrder ={
      name: form.name,
      size: form.size,
      toppings: Object.keys(form.toppings).filter(tp => form.toppings[tp]),
      instructions: form.instructions,
    }
    postNewOrder(newOrder)
    setForm(initialFormValue)
  }

  const postNewOrder = order =>{
    axios.post('http://localhost:3000/pizza', order)
    .then(res =>{
      setOrders([...orders, res.data])
      console.log(res.data);
    })
    .catch(err =>{
      debugger
    })
  }

  useEffect(() => {
    formSchema.isValid(form).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [form]);

  return (
   <div>
      
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Form form={form}
        checkBoxChange={checkBoxChange}
        handleChange={handleChange}
        errors={errors}
        handleSubmit={handleSubmit}
        buttonDisabled={buttonDisabled} />
      </Route>

   </div> 
  );
};
export default App;

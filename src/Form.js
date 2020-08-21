import React from 'react';
import {Link} from 'react-router-dom';



export default function Form(props){
    const {handleChange, form, handleSubmit, checkBoxChange, buttonDisabled, errors} = props

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkBoxChange(name, checked)
    }
    return(
        <div>
            <Link to="/" >Home</Link>

            <form>
            {/*name input-- validate 2 chars*/}
            <input
                    placeholder='Name'
                    name='name'
                    value={form.name}
                    onChange={(e)=>{handleChange(e)}}
                />

            {/*Dropdown for pizza size*/}
            <label>
                Select a size
                <select name='size' value={form.size} onChange={(e)=>{handleChange(e)}} >
                    <option value=''>- Select an option -</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </label>

            {/*Checklist of 4 toppings*/}
            <label> Pepperoni
                <input
                    type="checkbox"
                    name='pepperoni'
                    checked={form.toppings.pepperoni === true}
                    onChange={onCheckboxChange}
                />
            </label>
            <label> Olives
                <input
                    type="checkbox"
                    name='olives'
                    checked={form.toppings.olives === true}
                    onChange={onCheckboxChange}
                />
            </label>
            <label> Onions
                <input
                    type="checkbox"
                    name='onions'
                    checked={form.toppings.onions === true}
                    onChange={onCheckboxChange}
                />
            </label>
            <label> Peppers
                <input
                    type="checkbox"
                    name='peppers'
                    checked={form.toppings.peppers === true}
                    onChange={onCheckboxChange}
                />
            </label>

            {/*Input for special instructions*/}
            <input
                    placeholder='Special Instructions'
                    name='instructions'
                    value={form.instructions}
                    onChange={(e)=>{handleChange(e)}}
                />

            {/*Button to place order, submits form to database*/}
            <button disabled={buttonDisabled} onClick={handleSubmit}>Submit</button>
            </form>
            <div>{errors.name}</div>

        </div>
    )

}
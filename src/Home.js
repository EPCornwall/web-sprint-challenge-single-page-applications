import React from 'react';
import {Link} from 'react-router-dom'

export default function Home(props){

    return(
        <div className='homepage' >
            <h1>Lambda Eats</h1>
            <Link to="/pizza">Pizza?</Link>

        </div>
    )
}
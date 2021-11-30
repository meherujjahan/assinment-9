import React, { useEffect, useState } from 'react';
import AddCart from '../../adderCart/AddCart';
import Cart from '../../Cart/Cart';

import './Person.css';

     //---main js folder in components---//

const Person = () => {
    const [persons, setPersons] = useState([])
    const [minister, setMinister] = useState([])

    useEffect(()=> {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[])

    const handleAddToCart = person => {
           const newMinister = [...minister, person];
           setMinister(newMinister)
           console.log(newMinister)
    }
    return (
        <div className='main-container'>
            <div className = 'person-container'>
        {
            persons.map(person=><Cart 
                key ={person.key}
                handleAddToCart = {handleAddToCart}
                person={person}>                
                </Cart>)
        }
            </div>
           <div className ='single-container'>
               <AddCart 
               minister = {minister}> 
               name :{persons.name}
               </AddCart>
           </div>
            
        </div>
    );
};

export default Person;
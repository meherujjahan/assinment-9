import React from 'react';
import './addCart.css'
 //--Add selected prime minister in single cart--//

const AddCart = (props) => {
    const { minister } = props;
let totalSelary = 0;
for(const person of minister){
    totalSelary = totalSelary + person.selary;
}
let name = "";
for(const person of minister){
    name = name + person.name +  ",  ";
}
    return (
        <div >
            <h1>Added Minister : {props.minister.length} </h1>
               <h3>Total Selary :{totalSelary} </h3>
               <button>Show Detail</button>
               <br />
               <br />
               <b>{name}</b>

        </div>
    );
};

export default AddCart;
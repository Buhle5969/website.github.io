import React from 'react';
import h5 from '../images/h5.jpg';
import h6 from '../images/h6.jpg';
import h7 from '../images/h7.jpg';
import h8 from '../images/h8.jpg';
import h9 from '../images/h9.jpg';
import h10 from '../images/h10.jpg';

const items=[
    {id:1, name:'item1', price:'R100', images:h5},
    {id:2, name:'item2', price:'R150', images:h6},
    {id:3, name:'item3', price:'R200', images:h7},
    {id:4, name:'item4', price:'R250', images:h8},
    {id:5, name:'item5', price: 'R300', images:h9},
    {id:6, name:'item6', price:'R350', images:h10},
];

const Items = () => (
    <section className="items">
        <h2>Our Items</h2>
        <div className="items-grid">
         {items.map(item => (
           <div key={item.id} className="item">
            <img src={item.images} alt={item.name}/>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
           </div>  
          ))}
        </div>
        <button>View More Items</button>
    </section>
);

export default Items;
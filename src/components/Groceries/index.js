import React, { useEffect, useState } from "react";
import ListItem from "../ListItem";
import "./style.css";

export default function Groceries() {
    const [newGroceryItem, setNewGroceryItem] = useState({});
    const [addAnItem, setAddAnItem] = useState(false);
    let groceryList = JSON.parse(localStorage.getItem("groceryList")) || [];
    // let addAnItem = false;
    // console.log(addAnItem)

    useEffect(() => {
        
    }, [addAnItem]);

    const addGroceryItem = event => {
        event.preventDefault();

        if (addAnItem) {
            groceryList.push(newGroceryItem);
            JSON.stringify(localStorage.setItem("groceryList", groceryList));

            setAddAnItem(false);
        } else {
            setAddAnItem(true);
            console.log(addAnItem)
        }
    }

    const onNewItemChange = event => {
        setNewGroceryItem({
            itemName: event.target.value,
            needed: true
        })
        console.log(newGroceryItem)
    }

    // function onItemChange() {
        // delete or mark as needed if statement

    // }

    return (
        <div className="groceriesContainer">
            <ul>
                {groceryList.map(item => 
                    <ListItem id={groceryList.indexOf(item.itemName)} name={item.itemName} needed={item.needed} />
                )}
            </ul>
            
            {addAnItem ? 
            <form onSubmit={addGroceryItem}>
                <input type="text" placeholder="e.g. bananas" className="itemName" onChange={onNewItemChange}></input>
                <button className="addItemBtn">Add Item</button>
            </form> : <i id="addGroceryItem" onClick={addGroceryItem} className="fas fa-cart-plus fa-5x"></i>}
        </div>
    )
}
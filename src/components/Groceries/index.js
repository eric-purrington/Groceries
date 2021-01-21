import React, { useEffect, useState } from "react";
import ListItem from "../ListItem";
import "./style.css";

export default function Groceries() {
    const [newGroceryItem, setNewGroceryItem] = useState({});
    const [addAnItem, setAddAnItem] = useState(false);
    var groceryList;
    // let addAnItem = false;
    // console.log(addAnItem)

    if(JSON.parse(localStorage.getItem("groceryList"))) {
        groceryList = JSON.parse(localStorage.getItem("groceryList"));
    } else {
        groceryList = [];
    }
    useEffect(() => {
        
    }, [addAnItem, groceryList]);

    const addGroceryItem = event => {
        event.preventDefault();

        if (addAnItem) {
            groceryList.push(newGroceryItem);
            localStorage.setItem("groceryList", JSON.stringify(groceryList));

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

    const checkNeeded = event => {
        console.log(event.target.value)
        for (var i = 0; i < groceryList.length; i++) {
            console.log(i)
            if (groceryList[i].itemName == event.target.value && groceryList[i].needed == true) {
                console.log("here")
                console.log(event.target.checked)
                event.target.checked = false;
                console.log(event.target.checked)
                groceryList[i].needed = false;
            } else if (groceryList[i].itemName == event.target.value && groceryList[i].needed == false) {
                groceryList[i].needed = true;
                console.log("HERE")
            }
        }
        localStorage.setItem("groceryList", JSON.stringify(groceryList));
    }

    // function onItemChange() {
        // delete or mark as needed if statement

    // }

    return (
        <div className="groceriesContainer">
            <ul>
                {groceryList.map(item => 
                    <ListItem key={groceryList.indexOf(item.itemName)} name={item.itemName} needed={item.needed} checkNeeded={checkNeeded} />
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
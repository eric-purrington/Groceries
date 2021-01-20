import React from "react";
import "./style.css";

export default function ListItem(props) {
    return (
        <li className="listItem">
            <label for="groceryItem">{props.name}</label>
            {props.needed ? <input type="checkbox" id="groceryItem" name="groceryItem" checked/> : <input type="checkbox" id="groceryItem" name="groceryItem" />}
        </li>
    )
}
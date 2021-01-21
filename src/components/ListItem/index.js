import React from "react";
import "./style.css";

export default function ListItem(props) {
    return (
        <li className="listItem">
            <label htmlFor="groceryItem">{props.name}</label>
            {props.needed ? <input onChange={props.checkNeeded} type="checkbox" id="groceryItem" value={props.name} name="groceryItem" checked/> : <input onChange={props.checkNeeded} value={props.name} type="checkbox" id="groceryItem" name="groceryItem" />}
        </li>
    )
}
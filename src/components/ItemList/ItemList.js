import React from "react";
import './ItemList.css';
import Item from "../Item/Item";


function ItemList({items}) {
    return(
        <div className="listado">
            {items && 
            items.map(
                item => <Item key={item.id} item={item} />
            )}            
        </div>
    )
}

export default ItemList;
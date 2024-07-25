//import { Fragment } from "react/jsx-runtime";

import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
}

//import { MouseEvent } from "react";
function ListGroup({items, heading}: Props) {
    
    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    //arr[0] //variable
    //arr[1] // updater function


    //items=[];
    // using variable
    //const message = items.length === 0? <p>No items found</p> : null;

    //using function
    //const getMessage = () => {
    //    items.length === 0? <p>No items found</p> : null;
    //}

    //event handler
    //Type Annotation
    //const handlerEvent = (event: MouseEvent) => console.log(event.currentTarget);


    return (
        <>
        <h1>{heading}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={item} className={selectedIndex === index ? 'list-group-item active': 'list-group-item'} 
                    onClick={() => setSelectedIndex(index)}
                    >
                        {item}
                </li>
            ))}
            </ul>
        </>
    );
}

export default ListGroup
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ItemList() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/items")
            .then((r) => r.json())
            .then(setItems)
    }, [])

    return (
        <div>

        </div>
    )
}

export default ItemList 
import * as React from "react";

function fetchUserData() {
    return new Promise((resolve) => {  
        setTimeout(() => {
            resolve({ 
                items: ["a", "b", "c", "d", "e"] 
            });
        },2000);
    });
}

function Items() {
    const [items, setItems] = React.useState([]); 
    React.useEffect(() => {
        fetchUserData().then(data => { 
            setItems(data.items); 
        });
    }, []);

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Items;

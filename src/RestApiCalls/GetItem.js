import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';



const GetItem = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        getItemDetails();
        
    }, [])

    const getItemDetails = () => {
        fetch("https://fortnite-api.theapinetwork.com/store/get")
        .then(response => response.json())
        .then(message => 
            {
                console.log(JSON.stringify(message.data))
                setItems(message.data);
            }
            
        )
    }

    const getItemIdwithLastUpdate = (item) => {
        return `Item Id : ${item.itemId} Last Update : ${item.lastUpdate}`
    }

    return (
        //console.log("item here "+items)
        //<h1>ssav</h1>
        <div style={{textAlign:"left"}}>
            {
              items.map((item, itemId) => (
                        <div key={itemId}>
                            <p>{getItemIdwithLastUpdate(item)}</p>
                            <Link to={`/get/${item.itemId}`}>
                                {item.itemId}
                            </Link>
                               {/* Item Id : {item.itemId} */}
                        </div>
                        
                ))
            }
        
        </div>
        
    )
}
export default GetItem;
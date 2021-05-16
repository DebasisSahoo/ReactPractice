import {useState, useEffect } from 'react';

const GetItemInfo = ({match}) => {
    const [itemInfo, setitemInfo] = useState({
        item: {
            images: {}
        }
    });
    useEffect(() => {
        getItemInfo();
       
    }, [])

    const getItemInfo = () => {
        fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
        .then(resp => resp.json())
        .then(message =>{
            console.log(message.data)
            setitemInfo(message.data)
        })
        
    }
    return (

        <div>
            <p>Item Id : {itemInfo.itemId}</p>
            <p>Item name : {itemInfo.item.name}</p>
            <p>Item Image : {itemInfo.item.images.icon}</p>

            <img src={itemInfo.item.images.icon} />
        </div>
    )
}
export default GetItemInfo;
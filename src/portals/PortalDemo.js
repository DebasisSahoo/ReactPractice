import ReactDom from 'react-dom';
const PortalDemo = () => {
    return (ReactDom.createPortal(
         <h1>portal demo</h1>, document.getElementById("other-div")
        ))
    // ReactDom.createPortal(
    //     <h1>portal demo</h1>, document.getElementById("other-div")
    // )
    
}
export default PortalDemo;
import {useState, useRef} from 'react';

const RefExample = () => {
    const [firstName, setFirstName] = useState("debasis");

    const textInputRef = useRef(null);

    const clearInput = () => {
        setFirstName("");
        textInputRef.current.focus();
    }

    return(
        <div>
            <input type="text" 
                value={firstName} 
                onChange={(e)=>setFirstName(e.target.value)}
                ref={textInputRef}
            />
            <button onClick ={clearInput}>Clear</button>
        </div>
    )
}
export default RefExample;
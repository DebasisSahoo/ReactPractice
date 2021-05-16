import {useState} from 'react';
import SimpleComponent from './SimpleComponent';

const SetColorDemo = (props) => {
    const [color, setcolor] = useState('white')
    return(
        <div>
            <input type="color"  value={color} onChange= {
                (e) => {
                   // props.setColorInApp(color);
                   localStorage.setItem("color", e.target.value)
                    setcolor(e.target.value)
                }
                }/>

                <SimpleComponent name = "debasis" colorName={localStorage.getItem("color")} />
        </div>
    )
}
export default SetColorDemo;
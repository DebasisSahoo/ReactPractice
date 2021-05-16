import React from 'react'

const TestComponent = () => {

    const [counter, setcounter] = React.useState(0);
    return (
        <div>
            {/* <p>Showing paragraph</p> */}
            <p id="counterValue">{counter}</p>
            <button id="increment" onClick={() => setcounter(counter + 1)}>
                IncrementCounter
            </button>
           

        </div>
    )
}

export default TestComponent;
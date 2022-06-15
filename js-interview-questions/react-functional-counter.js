import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Counter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => {
                setCount(prevState => prevState - 1);
            }}>-</button>
            {count}
            <button onClick={() => {
                setCount(prevState => prevState + 1);
            }}>+</button>
        </div>
    )
}

const domElement = document.getElementById('root')

ReactDOM.render(<Counter />, domElement)


import React, { useState } from 'react';
import styled from 'styled-components'

const Button = styled.button`
padding:5px 10px;
border:none:
font-weight:bold;
&:hover{
  transform:scale(1.05);
  background:pink;
}
`
const P = styled.p`
padding:5px 10px;
border:1px solid pink;
border-radius:10px;
color:#ccc;
font-size:12px;`

function Counter() {
    const [count, setCounter] = useState(0)
    return (
    <div>
        <header className="App-header">
            <P>react-testing-exercise #1</P>
            <h4>Increment Counter🎅</h4>
            <div>
                {/* test1 */}
                <div data-testid="counter">{count}</div>
                <div>
                    {/* test2,3 */}
                    <Button onClick={() => { setCounter((count) => count + 1) }}
                        data-testid="plus-button">+</Button>
                    <Button onClick={() => {
                        if (!count) return;
                        setCounter((count) => count - 1)
                    }}
                        data-testid="minus-button">-</Button>
                </div>
                <Button>on &#47; off</Button>

            </div>
        </header>
    </div>
    )
}

export default Counter

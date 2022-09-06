import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';

const ItemCount = () => {

    const [counter, setCounter] = useState(1);
    //INCREASE COUNTER
    const increase = () => {
        if (counter < qty) {
            setCounter (count => count + 1);
        }
        if (counter === qty) {
            alert('No hay stock del producto')
        }
    };
    //DECREASE COUNTER
    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }  
    };

    const qty = 5;

    return (  
    <ButtonGroup alignItems="center" size="small" aria-label="small outlined button group">
        <Button onClick={increase}>+</Button>
        {/* <input type="text" value={counter} readOnly/> */}
        <Button disabled> {counter} </Button>
        <Button onClick={decrease}>-</Button>
    </ButtonGroup>
    );
}
 
export default ItemCount;
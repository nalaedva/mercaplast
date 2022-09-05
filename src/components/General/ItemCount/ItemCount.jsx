import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';

const ItemCount = () => {

    const [counter, setCounter] = useState(1);
    //INCREASE COUNTER
    const increase = () => {
        setCounter (count => count + 1);
    };
    //DECREASE COUNTER
    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }  
    };


    return (  
    <ButtonGroup alignItems="center" size="small" aria-label="small outlined button group">
        <Button onClick={increase}>+</Button>
        <Button disabled> {counter} </Button>
        <Button onClick={decrease}>-</Button>
    </ButtonGroup>
    );
}
 
export default ItemCount;
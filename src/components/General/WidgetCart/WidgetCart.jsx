import { useContext } from 'react';
import './WidgetCart.css';
import { Store } from '../../../store'
 


const WidgetCart = ({show}) => {
    const [data, setData] = useContext(Store);

   
    return (
        <>
            <div className={`widgetCart ${show ? 'open' : 'close'}`}>
                
                {/* <div className='buttonClose'>
                    <IconButton 
                        sx={{ background: '#92a8d1' }} 
                    >
                        <CloseIcon 
                            color="primary"
                            sx={{ fontSize: 15 }}
                        />
        
                    </IconButton>
                </div>    */}
                {/* {
                    data.items.map(item => <p>{item.title}</p>)
                } */}
            </div>
        </>
    )
}

export default WidgetCart;
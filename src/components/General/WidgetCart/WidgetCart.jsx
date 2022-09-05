import './WidgetCart.css'



const WidgetCart = ({show}) => {


   
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
                <h5>Widget</h5>
            </div>
        </>
    )
}

export default WidgetCart;
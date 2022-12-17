import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
import slider from '../../helper/slider.json';

function Carousel1()
{
    

    return (
        <Carousel className=''style={{width:'80%'}}>
            {
                slider.map( (item) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}
export default Carousel1
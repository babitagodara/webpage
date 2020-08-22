
import React from 'react';


function Box (props){
    return(
        <button className='Square' onClick={props.onClick}>
            {props.value}
        </button>
    );
};
export default Box;
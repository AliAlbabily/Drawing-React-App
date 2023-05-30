import React from 'react';

import './GuessView.css';

function GuessView(props) {
    return ( 
        <div className='GuessView'>
            {/* TODO: first div for the image */}
            <div>
                <img src={props.imageSrc} />
            </div>
            {/* TODO: second div for the input  */}
            <div>
                
            </div>
        </div>
    );
}

export default GuessView;
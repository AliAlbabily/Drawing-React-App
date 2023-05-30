import React from 'react';

import './GuessView.css';

function GuessView(props) {
    return ( 
        <div className='GuessView'>
            <div className='ImageDiv'>
                <img src={props.imageSrc} />
            </div>
            <div className='InputDiv'>
                <form>
                    <h2>Your guess:</h2>
                    <input type='text' />
                </form>
            </div>
        </div>
    );
}

export default GuessView;
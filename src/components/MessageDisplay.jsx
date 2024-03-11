import React from 'react';

function MessageDisplay({ userChoice, computerChoice, userMessage, computerMessage}) {
    return (
        <div>
            { userChoice !== null && <p className='text-xl mt-4'>{userMessage}</p>}
            { computerChoice !== null && <p className='text-xl mt-4'>{computerMessage}</p> }
        </div>
    );
}

export default MessageDisplay;

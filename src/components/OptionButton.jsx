import React from 'react';

function OptionButton({ option, handlePlay, disabled }) {
    return (
      <button
        className='px-4 py-2 m-2 text-xl font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700 cursor-pointer'
        disabled={disabled}
        onClick={() => handlePlay(option.id)}
        title={option.name}
      >
        {option.emoji}
      </button>
    )
  }

  export default OptionButton;
// Game.jsx
import React from 'react';
import useChoices from '../hooks/useChoices'; // Asegúrate de ajustar la ruta según tu estructura de archivos
import OptionButton from './OptionButton';
import ResultDisplay from './ResultDisplay';
import MessageDisplay from './MessageDisplay';
import options from '../data/options';

export default function Game() {
  const {
    userChoice,
    computerChoice,
    result,
    disabled,
    userMessage,
    computerMessage,
    handlePlay,
    reset,
  } = useChoices(options);

  return (
    <div className='flex items-center justify-center h-screen bg-gray-800'>
      <div className='rounded-lg p-4 bg-gray-500'>
        <h1 className='text-3xl mb-4 text-center font-bold'>Juega ya!</h1>
        <div className='max-w-md mx-auto'>

          {options.map((option) => (
            <OptionButton key={option.id} option={option} handlePlay={handlePlay} disabled={disabled} />
          ))}

          <MessageDisplay userChoice={userChoice} computerChoice={computerChoice} userMessage={userMessage} computerMessage={computerMessage} />

          {result !== null && (
            <ResultDisplay
              result={result}
              userChoice={options[userChoice]}
              computerChoice={options[computerChoice]}
              reset={reset}
            />
          )}
        </div>
      </div>
    </div>
  );
}

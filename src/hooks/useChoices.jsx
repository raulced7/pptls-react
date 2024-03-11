import { useState, useEffect } from 'react';

const useChoices = (options) => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [userMessage, setUserMessage] = useState(null);
  const [computerMessage, setComputerMessage] = useState(null);

  useEffect(() => {
    if (userChoice !== null) {
      setUserMessage(`Elegiste ${options[userChoice]?.emoji} ${options[userChoice]?.name}`);
    }
  }, [userChoice]);

  useEffect(() => {
    if (computerChoice !== null) {
      setComputerMessage(`El ordenador ha elegido ${options[computerChoice]?.emoji} ${options[computerChoice]?.name}`);
    }
  }, [computerChoice]);

  const handlePlay = (choice) => {
    setUserChoice(choice);
    setDisabled(true);

    const randomChoice = Math.floor(Math.random() * options.length);

    setTimeout(() => {
      setComputerChoice(randomChoice);
    }, 1500);

    setTimeout(() => {
      setResult(getResult(choice, randomChoice));
    }, 3000);

    clearTimeout();
  };

  const reset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setDisabled(false);
    setUserMessage(null);
    setComputerMessage(null);
  };

  const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return 0;

    if (options[userChoice].beats.includes(computerChoice)) return 1;

    return 2;
  };

  return {
    userChoice,
    computerChoice,
    result,
    disabled,
    userMessage,
    computerMessage,
    handlePlay,
    reset,
  };
};

export default useChoices;

import React, { useState, useEffect } from 'react';

const GameArea = ({ onGameStarted }) => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isGameActive, setIsGameActive] = useState(false);

    const startGame = () => {
        setScore(0);
        setTimeLeft(60);
        setIsGameActive(true);
        onGameStarted(); // Gọi hàm onGameStarted khi game bắt đầu
    };

    const handleClick = () => {
        if (isGameActive) {
            setScore(prev => prev + 1);
        }
    };

    useEffect(() => {
        let interval;
        if (isGameActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(interval);
            setIsGameActive(false);
        }

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [isGameActive, timeLeft]);

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-4">Game Area</h2>

            <div className="flex flex-col items-center">
                {!isGameActive ? (
                    <button
                        onClick={startGame}
                        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 mb-4"
                    >
                        Start Game
                    </button>
                ) : null}

                {isGameActive ? (
                    <div className="text-center">
                        <p className="text-lg mb-2">Time Left: {timeLeft} seconds</p>
                        <p className="text-2xl font-bold mb-4">Score: {score}</p>
                        <button
                            onClick={handleClick}
                            className="bg-blue-500 text-white px-8 py-4 rounded-full text-xl hover:bg-blue-600"
                        >
                            Click Me!
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default GameArea;

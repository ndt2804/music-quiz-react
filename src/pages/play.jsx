import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import GameSettings from "../components/layouts/settings-side";
import RankingTable from "../components/layouts/ranking-side";
import GameArea from "../components/layouts/game-side";
const Play = () => {
  const location = useLocation();
  const { playerName } = location.state || { playerName: 'Player' };
  const [gameStarted, setGameStarted] = useState(false);

  const handleGameStarted = () => {
    setGameStarted(true);
  };
  return (

    <div className="flex flex-col h-full w-full p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome, {playerName}</h1>
      <div className="flex flex-1">
        <div className="flex-none w-1/6 p-4">
          <h2 className="text-2xl font-semibold text-center">Settings</h2>
          <GameSettings />
        </div>
        <div className="flex-auto p-4 flex justify-center items-center">
          <GameArea onGameStarted={handleGameStarted} />
        </div>
        <div className="flex-none w-1/4 p-4">
          {gameStarted && (
            <>
              <h2 className="text-2xl font-semibold text-center">Ranking</h2>
              <RankingTable />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Play;

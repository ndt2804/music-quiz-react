// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import quizLogo from "../assets/quiz-logo.png";
// import { Button, Modal, Input } from "antd";
// import GameSettings from "../components/layouts/settings-side";
// import RankingTable from "../components/layouts/ranking-side";
// import GameArea from "../components/layouts/game-side";

// const HomePage = () => {
//   const [open, setOpen] = useState(false);
//   const [confirmLoading, setConfirmLoading] = useState(false);
//   const [name, setName] = useState('');
//   const [gameStarted, setGameStarted] = useState(false);
//   const [inGame, setInGame] = useState(false);
//   const showModal = () => setOpen(true);
//   const handleOk = () => {
//     if (name.trim() !== '') {
//       setConfirmLoading(true);
//       setTimeout(() => {
//         setOpen(false);
//         setConfirmLoading(false);
//         setInGame(true);
//       }, 2000);
//     }
//   };
//   const handleCancel = () => setOpen(false);
//   const handleGameStarted = () => {
//     setGameStarted(true);
//   };

//   return (
//     <div className="flex flex-col w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 items-center justify-center">
//       {!inGame ? (
//         <>
//           <div className="mb-8">
//             <h1 className="text-4xl font-bold text-blue-800">Quiz Game</h1>
//             <div className="flex justify-center">
//               <img src={quizLogo} alt="Quiz Logo" />
//             </div>
//           </div>
//           <div className="flex gap-4">
//             <Button
//               onClick={showModal}
//               size="large"
//               type="primary"
//               className="bg-green-500 px-8 py-3 rounded-full text-xl hover:bg-green-600 flex items-center gap-2 transition transform hover:scale-105 shadow-lg mx-auto mt-16 text-white border-0 focus:outline-none"
//             >
//               Play Now
//             </Button>
//             <Modal
//               centered
//               open={open}
//               confirmLoading={confirmLoading}
//               onOk={handleOk}
//               onCancel={handleCancel}
//             >
//               <h1 className="text-center">Continue as Guest</h1>
//               <p>Write your name</p>
//               <Input
//                 placeholder="Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Modal>
//           </div>
//         </>
//       ) : (
//         <div className="flex flex-col h-full w-full p-4">
//           <h1 className="text-3xl font-bold mb-4 text-center">Welcome, {name}</h1>
//           <div className="flex flex-1">
//             <div className="flex-none w-1/6 p-4">
//               <h2 className="text-2xl font-semibold text-center">Settings</h2>
//               <GameSettings />
//             </div>
//             <div className="flex-auto p-4 flex justify-center items-center">
//               <GameArea onGameStarted={handleGameStarted} />
//             </div>
//             <div className="flex-none w-1/4 p-4">
//               {gameStarted && (
//                 <>
//                   <h2 className="text-2xl font-semibold text-center">Ranking</h2>
//                   <RankingTable />
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;
import React, { useState } from 'react';
import { Button, Modal, Input, Radio } from 'antd';
import { useNavigate } from 'react-router-dom';
import GameSettings from '../components/layouts/settings-side';
import GameArea from '../components/layouts/game-side';
const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [gameMode, setGameMode] = useState('single');
  const navigate = useNavigate();

  const showModal = () => setOpen(true);

  const handleOk = () => {
    if (name.trim() !== '') {
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
        setModalVisible(true);
      }, 2000);
    }
  };

  const handleCancel = () => setOpen(false);
  const handleGameModeSelect = (mode) => {
    setGameMode(mode);
    setModalVisible(false);
    setGameStarted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      {!gameStarted && (
        <>
          <h1 className="text-4xl font-bold text-blue-800">Quiz Game</h1>
          <Button onClick={showModal} size="large" type="primary" className="mt-16 bg-green-500 text-white">
            Play Now
          </Button>
        </>
      )}

      <Modal
        centered
        open={open}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1 className="text-center">Enter Your Name</h1>
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Modal>

      <Modal
        centered
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        title="Choose Game Mode"
      >
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => handleGameModeSelect('single')}
            size="large"
            type="primary"
            className="bg-blue-500 text-white w-32"
          >
            Single Player
          </Button>
          <Button
            onClick={() => handleGameModeSelect('multiplayer')}
            size="large"
            type="primary"
            className="bg-purple-500 text-white w-32"
          >
            Multiplayer
          </Button>
        </div>
      </Modal>

      {gameStarted && (
        <div className="flex flex-col w-full mt-8">
          <div className="flex gap-4">
            <div className="w-1/4 p-4">
              <h2 className="text-2xl font-semibold text-center">Settings</h2>
              <GameSettings />
            </div>
            <div className="flex-1 p-4 flex justify-center items-center">
              <GameArea mode={gameMode} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;


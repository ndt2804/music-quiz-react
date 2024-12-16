import quizLogo from "../assets/quiz-logo.png";
const TeamLobby = () => {
    return (
        <div className="bg-emerald-200 text-white min-h-screen flex items-center justify-center">
            <div className="max-w-4xl w-full bg-yellow-800 rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Lord of the Rings Trivia</h1>
                    <button className="text-sm bg-yellow-900 py-1 px-2 rounded">Settings</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                        <p className="text-xl font-semibold mb-2">Go to <span className="font-bold">trivia.live</span> and enter</p>
                        <p className="text-3xl font-bold mb-4">KDJ-P6X</p>
                        <button className="bg-yellow-900 py-2 px-4 rounded">Copy link</button>
                    </div>
                    <div className="flex justify-center">
                        <img src={quizLogo} alt="QR Code" className="w-32 h-32" />
                    </div>
                </div>
                <div className="mt-6">
                    <button className="w-full bg-green-500 py-2 rounded text-black font-semibold">START GAME</button>
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {['Nathan', 'Harry', 'Jessie', 'Bianca', 'Emily', 'Tom'].map(player => (
                        <div key={player} className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                {/* Replace with actual avatar images if available */}
                                <span className="text-gray-700">{player[0]}</span>
                            </div>
                            <p className="mt-2">{player}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamLobby;

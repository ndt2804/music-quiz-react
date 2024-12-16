import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import quizLogo from "../../assets/quiz-logo.png";
import { Settings, Trophy, Users, PlusCircle } from 'lucide-react';
import React, { useState } from 'react';
export const GameSettings = ({ playerName }) => {
    const [difficulty, setDifficulty] = useState('medium');
    const [sound, setSound] = useState(true);

    return (
        <nav className="hidden md:flex px-6 py-10 flex-col justify-between min-w-[270px]  border-r "               >
            <div className='flex flex-col gap-11'>
                <Link to='/' className='flex gap-3 items-center'>
                    <img
                        src={quizLogo}
                        alt='logo'
                        width={170}
                        height={36}
                    />
                </Link>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Settings className="mr-2" /> Settings
                </h2>
                <ul className='flex flex-col gap-6'>
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2">Difficulty</label>
                            <select
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value)}
                                className="w-full p-2 border rounded"
                            >
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={sound}
                                    onChange={() => setSound(!sound)}
                                    className="mr-2"
                                />
                                Sound
                            </label>
                        </div>
                        <div>
                            <p>Player: <span className="font-bold">{playerName}</span></p>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>

    );
};
export default GameSettings;
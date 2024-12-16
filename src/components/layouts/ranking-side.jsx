import React from 'react';

const RankingTable = () => {
    const rankings = [
        { rank: 1, player: 'Người chơi A', score: 1000 },
        { rank: 2, player: 'Người chơi B', score: 800 },
        { rank: 3, player: 'Người chơi C', score: 600 },
        // Thêm dữ liệu xếp hạng ở đây
    ];

    return (
        <div className=" p-4">
            <h3 className="text-xl font-bold mb-4">Bảng Xếp Hạng</h3>
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left">Hạng</th>
                        <th className="px-4 py-2 text-left">Người chơi</th>
                        <th className="px-4 py-2 text-left">Điểm</th>
                    </tr>
                </thead>
                <tbody>
                    {rankings.map((item) => (
                        <tr key={item.rank} className="border-t border-gray-200">
                            <td className="px-4 py-2">{item.rank}</td>
                            <td className="px-4 py-2">{item.player}</td>
                            <td className="px-4 py-2">{item.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RankingTable;

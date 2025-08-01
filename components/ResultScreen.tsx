import React, { useState } from 'react';
import type { AllScores, ResultProfile, ConsistencyReport } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import CheckIcon from './icons/CheckIcon';
import { QuestionCategory, TestPhase } from '../types';

interface ResultScreenProps {
  scores: AllScores;
  profiles: Record<TestPhase, ResultProfile>;
  report: ConsistencyReport;
  onRetake: () => void;
}

const COLORS: Record<QuestionCategory, string> = {
  [QuestionCategory.D]: '#ef4444', // red-500
  [QuestionCategory.I]: '#f97316', // orange-500
  [QuestionCategory.S]: '#16a34a', // green-600
  [QuestionCategory.C]: '#0284c7', // sky-600
};

const TAB_TITLES: Record<TestPhase, string> = {
    [TestPhase.Work]: 'Nơi làm việc',
    [TestPhase.Natural]: 'Tự nhiên',
    [TestPhase.Pressure]: 'Khi áp lực',
};

const SingleProfileView: React.FC<{scores: AllScores[TestPhase], profile: ResultProfile}> = ({scores, profile}) => {
    const chartData = Object.entries(scores).map(([key, value]) => ({
        name: key,
        value: value,
        fill: COLORS[key as QuestionCategory],
    }));

    return (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start animate-fade-in">
            <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" tick={{ fill: '#475569' }} />
                    <YAxis allowDecimals={false} tick={{ fill: '#475569' }} />
                    <Tooltip
                        cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }}
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-semibold text-slate-700">Mô tả chung</h3>
                    <p className="mt-2 text-slate-600">{profile.description}</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-slate-700">Điểm mạnh</h3>
                    <ul className="mt-2 space-y-2">
                    {profile.strengths.map((item, index) => (
                        <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-2 text-slate-600">{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-slate-700">Thách thức & Gợi ý</h3>
                    <ul className="mt-2 space-y-2">
                    {profile.challenges.map((item, index) => (
                        <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-sky-500 mt-0.5 flex-shrink-0" />
                        <span className="ml-2 text-slate-600">{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


const ResultScreen: React.FC<ResultScreenProps> = ({ scores, profiles, report, onRetake }) => {
    const [activeTab, setActiveTab] = useState<TestPhase>(TestPhase.Work);
    const activeProfile = profiles[activeTab];

    return (
        <div className="space-y-8">
            <Card className="p-6 sm:p-8 animate-fade-in">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-800">Báo cáo Hành vi Toàn diện</h1>
                    <p className="mt-2 text-lg text-slate-500">Phân tích tính cách của bạn qua 3 lăng kính</p>
                </div>

                <div className="mt-8 border-b border-slate-200">
                    <nav className="-mb-px flex space-x-6 justify-center" aria-label="Tabs">
                        {(Object.keys(TAB_TITLES) as TestPhase[]).map(phase => (
                            <button
                                key={phase}
                                onClick={() => setActiveTab(phase)}
                                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                                ${activeTab === phase
                                ? 'border-sky-500 text-sky-600'
                                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                                }`}
                            >
                                {TAB_TITLES[phase]}
                            </button>
                        ))}
                    </nav>
                </div>
                
                <div className="text-center mt-4">
                     <p className="text-lg font-semibold" style={{ color: COLORS[activeProfile.type] }}>
                        Hồ sơ nổi bật: {activeProfile.title}
                    </p>
                </div>
                
                <SingleProfileView scores={scores[activeTab]} profile={activeProfile} />

            </Card>

            <Card className="p-6 sm:p-8 animate-fade-in">
                 <h2 className="text-2xl font-bold text-slate-800 text-center">Phân Tích Tổng Hợp & Nhất Quán</h2>
                 <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-lg text-slate-700">So sánh các trạng thái</h3>
                        <p className="mt-2 text-slate-600">
                            <strong>Tự nhiên ({profiles.Natural.type}):</strong> Đây là con người thật, cốt lõi của bạn.
                        </p>
                         <p className="mt-1 text-slate-600">
                            <strong>Công việc ({profiles.Work.type}):</strong> Đây là cách bạn thích ứng để thành công trong công việc.
                        </p>
                         <p className="mt-1 text-slate-600">
                            <strong>Áp lực ({profiles.Pressure.type}):</strong> Đây là cách bạn phản ứng theo bản năng khi căng thẳng.
                        </p>
                        <p className="mt-3 text-slate-600 font-medium">
                            Sự khác biệt giữa các biểu đồ cho thấy mức độ linh hoạt của bạn. Sự tương đồng cho thấy bạn là người nhất quán trong mọi hoàn cảnh.
                        </p>
                    </div>
                     <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-lg text-slate-700">Báo cáo Nhất quán</h3>
                        <p className="mt-2 text-slate-600">
                           Mức độ nhất quán của bạn được đánh giá là: <strong className={`px-2 py-1 rounded-md text-white ${report.level === 'Cao' ? 'bg-green-500' : report.level === 'Trung bình' ? 'bg-yellow-500' : 'bg-red-500'}`}>{report.level}</strong>
                        </p>
                        <p className="mt-3 text-slate-600 italic">"{report.feedback}"</p>
                    </div>
                 </div>
            </Card>

            <div className="mt-8 text-center">
                <Button onClick={onRetake} variant="secondary">
                Làm lại bài trắc nghiệm
                </Button>
            </div>
        </div>
    );
};

export default ResultScreen;

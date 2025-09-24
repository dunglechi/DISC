import React from 'react';
import { Button } from './ui/Button';

interface WelcomeScreenProps {
  onStart: () => void;
  onShowWhatsNew: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onShowWhatsNew }) => {
  return (
    <div className="text-center bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-slate-200 animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700">Trắc nghiệm Tính cách DISC Toàn diện</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
        Khám phá sâu hơn về bản thân với bài test DISC 3-trong-1. Chúng tôi sẽ phân tích hành vi của bạn trong 3 bối cảnh quan trọng: <strong className="text-slate-800">Nơi làm việc</strong>, <strong className="text-slate-800">Trạng thái tự nhiên</strong>, và <strong className="text-slate-800">Khi bị áp lực</strong>.
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-slate-800">Hướng dẫn:</h2>
         <p className="mt-2 text-slate-500">
          Bạn sẽ thực hiện 3 phần trắc nghiệm. Trước mỗi phần, sẽ có hướng dẫn cụ thể.
        </p>
        <p className="mt-2 text-slate-500">
          Trong mỗi nhóm 4 từ, hãy chọn một từ <strong className="text-green-600">Mô tả bạn nhất</strong> và một từ <strong className="text-red-600">Ít mô tả bạn nhất</strong> theo đúng bối cảnh được yêu cầu.
        </p>
        <p className="mt-2 text-slate-500">
          Hãy trả lời một cách trung thực để có kết quả chính xác nhất.
        </p>
      </div>
      <div className="mt-10 space-y-4">
        <Button onClick={onStart} size="lg">
          Bắt đầu trắc nghiệm
        </Button>
        <div>
          <Button onClick={onShowWhatsNew} variant="secondary" size="md">
            🚀 Có gì mới?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;

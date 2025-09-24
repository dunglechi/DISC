import React from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { UPDATES, UpdateItem } from '../updates';

interface WhatsNewScreenProps {
  onBack: () => void;
}

const WhatsNewScreen: React.FC<WhatsNewScreenProps> = ({ onBack }) => {
  const getVersionBadgeColor = (type: UpdateItem['type']) => {
    switch (type) {
      case 'major':
        return 'bg-red-500 text-white';
      case 'minor':
        return 'bg-blue-500 text-white';
      case 'patch':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-4">
          Có gì mới? 🚀
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Khám phá các tính năng mới nhất và cải tiến trong ứng dụng trắc nghiệm DISC của chúng tôi
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {UPDATES.map((update, index) => (
          <Card key={update.version} className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <div className="flex items-center gap-3 mb-2 sm:mb-0">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getVersionBadgeColor(update.type)}`}>
                  v{update.version}
                </span>
                <h2 className="text-xl font-semibold text-slate-800">
                  {update.title}
                </h2>
              </div>
              <time className="text-sm text-slate-500 font-medium">
                {formatDate(update.date)}
              </time>
            </div>

            <p className="text-slate-600 mb-4">{update.description}</p>

            {update.features.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  ✨ Tính năng mới
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600 ml-4">
                  {update.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {update.improvements.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  📈 Cải tiến
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600 ml-4">
                  {update.improvements.map((improvement, improvementIndex) => (
                    <li key={improvementIndex}>{improvement}</li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button onClick={onBack} variant="secondary" size="lg">
          ← Quay lại trang chủ
        </Button>
      </div>

      <div className="mt-8 text-center">
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-700 mb-2">
            🎯 Phát triển liên tục
          </h3>
          <p className="text-slate-600">
            Chúng tôi không ngừng cải tiến ứng dụng để mang đến trải nghiệm tốt nhất cho bạn. 
            Hãy theo dõi những cập nhật mới nhất!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatsNewScreen;
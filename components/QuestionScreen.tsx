import React, { useState, useMemo } from 'react';
import type { QuestionBlock, Answer, QuestionOption } from '../types';
import { QuestionCategory } from '../types';
import ProgressBar from './ProgressBar';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface QuestionScreenProps {
  questionBlock: QuestionBlock;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (questionId: number, answer: Answer) => void;
  phaseTitle: string;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  questionBlock,
  currentQuestionIndex,
  totalQuestions,
  onAnswer,
  phaseTitle
}) => {
  const [selectedMost, setSelectedMost] = useState<QuestionCategory | null>(null);
  const [selectedLeast, setSelectedLeast] = useState<QuestionCategory | null>(null);

  const isNextDisabled = !selectedMost || !selectedLeast;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNextDisabled) return;
    onAnswer(questionBlock.id, { most: selectedMost, least: selectedLeast });
  };
  
  const shuffledOptions = useMemo(() => 
    [...questionBlock.options].sort(() => Math.random() - 0.5), 
    [questionBlock.options]
  );

  return (
    <Card className="w-full max-w-2xl mx-auto animate-fade-in-up">
      <div className="p-6">
        <div className="mb-2 text-center text-sm font-semibold text-sky-700">{phaseTitle}</div>
        <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
        <h2 className="text-center text-xl font-semibold text-slate-700 mt-4">
          Câu hỏi {currentQuestionIndex + 1} / {totalQuestions}
        </h2>
        <p className="text-center text-slate-500 mt-1">Chọn từ mô tả bạn nhất và ít nhất trong bối cảnh này.</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="border-t border-b border-slate-200 bg-slate-50 p-6">
           <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                    <h3 className="font-bold text-lg text-green-600">Mô tả NHẤT</h3>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-lg text-red-600">Mô tả ÍT NHẤT</h3>
                </div>
            </div>
          <div className="space-y-3">
            {shuffledOptions.map((option) => (
              <div key={option.category} className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[auto_1fr_auto] items-center gap-x-4 bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                <div className="flex justify-center">
                  <input
                    type="radio"
                    name="most"
                    id={`most-${option.category}`}
                    value={option.category}
                    checked={selectedMost === option.category}
                    onChange={() => setSelectedMost(option.category)}
                    disabled={selectedLeast === option.category}
                    className="h-5 w-5 text-green-600 focus:ring-green-500 border-slate-300 disabled:opacity-50"
                  />
                </div>
                <label htmlFor={`most-${option.category}`} className="text-center text-base font-medium text-slate-800 cursor-pointer">
                  {option.text}
                </label>
                <div className="flex justify-center">
                   <input
                    type="radio"
                    name="least"
                    id={`least-${option.category}`}
                    value={option.category}
                    checked={selectedLeast === option.category}
                    onChange={() => setSelectedLeast(option.category)}
                    disabled={selectedMost === option.category}
                    className="h-5 w-5 text-red-600 focus:ring-red-500 border-slate-300 disabled:opacity-50"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 flex justify-end">
          <Button type="submit" disabled={isNextDisabled}>
            Câu tiếp theo
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default QuestionScreen;

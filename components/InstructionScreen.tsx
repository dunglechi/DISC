import React from 'react';
import { TestPhase, TEST_PHASE_TITLES, TEST_PHASE_INSTRUCTIONS } from '../types';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface InstructionScreenProps {
  phase: TestPhase;
  onStart: () => void;
}

const InstructionScreen: React.FC<InstructionScreenProps> = ({ phase, onStart }) => {
  return (
    <Card className="text-center p-8 sm:p-12 animate-fade-in">
      <h1 className="text-2xl sm:text-3xl font-bold text-sky-700">{TEST_PHASE_TITLES[phase]}</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
        {TEST_PHASE_INSTRUCTIONS[phase]}
      </p>
      <div className="mt-10">
        <Button onClick={onStart} size="lg">
          Bắt đầu
        </Button>
      </div>
    </Card>
  );
};

export default InstructionScreen;

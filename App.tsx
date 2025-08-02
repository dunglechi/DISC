
import React, { useState, useCallback, useEffect } from 'react';
import { AppState, TestPhase, type AllAnswers, type AllScores, type ResultProfile, type PhaseAnswers, type ConsistencyReport, TEST_PHASE_TITLES } from './types';
import { QUESTIONS } from './constants';
import WelcomeScreen from './components/WelcomeScreen';
import InstructionScreen from './components/InstructionScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import { calculateAllScores, getPrimaryProfile, analyzeConsistency } from './services/discService';

const TEST_PHASES_ORDER: TestPhase[] = [TestPhase.Work, TestPhase.Natural, TestPhase.Pressure];

export default function App(): React.ReactNode {
  const [appState, setAppState] = useState<AppState>(AppState.Welcome);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [allAnswers, setAllAnswers] = useState<AllAnswers>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [scores, setScores] = useState<AllScores | null>(null);
  const [profiles, setProfiles] = useState<Record<TestPhase, ResultProfile> | null>(null);
  const [consistencyReport, setConsistencyReport] = useState<ConsistencyReport | null>(null);
  
  const currentPhase = TEST_PHASES_ORDER[currentPhaseIndex];

  const handleStart = useCallback(() => {
    setAppState(AppState.Instructions);
  }, []);

  const handleStartPhase = useCallback(() => {
    setAppState(AppState.Testing);
  }, []);

  const handleRetake = useCallback(() => {
    setAllAnswers({});
    setCurrentQuestionIndex(0);
    setCurrentPhaseIndex(0);
    setScores(null);
    setProfiles(null);
    setConsistencyReport(null);
    setAppState(AppState.Welcome);
  }, []);

  const handleAnswer = useCallback((questionId: number, answer: { most: any, least: any }) => {
    const phaseAnswers = allAnswers[currentPhase] || {};
    const newPhaseAnswers: PhaseAnswers = { ...phaseAnswers, [questionId]: answer };
    setAllAnswers(prev => ({ ...prev, [currentPhase]: newPhaseAnswers }));

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Phase complete
      if (currentPhaseIndex < TEST_PHASES_ORDER.length - 1) {
        setCurrentPhaseIndex(prev => prev + 1);
        setCurrentQuestionIndex(0);
        setAppState(AppState.Instructions);
      } else {
        setAppState(AppState.Calculating);
      }
    }
  }, [allAnswers, currentPhase, currentQuestionIndex, currentPhaseIndex]);
  
  useEffect(() => {
    if (appState === AppState.Calculating) {
       const finalScores = calculateAllScores(allAnswers as Record<TestPhase, PhaseAnswers>);
       const finalProfiles = {
          [TestPhase.Work]: getPrimaryProfile(finalScores[TestPhase.Work]),
          [TestPhase.Natural]: getPrimaryProfile(finalScores[TestPhase.Natural]),
          [TestPhase.Pressure]: getPrimaryProfile(finalScores[TestPhase.Pressure]),
       };
       const finalReport = analyzeConsistency(finalScores);
      
      const timer = setTimeout(() => {
        setScores(finalScores);
        setProfiles(finalProfiles);
        setConsistencyReport(finalReport);
        setAppState(AppState.Results);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [appState, allAnswers]);

  const renderContent = (): React.ReactNode => {
    switch (appState) {
      case AppState.Instructions:
        return <InstructionScreen phase={currentPhase} onStart={handleStartPhase} />;
      case AppState.Testing:
        return (
          <QuestionScreen
            key={`${currentPhase}-${currentQuestionIndex}`}
            questionBlock={QUESTIONS[currentQuestionIndex]}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={QUESTIONS.length}
            onAnswer={handleAnswer}
            phaseTitle={TEST_PHASE_TITLES[currentPhase]}
          />
        );
      case AppState.Calculating:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-600"></div>
            <h2 className="mt-6 text-2xl font-semibold text-slate-700">Đang tổng hợp và phân tích...</h2>
            <p className="mt-2 text-slate-500">Đây là bước cuối cùng, vui lòng chờ trong giây lát.</p>
          </div>
        );
      case AppState.Results:
        if (scores && profiles && consistencyReport) {
          return <ResultScreen scores={scores} profiles={profiles} report={consistencyReport} onRetake={handleRetake} />;
        }
        return null; 
      case AppState.Welcome:
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl mx-auto">
        {renderContent()}
      </div>
    </main>
  );
}

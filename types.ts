export enum TestPhase {
  Work = 'Work',
  Natural = 'Natural',
  Pressure = 'Pressure',
}

export const TEST_PHASE_TITLES: Record<TestPhase, string> = {
  [TestPhase.Work]: 'Pha 1/3: Phong cách tại nơi làm việc',
  [TestPhase.Natural]: 'Pha 2/3: Phong cách tự nhiên',
  [TestPhase.Pressure]: 'Pha 3/3: Phong cách khi bị áp lực',
};

export const TEST_PHASE_INSTRUCTIONS: Record<TestPhase, string> = {
  [TestPhase.Work]: 'Ở phần này, hãy chọn các từ mô tả cách bạn hành xử, suy nghĩ và cảm nhận trong môi trường LÀM VIỆC hoặc các tình huống xã hội chuyên nghiệp.',
  [TestPhase.Natural]: 'Tiếp theo, hãy chọn các từ mô tả con người THẬT của bạn khi bạn ở trong một môi trường thoải mái, quen thuộc và không bị ảnh hưởng bởi áp lực bên ngoài.',
  [TestPhase.Pressure]: 'Cuối cùng, hãy chọn các từ mô tả cách bạn phản ứng một cách bản năng khi đối mặt với ÁP LỰC, căng thẳng hoặc các tình huống xung đột.',
};


export enum AppState {
  Welcome,
  Instructions,
  Testing,
  Calculating,
  Results,
}

export enum QuestionCategory {
  D = 'D',
  I = 'I',
  S = 'S',
  C = 'C',
}

export interface QuestionOption {
  text: string;
  category: QuestionCategory;
}

export interface QuestionBlock {
  id: number;
  options: QuestionOption[];
}

export interface Answer {
  most: QuestionCategory | null;
  least: QuestionCategory | null;
}

export type PhaseAnswers = Record<number, Answer>;
export type AllAnswers = Partial<Record<TestPhase, PhaseAnswers>>;


export interface DiscScores {
  D: number;
  I: number;
  S: number;
  C: number;
}
export type AllScores = Record<TestPhase, DiscScores>;


export interface ResultProfile {
  type: QuestionCategory;
  title: string;
  description: string;
  strengths: string[];
  challenges: string[];
}

export interface ConsistencyReport {
  level: 'Cao' | 'Trung bình' | 'Thấp';
  feedback: string;
}

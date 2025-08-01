import type { PhaseAnswers, AllScores, DiscScores, ResultProfile, ConsistencyReport } from '../types';
import { QuestionCategory, TestPhase } from '../types';
import { RESULT_PROFILES } from '../constants';

export function calculateScores(answers: PhaseAnswers): DiscScores {
  const scores: DiscScores = {
    [QuestionCategory.D]: 0,
    [QuestionCategory.I]: 0,
    [QuestionCategory.S]: 0,
    [QuestionCategory.C]: 0,
  };

  for (const questionId in answers) {
    const answer = answers[questionId];
    if (answer.most) {
      scores[answer.most]++;
    }
    if (answer.least) {
      scores[answer.least]--;
    }
  }

  return scores;
}

export function calculateAllScores(allAnswers: Record<TestPhase, PhaseAnswers>): AllScores {
    return {
        [TestPhase.Work]: calculateScores(allAnswers[TestPhase.Work]),
        [TestPhase.Natural]: calculateScores(allAnswers[TestPhase.Natural]),
        [TestPhase.Pressure]: calculateScores(allAnswers[TestPhase.Pressure]),
    };
}


export function getPrimaryProfile(scores: DiscScores): ResultProfile {
  let primaryType: QuestionCategory = QuestionCategory.D;
  let maxScore = -Infinity;

  const categories: QuestionCategory[] = [QuestionCategory.D, QuestionCategory.I, QuestionCategory.S, QuestionCategory.C];
  
  for (const category of categories) {
      if (scores[category] > maxScore) {
          maxScore = scores[category];
          primaryType = category;
      }
  }

  return RESULT_PROFILES[primaryType];
}

export function analyzeConsistency(scores: AllScores): ConsistencyReport {
  const naturalScores = scores[TestPhase.Natural];
  
  // Check for "flat" profile in natural state
  const scoreValues = Object.values(naturalScores);
  const max = Math.max(...scoreValues);
  const min = Math.min(...scoreValues);
  const range = max - min;

  if (range < 5) {
    return {
      level: 'Thấp',
      feedback: 'Biểu đồ hành vi tự nhiên của bạn khá cân bằng (phẳng), cho thấy bạn có thể chưa xác định rõ xu hướng hành vi của mình hoặc đã cố gắng trả lời một cách trung lập. Điều này có thể làm kết quả phân tích kém chính xác hơn.'
    };
  }
  
  // Check for extreme, contradictory shifts
  const naturalProfile = getPrimaryProfile(scores[TestPhase.Natural]).type;
  const workProfile = getPrimaryProfile(scores[TestPhase.Work]).type;
  const pressureProfile = getPrimaryProfile(scores[TestPhase.Pressure]).type;

  const isContradictoryShift = 
    (naturalProfile === 'D' && (workProfile === 'S' || pressureProfile === 'S')) ||
    (naturalProfile === 'S' && (workProfile === 'D' || pressureProfile === 'D')) ||
    (naturalProfile === 'I' && (workProfile === 'C' || pressureProfile === 'C')) ||
    (naturalProfile === 'C' && (workProfile === 'I' || pressureProfile === 'I'));

  if (isContradictoryShift) {
    return {
      level: 'Trung bình',
      feedback: 'Có sự thay đổi lớn và đối lập giữa hành vi tự nhiên và hành vi trong các môi trường khác. Điều này cho thấy bạn có khả năng thích ứng rất cao, nhưng cũng có thể là dấu hiệu của sự căng thẳng khi phải "đóng vai" khác với con người thật của mình.'
    };
  }

  return {
    level: 'Cao',
    feedback: 'Các câu trả lời của bạn thể hiện sự nhất quán cao giữa các trạng thái khác nhau. Điều này cho thấy bạn có sự tự nhận thức tốt và hành động một cách chân thực, không bị ảnh hưởng quá nhiều bởi môi trường xung quanh.'
  };
}

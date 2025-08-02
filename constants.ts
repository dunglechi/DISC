
import type { QuestionBlock, ResultProfile } from './types';
import { QuestionCategory } from './types';

export const QUESTIONS: QuestionBlock[] = [
  { id: 1, options: [
      { text: 'Thích phiêu lưu', category: QuestionCategory.D },
      { text: 'Hoạt bát', category: QuestionCategory.I },
      { text: 'Thích phân tích', category: QuestionCategory.C },
      { text: 'Dễ thích nghi', category: QuestionCategory.S },
  ]},
  { id: 2, options: [
      { text: 'Kiên trì', category: QuestionCategory.D },
      { text: 'Vui vẻ', category: QuestionCategory.I },
      { text: 'Điềm tĩnh', category: QuestionCategory.S },
      { text: 'Có sức thuyết phục', category: QuestionCategory.C },
  ]},
  { id: 3, options: [
      { text: 'Quyết đoán', category: QuestionCategory.D },
      { text: 'Dễ gần', category: QuestionCategory.S },
      { text: 'Khiêm tốn', category: QuestionCategory.C },
      { text: 'Hay độc thoại', category: QuestionCategory.I },
  ]},
  { id: 4, options: [
      { text: 'Hùng hồn', category: QuestionCategory.I },
      { text: 'Can đảm', category: QuestionCategory.D },
      { text: 'Kiểm soát tốt', category: QuestionCategory.S },
      { text: 'Cẩn thận', category: QuestionCategory.C },
  ]},
  { id: 5, options: [
      { text: 'Thích cạnh tranh', category: QuestionCategory.D },
      { text: 'Vui tính', category: QuestionCategory.I },
      { text: 'Chu đáo', category: QuestionCategory.C },
      { text: 'Hòa nhã', category: QuestionCategory.S },
  ]},
  { id: 6, options: [
      { text: 'Thẳng thắn', category: QuestionCategory.D },
      { text: 'Tôn trọng', category: QuestionCategory.C },
      { text: 'Lạc quan', category: QuestionCategory.I },
      { text: 'Tốt bụng', category: QuestionCategory.S },
  ]},
  { id: 7, options: [
      { text: 'Tự tin', category: QuestionCategory.D },
      { text: 'Đáng tin cậy', category: QuestionCategory.I },
      { text: 'Hài lòng', category: QuestionCategory.S },
      { text: 'Lịch thiệp', category: QuestionCategory.C },
  ]},
  { id: 8, options: [
      { text: 'Táo bạo', category: QuestionCategory.D },
      { text: 'Nhiệt tình', category: QuestionCategory.I },
      { text: 'Trung thành', category: QuestionCategory.S },
      { text: 'Thực tế', category: QuestionCategory.C },
  ]},
   { id: 9, options: [
      { text: 'Độc lập', category: QuestionCategory.D },
      { text: 'Truyền cảm hứng', category: QuestionCategory.I },
      { text: 'Dễ đoán', category: QuestionCategory.S },
      { text: 'Chính xác', category: QuestionCategory.C },
  ]},
  { id: 10, options: [
      { text: 'Mạnh mẽ', category: QuestionCategory.D },
      { text: 'Cởi mở', category: QuestionCategory.I },
      { text: 'Kiên định', category: QuestionCategory.S },
      { text: 'Cầu toàn', category: QuestionCategory.C },
  ]},
  { id: 11, options: [
      { text: 'Chủ động', category: QuestionCategory.D },
      { text: 'Hoà đồng', category: QuestionCategory.I },
      { text: 'Nhẫn nại', category: QuestionCategory.S },
      { text: 'Có hệ thống', category: QuestionCategory.C },
  ]},
  { id: 12, options: [
      { text: 'Dám nghĩ dám làm', category: QuestionCategory.D },
      { text: 'Hướng ngoại', category: QuestionCategory.I },
      { text: 'Điềm đạm', category: QuestionCategory.S },
      { text: 'Logic', category: QuestionCategory.C },
  ]},
  { id: 13, options: [
      { text: 'Yêu cầu cao', category: QuestionCategory.D },
      { text: 'Thích giao du', category: QuestionCategory.I },
      { text: 'Hợp tác', category: QuestionCategory.S },
      { text: 'Có kỷ luật', category: QuestionCategory.C },
  ]},
  { id: 14, options: [
      { text: 'Quả quyết', category: QuestionCategory.D },
      { text: 'Sôi nổi', category: QuestionCategory.I },
      { text: 'Ôn hòa', category: QuestionCategory.S },
      { text: 'Kỹ lưỡng', category: QuestionCategory.C },
  ]},
  { id: 15, options: [
      { text: 'Kiên quyết', category: QuestionCategory.D },
      { text: 'Hay thuyết phục', category: QuestionCategory.I },
      { text: 'Vị tha', category: QuestionCategory.S },
      { text: 'Có óc phân tích', category: QuestionCategory.C },
  ]},
  { id: 16, options: [
      { text: 'Thích chỉ huy', category: QuestionCategory.D },
      { text: 'Lôi cuốn', category: QuestionCategory.I },
      { text: 'Thư thái', category: QuestionCategory.S },
      { text: 'Tuân thủ', category: QuestionCategory.C },
  ]},
  { id: 17, options: [
      { text: 'Mạo hiểm', category: QuestionCategory.D },
      { text: 'Năng động', category: QuestionCategory.I },
      { text: 'Nhất quán', category: QuestionCategory.S },
      { text: 'Chuẩn xác', category: QuestionCategory.C },
  ]},
  { id: 18, options: [
      { text: 'Dứt khoát', category: QuestionCategory.D },
      { text: 'Hay khích lệ', category: QuestionCategory.I },
      { text: 'Sẵn lòng giúp đỡ', category: QuestionCategory.S },
      { text: 'Có trật tự', category: QuestionCategory.C },
  ]},
  { id: 19, options: [
      { text: 'Năng nổ', category: QuestionCategory.D },
      { text: 'Đầy sức sống', category: QuestionCategory.I },
      { text: 'Dễ chịu', category: QuestionCategory.S },
      { text: 'Thận trọng', category: QuestionCategory.C },
  ]},
  { id: 20, options: [
      { text: 'Luôn đòi hỏi', category: QuestionCategory.D },
      { text: 'Thích được chú ý', category: QuestionCategory.I },
      { text: 'Nhẹ nhàng', category: QuestionCategory.S },
      { text: 'Có nguyên tắc', category: QuestionCategory.C },
  ]},
  { id: 21, options: [
      { text: 'Không ngại va chạm', category: QuestionCategory.D },
      { text: 'Đầy thuyết phục', category: QuestionCategory.I },
      { text: 'Thân thiện', category: QuestionCategory.S },
      { text: 'Nghiêm túc', category: QuestionCategory.C },
  ]},
  { id: 22, options: [
      { text: 'Tiên phong', category: QuestionCategory.D },
      { text: 'Tin người', category: QuestionCategory.I },
      { text: 'Hòa giải', category: QuestionCategory.S },
      { text: 'Dựa trên thực tế', category: QuestionCategory.C },
  ]},
  { id: 23, options: [
      { text: 'Thích kiểm soát', category: QuestionCategory.D },
      { text: 'Nói nhiều', category: QuestionCategory.I },
      { text: 'An phận', category: QuestionCategory.S },
      { text: 'Có tiêu chuẩn cao', category: QuestionCategory.C },
  ]},
  { id: 24, options: [
      { text: 'Tham vọng', category: QuestionCategory.D },
      { text: 'Hay thể hiện', category: QuestionCategory.I },
      { text: 'Người lắng nghe', category: QuestionCategory.S },
      { text: 'Có óc tổ chức', category: QuestionCategory.C },
  ]},
];


export const RESULT_PROFILES: Record<QuestionCategory, ResultProfile> = {
  [QuestionCategory.D]: {
    type: QuestionCategory.D,
    title: 'Nhóm D - Thống trị (Dominance)',
    description: 'Bạn là người mạnh mẽ, tự tin, quyết đoán và tập trung vào kết quả. Bạn thích thử thách, chấp nhận rủi ro và luôn muốn kiểm soát tình hình. Trong công việc, bạn là người tiên phong, luôn thúc đẩy mọi thứ tiến về phía trước.',
    strengths: [
      'Tự tin và quyết đoán.',
      'Tập trung vào mục tiêu và kết quả.',
      'Giải quyết vấn đề nhanh chóng, hiệu quả.',
      'Thích lãnh đạo và chịu trách nhiệm.',
      'Làm việc tốt dưới áp lực cao.'
    ],
    challenges: [
      'Có thể thiếu kiên nhẫn với người khác.',
      'Đôi khi bị cho là độc đoán, áp đặt.',
      'Ít quan tâm đến chi tiết và cảm xúc của người khác.',
      'Có xu hướng làm việc độc lập hơn là teamwork.',
      'Khó chấp nhận bị kiểm soát hoặc chỉ trích.'
    ]
  },
  [QuestionCategory.I]: {
    type: QuestionCategory.I,
    title: 'Nhóm I - Ảnh hưởng (Influence)',
    description: 'Bạn là người cởi mở, nhiệt tình, lạc quan và có khả năng thuyết phục người khác. Bạn thích giao tiếp, xây dựng mối quan hệ và truyền cảm hứng. Bạn là chất xúc tác trong đội nhóm, luôn mang lại năng lượng tích cực.',
    strengths: [
      'Nhiệt tình và tràn đầy năng lượng.',
      'Kỹ năng giao tiếp và thuyết phục xuất sắc.',
      'Dễ dàng xây dựng mạng lưới quan hệ.',
      'Sáng tạo và có khả năng truyền cảm hứng.',
      'Lạc quan và nhìn nhận vấn đề theo hướng tích cực.'
    ],
    challenges: [
      'Có thể thiếu tập trung và dễ bị phân tâm.',
      'Ít chú trọng đến chi tiết và tính logic.',
      'Sợ bị từ chối hoặc không được yêu mến.',
      'Đôi khi nói nhiều hơn làm.',
      'Khó khăn trong việc quản lý thời gian và tuân thủ kế hoạch.'
    ]
  },
  [QuestionCategory.S]: {
    type: QuestionCategory.S,
    title: 'Nhóm S - Kiên định (Steadiness)',
    description: 'Bạn là người điềm tĩnh, kiên nhẫn, đáng tin cậy và luôn quan tâm đến người khác. Bạn thích sự ổn định, hòa hợp và là một người biết lắng nghe. Trong đội nhóm, bạn là người gắn kết, tạo ra một môi trường làm việc hài hòa.',
    strengths: [
      'Kiên nhẫn, điềm đạm và đáng tin cậy.',
      'Kỹ năng lắng nghe và đồng cảm tốt.',
      'Là thành viên trung thành và hợp tác trong đội nhóm.',
      'Thực hiện công việc một cách ổn định, có phương pháp.',
      'Giỏi trong việc hòa giải và duy trì sự hòa hợp.'
    ],
    challenges: [
      'Ngại thay đổi và thiếu linh hoạt.',
      'Khó đưa ra quyết định nhanh, đặc biệt dưới áp lực.',
      'Có xu hướng né tránh xung đột.',
      'Ít thể hiện quan điểm cá nhân.',
      'Đôi khi quá khoan dung, dễ bị lợi dụng.'
    ]
  },
  [QuestionCategory.C]: {
    type: QuestionCategory.C,
    title: 'Nhóm C - Tận tâm (Conscientiousness)',
    description: 'Bạn là người cẩn thận, chính xác, có hệ thống và tập trung vào chất lượng. Bạn thích làm việc với dữ liệu, quy trình và các tiêu chuẩn cao. Bạn đảm bảo mọi việc được thực hiện một cách chính xác và đúng đắn.',
    strengths: [
      'Cẩn thận, tỉ mỉ và chú trọng đến chi tiết.',
      'Tư duy logic, phân tích và có hệ thống.',
      'Luôn tuân thủ quy tắc và tiêu chuẩn chất lượng.',
      'Có khả năng lập kế hoạch và tổ chức công việc tốt.',
      'Làm việc độc lập và có tinh thần trách nhiệm cao.'
    ],
    challenges: [
      'Có thể quá cầu toàn, dẫn đến chậm tiến độ.',
      'Ngại rủi ro và những điều không chắc chắn.',
      'Đôi khi quá cứng nhắc và thiếu linh hoạt.',
      'Tập trung vào nhiệm vụ hơn là con người.',
      'Có thể bị sa lầy vào việc phân tích chi tiết.'
    ]
  }
};

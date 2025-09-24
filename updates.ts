export interface UpdateItem {
  version: string;
  date: string;
  title: string;
  description: string;
  features: string[];
  improvements: string[];
  type: 'major' | 'minor' | 'patch';
}

export const UPDATES: UpdateItem[] = [
  {
    version: '2.1.0',
    date: '2024-01-15',
    title: 'Phân tích Nhất quán Nâng cao',
    description: 'Cải thiện thuật toán phân tích tính nhất quán giữa các trạng thái hành vi',
    features: [
      'Báo cáo nhất quán chi tiết với 3 mức độ đánh giá',
      'Phân tích sự khác biệt giữa hành vi tự nhiên và hành vi thích ứng',
      'Cảnh báo khi có sự mâu thuẫn lớn trong câu trả lời'
    ],
    improvements: [
      'Tăng độ chính xác của phân tích tính cách',
      'Giao diện báo cáo trực quan hơn'
    ],
    type: 'major'
  },
  {
    version: '2.0.0',
    date: '2024-01-01',
    title: 'DISC 3-trong-1 Toàn diện',
    description: 'Triển khai hệ thống trắc nghiệm 3 pha hoàn toàn mới',
    features: [
      'Phân tích hành vi trong 3 bối cảnh: Nơi làm việc, Tự nhiên, Áp lực',
      'Biểu đồ trực quan so sánh các trạng thái',
      'Hướng dẫn cụ thể cho từng pha trắc nghiệm',
      'Báo cáo kết quả chi tiết với điểm mạnh và thách thức'
    ],
    improvements: [
      'Giao diện người dùng hiện đại với Tailwind CSS',
      'Trải nghiệm responsive trên mọi thiết bị',
      'Hiệu ứng chuyển tiếp mượt mà'
    ],
    type: 'major'
  },
  {
    version: '1.2.0',
    date: '2023-12-15',
    title: 'Cải thiện Trải nghiệm Người dùng',
    description: 'Tối ưu hóa giao diện và tương tác người dùng',
    features: [
      'Thanh tiến độ hiển thị mức độ hoàn thành',
      'Xác nhận trước khi chuyển sang phần tiếp theo',
      'Nút quay lại để xem lại kết quả'
    ],
    improvements: [
      'Tốc độ tải trang nhanh hơn 40%',
      'Tối ưu hóa cho màn hình nhỏ',
      'Cải thiện khả năng tiếp cận'
    ],
    type: 'minor'
  },
  {
    version: '1.1.0',
    date: '2023-12-01',
    title: 'Biểu đồ Trực quan',
    description: 'Thêm biểu đồ cột để hiển thị kết quả DISC trực quan',
    features: [
      'Biểu đồ cột tương tác với Recharts',
      'Màu sắc phân biệt cho từng loại tính cách',
      'Tooltip hiển thị thông tin chi tiết'
    ],
    improvements: [
      'Dễ dàng so sánh điểm số giữa các yếu tố',
      'Hiển thị kết quả trực quan hơn'
    ],
    type: 'minor'
  },
  {
    version: '1.0.0',
    date: '2023-11-15',
    title: 'Phiên bản Đầu tiên',
    description: 'Ra mắt ứng dụng trắc nghiệm DISC cơ bản',
    features: [
      'Bộ câu hỏi DISC tiêu chuẩn với 24 nhóm từ',
      'Phân tích tính cách theo 4 nhóm: D, I, S, C',
      'Báo cáo kết quả với mô tả chi tiết',
      'Giao diện tiếng Việt thân thiện'
    ],
    improvements: [],
    type: 'major'
  }
];
// === Bài 3: Xử lý danh sách học sinh ===

const students = [
  { name: "An", score: 8.2 },
  { name: "Bình", score: 7.5 },
  { name: "Chí", score: 9.1 },
  { name: "Duy", score: 6.8 },
  { name: "Hà", score: 8.7 },
  { name: "Khánh", score: 5.9 },
  { name: "Lan", score: 7.8 },
  { name: "Minh", score: 9.4 },
  { name: "Ngọc", score: 6.5 },
  { name: "Quân", score: 8.0 }
];

// a) Lọc học sinh có điểm > 8 (Quân đúng 8.0 nên không tính)
let gioi = students.filter(function (student) {
  return student.score > 8;
});
console.log("a) Học sinh điểm > 8:", gioi);

// b) Dùng reduce() để tìm học sinh có điểm cao nhất
let topStudent = students.reduce(function (best, student) {
  return student.score > best.score ? student : best;
}, students[0]);
console.log("b) Học sinh cao nhất:", topStudent.name, "-", topStudent.score);

// c) Điểm trung bình = tổng điểm / số học sinh
let tongDiem = students.reduce(function (sum, student) {
  return sum + student.score;
}, 0);
let diemTrungBinh = tongDiem / students.length;
console.log("c) Điểm trung bình:", diemTrungBinh.toFixed(2));

// d) map() chỉ lấy thuộc tính name -> mảng tên
let tenHocSinh = students.map(function (student) {
  return student.name;
});
console.log("d) Danh sách tên:", tenHocSinh);

// e) sort() theo điểm giảm dần. Dùng slice() để không làm thay đổi mảng gốc.
let sapXepGiamDan = students.slice().sort(function (a, b) {
  return b.score - a.score;
});
console.log("e) Theo điểm giảm dần:", sapXepGiamDan);

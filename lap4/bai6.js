// === Bài 6: Tạo 100 sinh viên giả (fake data) bằng JavaScript thuần ===

// Không dùng Faker.js để khỏi cài đặt thêm thư viện.
// Các hàm tiện ích sinh ngẫu nhiên:

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(array) {
  return array[randomInt(0, array.length - 1)];
}

const ho = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Vũ", "Đặng", "Bùi"];
const ten = ["An", "Bình", "Chí", "Duy", "Hà", "Khánh", "Lan", "Minh", "Ngọc", "Quân"];
const lop = ["CNTT01", "CNTT02", "KT01", "QT01"];

// Tạo 100 đối tượng sinh viên
const fakeStudents = [];
for (let i = 1; i <= 100; i++) {
  fakeStudents.push({
    name: randomItem(ho) + " " + randomItem(ten),
    studentId: "SV" + String(i).padStart(3, "0"),
    gpa: randomInt(50, 100) / 10,
    className: randomItem(lop)
  });
}

console.log("Tổng số sinh viên:", fakeStudents.length);
console.log("10 sinh viên đầu tiên:");
console.table(fakeStudents.slice(0, 10));

// Thống kê nhanh để kiểm tra dữ liệu
const trungBinhGpa = fakeStudents.reduce(function (sum, s) {
  return sum + s.gpa;
}, 0) / fakeStudents.length;
console.log("GPA trung bình:", trungBinhGpa.toFixed(2));

const soLuongTheoLop = {};
fakeStudents.forEach(function (s) {
  soLuongTheoLop[s.className] = (soLuongTheoLop[s.className] || 0) + 1;
});
console.log("Số lượng theo lớp:", soLuongTheoLop);

// Muốn xem toàn bộ 100 sinh viên: console.log(fakeStudents);

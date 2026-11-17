// === Bài 3: Tính lương theo chức vụ và ngày công ===
// Lương = hệ số chức vụ * ngày công * lương cơ bản / ngày công quy định

let chucVu = "staff";
let ngayCong = 22;
let luongCoBan = 5000000;
let ngayCongQuyDinh = 24;
let heSo = 0;

switch (chucVu) {
  case "intern":
    heSo = 1.0;
    break;
  case "staff":
    heSo = 1.5;
    break;
  case "senior":
    heSo = 2.0;
    break;
  case "manager":
    heSo = 3.0;
    break;
  default:
    console.log("Chức vụ không hợp lệ");
}

if (heSo > 0) {
  let luong = heSo * ngayCong * luongCoBan / ngayCongQuyDinh;
  console.log("Chức vụ: " + chucVu);
  console.log("Hệ số: " + heSo);
  console.log("Ngày công: " + ngayCong);
  console.log("Lương: " + luong.toLocaleString("vi-VN") + "đ");
}

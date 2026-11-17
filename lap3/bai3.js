// === Bài 3: Hàm tính lương theo chức vụ và ngày công ===
// Lương = hệ số * ngày công * lương cơ bản / ngày công quy định

function tinhLuong(chucVu, ngayCong) {
  const luongCoBan = 5000000;
  const ngayCongQuyDinh = 24;
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
      return "Chức vụ không hợp lệ";
  }

  return heSo * ngayCong * luongCoBan / ngayCongQuyDinh;
}

let luong = tinhLuong("staff", 22);
console.log("staff, 22 ngày: " + luong.toLocaleString("vi-VN") + "đ");
console.log("manager, 24 ngày: " + tinhLuong("manager", 24).toLocaleString("vi-VN") + "đ");

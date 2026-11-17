// === Bài 2: Hàm tính tiền điện theo bậc ===
// 0–50 kWh: 1.800đ, 51–100 kWh: 2.300đ, trên 100 kWh: 3.000đ.
// Mỗi bậc chỉ tính cho số điện nằm trong bậc đó.

function tinhTienDien(kwh) {
  if (kwh <= 50) {
    return kwh * 1800;
  }

  if (kwh <= 100) {
    return 50 * 1800 + (kwh - 50) * 2300;
  }

  return 50 * 1800 + 50 * 2300 + (kwh - 100) * 3000;
}

function tinhSoDien(tien) {
  const tienBac1 = 50 * 1800;
  const tienBac2 = 50 * 2300;

  if (tien <= tienBac1) {
    return tien / 1800;
  }

  if (tien <= tienBac1 + tienBac2) {
    return 50 + (tien - tienBac1) / 2300;
  }

  return 100 + (tien - tienBac1 - tienBac2) / 3000;
}

console.log("120 kWh -> " + tinhTienDien(120).toLocaleString("vi-VN") + "đ");

let tienNha = 910000;
console.log(
  "Nhà đóng " + tienNha.toLocaleString("vi-VN") + "đ đang dùng " + tinhSoDien(tienNha) + " kWh"
);

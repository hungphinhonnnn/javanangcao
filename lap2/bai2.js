

function tinhTienDien(kwh) {
  let tien = 0;

  if (kwh <= 50) {
    tien = kwh * 1800;
  } else if (kwh <= 100) {
    tien = 50 * 1800 + (kwh - 50) * 2300;
  } else {
    tien = 50 * 1800 + 50 * 2300 + (kwh - 100) * 3000;
  }

  return tien;
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

let soDien = 120;
console.log(soDien + " kWh -> " + tinhTienDien(soDien).toLocaleString("vi-VN") + "đ");

let tienNha = 910000;
let soDienNha = tinhSoDien(tienNha);
console.log(
  "Nhà đóng " + tienNha.toLocaleString("vi-VN") + "đ đang dùng " + soDienNha + " kWh"
);

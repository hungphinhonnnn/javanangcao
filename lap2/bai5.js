// === Bài 5: Kiểm tra số nguyên tố ===
// Số nguyên tố chỉ chia hết cho 1 và chính nó.

let n = 17;
let laNguyenTo = true;

if (n < 2) {
  laNguyenTo = false;
} else {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      laNguyenTo = false;
      break;
    }
  }
}

if (laNguyenTo) {
  console.log(n + " là số nguyên tố");
} else {
  console.log(n + " không phải số nguyên tố");
}

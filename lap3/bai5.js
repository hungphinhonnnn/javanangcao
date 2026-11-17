// === Bài 5: Hàm calculator như máy tính cầm tay ===

function calculator(a, phepTinh, b) {
  switch (phepTinh) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Không thể chia cho 0";
      }
      return a / b;
    default:
      return "Phép tính không hợp lệ";
  }
}

console.log(calculator(10, "+", 5));
console.log(calculator(10, "-", 5));
console.log(calculator(10, "*", 5));
console.log(calculator(10, "/", 5));
console.log(calculator(10, "/", 0));

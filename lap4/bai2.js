// === Bài 2: Lọc số chẵn và nhân đôi bằng filter/map ===

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// a) filter() giữ lại các phần tử thỏa điều kiện -> mảng mới
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log("a) evenNumbers:", evenNumbers);

// b) map() biến đổi từng phần tử -> mảng mới cùng kích thước
let doubledEvenNumbers = evenNumbers.map(function (number) {
  return number * 2;
});
console.log("b) doubledEvenNumbers:", doubledEvenNumbers);

// Có thể viết gọn bằng arrow function:
// let evenNumbers = numbers.filter(n => n % 2 === 0);
// let doubledEvenNumbers = evenNumbers.map(n => n * 2);

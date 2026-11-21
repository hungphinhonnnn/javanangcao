// === Bài 4: Sắp xếp sản phẩm theo giá tăng dần ===

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 30 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 300 }
];

// a) sort((a, b) => a.price - b.price) -> giá nhỏ đứng trước
// slice() tạo bản sao để giữ nguyên mảng products ban đầu
let sortedProducts = products.slice().sort(function (a, b) {
  return a.price - b.price;
});

// b) In mảng sau khi sắp xếp
console.log("b) Mảng sau khi sắp xếp tăng dần theo giá:");
console.log(sortedProducts);

// In lại dưới dạng bảng cho dễ đọc
console.table(sortedProducts);

// === Bài 5: Bài toán thực tế - Quản lý đơn hàng bằng mảng và đối tượng ===

// Đề bài: Một quán cà phê có các đơn hàng, mỗi đơn gồm mã đơn, tên khách,
// trạng thái và danh sách món (tên, số lượng, đơn giá). Hãy tính:
// 1) Tổng tiền từng đơn, 2) Doanh thu các đơn đã xong,
// 3) Món bán chạy nhất (tổng số lượng bán được).

const orders = [
  {
    id: "DH001",
    customer: "An",
    status: "done",
    items: [
      { name: "Cà phê", quantity: 2, price: 25000 },
      { name: "Bánh mì", quantity: 1, price: 15000 }
    ]
  },
  {
    id: "DH002",
    customer: "Bình",
    status: "pending",
    items: [{ name: "Trà sữa", quantity: 3, price: 30000 }]
  },
  {
    id: "DH003",
    customer: "Chí",
    status: "done",
    items: [
      { name: "Cà phê", quantity: 1, price: 25000 },
      { name: "Trà sữa", quantity: 2, price: 30000 }
    ]
  }
];

// 1) Tính tổng tiền từng đơn: map() tạo mảng mới, không sửa dữ liệu gốc
const ordersWithTotal = orders.map(function (order) {
  const total = order.items.reduce(function (sum, item) {
    return sum + item.quantity * item.price;
  }, 0);
  return { ...order, total: total };
});

console.log("1) Tổng tiền từng đơn:");
ordersWithTotal.forEach(function (order) {
  console.log(
    "  " + order.id + " - " + order.customer + ": " +
    order.total.toLocaleString("vi-VN") + "đ"
  );
});

// 2) Lọc các đơn đã hoàn thành
const doneOrders = ordersWithTotal.filter(function (order) {
  return order.status === "done";
});
console.log("2) Đơn đã hoàn thành:", doneOrders.map(function (o) { return o.id; }));

// 3) Doanh thu = tổng tiền các đơn đã hoàn thành
const revenue = doneOrders.reduce(function (sum, order) {
  return sum + order.total;
}, 0);
console.log("3) Doanh thu:", revenue.toLocaleString("vi-VN") + "đ");

// 4) Đếm số lượng từng món bằng đối tượng làm "bảng đếm"
const itemCounts = {};
orders.forEach(function (order) {
  order.items.forEach(function (item) {
    itemCounts[item.name] = (itemCounts[item.name] || 0) + item.quantity;
  });
});

// Tìm món có số lượng lớn nhất
let bestItem = null;
for (const name in itemCounts) {
  if (bestItem === null || itemCounts[name] > itemCounts[bestItem]) {
    bestItem = name;
  }
}
console.log("4) Món bán chạy nhất:", bestItem, "-", itemCounts[bestItem], "ly");
console.log("   Bảng đếm:", itemCounts);

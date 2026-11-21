// === Bài 1: Thao tác cơ bản với mảng shoppingList ===

let shoppingList = ["Trứng", "Thịt", "Rau"];

// a) In ra số lượng mặt hàng ban đầu (dùng thuộc tính length)
console.log("a) Số lượng mặt hàng ban đầu:", shoppingList.length);

// b) Thêm "Sữa" vào cuối danh sách (push)
shoppingList.push("Sữa");

// c) Thêm "Bánh mì" vào đầu danh sách (unshift)
shoppingList.unshift("Bánh mì");

// d) Xóa mặt hàng cuối cùng (pop trả về phần tử bị xóa)
let matHangVuaXoa = shoppingList.pop();
console.log("d) Mặt hàng vừa xóa:", matHangVuaXoa);

// e) Mặt hàng thứ 2 = chỉ số 1 (mảng bắt đầu từ chỉ số 0)
console.log("e) Mặt hàng thứ 2:", shoppingList[1]);

console.log("Danh sách cuối cùng:", shoppingList);

// === Bài 4: Hàm chuẩn hóa câu ===
// Xóa khoảng trắng thừa, dính dấu câu vào từ phía trước,
// rồi viết hoa chữ cái đầu câu và sau dấu . ! ?

function chuanHoaCau(cau) {
  let ketQua = cau.trim().replace(/\s+/g, " ");
  ketQua = ketQua.replace(/\s+([.!?])/g, "$1");
  ketQua = ketQua.replace(/([.!?])(?=\S)/g, "$1 ");
  ketQua = ketQua.replace(/(^|[.!?]\s+)(\p{L})/gu, function (match, dau, chu) {
    return dau + chu.toUpperCase();
  });
  return ketQua;
}

let input = "  xin chao  cac ban.  hom nay  troi dep qua  !toi  di hoc ve ? ";
console.log(chuanHoaCau(input));

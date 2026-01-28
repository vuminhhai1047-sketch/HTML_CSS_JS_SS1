// ===== BƯỚC 1: NHẬP DỮ LIỆU =====
let tenSach = prompt("Nhập tên sách:");
let tacGia = prompt("Nhập tên tác giả:");
let namXuatBan = prompt("Nhập năm xuất bản:");
let giaTien = prompt("Nhập giá tiền một cuốn:");
let soLuong = prompt("Nhập số lượng nhập kho:");

// ===== BƯỚC 2: CHUẨN HÓA DỮ LIỆU =====
tenSach = tenSach.trim().toUpperCase();
tacGia = tacGia.toUpperCase();

namXuatBan = Number(namXuatBan);
giaTien = Number(giaTien);
soLuong = Number(soLuong);

// ===== BƯỚC 3: TẠO MÃ SÁCH =====
// Lấy 3 ký tự đầu của tên tác giả (bỏ khoảng trắng đầu nếu có)
let maTacGia = tacGia.replace(/\s+/g, " ").trim().substring(0, 3);

// Số ngẫu nhiên từ 1 đến 1000
let soNgauNhien = Math.floor(Math.random() * 1000) + 1;

// Mã sách
let maSach = `${maTacGia}${namXuatBan}-${soNgauNhien}`;

// ===== BƯỚC 4: TÍNH TOÁN =====
let namHienTai = 2026;
let tuoiSach = namHienTai - namXuatBan;

let tongGiaTri = giaTien * soLuong;

// Ngăn kệ ngẫu nhiên từ 1–10
let keSach = Math.floor(Math.random() * 10) + 1;

// ===== BƯỚC 5: IN PHIẾU NHẬP KHO =====
console.log(`--- PHIẾU NHẬP KHO ---

Mã sách: ${maSach}
Tên sách: ${tenSach}
Tác giả: ${tacGia}
Năm xuất bản: ${namXuatBan}
Tuổi sách: ${tuoiSach} năm
Tổng giá trị: ${tongGiaTri} VNĐ
Ngăn kệ gợi ý: Kệ số ${keSach}
`);
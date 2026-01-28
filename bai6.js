
        // Bước 1: Nhập dữ liệu
        let tenSachGoc = prompt("Nhập tên sách:");
        let soThuTu = prompt("Nhập số thứ tự của sách trong thư viện:");

        // Bước 2: Xử lý dữ liệu
        // Bỏ khoảng trắng thừa hai đầu và viết hoa toàn bộ
        let tenSachChuanHoa = tenSachGoc.trim().toUpperCase();

        // Tạo mã sách theo mẫu
        let maSach = "LIB - " + tenSachChuanHoa + " - " + soThuTu;

        // Bước 3: Xuất kết quả ra console
        console.log("Tên sách gốc: " + tenSachGoc);
        console.log("Mã sách sau chuẩn hóa: " + maSach);
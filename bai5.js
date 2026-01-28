// Bước 1: Nhập dữ liệu
        let tenSach = prompt("Nhập tên sách:");
        let namXuatBan = prompt("Nhập năm xuất bản của sách:");
        let namHienTai = prompt("Nhập năm hiện tại:");

        // Bước 2: Xử lý dữ liệu
        namXuatBan = Number(namXuatBan);
        namHienTai = Number(namHienTai);

        let tuoiSach = namHienTai - namXuatBan;

        // Bước 3: Xuất kết quả ra console
        console.log("Sách: " + tenSach);
        console.log("Năm xuất bản: " + namXuatBan);
        console.log("Tuổi của sách: " + tuoiSach + " năm");
// Nhập số sách cũ
        let sachCu = prompt("Nhập số sách cũ:");
        sachCu = Number(sachCu);

        // Nhập số sách mới
        let sachMoi = prompt("Nhập số sách mới nhập:");
        sachMoi = Number(sachMoi);

        // Tính tổng số sách hiện tại
        let tongSoSach = sachCu + sachMoi;

        // In ra kết quả
        console.log("Tổng số sách hiện tại là: " + tongSoSach);
        document.write("Tổng số sách hiện tại là: " + tongSoSach);
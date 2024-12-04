export default {
  unNhanLucMap: async () => {
    try {
      // Lấy dữ liệu từ findNhanCuuTros.run()
      const NhanLuc = await findNhanCuuTros.run(); // Đảm bảo run() trả về Promise
      console.log("Dữ liệu nhân lực:", NhanLuc);

   
      NhanLuc.forEach((item) => {
       				  huyNhanLucs.run({"id":item.id_nhan_luc});	
      });

      // Trả về dữ liệu đã xử lý (nếu cần)
      return NhanLuc;
    } catch (error) {
      console.error("Lỗi khi xử lý nhân lực:", error);
    }
  },
};

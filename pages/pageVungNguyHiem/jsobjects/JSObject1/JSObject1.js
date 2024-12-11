export default {
	checklogin:  async () => {
		const check = appsmith.store.id_admin;
		if(check === undefined){
			navigateTo("pageDangNhap");
			showAlert("Bạn chưa đăng nhập","error");
		}
	},
	async getCurrentLoction () {
		var location = await appsmith.geolocation.getCurrentPosition()
		// appsmith.store
		return {
			'lat' : location.coords.latitude,
			'lng' : location.coords.longitude,
		}
	},
	actionCreateVungNguyHiem: async () => {
		try {
			// Lấy vị trí hiện tại
			const createdAt = new Date();
			const location = appsmith.store.address || this.getCurrentLoction();
			if (!inp_tenvung.text || !input_mota.text || !input_mucdo.text) {
				showAlert("Không được để trống.", "error");
				return;
			}
			const uuid = UUID.genV4();
			const obj = {
				id: uuid.hexNoDelim,
				toa_do_x: location.lat,
				toa_do_y: location.lng,
				created_at: createdAt.toISOString()

			};
			// Lưu vùng nguy hiểm và tải lại danh sách
			await Insert_vung_nguy_hiem1.run(obj);
			await Find_vung_nguy_hiem1.run();

			// Thông báo thành công
			showAlert("Vùng nguy hiểm đã được tạo thành công!", "success");

			// Đóng modal
			closeModal(modal_adduser.name);
		} catch (error) {
			// Xử lý lỗi
			showAlert(`Có lỗi xảy ra: ${error.message}`, "error");
		}
	}


}
export default {
	checklogin:  async () => {
		const check = appsmith.store.id_admin;
		if(check === null){
			navigateTo("pageDangNhap");
			showAlert("Bạn chưa đăng nhập","error");
		}
	},
	async getCurrentLoction () {
		var location = await appsmith.geolocation.getCurrentPosition()
		appsmith.store
		return {
			'lat' : location.coords.latitude,
			'lng' : location.coords.longitude,
		}
	},
	actionCreateThongBao: async () => {
		// Assuming `getAdmins` is a query to fetch existing admins
		const uuid = UUID.genV4();
		console.log(uuid);
		const obj = {
			id:uuid.hexNoDelim,
		};
		await Insert_vung_nguy_hiem1.run(obj);
		await Find_vung_nguy_hiem1.run();
		showAlert("Vùng Nguy hiểm báo đã được tạo thành công!", "success");
		closeModal(modal_adduser.name);
	}

}
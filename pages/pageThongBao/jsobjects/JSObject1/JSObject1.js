export default {
	checklogin:  async () => {
		const check = appsmith.store.id_admin;
		if(check === null){
			navigateTo("pageDangNhap");
			showAlert("Bạn chưa đăng nhập","error");
		}
	},
	actionCreateThongBao: async () => {
		// Assuming `getAdmins` is a query to fetch existing admins
		const uuid = UUID.genV4();
		console.log(uuid);
		const obj = {
			id:uuid.hexNoDelim,
		};
		await insertThongBaos.run(obj);
		await getNguyHiem.run();
		showAlert("Thông báo đã được tạo thành công!", "success");
		await getNguyHiem.run();
		closeModal(modal_adduser.name);

	},
}
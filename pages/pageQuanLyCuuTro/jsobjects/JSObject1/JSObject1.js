export default {
	checklogin:  async () => {
		const check = appsmith.store.id_admin;
		if(check === null){
			navigateTo("pageDangNhap");
			showAlert("Bạn chưa đăng nhập","error");
		}
	},
}
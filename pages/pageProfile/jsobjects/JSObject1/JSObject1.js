export default {
	checklogin:  async () => {
		const check = appsmith.store.id_admin;
		if(check === undefined){
			navigateTo("pageDangNhap");
			showAlert("Bạn chưa đăng nhập","error");
		}
	},
}
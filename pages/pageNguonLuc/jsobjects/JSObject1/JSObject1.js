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
	// Hàm mã hóa mật khẩu
	generatePasswordHash: async () => {
		// Mã hóa mật khẩu
		var password_hash = dcodeIO.bcrypt.hashSync(input_pass.text, 10);
		console.log(password_hash); // Kiểm tra mật khẩu đã mã hóa
		return password_hash; // Trả về mật khẩu đã mã hóa
	},
	generatePasswordHash_1: async () => {
		// Mã hóa mật khẩu
		var password_hash = dcodeIO.bcrypt.hashSync(txt_newpass2.text, 10);
		console.log(password_hash); // Kiểm tra mật khẩu đã mã hóa
		return password_hash; // Trả về mật khẩu đã mã hóa
	},
	async getLocation () {
		var location = await appsmith.geolocation.getCurrentPosition()
		appsmith.store
		return {
			'lat' : location.coords.latitude,
			'lng' : location.coords.longitude,
		}
	},
	actionCreateNguonLuc: async () => {
		// Lấy thông tin từ các trường nhập liệu
		const username = inp_username.text;
		const tenNhaTaiTro = inp_nha_tai_tro.text;
		const soDienThoai = input_sdt.text;
		const diaChi = input_dia_chi.text;
		const nguoiDaiDien = inp_nguoi_dai_dien.text;
		const email = input_email.text;
		const idLoaiNguonLuc = Select1.selectedOptionValue;

		// Lấy tọa độ
		const location = appsmith.store.address ||this.getLocation() ;

		// Kiểm tra các trường bắt buộc
		if (!username || !tenNhaTaiTro || !soDienThoai || !diaChi || !nguoiDaiDien || !email || !idLoaiNguonLuc) {
			showAlert("Vui lòng nhập đầy đủ thông tin bắt buộc!", "error");
			return;
		}

		// Kiểm tra định dạng email
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!emailPattern.test(email)) {
			showAlert("Địa chỉ email không hợp lệ!", "error");
			return;
		}

		// Kiểm tra định dạng số điện thoại (10 số)
		const phonePattern = /^[0-9]{10}$/;
		if (!phonePattern.test(soDienThoai)) {
			showAlert("Số điện thoại không hợp lệ! (Phải có 10 chữ số)", "error");
			return;
		}

		// Tạo password hash và UUID
		const password = await this.generatePasswordHash();
		const uuid = UUID.genV4();

		// Chuẩn bị object để gửi API
		const obj = {
			id: uuid.hexNoDelim,
			username: username,
			ten_nha_tai_tro: tenNhaTaiTro,
			so_dien_thoai: soDienThoai,
			dia_chi: diaChi,
			toa_do_x: location?.lat || 0,
			toa_do_y: location?.lng || 0,
			nguoi_dai_dien: nguoiDaiDien,
			id_loai_nguon_luc: idLoaiNguonLuc,
			email: email,
			password: password,
			is_open: true,
		};
		// Gửi yêu cầu tạo nguồn lực
		await insertNguonLuc.run(obj);
		showAlert("Nguồn lực đã được tạo thành công!", "success");

		// Lấy lại danh sách nguồn lực và đóng modal
		await getNguocLucs.run();
		closeModal(modal_adduser.name);
	},
	// doiPassword: async () => {
	// // Assuming `getAdmins` is a query to fetch existing admins
	// const password = await this.generatePasswordHash();
	// console.log(password);
	// const uuid = UUID.genV4();
	// console.log(uuid);
	// 
	// 
	// const obj = {
	// id:uuid.hexNoDelim,
	// username: inp_fullname.text,
	// email: input_email.text,
	// password: password, 
	// is_master: false,
	// id_quyen: add_select.selectedOptionValue,
	// is_open: true
	// };
	// await insertAdmins.run(obj);
	// showAlert("Admin đã được tạo thành công!", "success");
	// closeModal(modal_adduser.name);
	// 
	// }




}
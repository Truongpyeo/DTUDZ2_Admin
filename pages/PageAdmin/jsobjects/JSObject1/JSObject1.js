export default {
	// Hàm mã hóa mật khẩu
	generatePasswordHash: async () => {
		// Mã hóa mật khẩu
		const password_hash = await dcodeIO.bcrypt.hash(input_pass.text, 10);
		console.log(password_hash); // Kiểm tra mật khẩu đã mã hóa
		return password_hash; // Trả về mật khẩu đã mã hóa
	},

	actionCreateAdmin: async () => {
		try {
			const obj = {
				id: getAdmins.data.length + 1,
				username: inp_fullname.text,
				email: input_email.text,
				password: await this.generatePasswordHash(),
				is_master: false,
				id_quyen: add_select.selectedOptionValue,
				is_open: true
			};
			await insertAdmins.run(obj);
			showAlert("Admin đã được tạo thành công!", "success");
		} catch (error) {
			console.error("Lỗi tạo admin:", error);
			showAlert("Có lỗi xảy ra khi tạo admin.", "error");
		}
	}
}

export default {
	actionCreateAdmin: async () => {
		// Assuming `getAdmins` is a query to fetch existing admins
		const uuid = UUID.genV4();
		console.log(uuid);
		const obj = {
			id:uuid.hexNoDelim,
		};
		await insertThongBaos.run(obj);
		showAlert("Thông báo đã được tạo thành công!", "success");
		await getNguyHiem.run();
		closeModal(modal_adduser.name);

	},
}
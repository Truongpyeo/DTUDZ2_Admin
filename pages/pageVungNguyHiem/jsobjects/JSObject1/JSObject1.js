export default {
	actionCreateThongBao: async () => {
		// Assuming `getAdmins` is a query to fetch existing admins
		const uuid = UUID.genV4();
		console.log(uuid);
		const obj = {
			id:uuid.hexNoDelim,
		};
		await Insert_vung_nguy_hiem1.run(obj);
		await Find_vung_nguy_hiem1..run();
		showAlert("Vùng Nguy hiểm báo đã được tạo thành công!", "success");
		closeModal(modal_adduser.name);

	},
}
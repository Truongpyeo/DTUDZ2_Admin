export default {
	getAllUsers: async () => {
		const users = await getUsers.run();
		let list_user = [];
		users.forEach((value, index) => {
			var item = {
				FullName: value.ho_va_ten,
				Email: value.email,
				Phone: value.so_dien_thoai,
				Address: value.dia_chi,
				IsActive: value.is_active,
				IsOpen: value.is_open,
				Birthday: value.ngay_sinh, // Use the formatDate function to format the date
				CCCD: value.cccd,
				Id: value._id
			}
			list_user.push(item)
		})
		var date = moment.now();
		console.log(date)
		return list_user

		// Define the formatDate function outside of map to avoid scope issues


		// return users.map(u => {
		// return {

		// };
		// });
	},
	getUerTest: () => {
		
	},
	formatDateToISO: (date) => { const [day, month, year] = date.split('/'); return `${year}-${month}-${day}`; },
	// newUser: async () => {
	// const formattedDate = this.formatDateToISO(inp_birth.formattedDate);
	// 
	// await InsertUser.run({formattedDate});
	// await this.getAllUsers(); // Make sure getAllUsers is called to update the user list
	// closeModal('modal_adduser'); // Close the modal after creating the user
	// showAlert('User Created!', 'success'); // Show a success alert
	// },
	// editUser: async () => {
	// await UpdateUser.run();
	// 
	// await this.getAllUsers();
	// 
	// closeModal('modal_edituser');
	// 
	// showAlert('User Updated!', 'success');
	// },
	// changeActive: async (id_user,is_active) => {
	// await ChangeActive.run({ id_user,is_active });
	// },

	// removeUser: async () => {
	// await DeleteUser.run();
	// 
	// await this.getAllUsers();
	// 
	// closeModal('mdl_deleteUser');
	// 
	// showAlert('User Deleted!', 'success');
	// },




	// Uncomment and use this for password hashing, if needed
	// generateHash: async (password) => {
	//   return dcodeIO.bcrypt.hashSync(password, 10);
	// },
};

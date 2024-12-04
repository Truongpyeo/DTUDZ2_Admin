export default {
	getAllUsers: async () => {
		const users = await getUser.run();

		// Define the formatDate function outside of map to avoid scope issues
		const formatDate = (dateStr) => {
			const date = new Date(dateStr);
			const day = ("0" + date.getDate()).slice(-2); // Ensure day is 2 digits
			const month = ("0" + (date.getMonth() + 1)); // Months are 0-indexed
			const year = date.getFullYear().toString(); // Get full year
			return `${day}/${month}/${year}`;
		};

		return users.map(u => {
			return {
				FullName: u.ho_va_ten,
				Email: u.email,
				Phone: u.so_dien_thoai,
				Address: u.dia_chi,
				IsActive: u.is_active,
				IsOpen: u.is_open,
				Birthday: formatDate(u.ngay_sinh), // Use the formatDate function to format the date
				CCCD: u.cccd,
				Id: u._id
			};
		});
	},
	// formatDateToISO: (date) => { const [day, month, year] = date.split('/'); return `${year}-${month}-${day}`; },
	// newUser: async () => {
	// const formattedDate = this.formatDateToISO(inp_birth.formattedDate);
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

	// removeUser: async () => {
	// await deleteUser.run();
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

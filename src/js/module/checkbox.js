document.addEventListener('DOMContentLoaded', (e) => {
	const checkboxList = document.querySelectorAll('.checkbox');
	Array.from(checkboxList).forEach((checkbox) => {
		const checkboxControl = checkbox.querySelector('.checkbox__control');

		checkboxControl.addEventListener('change', () => {
			if (checkboxControl.checked) {
				if (!checkbox.classList.contains('checkbox_checked')) {
					checkbox.classList.add('checkbox_checked');
				}
			} else {
				if (checkbox.classList.contains('checkbox_checked')) {
					checkbox.classList.remove('checkbox_checked');
				}
			}
		});
	});
});

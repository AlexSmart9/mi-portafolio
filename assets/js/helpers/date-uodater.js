function updateYear() {
	const currentYear = new Date().getFullYear(); //2024
	const copyrightElement = document.querySelector('.footer__copy');
	copyrightElement.textContent = `© ${currentYear}, All rights reserved.`;
}

export default updateYear;
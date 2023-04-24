const sideMenu = document.querySelector('aside'),
	menuBtn = document.querySelector('#menu-btn'),
	closeBtn = document.querySelector('#close-btn'),
	themeToggler = document.querySelector('.theme-toggler');

//show sidebar
menuBtn.addEventListener('click', (e) => {
	sideMenu.style.display = 'block';
});

//close sidebar
closeBtn.addEventListener('click', (e) => {
	sideMenu.style.display = 'none';
});

//change theme
themeToggler.addEventListener('click', (e) => {
	document.body.classList.toggle('dark-theme-variables');

	themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
	themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

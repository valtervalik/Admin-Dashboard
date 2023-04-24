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

//fill orders in table
Orders.forEach((order) => {
	const tr = document.createElement('tr'),
		trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class='${
			order.shipping === 'Declined'
				? 'danger'
				: order.shipping === 'Pending'
				? 'warning'
				: 'success'
		}'>${order.shipping}</td>
    <td>Details</td>
    `;

	tr.innerHTML = trContent;
	document.querySelector('table tbody').appendChild(tr);
});

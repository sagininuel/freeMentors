const acceptButton = document.getElementById('signUp');
const declineButton = document.getElementById('signIn');
const container = document.getElementById('container');

declineButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

acceptButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});
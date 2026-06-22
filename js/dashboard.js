document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.querySelector('.dashboard-card h2');
    const userName = localStorage.getItem('userName') || 'Student';
    if (welcomeMessage) {
        welcomeMessage.textContent = `Welcome back, ${userName}!`;
    }
});

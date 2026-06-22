document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = loginForm.email.value.trim();
            const password = loginForm.password.value.trim();

            if (email && password) {
                localStorage.setItem('userEmail', email);
                window.location.href = 'dashboard.html';
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = registerForm.name.value.trim();
            const email = registerForm.email.value.trim();
            const password = registerForm.password.value.trim();

            if (name && email && password) {
                localStorage.setItem('userName', name);
                localStorage.setItem('userEmail', email);
                window.location.href = 'dashboard.html';
            }
        });
    }
});

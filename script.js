if (window.location.pathname.includes ('login.html') && !localStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html';
}

document.getElementById('registerForm')?.addEventListener('submit', registerUser);

function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (localStorage.getItem(username)) {
        alert('Username sudah terdaftar!');
    } else {
        localStorage.setItem(username, password);
        alert('Registrasi Berhasil!');
        window.location.href = 'login.html';
    }
}

document.getElementById('loginForm')?.addEventListener('submit', validateLogin);

function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert('Login Berhasil!');
        window.location.href = 'index.html';
    } else {
        alert('Username atau Password salah!');
    }
}

document.getElementById('togglePassword')?.addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const passwordIcon = document.getElementById('togglePassword').querySelector('i');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordIcon.classList.remove('bi-eye-slash');
        passwordIcon.classList.add('bi-eye');
    } else {
        passwordField.type = 'password';
        passwordIcon.classList.remove('bi-eye');
        passwordIcon.classList.add('bi-eye-slash');
    }
});

document.querySelector('.logout-link')?.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.removeItem('isLoggedIn'); 
    localStorage.removeItem('username'); 
    alert('Anda telah berhasil logout.');
    window.location.href = 'login.html';
});




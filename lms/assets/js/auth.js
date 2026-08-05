// LMS Authentication Handlers
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('lmsLoginForm');
  const registerForm = document.getElementById('lmsRegisterForm');
  const forgotForm = document.getElementById('lmsForgotForm');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const res = await API.login(email, password);
      if (res.user.role === 'admin') {
        window.location.href = '/lms/admin/admin-dashboard.html';
      } else {
        window.location.href = '/lms/student/dashboard.html';
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      await API.register({ name, email, password });
      window.location.href = '/lms/student/dashboard.html';
    });
  }

  if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const alertBox = document.getElementById('forgotAlert');
      if (alertBox) {
        alertBox.classList.remove('d-none');
        alertBox.textContent = 'Password reset instructions sent to your email!';
      }
    });
  }
});

function logoutLMS() {
  localStorage.removeItem('lms_token');
  localStorage.removeItem('lms_user');
  window.location.href = '/lms/auth/login.html';
}

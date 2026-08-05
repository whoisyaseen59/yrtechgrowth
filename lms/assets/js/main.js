// Main UI Controller for LMS
document.addEventListener('DOMContentLoaded', () => {
  // Render user name in header if available
  const userStr = localStorage.getItem('lms_user');
  if (userStr) {
    const user = JSON.parse(userStr);
    const userDisplay = document.querySelectorAll('.lms-user-name');
    userDisplay.forEach(el => el.textContent = user.name || 'User');
  }

  // Toast notification helper
  window.showLmsToast = (msg, type = 'success') => {
    let container = document.getElementById('lmsToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'lmsToastContainer';
      container.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999;';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `alert alert-${type === 'success' ? 'warning' : 'danger'} alert-dismissible fade show text-dark fw-bold border-0 shadow-lg`;
    toast.innerHTML = `<i class="fa-solid fa-bell me-2"></i> ${msg} <button type="button" class="btn-close" data-bs-dismiss="alert"></button>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  };
});

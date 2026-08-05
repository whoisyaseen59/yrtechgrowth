// Certificate Generator
document.addEventListener('DOMContentLoaded', () => {
  const userStr = localStorage.getItem('lms_user');
  const studentNameEl = document.getElementById('certStudentName');
  if (userStr && studentNameEl) {
    const u = JSON.parse(userStr);
    studentNameEl.textContent = u.name || 'Muhammad Yaseen';
  }
});

function printCertificate() {
  window.print();
}

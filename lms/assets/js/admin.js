// LMS Admin Panel Handler
document.addEventListener('DOMContentLoaded', () => {
  const addCourseForm = document.getElementById('adminAddCourseForm');
  if (addCourseForm) {
    addCourseForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.getElementById('courseTitle').value;
      const category = document.getElementById('courseCategory').value;
      const description = document.getElementById('courseDescription').value;
      
      await API.addCourse({ title, category, description, instructor: 'Muhammad Yaseen Rashid', thumbnail: '/assets/images/hero.webp', lessonsCount: 12, duration: '8 Hours' });
      showLmsToast('New LMS course created successfully!');
      setTimeout(() => {
        window.location.href = '/lms/admin/admin-courses.html';
      }, 1200);
    });
  }
});

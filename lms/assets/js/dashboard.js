// LMS Student Dashboard Engine
document.addEventListener('DOMContentLoaded', async () => {
  const coursesContainer = document.getElementById('enrolledCoursesGrid');
  if (coursesContainer) {
    const enrolled = await API.getEnrolledCourses();
    coursesContainer.innerHTML = '';
    enrolled.forEach(c => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4 mb-4';
      col.innerHTML = `
        <div class="card lms-card h-100">
          <img src="${c.thumbnail}" class="card-img-top" alt="${c.title}" style="height: 180px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <span class="lms-badge w-fit mb-2">${c.category}</span>
            <h5 class="card-title fw-bold text-white mb-2">${c.title}</h5>
            <p class="text-muted small mb-3 flex-grow-1">${c.description.substring(0, 80)}...</p>
            <div class="mb-3">
              <div class="d-flex justify-content-between small text-warning mb-1">
                <span>Progress</span>
                <span>${c.id === 1 ? '75%' : '40%'}</span>
              </div>
              <div class="progress progress-lms">
                <div class="progress-bar progress-bar-gold" style="width: ${c.id === 1 ? '75%' : '40%'}"></div>
              </div>
            </div>
            <a href="/lms/student/course-player.html?id=${c.id}" class="btn btn-lms-gold w-100 mt-auto">
              <i class="fa-solid fa-play me-1"></i> Continue Learning
            </a>
          </div>
        </div>
      `;
      coursesContainer.appendChild(col);
    });
  }
});

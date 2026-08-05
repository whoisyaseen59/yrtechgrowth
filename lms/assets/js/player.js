// Video Player & Lesson Playlist Manager
const sampleLessons = [
  { id: 1, title: "Module 1: Introduction to Meta Ads Platform 2026", duration: "18:40", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, title: "Module 2: Meta Conversion API (CAPI) & Pixel Setup", duration: "24:15", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 3, title: "Module 3: High-ROAS Audience Targeting & Lookalikes", duration: "32:10", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 4, title: "Module 4: Ad Creatives, Copywriting & Dynamic Catalog Ads", duration: "28:50", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 5, title: "Module 5: Scaling Budget & Campaign Optimization Rules", duration: "41:00", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

document.addEventListener('DOMContentLoaded', () => {
  const playlistContainer = document.getElementById('lessonPlaylist');
  const iframePlayer = document.getElementById('lmsVideoFrame');
  const currentTitle = document.getElementById('currentLessonTitle');

  if (playlistContainer && iframePlayer) {
    playlistContainer.innerHTML = '';
    sampleLessons.forEach((lesson, index) => {
      const item = document.createElement('div');
      item.className = `playlist-item d-flex justify-content-between align-items-center ${index === 0 ? 'active' : ''}`;
      item.innerHTML = `
        <div>
          <i class="fa-solid ${index === 0 ? 'fa-play-circle gold-text' : 'fa-circle-play me-2'}"></i>
          <span class="fw-semibold">${lesson.title}</span>
        </div>
        <small class="badge bg-dark border border-warning text-warning">${lesson.duration}</small>
      `;
      item.onclick = () => {
        document.querySelectorAll('.playlist-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        iframePlayer.src = lesson.videoUrl + "?autoplay=1";
        if (currentTitle) currentTitle.textContent = lesson.title;
        showLmsToast(`Switched to lesson: ${lesson.title}`);
      };
      playlistContainer.appendChild(item);
    });
  }
});

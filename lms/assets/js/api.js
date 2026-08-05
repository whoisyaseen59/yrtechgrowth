// YR Tech Growth LMS - Centralized API Layer with Mock Fallback
const LMS_CONFIG = {
  API_BASE_URL: 'https://api.yrtechgrowth.com/lms/v1/',
  MOCK_MODE: true
};

// Initial Mock Data Store
const initialCourses = [
  {
    id: 1,
    title: "Meta Ads & Facebook Marketing Mastery 2026",
    category: "Paid Media",
    instructor: "Muhammad Yaseen Rashid",
    thumbnail: "/assets/images/hero.webp",
    rating: 4.9,
    students: 1420,
    price: 0,
    description: "Master high-ROAS Facebook & Instagram ad campaigns, CAPI pixel setup, custom audiences, and budget scaling strategies.",
    lessonsCount: 18,
    duration: "12 Hours"
  },
  {
    id: 2,
    title: "Google Ads & Performance Max (PMax) Scaling",
    category: "PPC & Search",
    instructor: "YR Tech Growth Media Team",
    thumbnail: "/assets/images/about-us-yr-tech-growth.webp",
    rating: 4.8,
    students: 980,
    price: 0,
    description: "Learn to build high-converting Google Search, Shopping, and PMax campaigns with automated bidding rules.",
    lessonsCount: 14,
    duration: "9 Hours"
  },
  {
    id: 3,
    title: "Local SEO & Technical Website Optimization",
    category: "SEO",
    instructor: "Muhammad Yaseen Rashid",
    thumbnail: "/assets/images/hero.webp",
    rating: 5.0,
    students: 2100,
    price: 0,
    description: "Dominate Google search rankings, Google Business Profile local 3-pack, schema markup, and speed audits.",
    lessonsCount: 22,
    duration: "15 Hours"
  },
  {
    id: 4,
    title: "Shopify E-Commerce Growth & Conversion Rate Scaling",
    category: "E-Commerce",
    instructor: "Growth Engineering Team",
    thumbnail: "/assets/images/about-us-yr-tech-growth.webp",
    rating: 4.9,
    students: 1750,
    price: 0,
    description: "Build, launch, and scale high-converting Shopify stores with automated upsells and retention flows.",
    lessonsCount: 16,
    duration: "10 Hours"
  }
];

// Initialize LocalStorage if empty
if (!localStorage.getItem('lms_courses')) {
  localStorage.setItem('lms_courses', JSON.stringify(initialCourses));
}
if (!localStorage.getItem('lms_enrolled')) {
  localStorage.setItem('lms_enrolled', JSON.stringify([1, 3]));
}
if (!localStorage.getItem('lms_user')) {
  localStorage.setItem('lms_user', JSON.stringify({
    name: 'Muhammad Yaseen',
    email: 'student@yrtechgrowth.com',
    role: 'student',
    joined: '2026-01-15'
  }));
}

const API = {
  // Auth
  login: async (email, password) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const role = email.includes('admin') ? 'admin' : 'student';
        const user = { name: email.split('@')[0], email, role, token: 'jwt-mock-token-12345' };
        localStorage.setItem('lms_token', user.token);
        localStorage.setItem('lms_user', JSON.stringify(user));
        resolve({ status: 200, user });
      }, 400);
    });
  },
  register: async (data) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const user = { ...data, role: 'student', token: 'jwt-mock-token-' + Date.now() };
        localStorage.setItem('lms_token', user.token);
        localStorage.setItem('lms_user', JSON.stringify(user));
        resolve({ status: 201, user });
      }, 400);
    });
  },
  
  // Courses
  getCourses: async () => {
    return JSON.parse(localStorage.getItem('lms_courses')) || initialCourses;
  },
  getCourseDetail: async (id) => {
    const courses = JSON.parse(localStorage.getItem('lms_courses')) || initialCourses;
    return courses.find(c => c.id == id) || courses[0];
  },
  getEnrolledCourses: async () => {
    const enrolledIds = JSON.parse(localStorage.getItem('lms_enrolled')) || [1];
    const courses = JSON.parse(localStorage.getItem('lms_courses')) || initialCourses;
    return courses.filter(c => enrolledIds.includes(c.id));
  },
  enrollCourse: async (id) => {
    let enrolled = JSON.parse(localStorage.getItem('lms_enrolled')) || [];
    if (!enrolled.includes(Number(id))) {
      enrolled.push(Number(id));
      localStorage.setItem('lms_enrolled', JSON.stringify(enrolled));
    }
    return { success: true };
  },
  
  // Admin Operations
  addCourse: async (courseData) => {
    let courses = JSON.parse(localStorage.getItem('lms_courses')) || initialCourses;
    const newCourse = { id: Date.now(), ...courseData, students: 0, rating: 5.0 };
    courses.push(newCourse);
    localStorage.setItem('lms_courses', JSON.stringify(courses));
    return newCourse;
  }
};

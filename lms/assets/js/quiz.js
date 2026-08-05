// Quiz Interactive Manager
const quizData = [
  {
    question: "What is the primary benefit of Meta Server-Side Conversion API (CAPI)?",
    options: [
      "Bypasses iOS 14.5+ ad blocking & tracking restrictions",
      "Increases domain registration speed",
      "Automatically decreases ad budget by 50%",
      "Replaces website landing page HTML"
    ],
    answer: 0
  },
  {
    question: "Which bidding strategy is ideal for scaling Google Performance Max (PMax) campaigns?",
    options: [
      "Manual CPC",
      "Target ROAS (tROAS) / Target CPA",
      "Viewable CPM",
      "Cost Per View (CPV)"
    ],
    answer: 1
  },
  {
    question: "What is the optimal text-to-code ratio for technical SEO website audits?",
    options: [
      "At least 20-25% clean indexable text content",
      "Less than 2%",
      "100% JavaScript rendering",
      "Only image alt attributes"
    ],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
  const quizBox = document.getElementById('quizBox');
  if (quizBox) renderQuizQuestion();
});

function renderQuizQuestion() {
  const q = quizData[currentQuestion];
  const qTitle = document.getElementById('quizQuestionTitle');
  const qOptions = document.getElementById('quizOptionsContainer');
  const qProgress = document.getElementById('quizStepText');

  if (!qTitle || !qOptions) return;

  qTitle.textContent = `Q${currentQuestion + 1}: ${q.question}`;
  if (qProgress) qProgress.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

  qOptions.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const div = document.createElement('div');
    div.className = 'quiz-option';
    div.innerHTML = `<span>${opt}</span> <i class="fa-regular fa-circle text-secondary"></i>`;
    div.onclick = () => selectQuizAnswer(idx, div);
    qOptions.appendChild(div);
  });
}

function selectQuizAnswer(idx, element) {
  document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
  element.classList.add('selected');
  element.dataset.selectedIdx = idx;
}

function submitNextQuiz() {
  const selected = document.querySelector('.quiz-option.selected');
  if (!selected) {
    showLmsToast('Please select an option before proceeding!', 'danger');
    return;
  }
  const chosen = parseInt(selected.dataset.selectedIdx);
  if (chosen === quizData[currentQuestion].answer) score++;

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    renderQuizQuestion();
  } else {
    // Quiz finished
    localStorage.setItem('lms_last_quiz_score', score);
    window.location.href = '/lms/student/quiz/quiz-result.html';
  }
}

// ============ MAIN APP ============

let currentFilter = "";
let allCourses = [];

// Build all courses from DB + languages
function buildAllCourses() {
  const list = [];
  const seen = new Set();

  // 1. Featured courses (with full content)
  Object.entries(COURSES_DB).forEach(([name, data]) => {
    list.push({ name, ...data, featured: true });
    seen.add(name);
  });

  // 2. All languages from languages.js
  ALL_LANGUAGES.forEach(({ name, category }) => {
    if (!seen.has(name)) {
      const generic = generateGenericCourse(name, category);
      list.push({ name, ...generic, featured: false });
      seen.add(name);
    }
  });

  return list;
}

// Render stats
function renderStats() {
  const data = Storage.getAll();
  const level = Storage.getLevel(data.xp);
  const completed = Object.keys(data.completedLessons).length;

  document.getElementById("stats").innerHTML = `
    <div class="stat"><b>${ALL_LANGUAGES.length}+</b><small>Languages</small></div>
    <div class="stat"><b>${completed}</b><small>Completed</small></div>
    <div class="stat"><b>${data.xp}</b><small>XP</small></div>
    <div class="stat"><b>Lv ${level}</b><small>Level</small></div>
    <div class="stat"><b>🔥 ${data.streak}</b><small>Streak</small></div>
  `;
}

// Render filter buttons
function renderFilters() {
  const categories = ["All", ...Object.keys(LANGUAGES)];
  document.getElementById("filters").innerHTML = categories.map(cat =>
    `<button class="filter-btn ${cat === currentFilter || (cat==='All' && !currentFilter) ? 'active' : ''}"
             data-cat="${cat === 'All' ? '' : cat}">${cat}</button>`
  ).join("");

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.cat;
      renderFilters();
      renderCourses();
    });
  });
}

// Render courses
function renderCourses() {
  const q = document.getElementById("search").value.trim().toLowerCase();
  let list = allCourses;

  if (currentFilter) {
    list = list.filter(c => c.tag.toLowerCase() === currentFilter.toLowerCase());
  }

  if (q) {
    list = list.filter(c =>
      c.name.toLowerCase().includes(q) ||
      (c.desc || "").toLowerCase().includes(q) ||
      (c.tag || "").toLowerCase().includes(q)
    );
  }

  const container = document.getElementById("courses");
  const countEl = document.getElementById("count");
  countEl.textContent = `${list.length} course${list.length !== 1 ? "s" : ""}`;

  if (list.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#888;padding:40px">
      😕 Kuch nahi mila. Try another search.
    </p>`;
    return;
  }

  container.innerHTML = list.slice(0, 200).map(c => {
    const completed = (c.lessons || []).filter((_, i) =>
      Storage.isLessonComplete(c.name, i)
    ).length;
    const total = (c.lessons || []).length;
    const pct = total ? Math.round((completed / total) * 100) : 0;

    return `
      <div class="card" data-course="${c.name}">
        <div class="icon">${c.icon || "📘"}</div>
        <h3>${c.name}</h3>
        <p>${c.desc || ""}</p>
        <span class="tag">${c.tag || "General"}</span>
        <span class="lessons-count">${total} lessons</span>
        ${completed > 0 ? `
          <div class="progress-bar">
            <div style="width:${pct}%"></div>
          </div>
        ` : ""}
      </div>
    `;
  }).join("");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const name = card.dataset.course;
      location.href = `course.html?name=${encodeURIComponent(name)}`;
    });
  });
}

// Search
function setupSearch() {
  const input = document.getElementById("search");
  input.addEventListener("input", renderCourses);
  document.getElementById("searchBtn").addEventListener("click", renderCourses);
  input.addEventListener("keydown", e => { if (e.key === "Enter") renderCourses(); });
}

// Theme
function setupTheme() {
  const btn = document.getElementById("themeBtn");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    btn.textContent = "☀️";
  }
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    btn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  allCourses = buildAllCourses();
  setupTheme();
  setupSearch();
  renderFilters();
  renderCourses();
  renderStats();
});
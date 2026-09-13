// User progress localStorage mein save karo

const Storage = {
  KEY: "devlearn_progress",

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {
        completedLessons: {},   // { "Python:0": true }
        quizScores: {},         // { "Python": 4 }
        xp: 0,
        streak: 0,
        lastActive: null,
        name: "Learner"
      };
    } catch {
      return { completedLessons: {}, quizScores: {}, xp: 0, streak: 0, lastActive: null, name: "Learner" };
    }
  },

  save(data) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  },

  markLessonComplete(course, lessonIndex) {
    const data = this.getAll();
    const key = `${course}:${lessonIndex}`;
    if (!data.completedLessons[key]) {
      data.completedLessons[key] = true;
      data.xp += 10;
      data.lastActive = new Date().toISOString();
      this.updateStreak(data);
      this.save(data);
    }
  },

  isLessonComplete(course, lessonIndex) {
    return !!this.getAll().completedLessons[`${course}:${lessonIndex}`];
  },

  saveQuizScore(course, score, total) {
    const data = this.getAll();
    const prev = data.quizScores[course] || 0;
    if (score > prev) {
      data.quizScores[course] = score;
      data.xp += score * 20;
    }
    this.save(data);
  },

  updateStreak(data) {
    const today = new Date().toDateString();
    if (!data.lastActive) { data.streak = 1; return; }
    const last = new Date(data.lastActive).toDateString();
    if (last === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    data.streak = (last === yesterday) ? data.streak + 1 : 1;
  },

  getLevel(xp) {
    return Math.floor(xp / 100) + 1;
  },

  reset() {
    localStorage.removeItem(this.KEY);
  }
};
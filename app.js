const API_BASE = 'http://localhost:3000';

let exerciseData = [];
let nutritionData = [];

// ── TAB SWITCHING ─────────────────────────────────────────
function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));

  if (tab === 'exercises') {
    document.querySelectorAll('.tab')[0].classList.add('active');
    document.getElementById('exercises-panel').classList.remove('hidden');
  } else {
    document.querySelectorAll('.tab')[1].classList.add('active');
    document.getElementById('nutrition-panel').classList.remove('hidden');
  }
}

// ── FETCH EXERCISES ───────────────────────────────────────
async function fetchExercises() {
  const muscle  = document.getElementById('muscle-select').value;
  const loader  = document.getElementById('exercise-loader');
  const errBox  = document.getElementById('exercise-error');
  const table   = document.getElementById('exercise-table');

  loader.classList.remove('hidden');
  errBox.classList.add('hidden');
  table.classList.add('hidden');

  try {
    const res  = await fetch(`${API_BASE}/api/exercises?muscle=${encodeURIComponent(muscle)}`);
    const json = await res.json();

    if (!json.success) throw new Error(json.message);

    exerciseData = json.data;
    renderExercises(exerciseData);
    table.classList.remove('hidden');
  } catch (err) {
    errBox.textContent = '⚠️ ' + err.message;
    errBox.classList.remove('hidden');
  } finally {
    loader.classList.add('hidden');
  }
}

function renderExercises(data) {
  const filter = document.getElementById('exercise-search').value.toLowerCase();
  const filtered = data.filter(e => e.name.toLowerCase().includes(filter));
  document.getElementById('exercise-body').innerHTML = filtered.map(e => `
    <tr>
      <td style="text-transform:capitalize">${e.name}</td>
      <td style="text-transform:capitalize">${e.equipment}</td>
      <td style="text-transform:capitalize">${e.target}</td>
    </tr>
  `).join('');
}

// live filter as user types
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('exercise-search').addEventListener('input', () => {
    if (exerciseData.length) renderExercises(exerciseData);
  });
});

// ── FETCH NUTRITION ───────────────────────────────────────
async function fetchNutrition() {
  const food    = document.getElementById('food-input').value.trim();
  const loader  = document.getElementById('nutrition-loader');
  const errBox  = document.getElementById('nutrition-error');
  const table   = document.getElementById('nutrition-table');

  if (!food) { alert('Please type a food name first!'); return; }

  loader.classList.remove('hidden');
  errBox.classList.add('hidden');
  table.classList.add('hidden');

  try {
    const res  = await fetch(`${API_BASE}/api/nutrition?food=${encodeURIComponent(food)}`);
    const json = await res.json();

    if (!json.success) throw new Error(json.message);

    nutritionData = json.data;
    renderNutrition(nutritionData);
    table.classList.remove('hidden');
  } catch (err) {
    errBox.textContent = '⚠️ ' + err.message;
    errBox.classList.remove('hidden');
  } finally {
    loader.classList.add('hidden');
  }
}

// ── UPDATED for API Ninjas ────────────────────────────────
function renderNutrition(data) {
  document.getElementById('nutrition-body').innerHTML = data.map(f => `
    <tr>
      <td style="text-transform:capitalize">${f.name}</td>
      <td>${f.serving_size_g ? f.serving_size_g + 'g' : '—'}</td>
      <td>${f.calories ? f.calories + ' kcal' : '—'}</td>
    </tr>
  `).join('');
}

// ── SORTING ───────────────────────────────────────────────
let sortDir = {};

function sortTable(type, key) {
  sortDir[key] = !sortDir[key];
  const asc = sortDir[key];

  if (type === 'exercise') {
    exerciseData.sort((a, b) => asc
      ? String(a[key]).localeCompare(String(b[key]))
      : String(b[key]).localeCompare(String(a[key]))
    );
    renderExercises(exerciseData);
  } else {
    nutritionData.sort((a, b) => asc
      ? String(a[key] ?? '').localeCompare(String(b[key] ?? ''))
      : String(b[key] ?? '').localeCompare(String(a[key] ?? ''))
    );
    renderNutrition(nutritionData);
  }
}
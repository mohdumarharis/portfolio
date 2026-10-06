'use strict';

// A deterministic conceptual drawing, not a plot of project performance.
const lines = document.querySelector('#signal-lines');
if (lines) {
  const ns = 'http://www.w3.org/2000/svg';
  for (let i = 0; i < 32; i++) {
    const y = 58 + i * 10.7;
    const bend = 20 * Math.sin(i * .55);
    const target = i < 11 ? 160 : i < 22 ? 230 : 300;
    const spread = (i % 11 - 5) * 1.7;
    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d', `M 22 ${y} C ${135 + bend} ${y - 40}, ${166 - bend} ${351 - i * 7}, 264 ${232 + (i - 16) * 3.5} S 380 ${target + spread}, 480 ${target + spread}`);
    path.setAttribute('opacity', i % 4 === 0 ? '.85' : '.5');
    lines.append(path);
  }
}
const waveform = document.querySelector('.waveform');
if (waveform) {
  for (let i = 0; i < 44; i++) {
    const bar = document.createElement('i');
    bar.style.height = `${5 + Math.abs(Math.sin(i * 1.23) * Math.cos(i * .31)) * 31}px`;
    waveform.append(bar);
  }
}

const stages = [
  'Speech-to-text turns call recordings into text for the next stage of analysis.',
  'LLM APIs summarise the transcript, extract intent and sentiment, and generate recommended actions.',
  'FastAPI and a Copilot chatbot bring the outputs into agent workflows, deployed on Azure with MLflow and CI/CD.'
];
const stageButtons = [...document.querySelectorAll('[data-stage]')];

stageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = Number(button.dataset.stage);
    stageButtons.forEach((item, index) => item.setAttribute('aria-pressed', String(index === selected)));
    document.querySelector('.pipeline-panel').dataset.activeStage = String(selected);
    document.querySelector('.stage-description').textContent = stages[selected];
  });
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  menuButton.querySelector('span').textContent = '＋';
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  menuButton.querySelector('span').textContent = open ? '−' : '＋';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
window.matchMedia('(max-width: 760px)').addEventListener('change', closeMenu);

document.querySelector('.copy-email')?.addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText('mohdomarharis@gmail.com');
    status.textContent = 'Email address copied.';
  } catch {
    status.textContent = 'Please select and copy the email address above.';
  }
});

// Keep links to the former single-page sections useful.
if (document.body.dataset.page === 'index.html') {
  const previousSections = { '#work': 'work.html', '#about': 'about.html', '#experience': 'experience.html', '#contact': 'contact.html' };
  if (previousSections[location.hash]) location.replace(previousSections[location.hash]);
}

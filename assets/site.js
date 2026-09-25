
(()=>{
const root=document.getElementById('ak-portfolio-v2');
const media={"preview-epps":"assets/gallery/epps/preview.webp","preview-grad":"assets/gallery/grad/preview.webp","preview-earm":"assets/gallery/earm/preview.webp","preview-pinpointer":"assets/gallery/pinpointer/preview.png","logo-epps":"assets/EPPS_logo.svg","logo-grad":"assets/GRAD_logo.svg","logo-earm":"assets/ЕАРМ_logo.svg"};
const galleryFiles={"epps":[2,3,6,8,9,12,13,14,15,16,17],"grad":[2,4,7,8,10,23,24,25,26,27,29],"earm":[1,2,3,6,7,13,15,17,19],"pinpointer":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]};
const galleryExtension=project=>project==='pinpointer'?'png':'webp';
const galleryThumbExtension=project=>project==='pinpointer'?'jpg':'webp';
const galleryImage=(project,number)=>`assets/gallery/${project}/${project}-${String(number).padStart(2,'0')}.${galleryExtension(project)}`;
const galleryThumb=(project,number)=>`assets/gallery/${project}/thumbs/${project}-${String(number).padStart(2,'0')}.${galleryThumbExtension(project)}`;
const section=(h,p)=>`<section class="ak-section"><h2>${h}</h2><div class="ak-copy">${p}</div></section>`;
const projects={
epps:{name:'ЕППС',subtitle:'Платформа мониторинга и планирования',summary:'Полная пересборка интерфейса и перезапуск проекта под расширенные требования бизнеса.',tags:'Нефтегазовая отрасль / B2B / B2C / SaaS',meta:['Продуктовый дизайнер','1,5 года + поддержка','1 дизайнер'],next:'grad',slides:[
[2,'Статистика и сравнение показателей',''],
[3,'Планирование и контроль показателей',''],
[6,'Планирование этапов',''],
[8,'Статистика фонда',''],
[9,'Реестр показателей',''],
[12,'Матрица бизнес-кейсов',''],
[13,'Светлая тема: матрица бизнес-кейсов',''],
[14,'Справка по статусам и шагам',''],
[15,'Светлая тема: справка по статусам',''],
[16,'Планирование бизнес-кейса',''],
[17,'Светлая тема: планирование бизнес-кейса','']],
body:section('Задача','<p>Интерфейс не выдерживал роста функциональной нагрузки. Принятые решения мешали ходу разработки. Было необходимо полностью переработать интерфейс под новые бизнес-требования в условиях высокой неопределённости.</p>','task')+section('Что изменил','<p>Придумал айдентику проекта. Сформировал и задокументировал масштабируемые правила проектирования UI. Перевёл всё на дизайн-систему Consta и адаптировал её под нужды проекта. Постоянно находился на связи с бизнесом и командой разработки.</p>','action')+section('Результат','<p>Проект успешно прошёл несколько стадий MVP и вышел на этап B2C, на котором развивается и масштабируется до сих пор.</p>','result')},
grad:{name:'ГРАД',subtitle:'Платформа мониторинга и анализа',summary:'Интеграция и создание новых геолого-геофизических инструментов в рамках существующего проекта.',tags:'Нефтегазовая отрасль / B2B / B2C / SaaS',meta:['Продуктовый дизайнер','2 года','6 дизайнеров'],next:'earm',slides:[
[2,'Настройка рабочего процесса',''],
[4,'Геофизический планшет','Один из модулей, дизайн которых я создал с нуля. В рабочей области представлены кривые, шкалы глубины, литология, пласты и интервалы перфорации.'],
[7,'Сравнение скважин',''],
[8,'Аналитический дашборд',''],
[10,'Сводная таблица','Пример интерфейса работы с данными в насыщенной рабочей области платформы.'],
[23,'Карта участков',''],
[24,'Карта скважин',''],
[25,'Анализ данных на карте',''],
[26,'Карта и планшет в рабочем пространстве','Пример состава инструментов ГРАД: карта и данные по скважине показаны рядом.'],
[27,'Динамика показателей',''],
[29,'Масштаб платформы','Крупные модули велись отдельно из-за объёма макетов. Это структура общего продукта, а не перечень модулей, созданных мной единолично.']],
body:section('Задача','<p>Было необходимо интегрироваться в существующую команду дизайнеров для долгосрочной совместной работы. Требовалось создание новых модулей и инструментов в рамках существующей системы с высокой информационной и функциональной нагрузкой.</p>','task')+section('Что сделал','<p>Успешно спроектировал несколько больших отдельных модулей в рамках существующей системы. Дополнил дизайн-систему под общие правила, задокументировал правила и поведение. Вёл работу и принимал решения по всей системе в рамках отдельных задач. Постоянно находился на связи с бизнесом и командой разработки.</p>','action')+section('Результат','<p>Проект успешно прошёл несколько стадий MVP и вышел на этап B2C, на котором развивается и масштабируется до сих пор.</p>','result')},
earm:{name:'ЕАРМ',subtitle:'Платформа мониторинга и подготовки отчетности',summary:'Интеграция и создание новых модулей мониторинга в рамках существующего проекта.',tags:'Нефтегазовая отрасль / B2B / SaaS',meta:['Продуктовый дизайнер','1,5 года','1 дизайнер'],next:'pinpointer',slides:[
[1,'Экспертиза скважины','Несколько технических показателей на временной шкале и боковая панель с параметрами.'],
[2,'Таблица показателей',''],
[3,'Часто ремонтируемый фонд','Пользователь анализирует показатели и таблицу скважин, задаёт период и фильтры.'],
[6,'Распределение по категориям',''],
[7,'Аналитика фонда',''],
[13,'Мониторинг показателей',''],
[15,'Сводный аналитический дашборд',''],
[17,'Сравнение плановых и фактических показателей',''],
[19,'Интерактивный прототип','По обязательному требованию заказчика весь дизайн поддерживался как большой кликабельный прототип.']],
body:section('Задача','<p>Было необходимо создать новые модули и инструменты в рамках существующей системы с высокой информационной и функциональной нагрузкой в условиях высокой неопределённости.</p>','task')+section('Что сделал','<p>Успешно спроектировал ряд отдельных модулей мониторинга в рамках существующей системы. Дополнил дизайн-систему общими правилами, задокументировал их и описал поведение. Постоянно находился на связи с бизнесом и командой разработки.</p>','action')+section('Результат','<p>Проект успешно прошёл несколько стадий MVP и вышел на этап B2C, на котором развивается и масштабируется до сих пор.</p>','result')},
pinpointer:{name:'Pinpointer',subtitle:'Платформа управления грузоперевозками',summary:'Разработка нового продукта для шведского рынка.',tags:'Грузоперевозки / B2B / B2C / SaaS',meta:['Продуктовый дизайнер','1,5 года + поддержка','1 дизайнер'],next:'epps',slides:[
[1,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[2,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[3,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[4,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[5,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[6,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[7,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[8,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[9,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[10,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[11,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[12,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[13,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[14,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[15,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[16,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
[17,'Lorem ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit.']],
body:section('Задача','<p>Интерфейс не выдерживал роста функциональной нагрузки. Принятые решения мешали ходу разработки. Было необходимо полностью переработать интерфейс под новые бизнес-требования в условиях высокой неопределённости.</p>','task')+section('Что сделал','<p>Придумал айдентику проекта. Сформировал и задокументировал масштабируемые правила проектирования UI. Создал дизайн систему под нужды проекта. Постоянно находился на связи с бизнесом и командой разработки.</p>','action')+section('Результат','<p>Проект успешно прошёл несколько стадий MVP и вышел на этап B2C, на котором развивается и масштабируется до сих пор.</p><p><a href="https://pinpointer.se/" target="_blank" rel="noreferrer">https://pinpointer.se/</a></p>','result')}
};
const $ = selector => root.querySelector(selector);
let current = 'about', slideIndex = 0, lightboxScrollY = 0, slideZoom = 1, lastWheelAt = -Infinity, suppressStageClickUntil = -Infinity, pinchStartDistance = 0, pinchStartZoom = 1, safariGestureStartZoom = 1;
const slidePointers = new Map();
let brandPressCount = 0, brandPressTimer = 0, lastBrandPressAt = -Infinity, lastJokeIndex = -1, jokeScrollY = 0, topJokesPromise, jokeTriggerElement;
const isolatedElements = [];
const routes = ['about', 'projects', 'experience', ...Object.keys(projects)];
const pathForRoute = name => `/${name}`;
const placeholderCaption = {
  title: 'Заголовок',
  copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};
$('#ak-project-list').innerHTML = Object.entries(projects).map(([id, p]) => `<article class="ak-project-row" data-route="${id}" role="link" tabindex="0" aria-label="Открыть проект ${p.name}"><div class="ak-project-copy"><h2 class="ak-project-logo ak-project-logo-${id}">${['earm','pinpointer'].includes(id) ? p.name : `<img src="${media['logo-'+id]}" alt="${p.name}">`}</h2><h3>${p.subtitle}</h3><p class="ak-project-summary">${p.summary}</p><p class="ak-project-tags">${p.tags}</p></div><div class="ak-preview"><img src="${media['preview-'+id]}" alt="Превью проекта ${p.name}" loading="lazy" decoding="async"></div></article>`).join('');
$('#ak-thumbs-prev')?.remove();
$('#ak-thumbs-next')?.remove();

function loadTopJokes() {
  if (!topJokesPromise) {
    topJokesPromise = fetch('assets/baneks-top30.json')
      .then(response => {
        if (!response.ok) throw new Error(`Top jokes request failed: ${response.status}`);
        return response.json();
      })
      .then(data => Array.isArray(data.jokes) ? data.jokes.filter(joke => joke?.text) : [])
      .catch(() => []);
  }
  return topJokesPromise;
}

function emitClickSparks(level, source = $('.ak-brand')) {
  if (!source || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
  const rect = source.getBoundingClientRect();
  const isExplosion = level === 5;
  const sparkColor = 'var(--ak-color-accent)';
  const count = isExplosion ? 36 : level * 4;
  if (isExplosion) {
    const burst = document.createElement('span');
    burst.className = 'ak-logo-burst';
    burst.style.left = `${rect.left + rect.width / 2}px`;
    burst.style.top = `${rect.top + rect.height / 2}px`;
    document.body.append(burst);
    window.setTimeout(() => burst.remove(), 760);
  }
  for (let index = 0; index < count; index += 1) {
    const angle = Math.random() * Math.PI * 2;
    const distance = 12 + level * 6 + Math.random() * (12 + level * (isExplosion ? 11 : 5));
    const spark = document.createElement('span');
    spark.className = 'ak-logo-spark';
    spark.style.left = `${rect.left + rect.width / 2}px`;
    spark.style.top = `${rect.top + rect.height / 2}px`;
    spark.style.setProperty('--ak-spark-x', `${Math.cos(angle) * distance}px`);
    spark.style.setProperty('--ak-spark-y', `${Math.sin(angle) * distance}px`);
    spark.style.setProperty('--ak-spark-rotate', `${Math.round(Math.random() * 240 - 120)}deg`);
    spark.style.setProperty('--ak-spark-size', `${2 + Math.random() * 3}px`);
    spark.style.setProperty('--ak-spark-delay', `${Math.random() * 70}ms`);
    spark.style.setProperty('--ak-spark-color', sparkColor);
    document.body.append(spark);
    window.setTimeout(() => spark.remove(), 850);
  }
}

function closeJoke() {
  const overlay = document.querySelector('.ak-joke-overlay');
  if (!overlay) return;
  overlay.remove();
  root.inert = false;
  document.body.classList.remove('ak-joke-open');
  document.body.style.top = '';
  window.scrollTo(0, jokeScrollY);
  if (jokeTriggerElement && window.getComputedStyle(jokeTriggerElement).display !== 'none') jokeTriggerElement.focus?.({ preventScroll: true });
  jokeTriggerElement = null;
}

async function openRandomJoke() {
  const jokes = await loadTopJokes();
  if (!jokes.length || document.querySelector('.ak-joke-overlay')) return;
  let jokeIndex = Math.floor(Math.random() * jokes.length);
  if (jokes.length > 1 && jokeIndex === lastJokeIndex) jokeIndex = (jokeIndex + 1) % jokes.length;
  lastJokeIndex = jokeIndex;
  const overlay = document.createElement('div');
  overlay.className = 'ak-joke-overlay';
  overlay.setAttribute('role', 'presentation');
  overlay.innerHTML = '<article class="ak-joke-card" role="dialog" aria-modal="true" aria-label="Лучшие анекдоты категории B, baneks.ru" tabindex="-1"><p class="ak-joke-source">Лучшие анекдоты категории B / baneks.ru</p><p class="ak-joke-text"></p></article>';
  overlay.querySelector('.ak-joke-text').textContent = jokes[jokeIndex].text;
  jokeScrollY = window.scrollY;
  document.body.style.top = `-${jokeScrollY}px`;
  document.body.classList.add('ak-joke-open');
  root.inert = true;
  document.body.append(overlay);
  const closeAvailableAt = performance.now() + 1000;
  overlay.addEventListener('click', () => {
    if (performance.now() < closeAvailableAt) return;
    closeJoke();
  });
  overlay.querySelector('.ak-joke-card').focus({ preventScroll: true });
}

function registerBrandPress({ animate = true, trigger = $('.ak-brand') } = {}) {
  const now = performance.now();
  brandPressCount = now - lastBrandPressAt <= 1600 ? brandPressCount + 1 : 1;
  lastBrandPressAt = now;
  jokeTriggerElement = trigger;
  window.clearTimeout(brandPressTimer);
  if (animate) emitClickSparks(brandPressCount, trigger);
  if (brandPressCount >= 5) {
    brandPressCount = 0;
    lastBrandPressAt = -Infinity;
    void openRandomJoke();
    return;
  }
  brandPressTimer = window.setTimeout(() => {
    brandPressCount = 0;
    lastBrandPressAt = -Infinity;
  }, 1600);
}

function resetSlideZoom() {
  slideZoom = 1;
  const image = $('#ak-slide');
  image.style.setProperty('--ak-slide-zoom', '1');
  image.style.setProperty('--ak-slide-origin-x', '50%');
  image.style.setProperty('--ak-slide-origin-y', '50%');
}

let slideRequest = 0, wheelTotal = 0, wheelConsumed = false, routeAnimationTimer = 0;
function showSlide(index, direction = 0) {
  const project = projects[current];
  resetSlideZoom();
  slideIndex = (index + project.slides.length) % project.slides.length;
  const slide = project.slides[slideIndex];
  const image = $('#ak-slide');
  const request = ++slideRequest;
  const source = galleryImage(current, slide[0]);
  const commit = () => {
    if (request !== slideRequest) return;
    image.classList.remove('ak-slide-shift');
    image.src = source;
    image.alt = slide[1];
    if (direction && !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      void image.offsetWidth;
      image.classList.add('ak-slide-shift');
    }
  };
  // Keep the current image visible until the next bitmap is decoded.
  const nextImage = new Image();
  if (typeof nextImage.decode === 'function') {
    nextImage.src = source;
    nextImage.decode().then(commit).catch(() => {});
  } else commit();
  $('#ak-slide-title').textContent = placeholderCaption.title;
  $('#ak-slide-copy').textContent = placeholderCaption.copy;
  root.querySelectorAll('[data-index]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.index) === slideIndex)));
}

function setExpanded(on) {
  const stage = $('#ak-stage');
  if (on === stage.classList.contains('ak-expanded')) return;
  wheelTotal = 0;
  wheelConsumed = false;
  lastWheelAt = -Infinity;
  slidePointers.clear();
  resetSlideZoom();
  if (on) {
    lightboxScrollY = window.scrollY;
    stage.classList.add('ak-expanded');
    document.body.style.top = `-${lightboxScrollY}px`;
    document.body.classList.add('ak-lightbox-open');
    // Isolate siblings at each level without making the image's ancestors inert.
    for (let branch = stage; branch.parentElement; branch = branch.parentElement) {
      for (const sibling of branch.parentElement.children) {
        if (sibling !== branch && !sibling.inert) {
          sibling.inert = true;
          isolatedElements.push(sibling);
        }
      }
      if (branch.parentElement === document.body) break;
    }
  } else {
    stage.classList.remove('ak-expanded');
    isolatedElements.splice(0).forEach(element => { element.inert = false; });
    document.body.classList.remove('ak-lightbox-open');
    document.body.style.top = '';
    window.scrollTo(0, lightboxScrollY);
    requestAnimationFrame(() => window.scrollTo(0, lightboxScrollY));
  }
  stage.setAttribute('aria-pressed', String(on));
  stage.setAttribute('aria-label', on ? 'Закрыть увеличенное изображение' : 'Увеличить изображение');
  stage.focus({ preventScroll: true });
}

function animateRouteView(view) {
  clearTimeout(routeAnimationTimer);
  root.querySelectorAll('.ak-route-enter').forEach(element => element.classList.remove('ak-route-enter'));
  if (!view || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
  void view.offsetWidth;
  view.classList.add('ak-route-enter');
  routeAnimationTimer = window.setTimeout(() => view.classList.remove('ak-route-enter'), 560);
}

function route(name, remember = true, focusHeading = true) {
  if (!routes.includes(name)) {
    name = 'about';
    history.replaceState(null, '', pathForRoute(name));
  }
  setExpanded(false);
  current = name;
  if (remember && location.pathname !== pathForRoute(name)) history.pushState(null, '', pathForRoute(name));
  document.title = (projects[name] ? projects[name].name : name === 'projects' ? 'Проекты' : name === 'experience' ? 'Опыт' : 'Обо мне') + ' — Корепанов Алексей';
  $('#ak-about').hidden = name !== 'about';
  $('#ak-projects').hidden = name !== 'projects';
  $('#ak-experience').hidden = name !== 'experience';
  $('#ak-case').hidden = !projects[name];
  root.querySelectorAll('.ak-nav [data-route]').forEach(button => {
    if (button.dataset.route === (projects[name] ? 'projects' : name)) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  if (projects[name]) {
    const project = projects[name];
    $('#ak-case-label').textContent = project.tags;
    $('#ak-case-name').textContent = project.name;
    $('#ak-case-subtitle').textContent = project.subtitle;
    $('#ak-case-meta').innerHTML = project.meta.map((value, i) => `<div><span>${['Роль', 'Продолжительность', 'Команда'][i]}</span>${value}</div>`).join('');
    $('#ak-case-body').innerHTML = project.body;
    $('#ak-next').dataset.route = project.next;
    $('#ak-next').textContent = 'Следующий проект →';
    $('#ak-thumbs').innerHTML = project.slides.map((slide, i) => `<button class="ak-thumb" data-index="${i}" aria-label="Слайд ${i+1}: ${slide[1]}" aria-pressed="false"><img src="${galleryThumb(current,slide[0])}" alt="" loading="lazy" decoding="async"></button>`).join('');
    showSlide(0);
  }
  animateRouteView(projects[name] ? $('#ak-case') : $(`#ak-${name}`));
  requestAnimationFrame(() => {
    root.scrollIntoView({ block: 'start', behavior: 'instant' });
    if (focusHeading) {
      const heading = projects[name] ? $('#ak-case-name') : $(`#ak-${name} h1`);
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
  });
}

root.addEventListener('click', event => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const portrait = target.closest('.ak-photo img');
  const brand = $('.ak-brand');
  if (portrait && brand && window.getComputedStyle(brand).display === 'none') {
    registerBrandPress({ trigger: portrait });
    return;
  }
  const routeTarget = target.closest('[data-route]');
  if (routeTarget && root.contains(routeTarget)) {
    const isBrand = routeTarget.classList.contains('ak-brand');
    if (isBrand) registerBrandPress();
    route(routeTarget.dataset.route, true, !isBrand || event.detail === 0);
    return;
  }
  if (target.closest('#ak-stage')) {
    if (performance.now() < suppressStageClickUntil) return;
    setExpanded(!$('#ak-stage').classList.contains('ak-expanded'));
    return;
  }
  const button = target.closest('button');
  if (button && root.contains(button) && button.dataset.index !== undefined) showSlide(Number(button.dataset.index));
});
root.addEventListener('keydown', event => {
  const stage = $('#ak-stage');
  if (stage.classList.contains('ak-expanded')) {
    if (event.key === 'Escape') { event.preventDefault(); setExpanded(false); return; }
    if (event.key === 'Tab') { event.preventDefault(); stage.focus({ preventScroll: true }); return; }
  }
  if (event.target === stage && ['Enter', ' '].includes(event.key)) {
    event.preventDefault(); setExpanded(!stage.classList.contains('ak-expanded')); return;
  }
  const project = event.target instanceof Element ? event.target.closest('.ak-project-row[data-route]') : null;
  if (project && event.target === project && ['Enter', ' '].includes(event.key)) {
    event.preventDefault(); route(project.dataset.route); return;
  }
  if (!projects[current] || !(event.target instanceof Element) || !event.target.closest('.ak-gallery')) return;
  if (event.key === 'ArrowRight') { event.preventDefault(); showSlide(slideIndex + 1, 1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); showSlide(slideIndex - 1, -1); }
});
const galleryStage = $('#ak-stage');
galleryStage.addEventListener('pointerdown', event => {
  if (event.pointerType === 'mouse' || !galleryStage.classList.contains('ak-expanded')) return;
  slidePointers.set(event.pointerId, { startX: event.clientX, startY: event.clientY, x: event.clientX, y: event.clientY });
  galleryStage.setPointerCapture?.(event.pointerId);
  if (slidePointers.size === 2) {
    const [first, second] = [...slidePointers.values()];
    pinchStartDistance = Math.hypot(second.x - first.x, second.y - first.y);
    pinchStartZoom = slideZoom;
  }
});
galleryStage.addEventListener('pointermove', event => {
  const pointer = slidePointers.get(event.pointerId);
  if (!pointer) return;
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  if (slidePointers.size >= 2) {
    const [first, second] = [...slidePointers.values()];
    const distance = Math.hypot(second.x - first.x, second.y - first.y);
    if (pinchStartDistance > 0) {
      slideZoom = Math.min(4, Math.max(1, pinchStartZoom * distance / pinchStartDistance));
      const rect = galleryStage.getBoundingClientRect();
      const image = $('#ak-slide');
      image.style.setProperty('--ak-slide-zoom', String(slideZoom));
      image.style.setProperty('--ak-slide-origin-x', `${Math.max(0, Math.min(100, ((first.x + second.x) / 2 - rect.left) / rect.width * 100))}%`);
      image.style.setProperty('--ak-slide-origin-y', `${Math.max(0, Math.min(100, ((first.y + second.y) / 2 - rect.top) / rect.height * 100))}%`);
    }
    event.preventDefault();
    return;
  }
  const dx = pointer.x - pointer.startX;
  const dy = pointer.y - pointer.startY;
  if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) event.preventDefault();
}, { passive: false });
galleryStage.addEventListener('pointerup', event => {
  const pointer = slidePointers.get(event.pointerId);
  if (!pointer) return;
  const wasPinching = slidePointers.size > 1;
  slidePointers.delete(event.pointerId);
  if (wasPinching) {
    suppressStageClickUntil = performance.now() + 450;
    for (const remaining of slidePointers.values()) {
      remaining.startX = remaining.x;
      remaining.startY = remaining.y;
    }
    return;
  }
  const dx = event.clientX - pointer.startX;
  const dy = event.clientY - pointer.startY;
  if (Math.abs(dx) < 36 || Math.abs(dx) <= Math.abs(dy) * 1.15) return;
  const direction = dx < 0 ? 1 : -1;
  suppressStageClickUntil = performance.now() + 450;
  showSlide(slideIndex + direction, direction);
});
galleryStage.addEventListener('pointercancel', event => { slidePointers.delete(event.pointerId); });
galleryStage.addEventListener('gesturestart', event => {
  if (!galleryStage.classList.contains('ak-expanded')) return;
  event.preventDefault();
  safariGestureStartZoom = slideZoom;
}, { passive: false });
galleryStage.addEventListener('gesturechange', event => {
  if (!galleryStage.classList.contains('ak-expanded')) return;
  event.preventDefault();
  slideZoom = Math.min(4, Math.max(1, safariGestureStartZoom * (event.scale || 1)));
  $('#ak-slide').style.setProperty('--ak-slide-zoom', String(slideZoom));
}, { passive: false });
$('#ak-stage').addEventListener('wheel', event => {
  const stage = $('#ak-stage');
  if (!projects[current]) return;
  const expanded = stage.classList.contains('ak-expanded');
  if (!expanded) return;
  const delta = expanded && Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
  event.preventDefault();
  if (event.ctrlKey) {
    if (!expanded) return;
    event.preventDefault();
    const rect = stage.getBoundingClientRect();
    slideZoom = Math.min(4, Math.max(1, slideZoom * Math.exp(-event.deltaY * .002)));
    lastWheelAt = performance.now();
    wheelConsumed = true;
    const image = $('#ak-slide');
    image.style.setProperty('--ak-slide-zoom', String(slideZoom));
    image.style.setProperty('--ak-slide-origin-x', `${Math.max(0, Math.min(100, (event.clientX - rect.left) / rect.width * 100))}%`);
    image.style.setProperty('--ak-slide-origin-y', `${Math.max(0, Math.min(100, (event.clientY - rect.top) / rect.height * 100))}%`);
    return;
  }
  event.preventDefault();
  const now = performance.now();
  if (now - lastWheelAt > 220) {
    wheelTotal = 0;
    wheelConsumed = false;
  }
  lastWheelAt = now;
  if (wheelConsumed) return;
  const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
  wheelTotal += delta * unit;
  if (Math.abs(wheelTotal) < 48) return;
  wheelConsumed = true;
  const direction = wheelTotal > 0 ? 1 : -1;
  showSlide(slideIndex + direction, direction);
}, { passive: false });
function routeFromLocation() {
  const name = location.pathname.split('/').filter(Boolean)[0] || 'about';
  if (name !== current) route(name, false);
}
window.addEventListener('popstate', routeFromLocation);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && document.querySelector('.ak-joke-overlay')) {
    event.preventDefault();
    closeJoke();
  }
});
route(location.pathname.split('/').filter(Boolean)[0] || 'about', false, false);
})();

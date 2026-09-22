
(()=>{
const root=document.getElementById('ak-portfolio-v2');
const media={"preview-epps":"assets/gallery/epps/preview.webp","preview-grad":"assets/gallery/grad/preview.webp","preview-earm":"assets/gallery/earm/preview.webp","logo-epps":"assets/EPPS_logo.svg","logo-grad":"assets/GRAD_logo.svg","logo-earm":"assets/ЕАРМ_logo.svg"};
const galleryFiles={"epps":[2,3,6,8,9,12,13,14,15,16,17],"grad":[2,4,7,8,10,23,24,25,26,27,29],"earm":[1,2,3,6,7,13,15,17,19]};
const galleryImage=(project,number)=>`assets/gallery/${project}/${project}-${String(number).padStart(2,'0')}.webp`;
const galleryThumb=(project,number)=>`assets/gallery/${project}/thumbs/${project}-${String(number).padStart(2,'0')}.webp`;
const section=(h,p)=>`<section class="ak-section"><h2>${h}</h2><div class="ak-copy">${p}</div></section>`;
const projects={
epps:{name:'ЕППС',subtitle:'Платформа мониторинга и планирования',summary:'Полная пересборка интерфейса и перезапуск проекта под расширенные требования бизнеса.',tags:'Нефтегазовая отрасль / B2B / B2C',meta:['Продуктовый дизайнер','1,5 года + поддержка','1 дизайнер'],next:'grad',slides:[
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
grad:{name:'ГРАД',subtitle:'Платформа мониторинга и анализа',summary:'Интеграция и создание новых геолого-геофизических инструментов в рамках существующего проекта.',tags:'Нефтегазовая отрасль / B2B / B2C',meta:['Продуктовый дизайнер','2 года','6 дизайнеров'],next:'earm',slides:[
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
earm:{name:'ЕАРМ',subtitle:'Платформа мониторинга и подготовки отчетности',summary:'Интеграция и создание новых модулей мониторинга в рамках существующего проекта.',tags:'Нефтегазовая отрасль / B2B',meta:['Продуктовый дизайнер','1,5 года','1 дизайнер'],next:'epps',slides:[
[1,'Экспертиза скважины','Несколько технических показателей на временной шкале и боковая панель с параметрами.'],
[2,'Таблица показателей',''],
[3,'Часто ремонтируемый фонд','Пользователь анализирует показатели и таблицу скважин, задаёт период и фильтры.'],
[6,'Распределение по категориям',''],
[7,'Аналитика фонда',''],
[13,'Мониторинг показателей',''],
[15,'Сводный аналитический дашборд',''],
[17,'Сравнение плановых и фактических показателей',''],
[19,'Интерактивный прототип','По обязательному требованию заказчика весь дизайн поддерживался как большой кликабельный прототип.']],
body:section('Задача','<p>Было необходимо создать новые модули и инструменты в рамках существующей системы с высокой информационной и функциональной нагрузкой в условиях высокой неопределённости.</p>','task')+section('Что сделал','<p>Успешно спроектировал ряд отдельных модулей мониторинга в рамках существующей системы. Дополнил дизайн-систему общими правилами, задокументировал их и описал поведение. Постоянно находился на связи с бизнесом и командой разработки.</p>','action')+section('Результат','<p>Проект успешно прошёл несколько стадий MVP и вышел на этап B2C, на котором развивается и масштабируется до сих пор.</p>','result')}
};
const $ = selector => root.querySelector(selector);
let current = 'about', slideIndex = 0, lightboxScrollY = 0, slideZoom = 1, lastWheelAt = -Infinity;
const isolatedElements = [];
const routes = ['about', 'projects', 'experience', ...Object.keys(projects)];
const pathForRoute = name => `/${name}`;
const placeholderCaption = {
  title: 'Заголовок',
  copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};
$('#ak-project-list').innerHTML = Object.entries(projects).map(([id, p]) => `<article class="ak-project-row" data-route="${id}" role="link" tabindex="0" aria-label="Открыть проект ${p.name}"><div class="ak-project-copy"><h2 class="ak-project-logo ak-project-logo-${id}">${id === 'earm' ? p.name : `<img src="${media['logo-'+id]}" alt="${p.name}">`}</h2><h3>${p.subtitle}</h3><p class="ak-project-summary">${p.summary}</p><p class="ak-project-tags">${p.tags}</p></div><div class="ak-preview"><img src="${media['preview-'+id]}" alt="Превью проекта ${p.name}" loading="lazy" decoding="async"></div></article>`).join('');
$('#ak-thumbs-prev')?.remove();
$('#ak-thumbs-next')?.remove();

function resetSlideZoom() {
  slideZoom = 1;
  const image = $('#ak-slide');
  image.style.setProperty('--ak-slide-zoom', '1');
  image.style.setProperty('--ak-slide-origin-x', '50%');
  image.style.setProperty('--ak-slide-origin-y', '50%');
}

function showSlide(index, direction = 0) {
  const project = projects[current];
  resetSlideZoom();
  slideIndex = (index + project.slides.length) % project.slides.length;
  const slide = project.slides[slideIndex];
  const image = $('#ak-slide');
  image.src = galleryImage(current, slide[0]);
  image.alt = slide[1];
  $('#ak-slide-title').textContent = placeholderCaption.title;
  $('#ak-slide-copy').textContent = placeholderCaption.copy;
  root.querySelectorAll('[data-index]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.index) === slideIndex)));
  if (direction && !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    image.style.setProperty('--ak-slide-offset', `${direction * 24}px`);
    image.classList.remove('ak-slide-shift');
    void image.offsetWidth;
    image.classList.add('ak-slide-shift');
  }
}

function setExpanded(on) {
  const stage = $('#ak-stage');
  if (on === stage.classList.contains('ak-expanded')) return;
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

function route(name, remember = true, focusHeading = true) {
  if (!routes.includes(name)) {
    name = 'about';
    history.replaceState(null, '', pathForRoute(name));
  }
  setExpanded(false);
  current = name;
  if (remember && location.pathname !== pathForRoute(name)) history.pushState(null, '', pathForRoute(name));
  document.title = (projects[name] ? projects[name].name : name === 'projects' ? 'Проекты' : name === 'experience' ? 'Опыт' : 'Обо мне') + ' - Алексей Корепанов';
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
  const routeTarget = target.closest('[data-route]');
  if (routeTarget && root.contains(routeTarget)) { route(routeTarget.dataset.route); return; }
  if (target.closest('#ak-stage')) { setExpanded(!$('#ak-stage').classList.contains('ak-expanded')); return; }
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
$('#ak-stage').addEventListener('wheel', event => {
  const stage = $('#ak-stage');
  if (!projects[current]) return;
  const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
  if (Math.abs(delta) < 4) return;
  if (event.ctrlKey) {
    if (!stage.classList.contains('ak-expanded')) return;
    event.preventDefault();
    const rect = stage.getBoundingClientRect();
    slideZoom = Math.min(4, Math.max(1, slideZoom + (delta < 0 ? .25 : -.25)));
    const image = $('#ak-slide');
    image.style.setProperty('--ak-slide-zoom', String(slideZoom));
    image.style.setProperty('--ak-slide-origin-x', `${Math.max(0, Math.min(100, (event.clientX - rect.left) / rect.width * 100))}%`);
    image.style.setProperty('--ak-slide-origin-y', `${Math.max(0, Math.min(100, (event.clientY - rect.top) / rect.height * 100))}%`);
    return;
  }
  event.preventDefault();
  const now = performance.now();
  if (now - lastWheelAt < 240) return;
  lastWheelAt = now;
  const direction = delta > 0 ? 1 : -1;
  showSlide(slideIndex + direction, direction);
}, { passive: false });
function routeFromLocation() {
  const name = location.pathname.split('/').filter(Boolean)[0] || 'about';
  if (name !== current) route(name, false);
}
window.addEventListener('popstate', routeFromLocation);
route(location.pathname.split('/').filter(Boolean)[0] || 'about', false, false);
})();

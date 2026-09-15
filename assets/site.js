
(()=>{
const root=document.getElementById('ak-portfolio-v2');
const media={"epps-02": "assets/epps-02.webp", "epps-03": "assets/epps-03.webp", "epps-05": "assets/epps-05.webp", "epps-06": "assets/epps-06.webp", "epps-08": "assets/epps-08.webp", "epps-10": "assets/epps-10.webp", "epps-11": "assets/epps-11.webp", "epps-12": "assets/epps-12.webp", "epps-13": "assets/epps-13.webp", "epps-14": "assets/epps-14.webp", "epps-15": "assets/epps-15.webp", "grad-tablet": "assets/grad-tablet.webp", "grad-workspace": "assets/grad-workspace.webp", "grad-table": "assets/grad-table.webp", "grad-kanban": "assets/grad-kanban.webp", "grad-files": "assets/grad-files.webp", "earm-report": "assets/earm-report.webp", "earm-monitoring": "assets/earm-monitoring.webp", "earm-losses": "assets/earm-losses.webp", "earm-energy": "assets/earm-energy.webp", "earm-expertise": "assets/earm-expertise.webp", "earm-prototype": "assets/earm-prototype.webp", "preview-epps": "assets/epps-02.webp", "preview-grad": "assets/preview-grad.webp", "preview-earm": "assets/preview-earm.webp", "logo-epps": "assets/EPPS_logo.svg", "logo-grad": "assets/GRAD_logo.svg", "logo-earm": "assets/ЕАРМ_logo.svg"};
const section=(h,p)=>`<section class="ak-section"><h2>${h}</h2><div class="ak-copy">${p}</div></section>`;
const projects={
epps:{name:'ЕППС',subtitle:'Платформа мониторинга и планирования',summary:'Полная пересборка интерфейса и перезапуск проекта под расширенные требования бизнеса.',tags:'Нефтегазовая отрасль / B2B / B2C',meta:['Продуктовый дизайнер','1,5 года + поддержка','1 дизайнер'],next:'grad',slides:[
['epps-02','Статистика и сравнение показателей',''],
['epps-03','Сводный дашборд',''],
['epps-05','Детальный прогноз по скважинам',''],
['epps-06','План-факт по этапам',''],
['epps-08','Общая статистика фонда',''],
['epps-10','Этапы строительства бизнес-кейса',''],
['epps-11','Светлая тема: этапы строительства',''],
['epps-12','Реестр бизнес-кейсов',''],
['epps-13','Светлая тема: реестр бизнес-кейсов',''],
['epps-14','Справка по статусам и шагам',''],
['epps-15','Светлая тема: справка по статусам','']],
body:section('Задача','<p>Интерфейс не выдерживал роста функциональной нагрузки. Принятые решения мешали ходу разработки. Было необходимо полностью переработать интерфейс под новые бизнес-требования в условиях высокой неопределённости.</p>')+section('Что изменил','<p>Придумал айдентику проекта. Сформировал и задокументировал масштабируемые правила проектирования UI. Перевёл всё на дизайн-систему Consta и адаптировал её под нужды проекта. Постоянно находился на связи с бизнесом и командой разработки.</p>')+section('Результат','<p>Проект успешно прошёл несколько стадий MVP и вышел на этап B2C, на котором развивается и масштабируется до сих пор.</p>')},
grad:{name:'ГРАД',subtitle:'Платформа мониторинга и анализа',summary:'Интеграция и создание новых геолого-геофизических инструментов в рамках существующего проекта.',tags:'Нефтегазовая отрасль / B2B / B2C',meta:['Продуктовый дизайнер','2 года','6 дизайнеров'],next:'earm',slides:[
['grad-tablet','Геофизический планшет','Один из модулей, дизайн которых я создал с нуля. В рабочей области представлены кривые, шкалы глубины, литология, пласты и интервалы перфорации.'],
['grad-workspace','Карта и планшет в рабочем пространстве','Пример состава инструментов ГРАД: карта и данные по скважине показаны рядом. Экран иллюстрирует контекст платформы; мой вклад охватывал множество новых модулей и доработок.'],
['grad-table','Сводная таблица','Пример интерфейса работы с данными: показатели, значения и панель условного оформления столбца. Такие насыщенные рабочие области входят в состав платформы.'],
['grad-kanban','Канбан','Представление данных по этапам с настройкой группировки, меток и подписей. Ещё один пример инструментов в составе большого продукта.'],
['grad-files','Масштаб платформы','Каталог файлов команды. Крупные модули велись отдельно из-за объёма макетов. Это структура общего продукта, а не перечень модулей, созданных мной единолично.']],
body:section('Задача','<p>Было необходимо интегрироваться в существующую команду дизайнеров для долгосрочной совместной работы. Требовалось создание новых модулей и инструментов в рамках существующей системы с высокой информационной и функциональной нагрузкой.</p>')+section('Что сделал','<p>Успешно спроектировал несколько больших отдельных модулей в рамках существующей системы. Дополнил дизайн-систему под общие правила, задокументировал правила и поведение. Вёл работу и принимал решения по всей системе в рамках отдельных задач. Постоянно находился на связи с бизнесом и командой разработки.</p>')+section('Результат','<p>Проект успешно прошёл несколько стадий MVP и вышел на этап B2C, на котором развивается и масштабируется до сих пор.</p>')},
earm:{name:'ЕАРМ',subtitle:'Платформа мониторинга и подготовки отчетности',summary:'Интеграция и создание новых модулей мониторинга в рамках существующего проекта.',tags:'Нефтегазовая отрасль / B2B',meta:['Продуктовый дизайнер','1,5 года','1 дизайнер'],next:'epps',slides:[
['earm-report','Часто ремонтируемый фонд','Пользователь анализирует динамику и таблицу скважин, задаёт период и фильтры, добавляет комментарии. Итог - Excel-отчёт с графиками и таблицей для внутренних бизнес-процессов.'],
['earm-monitoring','Мониторинг мероприятий','График показателей расположен над реестром с исполнителями, статусами и датами. На отдельных экранах модуля доступны изменения значений и комментариев.'],
['earm-losses','Распределение потерь','Дашборд показывает данные по категориям, причинам и месторождениям. Разные разрезы помогают рассматривать показатели в нужном рабочем контексте.'],
['earm-energy','Энергопотребление','Графики фактических и расчётных показателей, отклонения и индикаторы диапазонов. Оформление согласовано с существующей системой заказчика.'],
['earm-expertise','Экспертиза скважины','Несколько технических показателей на временной шкале и боковая панель с параметрами. Пример высокой информационной нагрузки в модуле.'],
['earm-prototype','Интерактивный прототип','По обязательному требованию заказчика весь дизайн поддерживался как большой кликабельный прототип. При итерациях обновлялись и экраны, и переходы между ними.']],
body:section('Задача','<p>Было необходимо создать новые модули и инструменты в рамках существующей системы с высокой информационной и функциональной нагрузкой в условиях высокой неопределённости.</p>')+section('Что сделал','<p>Успешно спроектировал ряд отдельных модулей мониторинга в рамках существующей системы. Дополнил дизайн-систему общими правилами, задокументировал их и описал поведение. Постоянно находился на связи с бизнесом и командой разработки.</p>')+section('Результат','<p>Проект успешно прошёл несколько стадий MVP и вышел на этап B2C, на котором развивается и масштабируется до сих пор.</p>')}
};
const $ = selector => root.querySelector(selector);
let current = 'about', slideIndex = 0, lightboxScrollY = 0;
const isolatedElements = [];
const routes = ['about', 'projects', 'experience', ...Object.keys(projects)];
const pathForRoute = name => `/${name}`;
const placeholderCaption = {
  title: 'Описание',
  copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
};

$('#ak-project-list').innerHTML = Object.entries(projects).map(([id, p]) => `<article class="ak-project-row" data-route="${id}" role="link" tabindex="0" aria-label="Открыть проект ${p.name}"><div class="ak-project-copy"><h2 class="ak-project-logo ak-project-logo-${id}">${id === 'earm' ? p.name : `<img src="${media['logo-'+id]}" alt="${p.name}">`}</h2><h3>${p.subtitle}</h3><p class="ak-project-summary">${p.summary}</p><p class="ak-project-tags">${p.tags}</p></div><div class="ak-preview"><img src="${media['preview-'+id]}" alt="Превью проекта ${p.name}"></div></article>`).join('');

function showSlide(index) {
  const project = projects[current];
  slideIndex = (index + project.slides.length) % project.slides.length;
  const slide = project.slides[slideIndex];
  $('#ak-slide').src = media[slide[0]];
  $('#ak-slide').alt = slide[1];
  $('#ak-slide-title').textContent = placeholderCaption.title;
  $('#ak-slide-copy').textContent = placeholderCaption.copy;
  root.querySelectorAll('[data-index]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.index) === slideIndex)));
}

function setExpanded(on) {
  const stage = $('#ak-stage');
  if (on === stage.classList.contains('ak-expanded')) return;
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
    $('#ak-thumbs').innerHTML = project.slides.map((slide, i) => `<button class="ak-thumb" data-index="${i}" aria-label="Слайд ${i+1}: ${slide[1]}" aria-pressed="false"><img src="${media[slide[0]]}" alt=""></button>`).join('');
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
  if (event.key === 'ArrowRight') { event.preventDefault(); showSlide(slideIndex + 1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); showSlide(slideIndex - 1); }
});
function routeFromLocation() {
  const name = location.pathname.split('/').filter(Boolean)[0] || 'about';
  if (name !== current) route(name, false);
}
window.addEventListener('popstate', routeFromLocation);
route(location.pathname.split('/').filter(Boolean)[0] || 'about', false, false);
})();


(()=>{
const root=document.getElementById('ak-portfolio-v2');
const media={"epps-after": "assets/epps-after.webp", "epps-before": "assets/epps-before.webp", "epps-dark": "assets/epps-dark.webp", "epps-light": "assets/epps-light.webp", "epps-comparison": "assets/epps-comparison.webp", "grad-tablet": "assets/grad-tablet.webp", "grad-workspace": "assets/grad-workspace.webp", "grad-table": "assets/grad-table.webp", "grad-kanban": "assets/grad-kanban.webp", "grad-files": "assets/grad-files.webp", "earm-report": "assets/earm-report.webp", "earm-monitoring": "assets/earm-monitoring.webp", "earm-losses": "assets/earm-losses.webp", "earm-energy": "assets/earm-energy.webp", "earm-expertise": "assets/earm-expertise.webp", "earm-prototype": "assets/earm-prototype.webp", "preview-epps": "assets/preview-epps.webp", "preview-grad": "assets/preview-grad.webp", "preview-earm": "assets/preview-earm.webp", "logo-epps": "assets/EPPS_logo.svg", "logo-grad": "assets/GRAD_logo.svg", "logo-earm": "assets/ЕАРМ_logo.svg"};
const section=(h,p)=>`<section class="ak-section"><h2>${h}</h2><div class="ak-copy">${p}</div></section>`;
const projects={
epps:{name:'ЕППС',subtitle:'Редизайн системы планирования и мониторинга',summary:'Полная пересборка интерфейса под расширенные требования бизнеса. Переход на Consta, единые правила и две темы.',meta:['Продуктовый дизайнер','1,5 года + поддержка','1 дизайнер'],next:'grad',slides:[
['epps-after','Новая карточка проекта','Пересобрал карточку под растущий объём данных: показатели, объекты, календарный план и этапы. Компоновку и адаптивное поведение согласовал с разработчиками.'],
['epps-before','С чего началась работа','Макет на момент моего подключения. При росте количества полей и объектов прежняя компоновка требовала переработки. В реализации возникала прокрутка внутри панелей.'],
['epps-dark','Этапы по нескольким объектам','Обзор этапов в единой сетке. Цветовые состояния и индикаторы дополняют данные по объектам; оформление подчиняется общим правилам проекта.'],
['epps-light','Светлая тема','Добавил светлую тему. Та же структура и система состояний работают с другой палитрой — здесь они показаны на экране обзора этапов.'],
['epps-comparison','Сравнение версий плана','Графики и таблица показывают значения двух версий и отклонения. Этот экран иллюстрирует работу с аналитикой в обновлённом интерфейсе.']],
body:section('Задача','<p>Интерфейс не выдерживал роста функций и данных. Я разработал новую концепцию, пересобрал проект на Consta и расширил функциональность.</p>')+section('Что изменил','<p>Увеличил информационную вместимость, переработал календарный план и этапы. Унифицировал оформление, добавил две темы и общие правила компонентов.</p>')+section('Результат','<p>Весь функционал реализован. По моему подсчёту, количество кликов сократилось в среднем на 40%.</p>')},
grad:{name:'ГРАД',subtitle:'Платформа для геологов и геофизиков',summary:'Создавал новые модули, развивал существующие инструменты и участвовал в доработке общей дизайн-системы.',meta:['Продуктовый дизайнер','2 года','6 дизайнеров'],next:'earm',slides:[
['grad-tablet','Геофизический планшет','Один из модулей, дизайн которых я создал с нуля. В рабочей области представлены кривые, шкалы глубины, литология, пласты и интервалы перфорации.'],
['grad-workspace','Карта и планшет в рабочем пространстве','Пример состава инструментов ГРАД: карта и данные по скважине показаны рядом. Экран иллюстрирует контекст платформы; мой вклад охватывал множество новых модулей и доработок.'],
['grad-table','Сводная таблица','Пример интерфейса работы с данными: показатели, значения и панель условного оформления столбца. Такие насыщенные рабочие области входят в состав платформы.'],
['grad-kanban','Канбан','Представление данных по этапам с настройкой группировки, меток и подписей. Ещё один пример инструментов в составе большого продукта.'],
['grad-files','Масштаб платформы','Каталог файлов команды. Крупные модули велись отдельно из-за объёма макетов. Это структура общего продукта, а не перечень модулей, созданных мной единолично.']],
body:section('Моя роль','<p>Два года работал в команде из шести дизайнеров. Самостоятельно отвечал за крупные модули; геофизический планшет и ГРАД Лайт создал с нуля.</p>')+section('Как работал','<p>Собирал требования, проектировал решения и вместе с аналитиком готовил документацию. Развивал дизайн-систему и сопровождал разработку.</p>')+section('Реализация','<p>Контролировал соответствие реализации дизайн-решениям.</p>')},
earm:{name:'ЕАРМ',subtitle:'Мониторинг и подготовка отчётности',summary:'Модуль дашбордов с нуля: анализ показателей скважин, фильтрация, работа с таблицами и выгрузка Excel-отчётов.',meta:['Продуктовый дизайнер','1,5 года','1 дизайнер'],next:'epps',slides:[
['earm-report','Часто ремонтируемый фонд','Пользователь анализирует динамику и таблицу скважин, задаёт период и фильтры, добавляет комментарии. Итог — Excel-отчёт с графиками и таблицей для внутренних бизнес-процессов.'],
['earm-monitoring','Мониторинг мероприятий','График показателей расположен над реестром с исполнителями, статусами и датами. На отдельных экранах модуля доступны изменения значений и комментариев.'],
['earm-losses','Распределение потерь','Дашборд показывает данные по категориям, причинам и месторождениям. Разные разрезы помогают рассматривать показатели в нужном рабочем контексте.'],
['earm-energy','Энергопотребление','Графики фактических и расчётных показателей, отклонения и индикаторы диапазонов. Оформление согласовано с существующей системой заказчика.'],
['earm-expertise','Экспертиза скважины','Несколько технических показателей на временной шкале и боковая панель с параметрами. Пример высокой информационной нагрузки в модуле.'],
['earm-prototype','Интерактивный прототип','По обязательному требованию заказчика весь дизайн поддерживался как большой кликабельный прототип. При итерациях обновлялись и экраны, и переходы между ними.']],
body:section('Задача','<p>Спроектировать дашборды для анализа показателей скважин, фильтрации данных и выгрузки отчётов.</p>')+section('Что сделал','<p>Унифицировал интерфейс и фильтрацию, описал логику экранов вместе с аналитиком и подготовил интерактивный прототип.</p>')+section('Результат','<p>Функционал вышел в продакшн и продолжает использоваться без изменений.</p>')}
};
const $ = selector => root.querySelector(selector);
let current = 'about', slideIndex = 0, lightboxScrollY = 0;
const isolatedElements = [];
const routes = ['about', 'projects', 'experience', ...Object.keys(projects)];

$('#ak-project-list').innerHTML = Object.entries(projects).map(([id, p]) => `<article class="ak-project-row" data-route="${id}" role="link" tabindex="0" aria-label="Открыть проект ${p.name}"><div><h2 class="ak-project-logo ak-project-logo-${id}"><img src="${media['logo-'+id]}" alt="${p.name}"></h2><h3>${p.subtitle}</h3><p>${p.summary}</p><span class="ak-view" aria-hidden="true">Открыть проект ↗</span></div><div class="ak-preview"><img src="${media['preview-'+id]}" alt="Превью проекта ${p.name}"></div></article>`).join('');

function showSlide(index) {
  const project = projects[current];
  slideIndex = (index + project.slides.length) % project.slides.length;
  const slide = project.slides[slideIndex];
  $('#ak-slide').src = media[slide[0]];
  $('#ak-slide').alt = slide[1];
  $('#ak-slide-title').textContent = slide[1];
  $('#ak-slide-copy').textContent = slide[2];
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
    history.replaceState(null, '', '#about');
  }
  setExpanded(false);
  current = name;
  if (remember && location.hash !== '#' + name) history.pushState(null, '', '#' + name);
  document.title = (projects[name] ? projects[name].name : name === 'projects' ? 'Проекты' : name === 'experience' ? 'Опыт' : 'Обо мне') + ' — Алексей Корепанов';
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
    $('#ak-case-label').textContent = 'НЕФТЕГАЗОВАЯ ОТРАСЛЬ / B2B';
    $('#ak-case-name').textContent = project.name;
    $('#ak-case-subtitle').textContent = project.subtitle;
    $('#ak-case-meta').innerHTML = project.meta.map((value, i) => `<div><span>${['Роль', 'Продолжительность', 'Команда'][i]}</span>${value}</div>`).join('');
    $('#ak-case-body').innerHTML = project.body;
    $('#ak-next').dataset.route = project.next;
    $('#ak-next').textContent = `${projects[project.next].name} →`;
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
  const name = location.hash.slice(1) || 'about';
  if (name !== current) route(name, false);
}
window.addEventListener('popstate', routeFromLocation);
window.addEventListener('hashchange', routeFromLocation);
route(location.hash.slice(1) || 'about', false, false);
})();

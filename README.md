# Портфолио Алексея Корепанова

Статический сайт на HTML/CSS/JavaScript: [www.korepanov.art](https://www.korepanov.art/).
Хостинг — GitHub Pages, источник публикации — ветка `main`, каталог `/ (root)`.

## Запуск из чистой копии

Установите Git, Node.js **24.19.0** (версия закреплена в `.node-version`) и pnpm **11.19.0**. Для проверок поддерживается Node.js от 24.15 до 25. Зависимости нужны только инструментам разработки; на хостинге Node.js не используется.

```powershell
git clone https://github.com/L35H4/Portfolio.git
cd Portfolio
pnpm install --frozen-lockfile
pnpm run verify
pnpm start
```

Откройте `http://127.0.0.1:8767/`. Остановка — Ctrl+C. Другой порт: `node scripts/serve.mjs 8768`.
Сам сервер не требует установки пакетов: достаточно `node scripts/serve.mjs`.
Он слушает только loopback и отдаёт публичные ресурсы сайта, исключая Git, локальный контекст и служебные файлы.

В Windows также доступны задача VS Code **Portfolio: preview** и `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/preview.ps1`.
PowerShell-сценарии используют Node/Git из PATH либо имеющийся комплект Codex. Абсолютный путь конкретного компьютера не требуется.
Ярлыки на рабочем столе: `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/install-shortcuts.ps1`; предыдущие ярлыки сохраняются локально.

## Структура и адреса

- `index.html` — главная, проекты, опыт и контейнер кейса.
- `assets/site.js` — данные кейсов, hash-навигация и галереи.
- `assets/site.css` — стили; шрифт Onest загружается с Google Fonts, есть fallback sans-serif.
- `assets/` — рабочие изображения, логотипы и исходные PNG. Исходники сохраняются для последующей подготовки изображений.
- `resume.pdf` — публичное резюме; `404.html` — восстановление после неверного адреса.
- `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml` — настройки статической публикации.
- `scripts/`, `tests/` — локальные инструменты и проверки.

Адреса разделов: `/#about`, `/#projects`, `/#experience`, `/#epps`, `/#grad`, `/#earm`.
Они открываются напрямую и после обновления. Пути вида `/epps` не являются адресами кейсов и возвращают 404.
Неизвестный фрагмент `#...` возвращает на `#about`.

Сборки, API, авторизации, форм, базы данных и переменных окружения у сайта нет. Файлы корня и `assets/` уже являются production-версией; каталоги `dist`/`build` не требуются.
`PROJECT_CONTEXT.md` и `.local-context/` — личный архив переноса, исключённый из Git. В чистой копии его отсутствие нормально. Не добавляйте туда ссылки из сайта и не публикуйте архив принудительно.

## Проверки

```powershell
pnpm run verify:quick
pnpm run check
pnpm test
pnpm run verify
pnpm audit
```

`verify:quick` (`check`) проверяет синтаксис JS, существование и регистр локальных ресурсов, основные HTML-атрибуты, домен и отсутствие путей старой среды в коде сайта. Используйте его после серии небольших правок текста, стилей или изображений.
Тесты проверяют шесть маршрутов, историю, неизвестный hash, клавиатурный переход в кейс, галерею и фокус, HTTP-ответы и недоступность приватных файлов на локальном сервере.
Полный `verify` запускайте после изменений JavaScript, навигации, галерей, структуры страниц и перед коммитом или публикацией. DOM-тесты jsdom не проверяют настоящую вёрстку. Перед обновлением проверяйте в браузере desktop/mobile, все три кейса, 16 слайдов, Enter/Tab/Shift+Tab/Esc, возврат прокрутки, резюме, контакты и 404. Не отправляйте реальные сообщения ради теста.

Workflow **Site checks** выполняет установку по lock-файлу и `verify` на push и pull request. Он не публикует сайт.

## Изменения и публикация

```powershell
git switch main
git pull --ff-only origin main
git switch -c codex/my-change
# Измените файлы и проверьте их в браузере.
pnpm run verify
git diff --check
git add <только-файлы-задачи>
git commit -m "Describe the change"
git push -u origin codex/my-change
git ls-remote origin refs/heads/codex/my-change
```

Отправка отдельной ветки запускает тесты, но не меняет сайт при текущих настройках Pages. Preview-деплой не настроен. Перед отправкой снова проверьте настройки, если способ публикации менялся.

После согласования изменений создайте pull request в `main`, дождитесь успешного **Site checks** и выполните согласованное слияние. Затем проверьте **pages build and deployment** в [Actions](https://github.com/L35H4/Portfolio/actions): SHA опубликованного коммита должен совпадать с `main`. Откройте сайт с обновлением страницы, проверьте HTTPS и ключевой изменённый сценарий. Сам push и успешные тесты ещё не доказывают успешный деплой.

Автоматическая публикация локальной рабочей копии в `main`:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/publish.ps1 -CheckOnly
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/publish.ps1
```

Первый запуск только выполняет быструю проверку. Второй автоматически добавляет все локальные изменения, создаёт коммит с датой и временем, синхронизируется с `origin/main`, отправляет коммит прямо в `main` и сверяет его через `ls-remote`. Дополнительное подтверждение не запрашивается: запуск команды или ярлыка «Опубликовать сайт» считается подтверждением публикации. Полный набор тестов в этот быстрый сценарий не входит.

Не используйте force push. Значение CNAME должно оставаться `www.korepanov.art`.

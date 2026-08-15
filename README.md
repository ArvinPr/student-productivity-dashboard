# آزمایش اول — فرانت‌اند ایستا با قابلیت استقرار خودکار

## مشخصات گروه

| نام و نام خانوادگی | شماره دانشجویی | نقش |
|---|---:|---|
| آروین پورزلفی | 401105731 | سرگروه |
| علی مجیدی | 401106447 | عضو گروه |

- **نام Repository:** `student-productivity-dashboard`
- **نام رابط کاربری پروژه:** `StudyFlow`
- **Repository:** https://github.com/ArvinPr/student-productivity-dashboard
- **GitHub Actions:** https://github.com/ArvinPr/student-productivity-dashboard/actions
- **GitHub Pages:** https://ArvinPr.github.io/student-productivity-dashboard/

> توجه: Workflow مربوط به GitHub Pages طوری تنظیم شده است که پس از ورود نسخه نهایی به `main` اجرا شود. بنابراین لینک Pages پس از اجرای موفق Workflow نهایی قابل بررسی خواهد بود.

---

# 1. هدف آزمایش

هدف این آزمایش پیاده‌سازی یک **Static Frontend** و طی‌کردن یک فرآیند توسعه گروهی واقعی با Git و GitHub بود. بنابراین علاوه بر پیاده‌سازی رابط کاربری، موارد زیر نیز در طول پروژه انجام شدند:

- استفاده از Git در تمام مراحل توسعه
- استفاده از `.gitignore`
- ثبت بیش از ۲۰ Commit معنادار
- استفاده واقعی از چند Branch معنادار
- توسعه قابلیت‌ها در Feature Branchهای مستقل
- ادغام تغییرات از طریق Pull Request
- ایجاد و Resolve کردن حداقل دو Merge Conflict
- استفاده از Kanban برای مدیریت Taskها
- مشارکت هر دو عضو گروه در توسعه و Git
- راه‌اندازی GitHub Actions برای استقرار خودکار
- آماده‌سازی GitHub Pages برای انتشار نسخه نهایی
- تهیه گزارش کامل در `README.md`

پروژه به‌صورت **HTML، CSS و JavaScript خالص** پیاده‌سازی شد تا تمرکز اصلی آزمایش علاوه بر Frontend، روی Git Workflow، Branching، Pull Request، Conflict و Continuous Deployment باقی بماند.

---

# 2. معرفی پروژه StudyFlow

پروژه نهایی یک داشبورد ساده برای مدیریت فعالیت‌های دانشجویی است. نام رابط کاربری **StudyFlow** انتخاب شد و ساختار صفحه به چند بخش تقسیم شد:

- Navbar
- Hero Section
- Features
- Tasks
- Goals
- Footer

قابلیت‌هایی که در طول توسعه به پروژه اضافه شدند:

- طراحی Navbar با لینک‌های داخلی
- Hero Section
- Feature Cardها
- نمایش Taskها و وضعیت آن‌ها
- نمایش اهداف تحصیلی
- Responsive Design
- تغییر وضعیت Task با JavaScript
- Dark / Light Theme
- ذخیره Theme انتخاب‌شده با `localStorage`
- Footer Copyright
- Footer Navigation
- استقرار خودکار با GitHub Actions

روند توسعه به‌صورت مرحله‌ای انجام شد و قابلیت‌ها یک‌جا به پروژه اضافه نشدند.

---

# 3. مدیریت پروژه با Kanban

در ابتدای آزمایش یک Kanban Board برای مدیریت فعالیت‌های تیم ایجاد شد. Taskها هم‌زمان با پیشرفت پروژه به بورد اضافه و وضعیت آن‌ها به‌روزرسانی شد.

وضعیت‌های اصلی استفاده‌شده:

```text
Backlog
To Do
In Progress
Review
Done
```

برای Taskها مواردی مانند Assignee، Priority، Size و Estimate نیز مشخص شد. مسئول هر Task نیز تعیین شد تا سهم هر عضو در روند پروژه قابل مشاهده باشد.

نمونه Taskهای اصلی:

- `Initialize Git Repository`
- `Configure .gitignore`
- `Create Base Project Structure`
- `Set Up Branch Strategy`
- `Design Main Page Layout`
- `Implement Navbar and Hero Section`
- `Implement Main Content Sections`
- `Add Responsive Styles`
- `Add JavaScript Interactions`
- `Add Footer Copyright`
- `Add Footer Navigation`
- `Configure GitHub Actions and Pages`
- `Document Project Workflow`
- `Answer Git Questions`

Taskهایی که نیاز به Pull Request داشتند پس از پایان کدنویسی ابتدا وارد `Review` شده و پس از Merge به `Done` منتقل می‌شدند.

---

# 4. تقسیم کار اعضای گروه

## 4.1. آروین پورزلفی — سرگروه

وظایف اصلی آروین:

- ایجاد Repository
- راه‌اندازی Git و Remote
- ایجاد `develop` و برنامه‌ریزی Branch Strategy
- تنظیم `.gitignore`
- ایجاد Base Project Structure
- پیاده‌سازی Navbar
- پیاده‌سازی Hero Section
- استایل‌دهی Navbar و Hero
- رفع مشکل ساختار HTML
- پیاده‌سازی JavaScript Interactions
- پیاده‌سازی Theme Toggle
- ذخیره Theme با `localStorage`
- پیاده‌سازی Footer Copyright
- راه‌اندازی GitHub Actions
- مدیریت بخش مهمی از Pull Requestها و Reviewها
- مدیریت Kanban و هماهنگی مراحل
- تهیه گزارش اصلی آزمایش
- مسئولیت فیلم و تحویل نهایی

## 4.2. علی مجیدی

وظایف اصلی علی:

- Clone کردن Repository و مشارکت مستقل در Git
- طراحی Main Page Layout
- پیاده‌سازی Features
- پیاده‌سازی Tasks
- پیاده‌سازی Goals
- استایل‌دهی Main Content
- Responsive کردن Navbar و Hero
- Responsive کردن Main Content
- پیاده‌سازی Footer Navigation
- مشارکت در ایجاد و حل Merge Conflict
- ایجاد Pull Requestهای مربوط به Taskهای خود
- مشارکت در Review
- پاسخ به هفت سؤال Git در گزارش

تقسیم وظایف به‌گونه‌ای انجام شد که هر دو نفر علاوه بر Frontend، تجربه واقعی Branch، Commit، Push و Pull Request داشته باشند.

---

# 5. مرحله اول — ایجاد Repository و اولین Commit

کار با ایجاد یک Repository محلی آغاز شد. Git روی پروژه Initialize شد و نام Branch اصلی روی `main` قرار گرفت.

یک `README.md` اولیه ایجاد شد و اولین Commit پروژه با پیام زیر ثبت شد:

```text
initialize project repository
```

سپس Repository محلی به Repository موجود در GitHub متصل و Branch `main` برای اولین بار Push شد.

در این مرحله مفاهیم Working Tree، Staging Area و Commit عملاً استفاده شدند.

**مستندات:** [تصویر 1](./screenshots/1.png)، [تصویر 2](./screenshots/2.png)

---

# 6. اصلاح Encoding فایل README

پس از اولین Commit متوجه شدیم Git تغییر فایل `README.md` را به شکل معمول یک فایل متنی نمایش نمی‌دهد. علت، Encoding اولیه فایل بود.

فایل در VS Code با Encoding مناسب `UTF-8` ذخیره شد و اصلاح با یک Commit مستقل ثبت شد:

```text
fix README encoding
```

این Commit برای رفع یک مشکل واقعی ایجاد شد.

**مستند:** [تصویر 3](./screenshots/3.png)

---

# 7. ایجاد Branch `develop` و تعریف Branch Strategy

برای اینکه توسعه مستقیماً روی `main` انجام نشود، Branch جدیدی با نام زیر ایجاد شد:

```text
develop
```

`develop` روی GitHub Push شد و از این مرحله به بعد به‌عنوان Branch تجمیع Featureها مورد استفاده قرار گرفت.

ساختار کلی Workflow تیم:

```text
Feature Branch
      |
      | Pull Request
      v
   develop
      |
      | Final Pull Request
      v
     main
      |
      v
GitHub Actions / GitHub Pages
```

Branchهای اصلی استفاده‌شده:

| Branch | کاربرد |
|---|---|
| `main` | نسخه نهایی پروژه |
| `develop` | محل تجمیع Featureها |
| `feature/base-structure` | ساختار اولیه پروژه |
| `feature/main-layout` | Layout اصلی صفحه |
| `feature/navbar-hero` | Navbar و Hero |
| `feature/main-sections` | Features، Tasks و Goals |
| `feature/responsive-layout` | Responsive Design |
| `feature/interactions` | JavaScript Interactions |
| `feature/footer-copyright` | Copyright |
| `feature/footer-navigation` | Footer Navigation |
| `ci/github-pages` | GitHub Actions Workflow |
| `docs/project-workflow` | گزارش اصلی آزمایش |
| `docs/git-questions` | پاسخ پرسش‌های Git |

در نتیجه شرط «حداقل سه Branch معنادار» با تعداد بیشتری Branch واقعی و مرتبط با توسعه پوشش داده شد.

**مستند:** [تصویر 4](./screenshots/4.png)

---

# 8. تنظیم `.gitignore`

فایل `.gitignore` ایجاد شد تا فایل‌ها و تنظیماتی که نباید وارد Repository شوند Track نشوند.

مهم‌ترین موارد:

```gitignore
.DS_Store
Thumbs.db
.vscode/
.idea/
*.log
```

سپس فایل Stage، Commit و Push شد.

Commit:

```text
add gitignore configuration
```

**مستندات:** [تصویر 5](./screenshots/5.png)، [تصویر 6](./screenshots/6.png)

---

# 9. ایجاد Base Project Structure

برای ایجاد ساختار اولیه، Branch زیر از `develop` ساخته شد:

```text
feature/base-structure
```

سه فایل اصلی Frontend ایجاد شدند:

```text
index.html
styles.css
script.js
```

Commit این مرحله:

```text
create base project structure
```

**مستندات:** [تصویر 7](./screenshots/7.png)، [تصویر 8](./screenshots/8.png)

---

# 10. Pull Request شماره 1 — Base Project Structure

پس از پایان Base Structure، یک Pull Request با مسیر زیر ایجاد شد:

```text
feature/base-structure -> develop
```

پس از بررسی تغییرات، PR شماره 1 Merge شد.

**مستندات:** [تصویر 9](./screenshots/9.png)، [تصویر 10](./screenshots/10.png)، [تصویر 11](./screenshots/11.png)

---

# 11. طراحی Main Layout توسط علی

علی Repository را روی سیستم خود Clone کرد، روی `develop` قرار گرفت و آخرین تغییرات را دریافت کرد.

سپس Branch زیر ایجاد شد:

```text
feature/main-layout
```

در این مرحله Layout کلی صفحه تعیین شد:

- Header
- Features
- Tasks
- Goals
- Footer

Commit:

```text
design main page layout
```

سپس PR شماره 2 ساخته و به `develop` Merge شد.

**مستندات:** [تصویر 12](./screenshots/12.png)، [تصویر 13](./screenshots/13.png)، [تصویر 14](./screenshots/14.png)، [تصویر 15](./screenshots/15.png)

---

# 12. پیاده‌سازی Navbar و Hero

آروین پس از دریافت تغییرات جدید `develop`، Branch زیر را ایجاد کرد:

```text
feature/navbar-hero
```

برای Atomic ماندن Commitها، Navbar و Hero در چند مرحله توسعه داده شدند.

## 12.1. Navbar

Commit:

```text
implement navigation bar
```

## 12.2. Hero

Commit:

```text
add hero section
```

## 12.3. استایل Navbar و Hero

Commit:

```text
style navbar and hero
```

**مستندات:** [تصویر 16](./screenshots/16.png)، [تصویر 17](./screenshots/17.png)، [تصویر 18](./screenshots/18.png)، [تصویر 19](./screenshots/19.png)، [تصویر 21](./screenshots/21.png)

---

# 13. تست رابط کاربری و رفع مشکل ساختار HTML

پس از اضافه‌شدن Styleها، پروژه در Browser تست شد. ظاهر اولیه نشان می‌داد CSS به فایل HTML اعمال نشده است.

**نتیجه تست اولیه:** [تصویر 20](./screenshots/20.png)

پس از بررسی فایل‌ها مشخص شد هنگام تغییر Layout، بخش‌های اصلی سند HTML از جمله `head` و لینک `styles.css` حذف شده بودند. در نتیجه Browser فایل CSS را Load نمی‌کرد.

ساختار سند HTML دوباره کامل شد و اتصال CSS و JavaScript بازگردانده شد.

Commit اصلاح:

```text
restore HTML document structure
```

پس از اصلاح، رابط کاربری دوباره در Browser تست شد و Styleها به‌درستی اعمال شدند.

**نتیجه پس از اصلاح:** [تصویر 22](./screenshots/22.png)

**ثبت اصلاح:** [تصویر 23](./screenshots/23.png)

---

# 14. Pull Request شماره 3 — Navbar و Hero

Pull Request زیر ایجاد شد:

```text
feature/navbar-hero -> develop
```

PR شماره 3 شامل چهار Commit بود:

- `implement navigation bar`
- `add hero section`
- `style navbar and hero`
- `restore HTML document structure`

پس از بررسی، PR Merge شد.

**مستند:** [تصویر 24](./screenshots/24.png)

---

# 15. پیاده‌سازی Main Content توسط علی

علی ابتدا `develop` را با تغییرات PR شماره 3 Sync کرد و سپس Branch جدید ایجاد کرد:

```text
feature/main-sections
```

**دریافت آخرین تغییرات:** [تصویر 25](./screenshots/25.png)

Main Content به چند Commit تقسیم شد.

## 15.1. Features

Commit:

```text
implement features section
```

**مستند:** [تصویر 26](./screenshots/26.png)

## 15.2. Tasks

Commit:

```text
implement tasks section
```

**مستند:** [تصویر 27](./screenshots/27.png)

## 15.3. Goals

Commit:

```text
implement goals section
```

**مستند:** [تصویر 28](./screenshots/28.png)

## 15.4. استایل Main Content

Commit:

```text
style main content sections
```

**مستند:** [تصویر 29](./screenshots/29.png)

---

# 16. Pull Request شماره 4 — Main Content

Branch `feature/main-sections` شامل چهار Commit مستقل بود و از طریق PR شماره 4 وارد `develop` شد.

این PR توسط آروین بررسی شد.

**مستند:** [تصویر 30](./screenshots/30.png)

---

# 17. Responsive Design

پس از کامل‌شدن نسخه Desktop، Responsive Design در Branch مستقل زیر انجام شد:

```text
feature/responsive-layout
```

**ایجاد Branch:** [تصویر 31](./screenshots/31.png)

## 17.1. Responsive کردن Navigation و Hero

Commit:

```text
make navigation responsive
```

**مستند:** [تصویر 32](./screenshots/32.png)

## 17.2. Responsive کردن Content Sections

Commit:

```text
make content sections responsive
```

**مستند:** [تصویر 33](./screenshots/33.png)

PR شماره 5 برای این Branch ایجاد و وارد `develop` شد.

**مستند Pull Request:** [تصویر 34](./screenshots/34.png)

---

# 18. JavaScript Interactions

برای قابلیت‌های JavaScript یک Branch جدید توسط آروین ایجاد شد:

```text
feature/interactions
```

سه قابلیت مستقل در این Branch توسعه داده شدند.

## 18.1. تغییر وضعیت Taskها

وضعیت Task با هر Click در چرخه زیر تغییر می‌کند:

```text
To Do -> In Progress -> Done -> To Do
```

Commit:

```text
add task status interaction
```

**مستند:** [تصویر 35](./screenshots/35.png)

## 18.2. Dark / Light Theme

یک Theme Toggle به Navbar اضافه شد. با کلیک روی دکمه، کلاس `dark-theme` روی `body` Toggle می‌شود.

Commit:

```text
add theme toggle
```

**مستندات:** [تصویر 36](./screenshots/36.png)، [تصویر 37](./screenshots/37.png)

## 18.3. ذخیره Theme با `localStorage`

برای حفظ Theme بعد از Refresh، مقدار Theme در `localStorage` ذخیره و در Load بعدی خوانده شد.

Commit:

```text
persist theme preference
```

**مستند:** [تصویر 38](./screenshots/38.png)

---

# 19. Pull Request شماره 6 — JavaScript Interactions

سه Commit JavaScript در PR شماره 6 قرار گرفتند و PR با موفقیت وارد `develop` شد.

**مستند:** [تصویر 39](./screenshots/39.png)

---

# 20. Merge Conflict اول — توسعه هم‌زمان Footer

برای انجام Requirement مربوط به Conflict، دو عضو گروه از یک Base مشترک دو قابلیت متفاوت را روی یک بخش مشترک توسعه دادند.

## 20.1. تغییر آروین

Branch:

```text
feature/footer-copyright
```

Commit:

```text
add footer copyright
```

**مستند:** [تصویر 40](./screenshots/40.png)

## 20.2. تغییر علی

Branch:

```text
feature/footer-navigation
```

Commit:

```text
add footer navigation
```

**مستند:** [تصویر 41](./screenshots/41.png)

---

# 21. Merge کردن Footer Copyright

ابتدا PR مربوط به `feature/footer-copyright` وارد `develop` شد.

PR شماره 7:

```text
feature/footer-copyright -> develop
```

**مستند:** [تصویر 42](./screenshots/42.png)

---

# 22. ایجاد Conflict واقعی اول

علی آخرین نسخه `develop` را داخل `feature/footer-navigation` Merge کرد.

Conflict در دو فایل ایجاد شد:

```text
index.html
styles.css
```

Markerهای Conflict:

```text
<<<<<<< HEAD
=======
>>>>>>> develop
```

**Conflict در `index.html`:** [تصویر 43](./screenshots/43.png)

**Conflict در `styles.css`:** [تصویر 44](./screenshots/44.png)

---

# 23. Resolve کردن Conflict اول

برای حل Conflict تصمیم گرفته شد هر دو قابلیت حفظ شوند:

- Copyright آروین
- Footer Navigation علی

Markerها حذف و محتوای نهایی فایل‌ها به‌صورت دستی تنظیم شد.

**وضعیت حین Resolve:** [تصویر 45](./screenshots/45.png)

پس از Stage کردن فایل‌ها، Merge با Commit زیر نهایی شد:

```text
resolve footer merge conflict
```

**مستند:** [تصویر 46](./screenshots/46.png)

---

# 24. Pull Request شماره 8 — Footer Navigation

پس از Resolve شدن Conflict، Branch علی Push شد و PR شماره 8 ایجاد شد.

PR توسط آروین Review و Approve شد و سپس وارد `develop` شد.

**مستند:** [تصویر 47](./screenshots/47.png)

---

# 25. GitHub Actions و استقرار خودکار

برای بخش Continuous Deployment یک Branch مستقل ایجاد شد:

```text
ci/github-pages
```

ساختار Workflow:

```text
.github/
└── workflows/
    └── deploy.yml
```

**ایجاد Branch و Workflow:** [تصویر 48](./screenshots/48.png)

Workflow مراحل زیر را انجام می‌دهد:

1. Checkout کردن Repository
2. آماده‌سازی GitHub Pages
3. Upload کردن فایل‌های Static به‌عنوان Artifact
4. Deploy کردن Artifact روی GitHub Pages

از آنجا که پروژه HTML/CSS/JavaScript خالص است، Build Step جداگانه‌ای مانند `npm run build` نیاز نبود.

Trigger اصلی Deployment روی Branch `main` تنظیم شد.

Commit:

```text
add GitHub Pages deployment workflow
```

**مستند:** [تصویر 49](./screenshots/49.png)

---

# 26. Pull Request شماره 9 — GitHub Pages Workflow

PR شماره 9 ایجاد شد:

```text
ci/github-pages -> develop
```

پس از Merge، فایل Workflow بخشی از `develop` شد.

**مستند:** [تصویر 50](./screenshots/50.png)

## لینک‌های Deployment

- **GitHub Actions:** https://github.com/ArvinPr/student-productivity-dashboard/actions
- **GitHub Pages:** https://ArvinPr.github.io/student-productivity-dashboard/

---

# 27. مستندسازی پروژه توسط آروین

برای گزارش اصلی آزمایش Branch زیر ایجاد شد:

```text
docs/project-workflow
```

آروین در این Branch:

- گزارش کامل مراحل پروژه را در `README.md` نوشت.
- فایل `chatgpt_interaction_log.md` را برای مستندسازی تعامل با ChatGPT اضافه کرد.
- تصاویر مراحل پروژه را در پوشه `screenshots/` قرار داد.

Commitهای اصلی این Branch:

```text
document project workflow
add project screenshots
```

سپس PR شماره 10 ساخته و وارد `develop` شد.

**مستند:** [تصویر 53](./screenshots/53.png)

---

# 28. پاسخ پرسش‌های Git توسط علی

علی در Branch زیر پاسخ هفت سؤال آزمایش را تهیه کرد:

```text
docs/git-questions
```

پاسخ‌ها در همان فایل `README.md` نوشته شدند تا بعداً با گزارش اصلی پروژه ادغام شوند.

Commit:

```text
answer Git questions
```

**مستند:** [تصویر 52](./screenshots/52.png)

---

# 29. Merge Conflict دوم — README

Conflict دوم در مرحله مستندسازی پروژه ایجاد شد.

آروین و علی از یک نسخه مشترک `develop` دو Branch مستقل داشتند:

```text
docs/project-workflow
docs/git-questions
```

آروین گزارش کامل پروژه را در `README.md` نوشته بود و علی نیز پاسخ هفت سؤال آزمایش را در همان فایل `README.md` نوشته بود.

ابتدا Branch آروین با Pull Request شماره 10 وارد `develop` شد.

سپس علی آخرین نسخه `develop` را دریافت کرد و داخل Branch خود Merge کرد:

```bash
git merge develop
```

به دلیل تغییر گسترده `README.md` در هر دو Branch، Git نتوانست فایل را به‌صورت خودکار Merge کند و Conflict زیر ایجاد شد:

```text
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
```

**مستند Conflict دوم:** [تصویر 54](./screenshots/54.png)

برای Resolve کردن Conflict، گزارش اصلی پروژه از `develop` به‌عنوان ساختار اصلی README حفظ شد و پاسخ هفت سؤال علی نیز در بخش «پاسخ پرسش‌های آزمایش» به همان فایل اضافه شد.

به این ترتیب هیچ‌یک از مستندات دو عضو حذف نشد و نسخه نهایی README شامل هر دو بخش شد.

Commit نهایی Resolve این Conflict بعد از Stage شدن README ثبت می‌شود:

```text
resolve README merge conflict
```

---

# 30. Commitهای معنادار پروژه

تا پیش از Commit حل Conflict دوم، حداقل ۲۵ Commit معنادار بدون احتساب Merge Commitها ثبت شده است.

مهم‌ترین Commitها:

| # | Commit Message | مسئول |
|---:|---|---|
| 1 | `initialize project repository` | آروین |
| 2 | `fix README encoding` | آروین |
| 3 | `add gitignore configuration` | آروین |
| 4 | `create base project structure` | آروین |
| 5 | `design main page layout` | علی |
| 6 | `implement navigation bar` | آروین |
| 7 | `add hero section` | آروین |
| 8 | `style navbar and hero` | آروین |
| 9 | `restore HTML document structure` | آروین |
| 10 | `implement features section` | علی |
| 11 | `implement tasks section` | علی |
| 12 | `implement goals section` | علی |
| 13 | `style main content sections` | علی |
| 14 | `make navigation responsive` | علی |
| 15 | `make content sections responsive` | علی |
| 16 | `add task status interaction` | آروین |
| 17 | `add theme toggle` | آروین |
| 18 | `persist theme preference` | آروین |
| 19 | `add footer copyright` | آروین |
| 20 | `add footer navigation` | علی |
| 21 | `resolve footer merge conflict` | علی |
| 22 | `add GitHub Pages deployment workflow` | آروین |
| 23 | `document project workflow` | آروین |
| 24 | `add project screenshots` | آروین |
| 25 | `answer Git questions` | علی |

در نتیجه شرط حداقل ۲۰ Commit معنادار به‌طور کامل رعایت شده است.

---

# 31. Pull Requestهای اصلی

| PR | عنوان | Source | Target |
|---:|---|---|---|
| #1 | Create base project structure | `feature/base-structure` | `develop` |
| #2 | Design main page layout | `feature/main-layout` | `develop` |
| #3 | Implement navbar and hero section | `feature/navbar-hero` | `develop` |
| #4 | Implement main content sections | `feature/main-sections` | `develop` |
| #5 | Add responsive styles | `feature/responsive-layout` | `develop` |
| #6 | Add JavaScript interactions | `feature/interactions` | `develop` |
| #7 | Add footer copyright | `feature/footer-copyright` | `develop` |
| #8 | Add footer navigation | `feature/footer-navigation` | `develop` |
| #9 | Configure GitHub Pages deployment | `ci/github-pages` | `develop` |
| #10 | Docs/project workflow | `docs/project-workflow` | `develop` |

پس از Resolve شدن Conflict دوم، Branch `docs/git-questions` نیز با Pull Request وارد `develop` خواهد شد.

---

# 32. محافظت از Branch `main`

در مرحله نهایی Repository، Branch `main` باید با Branch Protection / Ruleset محافظت شود تا ادغام تغییرات به آن فقط از طریق Pull Request انجام شود.

جریان نهایی:

```text
develop
   |
   | Pull Request
   v
 main
```

پس از اعمال Protection، تصویر مربوط به تنظیمات به مستندات اضافه خواهد شد.

---

# 33. Deployment نهایی

پس از تکمیل Branch Protection و Merge نهایی:

```text
develop -> main
```

Workflow فایل `deploy.yml` اجرا خواهد شد.

- **GitHub Actions:** https://github.com/ArvinPr/student-productivity-dashboard/actions
- **GitHub Pages:** https://ArvinPr.github.io/student-productivity-dashboard/

پس از اجرای موفق Workflow، لینک Pages به‌صورت عملی تست خواهد شد.

---

# 34. استفاده از هوش مصنوعی

در انجام این آزمایش از ChatGPT به‌عنوان دستیار استفاده شد.

## مشخصات

- **مدل:** GPT-5.6 Sol
- **ابزار:** ChatGPT
- **ارائه‌دهنده مدل:** OpenAI
- **نحوه دسترسی:** رابط کاربری ChatGPT و سرویس میزبانی‌شده OpenAI
- مدل به‌صورت Local اجرا نشده است.
- از API مستقیم برای این تعامل استفاده نشده است.

## موارد اصلی استفاده

- بررسی الزامات آزمایش
- برنامه‌ریزی Git Workflow
- طراحی Branch Strategy
- طراحی ساختار Frontend
- راهنمایی در HTML/CSS
- Debug کردن عدم Load شدن CSS
- Responsive Design
- JavaScript Interactions
- Dark Mode
- `localStorage`
- برنامه‌ریزی و Resolve کردن Conflict
- GitHub Actions و GitHub Pages
- ساختاردهی گزارش

تمام دستورات و تغییرات توسط اعضای گروه روی سیستم خود اجرا و بررسی شدند.

گزارش خلاصه مکالمه شامل Promptهای مهم و پاسخ‌های مدل در فایل زیر قرار دارد:

```text
chatgpt_interaction_log.md
```

---

# 35. پاسخ پرسش‌های آزمایش

## 35.1. پوشه‌ی `.git` چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

پوشه‌ی `.git` هسته‌ی یک Repository محلی Git است. زمانی که داخل یک پوشه دستور زیر را اجرا می‌کنیم:

```bash
git init
```

Git یک Repository ایجاد می‌کند و اطلاعات مربوط به مدیریت نسخه‌ها را داخل پوشه‌ی `.git` نگه می‌دارد.

مهم‌ترین اطلاعات موجود در این پوشه عبارت‌اند از:

- Object Database در مسیر `objects/`
- Referenceها در `refs/`
- فایل `HEAD`
- فایل `config`
- فایل `index`
- Reflogها در `logs/`
- Hookها و فایل‌های داخلی Git

بنابراین اگر پوشه‌ی `.git` حذف شود، فایل‌های پروژه ممکن است باقی بمانند، اما اطلاعات Repository مانند Commit History، Branchها و تنظیمات Git از بین می‌روند.

---

## 35.2. منظور از Atomic بودن در Atomic Commit و Atomic Pull Request چیست؟

Atomic بودن یعنی یک واحد تغییر یک هدف مشخص و مستقل داشته باشد و چند تغییر نامرتبط را با هم ترکیب نکند.

### Atomic Commit

یک Atomic Commit باید یک تغییر منطقی مشخص را انجام دهد.

مثلاً:

```text
implement navigation bar
add theme toggle
make navigation responsive
```

بهتر از یک Commit بزرگ شامل همه این تغییرات است.

مزایا:

- History خواناتر می‌شود.
- Review ساده‌تر می‌شود.
- Revert کردن یک تغییر مستقل آسان‌تر است.
- پیدا کردن علت Bug ساده‌تر می‌شود.

### Atomic Pull Request

یک PR نیز بهتر است یک Feature، Bug Fix یا هدف مشخص را پوشش دهد.

برای مثال:

```text
Add responsive styles
```

یک PR متمرکزتر و قابل Reviewتر از PR بزرگی است که هم‌زمان Responsive Design، README، Bug Fix و Workflow را تغییر دهد.

---

## 35.3. تفاوت `fetch`، `pull`، `merge`، `rebase` و `cherry-pick`

### `git fetch`

اطلاعات جدید Remote را دریافت می‌کند اما آن‌ها را مستقیماً وارد Branch فعلی نمی‌کند.

```bash
git fetch origin
```

### `git pull`

ابتدا اطلاعات Remote را دریافت و سپس آن‌ها را با Branch فعلی Integrate می‌کند.

```text
git pull ≈ git fetch + integration
```

### `git merge`

History دو Branch را با هم ترکیب می‌کند.

```bash
git merge develop
```

در صورت وجود تغییر ناسازگار ممکن است Conflict ایجاد شود.

### `git rebase`

Commitهای یک Branch را روی Base جدید دوباره اعمال می‌کند و معمولاً History خطی‌تری می‌سازد.

```bash
git rebase develop
```

چون Commitها دوباره ساخته می‌شوند، Hash آن‌ها تغییر می‌کند.

### `git cherry-pick`

یک Commit مشخص را انتخاب و تغییر آن را روی Branch فعلی اعمال می‌کند.

```bash
git cherry-pick <commit-hash>
```

خلاصه:

```text
fetch       → دریافت اطلاعات Remote
pull        → دریافت و Integrate کردن
merge       → ترکیب دو History
rebase      → اعمال دوباره Commitها روی Base جدید
cherry-pick → اعمال یک Commit مشخص
```

---

## 35.4. تفاوت `reset`، `revert`، `restore`، `switch` و `checkout`

### `git reset`

برای تغییر موقعیت `HEAD` و در بعضی حالت‌ها تغییر Index و Working Tree استفاده می‌شود.

حالت‌های معروف:

```bash
git reset --soft
git reset --mixed
git reset --hard
```

- `--soft`: فقط `HEAD`
- `--mixed`: `HEAD` و Stage
- `--hard`: `HEAD`، Stage و Working Tree

### `git revert`

History قبلی را حذف نمی‌کند. یک Commit جدید می‌سازد که اثر Commit قبلی را معکوس می‌کند.

```bash
git revert <commit-hash>
```

### `git restore`

برای Restore کردن فایل‌ها در Working Tree یا Stage استفاده می‌شود.

```bash
git restore index.html
git restore --staged index.html
```

### `git switch`

برای جابه‌جایی بین Branchها:

```bash
git switch develop
git switch -c feature/example
```

### `git checkout`

دستور قدیمی‌تر و چندمنظوره‌ای است که هم برای Branch و هم Restore فایل استفاده می‌شد.

```text
git switch  → کار با Branchها
git restore → Restore فایل‌ها
```

---

## 35.5. Stage یا Index چیست؟ `stash` چه کاری انجام می‌دهد؟

Stage یا **Staging Area** فضای میانی بین Working Directory و Commit است.

```text
Working Directory
       |
     git add
       v
Stage / Index
       |
   git commit
       v
Repository
```

با `git add` انتخاب می‌کنیم کدام تغییرات وارد Commit بعدی شوند.

### `git stash`

برای ذخیره موقت تغییرات ناتمام محلی استفاده می‌شود:

```bash
git stash
```

نمایش Stashها:

```bash
git stash list
```

برگرداندن:

```bash
git stash apply
```

یا:

```bash
git stash pop
```

برای قرار دادن فایل‌های Untracked در Stash نیز می‌توان از:

```bash
git stash -u
```

استفاده کرد.

---

## 35.6. Snapshot چیست و چه ارتباطی با Commit دارد؟

در Git بهتر است Commitها را **Snapshot** در نظر بگیریم، نه Diff.

Snapshot یعنی نمای وضعیت پروژه در یک لحظه مشخص.

به‌صورت مفهومی:

```text
Commit A → Snapshot A
Commit B → Snapshot B
Commit C → Snapshot C
```

هر Commit به یک Tree اشاره می‌کند که وضعیت فایل‌ها و Directoryهای پروژه در آن لحظه را نمایش می‌دهد.

وقتی `git diff` اجرا می‌شود، Diff با مقایسه دو Snapshot محاسبه می‌شود.

هر Commit علاوه بر Snapshot، اطلاعاتی مانند موارد زیر دارد:

- Parent Commit
- Author
- Committer
- زمان
- Commit Message

بنابراین:

> Commit یک Snapshot از وضعیت پروژه را معرفی می‌کند و Diff نتیجه مقایسه Snapshotها است.

---

## 35.7. تفاوت Local Repository و Remote Repository چیست؟

### Local Repository

Repositoryای است که روی سیستم توسعه‌دهنده قرار دارد.

دستورهایی مانند موارد زیر بدون نیاز به اینترنت قابل انجام‌اند:

```bash
git status
git add
git commit
git branch
git switch
git log
```

### Remote Repository

Repository دیگری است که Git محلی از طریق یک نام و آدرس آن را می‌شناسد.

در این آزمایش Repository روی GitHub با نام Remote زیر ثبت شده است:

```text
origin
```

مشاهده Remoteها:

```bash
git remote -v
```

ارسال تغییرات:

```bash
git push origin develop
```

دریافت اطلاعات:

```bash
git fetch origin
```

یا:

```bash
git pull origin develop
```

تفاوت کلی:

```text
Local Repository
- روی سیستم توسعه‌دهنده
- محل انجام توسعه
- دارای History محلی
- Commit و Branch بدون اینترنت

Remote Repository
- Repository دیگری که از طریق URL/Path شناخته می‌شود
- در پروژه ما روی GitHub است
- برای اشتراک‌گذاری و همکاری
- تبادل اطلاعات با push / fetch / pull
```

Remote الزاماً GitHub نیست و می‌تواند هر Repository دیگری باشد که از Repository فعلی به آن Reference داده شده است.

---

# 36. وضعیت الزامات آزمایش

| الزام | وضعیت |
|---|---|
| Static Frontend | ✅ انجام شده |
| Git در روند توسعه | ✅ انجام شده |
| `.gitignore` | ✅ انجام شده |
| حداقل ۲۰ Commit معنادار | ✅ انجام شده |
| حداقل ۳ Branch معنادار | ✅ انجام شده |
| استفاده از Pull Request | ✅ انجام شده |
| Conflict اول | ✅ انجام شده |
| Conflict دوم | ✅ ایجاد و Resolve در حال نهایی‌شدن |
| GitHub Actions Workflow | ✅ انجام شده |
| GitHub Pages Workflow | ✅ آماده |
| Deploy نهایی Pages | ⏳ بعد از Merge نهایی به `main` |
| Protect کردن `main` | ⏳ مرحله نهایی |
| گزارش فارسی در README | ✅ انجام شده |
| پاسخ ۷ سؤال | ✅ انجام شده |
| مستندسازی AI | ✅ انجام شده |
| فیلم نهایی | ⏳ مرحله تحویل |

---

# 37. فهرست مستندات تصویری

تصاویر در پوشه زیر نگه‌داری می‌شوند:

```text
screenshots/
```

| شماره تصاویر | مرحله |
|---|---|
| 1 تا 3 | ایجاد Repository و Commitهای اولیه |
| 4 | ایجاد `develop` |
| 5 تا 6 | `.gitignore` |
| 7 تا 11 | Base Project Structure و PR #1 |
| 12 تا 15 | Main Layout و PR #2 |
| 16 تا 24 | Navbar/Hero، Debug و PR #3 |
| 25 تا 30 | Main Content و PR #4 |
| 31 تا 34 | Responsive Design و PR #5 |
| 35 تا 39 | JavaScript و PR #6 |
| 40 تا 42 | Footer Branchها و PR #7 |
| 43 تا 46 | Conflict اول و Resolve آن |
| 47 | PR #8 و Review |
| 48 تا 50 | GitHub Actions و PR #9 |
| 52 | Commit پاسخ سؤال‌های Git |
| 53 | PR #10 گزارش پروژه |
| 54 | Conflict دوم روی README |

---

# 38. جمع‌بندی

در این آزمایش هدف صرفاً تولید یک صفحه Static نبود. پروژه به شکلی انجام شد که روند واقعی توسعه گروهی با Git قابل مشاهده باشد.

هر قابلیت روی Branch معنادار توسعه پیدا کرد، تغییرات در Commitهای مشخص ثبت شدند و Featureها با Pull Request وارد `develop` شدند. هر دو عضو گروه در Git و Frontend مشارکت داشتند.

در طول توسعه:

- یک Bug واقعی در ساختار HTML شناسایی و اصلاح شد.
- Responsive Design در Branch مستقل توسعه داده شد.
- تعاملات JavaScript به‌صورت مرحله‌ای اضافه شدند.
- Dark Mode و `localStorage` پیاده‌سازی شدند.
- دو Merge Conflict مستقل ایجاد شدند.
- Conflict اول روی کد Frontend و Conflict دوم روی README رخ داد.
- GitHub Actions برای Deployment خودکار تنظیم شد.
- گزارش پروژه، مستندات AI و پاسخ هفت سؤال تکمیل شدند.

مراحل باقی‌مانده برای تحویل نهایی:

1. Commit کردن Resolve نهایی Conflict دوم
2. Merge کردن `docs/git-questions` به `develop`
3. محافظت از `main`
4. Pull Request نهایی `develop -> main`
5. اجرای موفق GitHub Actions
6. بررسی عملی لینک GitHub Pages
7. ضبط فیلم نهایی

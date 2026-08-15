# آزمایش اول — فرانت‌اند ایستا با قابلیت استقرار خودکار

## مشخصات گروه

| نام و نام خانوادگی | شماره دانشجویی | نقش در آزمایش |
|---|---:|---|
| آروین پورزلفی | 401105731 | سرگروه |
| علی مجیدی | 401106447 | عضو گروه |

- **نام Repository:** `student-productivity-dashboard`
- **نام رابط کاربری پروژه:** `StudyFlow`
- **Repository:** <https://github.com/ArvinPr/student-productivity-dashboard>
- **GitHub Actions:** <https://github.com/ArvinPr/student-productivity-dashboard/actions>
- **GitHub Pages:** <https://ArvinPr.github.io/student-productivity-dashboard/>

> آدرس GitHub Pages از ابتدا بر اساس نام کاربری و Repository مشخص است، اما فعال‌شدن نسخه نهایی آن به اجرای موفق Workflow پس از Merge نهایی به `main` وابسته است.

---

# 1. هدف آزمایش

هدف این آزمایش پیاده‌سازی یک **Static Frontend** و طی‌کردن یک فرآیند توسعه گروهی واقعی با Git و GitHub بود. بنابراین علاوه بر پیاده‌سازی رابط کاربری، موارد زیر نیز در طول پروژه انجام شدند:

- استفاده از Git در تمام مراحل توسعه
- استفاده از `.gitignore`
- ثبت بیش از ۲۰ Commit معنادار
- استفاده واقعی از چند Branch معنادار
- توسعه قابلیت‌ها در Feature Branchهای مستقل
- ادغام تغییرات از طریق Pull Request
- ایجاد و Resolve کردن Merge Conflict
- استفاده از Kanban برای مدیریت Taskها
- مشارکت هر دو عضو گروه در توسعه و Git
- راه‌اندازی GitHub Actions برای استقرار خودکار
- آماده‌سازی GitHub Pages برای انتشار نسخه نهایی
- تهیه گزارش کامل در `README.md`

پروژه به‌صورت **HTML، CSS و JavaScript خالص** پیاده‌سازی شد. این انتخاب باعث شد تمرکز اصلی آزمایش علاوه بر Frontend، روی Git Workflow، Branching، Pull Request، Conflict و Continuous Deployment باقی بماند.

---

# 2. معرفی پروژه StudyFlow

پروژه‌ی نهایی یک داشبورد ساده برای مدیریت فعالیت‌های دانشجویی است. نام رابط کاربری **StudyFlow** انتخاب شد و ساختار صفحه به چند بخش تقسیم شد:

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

# 3. مدیریت کار با Kanban

در ابتدای آزمایش یک Kanban Board برای مدیریت فعالیت‌های تیم ایجاد شد. برای اینکه بورد صرفاً یک مستند نهایی نباشد، Taskها همزمان با پیشرفت پروژه به آن اضافه و وضعیت آن‌ها تغییر داده شد.

وضعیت‌های اصلی استفاده‌شده:

```text
Backlog
To Do
In Progress
Review
Done
```

برای Taskها مواردی مانند Assignee، Priority، Size و Estimate نیز مشخص شد. مسئول هر Task مشخص بود تا سهم هر عضو در روند پروژه قابل مشاهده باشد.

نمونه Taskهایی که در طول پروژه تعریف شدند:

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

Taskها پس از پایان کدنویسی مستقیماً `Done` نمی‌شدند؛ در مواردی که نیاز به Pull Request داشتند ابتدا وارد `Review` شده و پس از Merge نهایی به `Done` منتقل می‌شدند.

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
- مدیریت بخش قابل توجهی از Pull Requestها و Reviewها
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
- مشارکت در Merge Conflict و Resolve کردن آن
- ایجاد Pull Requestهای مربوط به Taskهای خود
- مشارکت در Review
- پاسخ به هفت سؤال Git در گزارش

تقسیم وظایف به‌گونه‌ای انجام شد که هر دو نفر علاوه بر Frontend، تجربه‌ی واقعی Branch، Commit، Push و Pull Request داشته باشند.

---

# 5. مرحله اول — ایجاد Repository و اولین Commit

کار با ایجاد یک Repository محلی آغاز شد. Git روی پروژه Initialize شد و نام Branch اصلی روی `main` قرار گرفت.

در این مرحله یک `README.md` اولیه ایجاد شد و اولین Commit پروژه با پیام زیر ثبت شد:

```text
initialize project repository
```

سپس Repository محلی به Repository موجود در GitHub متصل و Branch `main` برای اولین بار Push شد.

در این مرحله عملاً سه مفهوم اصلی بررسی شدند:

1. Working Tree
2. Staging Area
3. Commit

فایل ابتدا به‌صورت Untracked مشاهده شد، سپس با `git add` وارد Stage و با `git commit` در History ثبت شد.

**مستندات این مرحله:** [تصویر 1](./screenshots/1.png)، [تصویر 2](./screenshots/2.png)

---

# 6. اصلاح Encoding فایل README

پس از اولین Commit متوجه شدیم Git تغییر فایل `README.md` را به شکل معمول یک فایل متنی نمایش نمی‌دهد. علت، Encoding اولیه فایل بود.

فایل در VS Code با Encoding مناسب `UTF-8` ذخیره شد و اصلاح با یک Commit مستقل ثبت شد:

```text
fix README encoding
```

این Commit صرفاً برای افزایش تعداد Commitها ایجاد نشد؛ یک مشکل واقعی در فایل وجود داشت که برطرف شد.

**مستند این مرحله:** [تصویر 3](./screenshots/3.png)

---

# 7. ایجاد Branch `develop` و تعریف Branch Strategy

برای اینکه توسعه مستقیماً روی `main` انجام نشود، Branch جدیدی با نام زیر ایجاد شد:

```text
develop
```

`develop` روی GitHub نیز Push شد و از این مرحله به بعد به‌عنوان Branch تجمیع Featureها مورد استفاده قرار گرفت.

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

در طول پروژه Branchهای زیر واقعاً استفاده شدند:

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

در نتیجه شرط «حداقل سه Branch معنادار» نه‌تنها رعایت شد، بلکه هر Branch با هدف مشخص ایجاد و در روند واقعی توسعه استفاده شد.

**مستند این مرحله:** [تصویر 4](./screenshots/4.png)

---

# 8. تنظیم `.gitignore`

در مرحله بعد فایل `.gitignore` ایجاد شد تا فایل‌ها و تنظیماتی که نباید وارد Repository شوند Track نشوند.

مهم‌ترین موارد اضافه‌شده:

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

**مستندات این مرحله:** [تصویر 5](./screenshots/5.png)، [تصویر 6](./screenshots/6.png)

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

در `index.html` ساختار پایه سند، اتصال CSS و JavaScript ایجاد شد. در `styles.css` Reset اولیه و در `script.js` ساختار اولیه JavaScript قرار گرفت.

Commit این مرحله:

```text
create base project structure
```

Branch روی Remote Push شد.

**مستندات ساخت Branch و Commit:** [تصویر 7](./screenshots/7.png)، [تصویر 8](./screenshots/8.png)

---

# 10. Pull Request شماره 1 — Base Project Structure

پس از پایان Base Structure، برای ادغام مستقیم از `git merge` روی `develop` استفاده نکردیم. یک Pull Request با مسیر زیر ایجاد شد:

```text
feature/base-structure -> develop
```

پس از بررسی تغییرات، PR شماره 1 Merge شد. این اولین استفاده واقعی پروژه از Pull Request برای ادغام Feature بود.

**مستندات:** [تصویر 9](./screenshots/9.png)، [تصویر 10](./screenshots/10.png)، [تصویر 11](./screenshots/11.png)

---

# 11. شروع مشارکت مستقل علی و طراحی Main Layout

علی Repository را روی سیستم خود Clone کرد، روی `develop` قرار گرفت و آخرین تغییرات را دریافت کرد.

سپس Branch زیر ایجاد شد:

```text
feature/main-layout
```

هدف این مرحله فقط مشخص‌کردن Layout کلی صفحه بود و جزئیات نهایی هر Section در مراحل بعد اضافه شدند.

بخش‌های اصلی صفحه در این مرحله تعیین شدند:

- Header
- Features
- Tasks
- Goals
- Footer

Commit:

```text
design main page layout
```

پس از Push، PR شماره 2 ساخته و به `develop` Merge شد.

**مستندات:** [تصویر 12](./screenshots/12.png)، [تصویر 13](./screenshots/13.png)، [تصویر 14](./screenshots/14.png)، [تصویر 15](./screenshots/15.png)

---

# 12. پیاده‌سازی Navbar و Hero

آروین پس از دریافت تغییرات جدید `develop`، Branch زیر را ایجاد کرد:

```text
feature/navbar-hero
```

برای اینکه Commitها Atomic و قابل فهم باشند، Navbar و Hero در یک Commit بزرگ قرار نگرفتند.

## 12.1. Navbar

ابتدا Navbar شامل Logo و لینک‌های بخش‌های مختلف صفحه اضافه شد.

Commit:

```text
implement navigation bar
```

## 12.2. Hero

در Commit بعد Hero Section شامل عنوان اصلی، توضیح و دکمه `Get Started` اضافه شد.

Commit:

```text
add hero section
```

## 12.3. استایل Navbar و Hero

در مرحله بعد CSS مربوط به Header، Navbar، Logo، لینک‌ها، Hero و CTA Button نوشته شد.

Commit:

```text
style navbar and hero
```

**مستندات Branch و سه مرحله توسعه:** [تصویر 16](./screenshots/16.png)، [تصویر 17](./screenshots/17.png)، [تصویر 18](./screenshots/18.png)، [تصویر 19](./screenshots/19.png)، [تصویر 21](./screenshots/21.png)

---

# 13. تست رابط کاربری و رفع مشکل ساختار HTML

پس از اضافه‌شدن Styleها، پروژه در Browser تست شد. در ابتدا ظاهر صفحه نشان می‌داد CSS به فایل HTML اعمال نشده است.

**نتیجه‌ی تست اولیه:** [تصویر 20](./screenshots/20.png)

پس از بررسی فایل‌ها مشخص شد هنگام تغییر Layout، بخش‌های اصلی سند HTML از جمله `head` و لینک `styles.css` حذف شده بودند. در نتیجه Browser فایل CSS را Load نمی‌کرد.

ساختار سند HTML دوباره کامل شد و اتصال CSS و JavaScript بازگردانده شد.

Commit اصلاح:

```text
restore HTML document structure
```

پس از اصلاح، رابط کاربری دوباره در Browser تست شد و Styleها به‌درستی اعمال شدند.

**نتیجه پس از اصلاح:** [تصویر 22](./screenshots/22.png)

**ثبت اصلاح:** [تصویر 23](./screenshots/23.png)

این مرحله نمونه‌ای از Debug واقعی در روند توسعه پروژه بود.

---

# 14. Pull Request شماره 3 — Navbar و Hero

پس از تکمیل و تست Feature، Pull Request زیر ایجاد شد:

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

Main Content نیز به چند Commit معنادار تقسیم شد.

## 15.1. Features

بخش Features شامل Cardهایی برای قابلیت‌های اصلی داشبورد ایجاد شد.

Commit:

```text
implement features section
```

**مستند:** [تصویر 26](./screenshots/26.png)

## 15.2. Tasks

بخش Tasks شامل چند Task نمونه و وضعیت آن‌ها ایجاد شد.

Commit:

```text
implement tasks section
```

**مستند:** [تصویر 27](./screenshots/27.png)

## 15.3. Goals

بخش Goals برای نمایش اهداف تحصیلی ایجاد شد.

Commit:

```text
implement goals section
```

**مستند:** [تصویر 28](./screenshots/28.png)

## 15.4. استایل Main Content

در مرحله بعد برای Feature Cardها، Task Itemها، Goal Cardها، Gridها و Sectionها Style اضافه شد.

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

پس از کامل‌شدن نسخه Desktop، Responsive Design در یک Branch مستقل انجام شد:

```text
feature/responsive-layout
```

**ایجاد Branch:** [تصویر 31](./screenshots/31.png)

Responsive Design نیز به دو Commit تقسیم شد.

## 17.1. Responsive کردن Navigation و Hero

در این مرحله Media Queryهای مربوط به Navbar، Navigation Links و Hero نوشته شدند.

Commit:

```text
make navigation responsive
```

**مستند:** [تصویر 32](./screenshots/32.png)

## 17.2. Responsive کردن Content Sections

Gridهای Features و Goals و همچنین Task Itemها برای Tablet و Mobile بهینه شدند.

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

---

## 18.1. تغییر وضعیت Taskها

برای Elementهای دارای کلاس `task-status` یک Click Event تعریف شد. وضعیت Task با هر Click در چرخه زیر تغییر می‌کند:

```text
To Do -> In Progress -> Done -> To Do
```

Commit:

```text
add task status interaction
```

**مستند:** [تصویر 35](./screenshots/35.png)

---

## 18.2. Dark / Light Theme

یک Theme Toggle به Navbar اضافه شد. با کلیک روی دکمه، کلاس `dark-theme` روی `body` Toggle می‌شود و CSS مربوط به حالت Dark فعال می‌شود.

Commit:

```text
add theme toggle
```

**مستندات:** [تصویر 36](./screenshots/36.png)، [تصویر 37](./screenshots/37.png)

---

## 18.3. ذخیره Theme با `localStorage`

در نسخه اولیه Theme Toggle، بعد از Refresh صفحه Theme انتخاب‌شده از بین می‌رفت. برای رفع این موضوع Theme در `localStorage` ذخیره شد.

در Load بعدی صفحه، مقدار ذخیره‌شده خوانده شده و Theme مناسب دوباره اعمال می‌شود.

Commit:

```text
persist theme preference
```

**مستند:** [تصویر 38](./screenshots/38.png)

---

# 19. Pull Request شماره 6 — JavaScript Interactions

سه Commit JavaScript در PR شماره 6 قرار گرفتند:

- `add task status interaction`
- `add theme toggle`
- `persist theme preference`

PR با موفقیت وارد `develop` شد.

**مستند:** [تصویر 39](./screenshots/39.png)

---

# 20. Merge Conflict اول — توسعه هم‌زمان Footer

برای انجام Requirement مربوط به Conflict، یک Conflict واقعی در جریان توسعه ایجاد شد.

هدف این بود که دو عضو گروه از یک Base مشترک، دو قابلیت متفاوت را روی یک بخش مشترک توسعه دهند.

## 20.1. تغییر آروین

آروین Branch زیر را ایجاد کرد:

```text
feature/footer-copyright
```

در این Branch Footer برای نمایش Copyright تغییر کرد.

Commit:

```text
add footer copyright
```

**مستند:** [تصویر 40](./screenshots/40.png)

## 20.2. تغییر علی

در همان زمان، علی از همان نسخه `develop` Branch جداگانه‌ای ساخت:

```text
feature/footer-navigation
```

Footer در Branch علی برای نمایش Quick Links توسعه داده شد.

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

پس از این مرحله `develop` دارای نسخه Footer آروین بود، در حالی که Branch علی هنوز نسخه مستقل خود را داشت.

---

# 22. ایجاد Conflict واقعی

علی آخرین نسخه `develop` را دریافت کرد و سپس آن را داخل `feature/footer-navigation` Merge کرد.

از آنجا که هر دو Branch بخش‌های یکسانی از Footer را در فایل‌های مشترک تغییر داده بودند، Git نتوانست Merge خودکار انجام دهد.

Conflict در دو فایل ایجاد شد:

```text
index.html
styles.css
```

Markerهای Conflict داخل فایل‌ها مشاهده شدند:

```text
<<<<<<< HEAD
=======
>>>>>>> develop
```

**Conflict در `index.html`:** [تصویر 43](./screenshots/43.png)

**Conflict در `styles.css`:** [تصویر 44](./screenshots/44.png)

این Conflict به‌صورت واقعی حاصل تغییرات مستقل دو عضو روی یک بخش مشترک بود و صرفاً برای نمایش مصنوعی Conflict ساخته نشد.

---

# 23. Resolve کردن Conflict اول

برای حل Conflict تصمیم گرفته شد هیچ‌کدام از دو قابلیت حذف نشوند. نسخه نهایی Footer شامل هر دو مورد شد:

- Copyright ایجادشده توسط آروین
- Quick Links ایجادشده توسط علی

Markerهای Conflict حذف و محتوای نهایی فایل‌ها به‌صورت دستی تنظیم شد.

پس از Resolve، وضعیت Git بررسی شد و فایل‌های حل‌شده Stage شدند.

**وضعیت حین Resolve:** [تصویر 45](./screenshots/45.png)

پس از Stage کردن فایل‌ها، Git اعلام کرد تمام Conflictها برطرف شده‌اند و Merge باید با Commit نهایی شود.

Commit:

```text
resolve footer merge conflict
```

**مستند Commit حل Conflict:** [تصویر 46](./screenshots/46.png)

---

# 24. Pull Request شماره 8 — Footer Navigation

پس از Resolve شدن Conflict، Branch علی Push شد و PR شماره 8 ایجاد شد.

PR توسط آروین Review و Approve شد و سپس وارد `develop` شد.

**مستند:** [تصویر 47](./screenshots/47.png)

این مرحله علاوه بر ثبت Conflict، نمونه واضحی از همکاری دو نفر روی یک قابلیت مشترک و Review تغییرات بود.

---

# 25. GitHub Actions و استقرار خودکار

برای بخش Continuous Deployment یک Branch مستقل ایجاد شد:

```text
ci/github-pages
```

در این Branch ساختار Workflow ایجاد شد:

```text
.github/
└── workflows/
    └── deploy.yml
```

**ایجاد Branch و Workflow:** [تصویر 48](./screenshots/48.png)

Workflow به‌گونه‌ای طراحی شد که مراحل اصلی زیر را انجام دهد:

1. دریافت Source Code با Checkout
2. آماده‌سازی GitHub Pages
3. Upload کردن فایل‌های Static به‌عنوان Artifact
4. Deploy کردن Artifact روی GitHub Pages

از آنجا که پروژه HTML/CSS/JavaScript خالص است، Build Step جداگانه‌ای مانند `npm run build` نیاز نبود.

Trigger اصلی Deployment روی Branch `main` تنظیم شد تا فقط نسخه نهایی و تأییدشده پروژه روی Pages منتشر شود.

Commit:

```text
add GitHub Pages deployment workflow
```

Commit روی Branch مربوطه Push شد.

**مستند:** [تصویر 49](./screenshots/49.png)

---

# 26. Pull Request شماره 9 — GitHub Pages Workflow

برای ورود Workflow به `develop`، PR شماره 9 ایجاد شد:

```text
ci/github-pages -> develop
```

پس از Merge، فایل Workflow بخشی از `develop` شد.

**مستند:** [تصویر 50](./screenshots/50.png)

## لینک‌های مربوط به Deployment

- **GitHub Actions:** <https://github.com/ArvinPr/student-productivity-dashboard/actions>
- **GitHub Pages:** <https://ArvinPr.github.io/student-productivity-dashboard/>

Workflow طوری تنظیم شده است که Deploy اصلی پس از Merge نهایی به `main` اجرا شود.

---

# 27. Commitهای معنادار پروژه

تا پیش از Commit شدن گزارش مستندسازی، حداقل ۲۲ Commit توسعه‌ای معنادار در پروژه ثبت شده است. Merge Commitهای GitHub در این شمارش لحاظ نشده‌اند.

| # | Commit Message | مسئول | مربوط به |
|---:|---|---|---|
| 1 | `initialize project repository` | آروین | ایجاد Repository |
| 2 | `fix README encoding` | آروین | رفع Encoding |
| 3 | `add gitignore configuration` | آروین | `.gitignore` |
| 4 | `create base project structure` | آروین | ساختار اولیه |
| 5 | `design main page layout` | علی | Layout |
| 6 | `implement navigation bar` | آروین | Navbar |
| 7 | `add hero section` | آروین | Hero |
| 8 | `style navbar and hero` | آروین | CSS |
| 9 | `restore HTML document structure` | آروین | Bug Fix |
| 10 | `implement features section` | علی | Features |
| 11 | `implement tasks section` | علی | Tasks |
| 12 | `implement goals section` | علی | Goals |
| 13 | `style main content sections` | علی | Main CSS |
| 14 | `make navigation responsive` | علی | Responsive |
| 15 | `make content sections responsive` | علی | Responsive |
| 16 | `add task status interaction` | آروین | JavaScript |
| 17 | `add theme toggle` | آروین | Theme |
| 18 | `persist theme preference` | آروین | `localStorage` |
| 19 | `add footer copyright` | آروین | Footer |
| 20 | `add footer navigation` | علی | Footer |
| 21 | `resolve footer merge conflict` | علی | Conflict Resolution |
| 22 | `add GitHub Pages deployment workflow` | آروین | CI/CD |

در نتیجه شرط حداقل ۲۰ Commit معنادار پیش از پایان کامل مستندسازی نیز رعایت شده است.

---

# 28. Pull Requestهای اصلی

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

تمام Featureهای اصلی پروژه با Branch مستقل توسعه داده شدند و سپس از طریق Pull Request به Branch تجمیع وارد شدند.

---

# 29. Merge Conflict دوم

Conflict دوم در مرحله مستندسازی ایجاد می‌شود.

برای این مرحله آروین و علی از یک نسخه مشترک `develop` روی دو Branch مستندسازی جداگانه کار می‌کنند:

```text
docs/project-workflow
docs/git-questions
```

آروین گزارش اصلی آزمایش را در README توسعه می‌دهد و علی پاسخ هفت سؤال آزمایش را به README اضافه می‌کند.

از آنجا که هر دو Branch روی `README.md` تغییر خواهند داشت، پس از Merge شدن Branch اول به `develop` و Sync شدن Branch دوم، Conflict دوم روی `README.md` ایجاد و به‌صورت دستی Resolve خواهد شد.

> پس از انجام Conflict دوم، جزئیات واقعی و مستندات آن جایگزین این توضیح خواهند شد.

---

# 30. محافظت از Branch `main`

در مرحله نهایی Repository، Branch `main` با Branch Protection / Ruleset محافظت خواهد شد تا ادغام تغییرات به آن فقط از طریق Pull Request انجام شود.

جریان نهایی:

```text
develop
   |
   | Pull Request
   v
 main
```

پس از اعمال Protection، امکان توسعه مستقیم روی `main` مبنای Workflow پروژه نخواهد بود.

> تصویر این مرحله پس از اعمال تنظیمات به پوشه `screenshots` اضافه و در نسخه نهایی گزارش Reference خواهد شد.

---

# 31. Deployment نهایی

پس از تکمیل Conflict دوم، پاسخ سؤال‌ها و Branch Protection، PR نهایی زیر ایجاد خواهد شد:

```text
develop -> main
```

با Merge شدن این PR، Workflow فایل `deploy.yml` به دلیل Trigger روی `main` اجرا می‌شود.

پس از اجرای موفق GitHub Actions، نسخه نهایی از آدرس زیر در دسترس خواهد بود:

**<https://ArvinPr.github.io/student-productivity-dashboard/>**

و نتیجه اجرای Workflow در:

**<https://github.com/ArvinPr/student-productivity-dashboard/actions>**

قابل مشاهده خواهد بود.

---

# 32. استفاده از هوش مصنوعی

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

گزارش خلاصه‌ی مکالمه شامل Promptهای مهم و پاسخ‌های مدل در فایل زیر قرار می‌گیرد:

```text
chatgpt_interaction_log.md
```

همچنین برای رعایت کامل دستورالعمل درس، آرشیو کامل Promptهای استفاده‌شده باید به مستندات نهایی Repository اضافه شود.

---

# 33. پاسخ پرسش‌های آزمایش

پاسخ هفت سؤال صورت آزمایش توسط **علی مجیدی** تهیه می‌شود و در Branch مستندسازی مربوط به ایشان به همین README اضافه خواهد شد.

سؤال‌ها شامل موضوعات زیر هستند:

1. پوشه `.git`
2. Atomic Commit و Atomic Pull Request
3. `fetch`، `pull`، `merge`، `rebase` و `cherry-pick`
4. `reset`، `revert`، `restore`، `switch` و `checkout`
5. Stage / Index و `stash`
6. Snapshot و ارتباط آن با Commit
7. Local Repository و Remote Repository

---

# 34. وضعیت الزامات آزمایش تا این مرحله

| الزام | وضعیت |
|---|---|
| Static Frontend | ✅ انجام شده |
| Git در روند توسعه | ✅ انجام شده |
| `.gitignore` | ✅ انجام شده |
| حداقل ۲۰ Commit معنادار | ✅ انجام شده |
| حداقل ۳ Branch معنادار | ✅ انجام شده |
| استفاده از Pull Request | ✅ انجام شده |
| Conflict اول | ✅ انجام شده |
| Conflict دوم | ⏳ مرحله مستندسازی |
| GitHub Actions Workflow | ✅ انجام شده |
| GitHub Pages Workflow | ✅ آماده |
| Deploy نهایی Pages | ⏳ بعد از Merge به `main` |
| Protect کردن `main` | ⏳ مرحله نهایی |
| گزارش فارسی در README | ✅ در حال تکمیل |
| پاسخ ۷ سؤال | ⏳ توسط علی |
| مستندسازی AI | ✅ گزارش اولیه تهیه شده |
| فیلم نهایی | ⏳ مرحله تحویل |

---

# 35. فهرست مستندات تصویری

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
| 40 تا 42 | دو Footer Branch و PR #7 |
| 43 تا 46 | Conflict اول و Resolve آن |
| 47 | PR #8 و Review |
| 48 تا 50 | GitHub Actions و PR #9 |

---

# 36. جمع‌بندی

در این آزمایش هدف صرفاً تولید یک صفحه Static نبود. پروژه به شکلی انجام شد که روند واقعی توسعه گروهی با Git قابل مشاهده باشد.

هر قابلیت روی Branch معنادار توسعه پیدا کرد، تغییرات در Commitهای مشخص ثبت شدند و Featureها با Pull Request وارد `develop` شدند. هر دو عضو گروه در Git و Frontend مشارکت داشتند.

در طول توسعه یک Bug واقعی در ساختار HTML شناسایی و اصلاح شد، Responsive Design و تعاملات JavaScript به‌صورت Featureهای جدا توسعه داده شدند، یک Merge Conflict واقعی ناشی از تغییر هم‌زمان دو عضو Resolve شد و GitHub Actions برای Deployment خودکار روی GitHub Pages تنظیم شد.

مراحل باقی‌مانده قبل از تحویل نهایی عبارت‌اند از:

1. ایجاد و حل Conflict دوم روی README
2. اضافه‌شدن پاسخ هفت سؤال توسط علی
3. محافظت از `main`
4. Pull Request نهایی `develop -> main`
5. اجرای موفق GitHub Actions
6. بررسی لینک GitHub Pages
7. تکمیل نهایی گزارش و ضبط فیلم

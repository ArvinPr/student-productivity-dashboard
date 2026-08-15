# پاسخ پرسش‌های آزمایش اول

---

## 1. پوشه‌ی `.git` چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

پوشه‌ی `.git` هسته‌ی یک Repository محلی Git است. زمانی که داخل یک پوشه دستور زیر را اجرا می‌کنیم:

```bash
git init
```

Git یک Repository ایجاد می‌کند و اطلاعات مربوط به مدیریت نسخه‌ها را عمدتاً داخل پوشه‌ی `.git` نگه می‌دارد.

مهم‌ترین اطلاعات موجود در این پوشه عبارت‌اند از:

- **Object Database** در مسیر `objects/` که اشیای Git مانند Blobها، Treeها و Commitها در آن نگه‌داری می‌شوند.
- **Referenceها** در `refs/` که به Branchها و Tagها اشاره می‌کنند.
- فایل **`HEAD`** که مشخص می‌کند در حال حاضر روی کدام Branch یا Commit قرار داریم.
- فایل **`config`** شامل تنظیمات محلی Repository، مانند اطلاعات Remoteها.
- فایل **`index`** که Staging Area یا Stage را نگه‌داری می‌کند.
- **Reflogها** در `logs/` که تغییرات Referenceهایی مانند `HEAD` را ثبت می‌کنند.
- Hookها و تعدادی فایل داخلی دیگر که Git برای مدیریت Repository از آن‌ها استفاده می‌کند.

بنابراین اگر پوشه‌ی `.git` حذف شود، فایل‌های پروژه ممکن است همچنان باقی بمانند، اما اطلاعات Repository مانند Commit History، Branchها و تنظیمات Git از بین می‌روند.

---

## 2. منظور از Atomic بودن در Atomic Commit و Atomic Pull Request چیست؟

منظور از **Atomic** بودن این است که یک واحد تغییر، یک هدف مشخص و مستقل داشته باشد و تا حد امکان چند تغییر نامرتبط را با هم ترکیب نکند.

### Atomic Commit

یک Atomic Commit باید یک تغییر منطقی مشخص را انجام دهد. برای مثال بهتر است به‌جای اینکه Navbar، Dark Mode و Responsive Design را همگی در یک Commit قرار دهیم، آن‌ها را در Commitهای جدا ثبت کنیم:

```text
implement navigation bar
add theme toggle
make navigation responsive
```

مزایای این کار:

- History پروژه خواناتر می‌شود.
- Code Review ساده‌تر می‌شود.
- در صورت وجود مشکل می‌توان یک تغییر مشخص را راحت‌تر Revert کرد.
- پیدا کردن دلیل ایجاد یک Bug ساده‌تر می‌شود.

Atomic بودن لزوماً به معنی کوچک‌ترین Commit ممکن نیست؛ مهم این است که Commit از نظر منطقی یک تغییر منسجم و کامل باشد.

### Atomic Pull Request

در Pull Request نیز همین ایده وجود دارد. یک PR بهتر است یک Feature، Bug Fix یا هدف مشخص را پوشش دهد.

برای مثال:

```text
Add responsive styles
```

PR مناسب‌تری است نسبت به PR بزرگی که هم‌زمان Responsive Design، تغییر README، رفع چند Bug و تغییر Workflow را در خود داشته باشد.

بنابراین Atomic PR باید **متمرکز، قابل Review و دارای یک هدف مشخص** باشد.

---

## 3. تفاوت دستورهای `fetch` و `pull` و `merge` و `rebase` و `cherry-pick` را بیان کنید.

### `git fetch`

دستور `fetch` اطلاعات جدید Repository دیگر، مانند Commitها و Referenceها را دریافت می‌کند، اما آن‌ها را مستقیماً وارد Branch فعلی ما نمی‌کند.

مثال:

```bash
git fetch origin
```

بعد از Fetch می‌توانیم تغییرات Remote را بررسی کنیم و خودمان درباره Merge یا Rebase تصمیم بگیریم.

---

### `git pull`

دستور `pull` ابتدا اطلاعات Remote را دریافت می‌کند و سپس آن‌ها را با Branch فعلی Integrate می‌کند.

به‌صورت مفهومی:

```text
git pull ≈ git fetch + integration
```

نوع Integration می‌تواند بسته به تنظیمات یا Optionها Merge، Rebase یا Fast-forward باشد.

مثال:

```bash
git pull origin develop
```

---

### `git merge`

دستور `merge` تاریخچه‌ی دو Branch را با یکدیگر ترکیب می‌کند.

مثال:

```bash
git switch feature/example
git merge develop
```

اگر Branchها تغییرات ناسازگار روی قسمت مشترکی داشته باشند، ممکن است Merge Conflict ایجاد شود.

Merge معمولاً History موجود را حفظ می‌کند و در حالت‌های غیر Fast-forward می‌تواند یک Merge Commit ایجاد کند.

---

### `git rebase`

دستور `rebase` Commitهای یک Branch را روی Base جدید دوباره اعمال می‌کند.

برای مثال:

```bash
git switch feature/example
git rebase develop
```

به‌جای ایجاد Merge Commit، Commitهای Branch Feature طوری بازسازی می‌شوند که انگار از آخرین نسخه `develop` شروع شده‌اند.

مزیت آن ایجاد History خطی‌تر است، اما چون Commitها دوباره ساخته می‌شوند، Hash آن‌ها تغییر می‌کند. به همین دلیل Rebase کردن Historyای که قبلاً با دیگران Share شده باید با احتیاط انجام شود.

---

### `git cherry-pick`

دستور `cherry-pick` برای برداشتن تغییر مربوط به یک یا چند Commit مشخص و اعمال آن روی Branch فعلی استفاده می‌شود.

مثال:

```bash
git cherry-pick a1b2c3d
```

در این حالت لازم نیست کل Branch Merge شود؛ فقط تغییر Commit انتخاب‌شده روی Branch فعلی اعمال شده و Commit جدیدی ایجاد می‌شود.

---

### جمع‌بندی

```text
fetch       → دریافت اطلاعات Remote بدون ادغام در Branch فعلی
pull        → دریافت اطلاعات Remote و سپس Integrate کردن آن‌ها
merge       → ترکیب دو History
rebase      → دوباره اعمال کردن Commitها روی Base جدید
cherry-pick → اعمال یک Commit مشخص روی Branch فعلی
```

---

## 4. تفاوت دستورهای `reset` و `revert` و `restore` و `switch` و `checkout` را بیان کنید.

### `git reset`

`reset` برای تغییر موقعیت `HEAD` و در بعضی حالت‌ها تغییر Index و Working Tree استفاده می‌شود.

سه حالت معروف:

```bash
git reset --soft
git reset --mixed
git reset --hard
```

به‌طور خلاصه:

- `--soft`: فقط موقعیت `HEAD` را تغییر می‌دهد و تغییرات Stage شده باقی می‌مانند.
- `--mixed`: علاوه بر جابه‌جایی `HEAD`، Stage را نیز Reset می‌کند، ولی فایل‌های Working Tree را نگه می‌دارد.
- `--hard`: `HEAD`، Stage و Working Tree را با Commit مقصد هماهنگ می‌کند و می‌تواند تغییرات محلی را از بین ببرد.

`reset` می‌تواند History محلی را جابه‌جا کند، بنابراین روی Branchهای Shared باید با احتیاط استفاده شود.

---

### `git revert`

`revert` History قبلی را حذف نمی‌کند. در عوض یک **Commit جدید** می‌سازد که اثر Commit قبلی را معکوس می‌کند.

مثال:

```bash
git revert a1b2c3d
```

به همین دلیل برای برگرداندن یک تغییر در Branchهای Shared معمولاً از `revert` استفاده می‌شود، چون History قبلی همچنان باقی می‌ماند.

---

### `git restore`

`restore` برای برگرداندن محتوای فایل‌ها در Working Tree یا Stage استفاده می‌شود.

مثال برای حذف تغییرات Unstaged یک فایل:

```bash
git restore index.html
```

و برای خارج کردن فایل از Stage:

```bash
git restore --staged index.html
```

این دستور تمرکز اصلی‌اش روی فایل‌ها و Staging Area است، نه جابه‌جایی Branch.

---

### `git switch`

`switch` برای جابه‌جایی بین Branchها طراحی شده است.

مثال:

```bash
git switch develop
```

ساخت Branch جدید:

```bash
git switch -c feature/example
```

---

### `git checkout`

`checkout` دستور قدیمی‌تر و چندمنظوره‌ای است که هم می‌تواند Branch را عوض کند و هم نسخه‌ی فایل‌ها را Restore کند.

مثال:

```bash
git checkout develop
```

یا در Syntaxهای قدیمی برای Restore فایل:

```bash
git checkout -- index.html
```

به دلیل چندمنظوره بودن `checkout`، Git در نسخه‌های جدیدتر دو دستور تخصصی‌تر را معرفی کرده است:

```text
git switch  → کار با Branchها
git restore → Restore کردن فایل‌ها
```

---

## 5. منظور از Stage یا همان Index چیست؟ دستور `stash` چه کاری را انجام می‌دهد؟

### Stage / Index

Stage یا **Staging Area** یک فضای میانی بین Working Directory و Commit است.

فرض کنیم سه فایل را تغییر داده‌ایم، اما می‌خواهیم فقط دو فایل وارد Commit بعدی شوند. با دستور:

```bash
git add index.html styles.css
```

فقط نسخه‌ی فعلی همین دو فایل وارد Stage می‌شود.

سپس:

```bash
git commit
```

Snapshot مربوط به Commit بعدی بر اساس وضعیت Index ساخته می‌شود.

در نتیجه می‌توان Stage را به‌صورت زیر در نظر گرفت:

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

---

### `git stash`

`stash` برای زمانی مناسب است که تغییرات ناتمام محلی داریم، اما موقتاً می‌خواهیم Working Directory تمیز شود و روی کار دیگری برویم.

مثال:

```bash
git stash
```

Git تغییرات فعلی را موقتاً ذخیره می‌کند و Working Tree را به وضعیت تمیز برمی‌گرداند.

نمایش Stashها:

```bash
git stash list
```

برگرداندن تغییرات بدون حذف Stash:

```bash
git stash apply
```

برگرداندن و حذف آن از لیست Stash:

```bash
git stash pop
```

به‌صورت پیش‌فرض فایل‌های Untracked وارد Stash نمی‌شوند و برای اضافه‌کردن آن‌ها می‌توان از Option مربوطه استفاده کرد:

```bash
git stash -u
```

---

## 6. مفهوم Snapshot به چه معناست؟ ارتباط آن با Commit چیست؟

یکی از نکات مهم در مدل Git این است که **Commitها را بهتر است Snapshot در نظر بگیریم، نه Diff**.

Snapshot یعنی نمایی از وضعیت پروژه در یک لحظه‌ی مشخص.

هنگام Commit کردن، Git فقط یک متن شامل «این چند خط اضافه و آن چند خط حذف شد» را به‌عنوان مفهوم اصلی Commit ذخیره نمی‌کند. هر Commit به یک Tree اشاره می‌کند که وضعیت فایل‌ها و Directoryهای پروژه در آن لحظه را نمایش می‌دهد.

به‌صورت مفهومی:

```text
Commit A → Snapshot A
Commit B → Snapshot B
Commit C → Snapshot C
```

وقتی دستورهایی مانند `git diff` اجرا می‌شوند یا GitHub تغییرات یک Commit را نمایش می‌دهد، Diff می‌تواند با **مقایسه‌ی دو Snapshot** محاسبه شود.

هر Commit علاوه بر اشاره به Snapshot پروژه، اطلاعات دیگری نیز دارد؛ از جمله:

- Parent Commit یا Parent Commitها
- Author
- Committer
- زمان
- Commit Message

در یک Commit عادی معمولاً یک Parent وجود دارد. Root Commit Parent ندارد و Merge Commit معمولاً بیش از یک Parent دارد.

Git برای جلوگیری از ذخیره‌ی بیهوده‌ی داده‌های تکراری، اشیای یکسان را بر اساس محتوای آن‌ها مجدداً ذخیره نمی‌کند و می‌تواند بین Snapshotها از Objectهای مشترک استفاده کند.

در نتیجه:

> **Commit یک Snapshot از وضعیت پروژه در یک زمان مشخص را معرفی می‌کند و Diff نتیجه مقایسه‌ی Snapshotها است.**

---

## 7. تفاوت‌های Local Repository و Remote Repository چیست؟

### Local Repository

Local Repository نسخه‌ای از Repository است که روی سیستم خود برنامه‌نویس قرار دارد.

در Repository محلی می‌توان بدون نیاز به اینترنت کارهایی مانند موارد زیر را انجام داد:

```bash
git status
git add
git commit
git branch
git switch
git log
```

Local Repository علاوه بر فایل‌های Working Tree، اطلاعات Git و History را نیز در اختیار دارد.

---

### Remote Repository

Remote Repository Repositoryای است که Git محلی آن را از طریق یک نام و آدرس می‌شناسد و برای اشتراک‌گذاری کد و همکاری با دیگران استفاده می‌شود.

در این آزمایش Repository روی GitHub یک Remote Repository است و معمولاً با نام:

```text
origin
```

در Git محلی ثبت می‌شود.

مشاهده Remoteها:

```bash
git remote -v
```

ارسال تغییرات Local به Remote:

```bash
git push origin develop
```

دریافت اطلاعات Remote:

```bash
git fetch origin
```

یا دریافت و Integrate کردن آن‌ها:

```bash
git pull origin develop
```

### تفاوت کلی

```text
Local Repository
- روی سیستم توسعه‌دهنده
- امکان Commit و Branch بدون اینترنت
- دارای History محلی
- محل اصلی انجام توسعه

Remote Repository
- Repository دیگری که از طریق URL/Path قابل دسترسی است
- در پروژه ما روی GitHub قرار دارد
- برای اشتراک‌گذاری و هماهنگی بین اعضا استفاده می‌شود
- با push، fetch و pull با Repository محلی تبادل اطلاعات می‌کند
```

نکته‌ی مهم این است که «Remote» لزوماً به معنی GitHub نیست؛ از دید Git، Remote فقط Repository دیگری است که از Repository فعلی به آن Reference داده‌ایم و حتی می‌تواند روی یک سیستم یا مسیر دیگر قرار داشته باشد.

---

## منابع

پاسخ‌ها با استفاده از مستندات رسمی Git و منبع معرفی‌شده در صورت آزمایش تنظیم شده‌اند:

- Git Documentation — `git init` و Repository Layout
- Pro Git — Git Objects، Staging Area و Working with Remotes
- Git Documentation — `fetch`, `pull`, `merge`, `rebase`, `cherry-pick`
- Git Documentation — `reset`, `revert`, `restore`, `switch`, `checkout`
- Git Documentation — `stash`
- GitHub Blog — **Commits are snapshots, not diffs**

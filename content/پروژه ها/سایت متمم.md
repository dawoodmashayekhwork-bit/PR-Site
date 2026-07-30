---
title: دوره های سایت متمم
image: "[[xzc.png]]"
order: "101"
tags:
  - پروژه
---

# مسیر یادگیری و دوره‌های متمم 🚀

<!-- ================= بخش اول: دوره‌های فعال و در حال پیشرفت ================= -->
## دوره‌های فعال و در حال گذراندن 📈

<div class="quote-card quote-cream">
  <div class="quote-content" style="width: 100%;">
    <!-- دوره اول: مهارت یادگیری -->
    <div class="progress-item">
      <div class="progress-info">
        <span class="course-name">📘 مهارت یادگیری</span>
        <span class="course-percent">37%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-fill" style="width: 35%;"></div>
      </div>
    </div>
    <!-- دوره دوم: اسلایادسازی -->
    <div class="progress-item">
      <div class="progress-info">
        <span class="course-name">💻 اسلایدسازی</span>
        <span class="course-percent">6%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-fill" style="width: 6%;"></div>
      </div>
    </div>
    <!-- دوره سوم: تولید محتوا -->
    <div class="progress-item">
      <div class="progress-info">
        <span class="course-name">✍️ تولید محتوا</span>
        <span class="course-percent">32%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-fill" style="width: 32%;"></div>
      </div>
    </div>
    <!-- دوره چهارم: شخصیت شناسی -->
    <div class="progress-item" style="margin-bottom: 0;">
      <div class="progress-info">
        <span class="course-name">🧠 شخصیت‌شناسی</span>
        <span class="course-percent">16%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-fill" style="width: 16%;"></div>
      </div>
    </div>

  </div>
</div>


<!-- ================= بخش دوم: دوره‌های اتمام‌یافته ================= -->
## دوره‌های اتمام‌یافته ✅

<div class="quote-card quote-blue">
  <div class="quote-content" style="width: 100%;">
    <ul class="completed-list">
      <li>
        <a href="https://motamem.org/%d8%b1%d9%88%d8%a7%d9%86%d8%b4%d9%86%d8%a7%d8%b3%db%8c-%d8%b1%d9%86%da%af%d9%87%d8%a7/" target="_blank">
          🎨 روانشناسی رنگ‌ها (نقشه راه درس)
        </a>
      </li>
    </ul>
  </div>
</div>


<!-- ================= استایل‌های اختصاصی و واکنش‌گرا (موبایل و دسکتاپ) ================= -->
<style>
/* 1. استایل هدرها */
.markdown-rendered h2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin-top: 40px !important;
    margin-bottom: 18px !important;
    padding: 10px 16px;
    background: linear-gradient(90deg, var(--light, #f7f4ed) 0%, rgba(255,255,255,0) 100%);
    border-right: 4px solid var(--interactive-accent, #2a6f97);
    border-radius: 4px;
    font-size: 1.25rem;
    color: var(--dark, #1f2d3d);
}

/* 2. استایل کارت‌ها */
.quote-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 22px 24px;
    border-radius: 18px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
}

.quote-cream {
    background: var(--light, #faf7f2);
    border: 1px solid var(--lightgray, #e8ddd0);
}

.quote-blue {
    background: var(--light, #eef5ff);
    border: 1px solid var(--lightgray, #cddff9);
}

/* 3. عناصر نوارهای پیشرفت (Progress Bars) */
.progress-item {
    margin-bottom: 18px;
}

.progress-item:last-child {
    margin-bottom: 0;
}

.progress-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    font-weight: 700;
    font-size: 1rem;
    color: var(--dark, #1f2d3d);
}

.course-percent {
    color: var(--interactive-accent, #2a6f97);
    font-family: monospace;
    font-size: 0.95rem;
}

.progress-bar-container {
    width: 100%;
    height: 9px;
    background-color: rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #2a6f97, #4ea8de);
    border-radius: 6px;
    transition: width 0.6s ease;
}

/* 4. لیست دوره‌های تمام شده */
.completed-list {
    margin: 0;
    padding-right: 18px;
    list-style-type: none;
}

.completed-list li {
    margin: 6px 0;
}

.completed-list a {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--interactive-accent, #2a6f97);
    text-decoration: none;
    word-break: break-word;
    transition: opacity 0.2s;
}

.completed-list a:hover {
    opacity: 0.8;
    text-decoration: underline;
}

/* ---------- واکنش‌گرایی کامل برای نمایش در موبایل ---------- */
@media (max-width: 600px) {
    .quote-card {
        padding: 16px 18px;
        margin: 15px 0;
        border-radius: 14px;
    }

    .markdown-rendered h2 {
        font-size: 1.15rem;
        padding: 8px 12px;
        margin-top: 30px !important;
        margin-bottom: 12px !important;
    }

    .progress-info {
        font-size: 0.92rem;
    }

    .completed-list a {
        font-size: 0.98rem;
    }
}
</style>
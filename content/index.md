---
title: Dawood Mashayekh
draft: false

---

#  سلام خوش آمدید! 

<div class="desktop-notice">
  <span class="notice-icon">💻</span>
  <div class="notice-text">
    <strong>توجه:</strong> برای تجربه بهتر و نمایش صحیح گراف‌ها و محتوا، پیشنهاد می‌شود سایت را با <strong>کامپیوتر یا لپ‌تاپ</strong> مشاهده کنید.
  </div>
</div>


```base
views:
  - type: cards
    name: view
    filters:
      and:
        - or:
            - file.name == "پروژه ها"
            - file.name == "درباره من"
            - file.name == "یادداشت‌ها"
    sort:
      - property: order
        direction: ASC
    direction: asc
    image: note.image
    cardSize: 200

```


[[پروژه ها/پروژه ها]] [[درباره من/درباره من]] [[یادداشت‌ها/یادداشت‌ها]]

<style>

article p:has(> a[data-slug="پروژه-ها"]):has(> a[data-slug="درباره-من"]):has(> a[data-slug="یادداشت‌ها"]) {
  display: none;
}
/* به‌طور پیش‌فرض در کامپیوتر این باکس مخفی است */
.desktop-notice {
    display: none;
}

/* فقط در موبایل و تبلت‌های کوچک (زیر ۷۶۸ پیکسل) نمایش داده می‌شود */
@media (max-width: 768px) {
    .desktop-notice {
        display: flex;
        align-items: center;
        gap: 15px;
        background: linear-gradient(135deg, rgba(42, 111, 151, 0.08) 0%, rgba(42, 111, 151, 0.03) 100%);
        border: 1px solid rgba(42, 111, 151, 0.2);
        border-right: 4px solid var(--interactive-accent, #2a6f97);
        padding: 16px 22px;
        border-radius: 12px;
        margin: 0 0 25px 0;
        font-size: 1.05rem;
        color: var(--dark, #1f2d3d);
        box-shadow: 0 4px 15px rgba(0,0,0,0.02);
    }
}

.notice-icon {
    font-size: 1.5rem;
}

.notice-text strong {
    color: var(--interactive-accent, #2a6f97);
}
</style>
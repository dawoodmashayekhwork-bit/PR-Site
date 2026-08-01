---
title: یادداشت‌ها
draft: false
image: "[[یادداشت ها .png]]"
tags:
  - درباره
  - معرفی
  - "#یادداشت"
order: "3"
---


```base
views:
  - type: cards
    name: view
    filters:
      and:
        - file.name != "یادداشت‌ها"
        - order > 299
        - order < 400
    sort:
      - property: order
        direction: ASC
    direction: asc
    image: note.image
    cardSize: 200

```


<style>
/* یکدست کردن اندازه تصاویر کارت‌ها در ویوهای base */
.bases-card img, 
.card-view-item img, 
div[class*="card"] img {
    width: 100% !important;
    height: 200px !important; /* ارتفاع دلخواه و ثابت برای تمام عکس‌ها */
    object-fit: cover !important; /* برای اینکه عکس‌ها دفرمه نشوند و به زیبایی برش بخورند */
    object-position: center !important;
}

</style>
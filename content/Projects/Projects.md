---
title: پروژه ها
draft: false
image: "[[پروژه.png]]"
tags:
  - درباره
  - معرفی
order: "1"
---

```base
views:
  - type: cards
    name: view
    filters:
      and:
        - or:
            - file.name == "Faradars"
            - file.name == "WORK-SITE"
            - file.name == "History of Architecture"
            - file.name == "Me, through the eyes of others"
            - file.name == "Motamem Website"
            - file.name == "Personal YouTube channel"
            - file.name == "The Timeless Way of Building (Audiobook)"
            
        
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

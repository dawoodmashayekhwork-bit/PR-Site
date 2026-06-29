---
title: معرفی
draft: false
tags:
  - معرفی
---

#  سلام خوش آمدید! 👋



```base
views:
  - type: cards
    name: view
    filters:
      and:
        - or:
            - file.name == "وبسایت"
            - file.name == "درباره من"
            - file.name == "پورتفولیو"
    sort:
      - property: order
        direction: ASC
    direction: asc
    image: note.image
    cardSize: 200

```


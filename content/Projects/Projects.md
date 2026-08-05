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


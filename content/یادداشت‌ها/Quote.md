---
title: سخن بزرگان
image: "[[Quote.png]]"
---

<div class="quote-card quote-cream">

  <div class="quote-content">

<h2>تیبور فیشر</h2>

 <div class="quote-job">
      نویسنده
    </div>

  <blockquote class="quote-text">
      «هیچ سطحی از هوش، انسان را از حماقت‌هایش مصون نمی‌کند.»
    </blockquote>

  </div>

  <div class="quote-image">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tibor-Fischer.jpg/250px-Tibor-Fischer.jpg">
  </div>

</div>



<div class="quote-card quote-blue">

  <div class="quote-content">

<h2>استیو جابز</h2>

  <div class="quote-job">
      کارآفرین
    </div>

   <blockquote class="quote-text">
      «تنها راه انجام کارهای بزرگ، عاشق کاری بودن است که انجام می‌دهید.»
    </blockquote>

  </div>

  <div class="quote-image">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/250px-Steve_Jobs_Headshot_2010-CROP.jpg">
  </div>

</div>


<div class="quote-card quote-purple">

  <div class="quote-content">

<h2> کارلورولی</h2>

  <div class="quote-job">
       فیزیک‌دان 
    </div>

   <blockquote class="quote-text">
     از زمانی که متوجه شدیم زمین گرد است 
     و دیوانه وار به دور خودش میچرخه 
     یادگرفتیم که واقعیت 
     اونچیزی نیست که به چشممون میاد 
    </blockquote>

  </div>

  <div class="quote-image">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Carlo_Rovelli_no_Fronteiras_do_Pensamento_S%C3%A3o_Paulo_2017_%2834781380545%29.jpg/250px-Carlo_Rovelli_no_Fronteiras_do_Pensamento_S%C3%A3o_Paulo_2017_%2834781380545%29.jpg">
  </div>

</div>




















































<style>

.quote-card{

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    gap:40px;

    margin:34px 0;

    padding:22px 30px;

    border-radius:22px;

    transition:.25s ease;

    box-shadow:0 8px 22px rgba(0,0,0,.06);

}

.quote-card:hover{

    transform:translateY(-4px);

    box-shadow:0 16px 40px rgba(0,0,0,.10);

}

/* ---------- رنگ‌ها ---------- */

.quote-cream{

    background:#faf7f2;
    border:1px solid #e8ddd0;

}

.quote-blue{

    background:#eef5ff;
    border:1px solid #cddff9;

}

.quote-green{

    background:#eef8f0;
    border:1px solid #d4e7d8;

}

.quote-purple{

    background:#f5f2fb;
    border:1px solid #ddd3f0;

}

.quote-yellow{

    background:#fff8e8;
    border:1px solid #f0dfb6;

}

.quote-gray{

    background:#f6f7f8;
    border:1px solid #dde2e6;

}

/* ---------- متن ---------- */

.quote-content{

    flex:1;

    text-align:right;

}

.quote-content h2{

    margin:0;

    font-size:1.45rem;

    font-weight:700;

    color:#1f2d3d;

}

.quote-job{

    margin-top:6px;

    margin-bottom:18px;

    color:#5d6b82;

    font-size:1rem;

}

.quote-text{

    margin:0;

    display:flex;

    align-items:center;

    text-align:right;

    direction:rtl;

    font-size:1.35rem;

    line-height:1.9;

    min-height:3.8em;

    color:#2f4055;

}

/* ---------- عکس ---------- */

.quote-image{

    flex-shrink:0;

}

.quote-image img{

    width:170px;

    height:170px;

    object-fit:cover;

    border-radius:18px;

    box-shadow:0 12px 28px rgba(0,0,0,.15);

    transition:.25s ease;

}

.quote-card:hover img{

    transform:scale(1.03);

}

/* ---------- موبایل ---------- */

@media (max-width:700px){

.quote-card{

    flex-direction:column-reverse;

    gap:20px;

    padding:20px;

    text-align:center;

}

.quote-content{

    text-align:center;

}

.quote-text{

    text-align:center;

    justify-content:center;

    min-height:auto;

}

.quote-image img{

    width:150px;

    height:150px;

}

}

</style>
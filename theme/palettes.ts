export const colorPalettes = {
  // ... سایر پالت‌ها سر جای خودشان ...

  // پالت جدید: Obsidian & Quartz (مخصوص وبلاگ دارکِ لاکچری و خاص)
  obsidianQuartz: {
    lightMode: {
      light: "#F5F6F8",
      lightgray: "#E2E5EC",
      gray: "#BAC1CC",
      darkgray: "#4A5260",
      dark: "#0F1117",
      secondary: "#6366F1",
      tertiary: "#38BDF8",
      highlight: "rgba(99, 102, 241, 0.1)",
      textHighlight: "rgba(56, 189, 248, 0.2)",
    },
    darkMode: {
      light: "#0B0C10",       // ابسیدین خالص و عمیق (سیاهِ معدنی با ته¬رنگ دودی)
      lightgray: "#14161C",   // ابسیدینِ لایه‌ی دوم برای کارت‌ها و پنل‌ها
      gray: "#222632",        // مرزها و خطوط جداکننده‌ی تراش‌خورده
      darkgray: "#94A3B8",    // نقره‌ای دودی برای متن‌های ثانویه (خوانایی بی‌نظیر)
      dark: "#F8FAFC",        // کوارتز سفید و درخشان برای عناوین و متن‌های اصلی
      secondary: "#38BDF8",   // کوارتزِ آبیِ یخی (آبیِ شفافِ کریستالی برای اکنت‌های اصلی)
      tertiary: "#A78BFA",    // آمتیست/کوارتز دودی بنفش ملایم (برای هایلایت‌های جادویی و تگ‌ها)
      highlight: "rgba(56, 189, 248, 0.12)",   // نورِ بازتابیِ ملایم کوارتز روی بدنه ابسیدین
      textHighlight: "rgba(167, 139, 250, 0.25)", // هایلایت متنِ کریستالی
    },
  },
}

// Select your desired palette here
export const currentPaletteName: keyof typeof colorPalettes = "obsidianQuartz"
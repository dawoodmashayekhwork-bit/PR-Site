export const colorPalettes = {
  // ... سایر پالت‌ها سر جای خودشان ...

  // پالت جدید: دارکِ عمیق، بتنی و معماریِ مدرن
  brutalistDark: {
    lightMode: {
      light: "#EAE6DF",
      lightgray: "#D1CBC1",
      gray: "#A39B8F",
      darkgray: "#4A453F",
      dark: "#141312",
      secondary: "#D46A34",
      tertiary: "#2D5A7B",
      highlight: "rgba(212, 106, 52, 0.12)",
      textHighlight: "rgba(212, 106, 52, 0.25)",
    },
    darkMode: {
      light: "#0A0A0B",       // سیاهی عمیق و خالص (فضای استودیوی تاریک)
      lightgray: "#161719",   // خاکستریِ بسیار تیره برای کارت‌ها و بخش‌های عمق‌دار
      gray: "#26282C",        // خطوط مرزی مینیمال و جداکننده‌های ظریف
      darkgray: "#8E949E",    // خاکستریِ متالیک و سرد برای خوانایی عالی متن‌های طولانی
      dark: "#F4F4F5",        // سفید استخوانی درخشان برای عناوینِ باکلاس
      secondary: "#FF6B35",   // نارنجی مسـیِ گرم (شبیه نورِ چراغ‌های موضعی در ماکت‌سازی یا متریال فلز زنگ‌نزده)
      tertiary: "#00E5FF",    // آبی سایبر-مهندسی یا خطوط نئونیِ نرم برای تگ‌ها و هایلایت‌ها
      highlight: "rgba(255, 107, 53, 0.15)",
      textHighlight: "rgba(0, 229, 255, 0.25)",
    },
  },
}

// Select your desired palette here
export const currentPaletteName: keyof typeof colorPalettes = "brutalistDark"
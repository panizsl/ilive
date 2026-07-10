// داده‌های محصولات
export const productsData = [
  {
    title: "پلتفرم استریم",
    description:
      "پلتفرمی جامع برای پخش انواع رویداد‌های شما با بالاترین کیفیت در بستر کلاود",
    icon: "Play",
    color: "#9aed66",
    slug: "platform-stream",
  },
  {
    title: "سرویس ری‌استریم",
    description:
      "پلتفرمی جامع برای پخش انواع رویداد‌های شما با بالاترین کیفیت در بستر کلاود",
    icon: "Play",
    color: "#9aed66",
    slug: "re-stream-service",
  },
  {
    title: "سرویس VOD",
    description:
      "پلتفرمی جامع برای پخش انواع رویداد‌های شما با بالاترین کیفیت در بستر کلاود",
    icon: "Film",
    color: "#2ed1ff",
    slug: "vod-service",
  },
  {
    title: "اتاق رویداد",
    description:
      "پلتفرمی جامع برای پخش انواع رویداد‌های شما با بالاترین کیفیت در بستر کلاود",
    icon: "Building2",
    color: "#c5db00",
    slug: "event-room",
  },
  {
    title: "استودیو",
    description:
      "پلتفرمی جامع برای پخش انواع رویداد‌های شما با بالاترین کیفیت در بستر کلاود",
    icon: "Film",
    color: "#2ed1ff",
    slug: "studio",
  },
  {
    title: "پخش کننده (Player)",
    description:
      "پلتفرمی جامع برای پخش انواع رویداد‌های شما با بالاترین کیفیت در بستر کلاود",
    icon: "Play",
    color: "#9aed66",
    badge: "بزودی",
    slug: "player",
  },
];

// داده‌های خدمات
export const servicesData = [
  {
    title: "مشاوره فنی",
    description: "مشاوره تخصصی برای انتخاب بهترین راهکار متناسب با نیاز شما",
    icon: "Headset",
    color: "#3b82f6",
  },
  {
    title: "پشتیبانی 24/7",
    description: "پشتیبانی شبانه‌روزی برای رفع مشکلات و پاسخگویی به سوالات شما",
    icon: "Clock",
    color: "#22c55e",
  },
  {
    title: "آموزش و راهنمایی",
    description: "آموزش کامل استفاده از پلتفرم و امکانات آن به تیم شما",
    icon: "BookOpen",
    color: "#a855f7",
  },
  {
    title: "پیاده‌سازی",
    description: "پیاده‌سازی و راه‌اندازی سیستم متناسب با زیرساخت شما",
    icon: "Settings",
    color: "#f97316",
  },
  {
    title: "توسعه سفارشی",
    description: "توسعه قابلیت‌های اختصاصی بر اساس نیازهای خاص کسب‌وکار شما",
    icon: "Code",
    color: "#ef4444",
  },
  {
    title: "نگهداری و بروزرسانی",
    description: "نگهداری مستمر و بروزرسانی سیستم برای عملکرد بهینه",
    icon: "RefreshCw",
    color: "#14b8a6",
  },
];

// داده‌های منابع
export const resourcesData = [
  {
    title: "مستندات",
    description: "مستندات کامل و جامع برای استفاده از تمامی امکانات پلتفرم",
    icon: "FileText",
    color: "#3b82f6",
  },
  {
    title: "وبلاگ",
    description: "آخرین مقالات و اخبار در حوزه استریم و پخش زنده",
    icon: "PenTool",
    color: "#22c55e",
  },
  {
    title: "ویدیوهای آموزشی",
    description: "ویدیوهای آموزشی گام به گام برای یادگیری سریع‌تر",
    icon: "Video",
    color: "#ef4444",
  },
  {
    title: "پرسش و پاسخ",
    description: "پاسخ به سوالات متداول و رایج کاربران",
    icon: "HelpCircle",
    color: "#eab308",
  },
  {
    title: "مطالعات موردی",
    description: "بررسی پروژه‌های موفق و تجربیات مشتریان ما",
    icon: "Briefcase",
    color: "#a855f7",
  },
  {
    title: "تماس با ما",
    description: "راه‌های ارتباطی برای مشاوره و دریافت اطلاعات بیشتر",
    icon: "Phone",
    color: "#6366f1",
  },
];

// آیتم‌های منو
export const defaultMenuItems = [
  { label: "محصولات", hasDropdown: true, dropdownType: "products" },
  { label: "راهکار‌ها", hasDropdown: true, dropdownType: "solutions" },
  { label: "منابع", hasDropdown: true, dropdownType: "resources" },
  { label: "خدمات ما", hasDropdown: true, dropdownType: "services" },
  { label: "قیمت‌گذاری‌", hasDropdown: false, href: "/pricing" },
];

// داده‌های صنایع
export const industriesData = [
  { title: "پزشکی و درمان", icon: "Cross", color: "#ef4444" },
  { title: "آموزش و دانشگاه", icon: "GraduationCap", color: "#3b82f6" },
  { title: "رسانه و خبرگزاری‌ها", icon: "Film", color: "#22c55e" },
  { title: "ورزش و سلامتی", icon: "Dumbbell", color: "#f97316" },
  { title: "هنری و فرهنگی", icon: "Palette", color: "#a855f7" },
  { title: "مذهبی، اعتقادی", icon: "Church", color: "#eab308" },
  { title: "مالی و اقتصادی", icon: "Landmark", color: "#6366f1" },
  { title: "فناوری و نوآوری", icon: "Lightbulb", color: "#ec4899" },
  { title: "دولتی و عمومی", icon: "Building2", color: "#6b7280" },
];

// داده‌های کاربردها
export const useCasesData = [
  { title: "وبینار و کنفرانس", icon: "Mic", color: "#06b6d4" },
  { title: "پخش زنده رویداد", icon: "Radio", color: "#14b8a6" },
  { title: "آموزش آنلاین", icon: "GraduationCap", color: "#3b82f6" },
  { title: "استریم گیمینگ", icon: "Gamepad2", color: "#ef4444" },
  { title: "کنسرت و موسیقی", icon: "Music", color: "#a855f7" },
  { title: "پخش تلویزیونی", icon: "Tv", color: "#22c55e" },
];

// داده‌های کاربران
export const usersData = [
  { title: "سازمان‌ها و شرکت‌ها", icon: "Building2", color: "#6b7280" },
  { title: "استارتاپ‌ها", icon: "Lightbulb", color: "#eab308" },
  { title: "فریلنسرها", icon: "Users", color: "#3b82f6" },
  {
    title: "فروشگاه‌های آنلاین",
    icon: "ShoppingCart",
    color: "#22c55e",
  },
  { title: "آژانس‌های تبلیغاتی", icon: "Briefcase", color: "#f97316" },
];

export const tabs = [
  { id: "industries", label: "صنایع", data: "industriesData" },
  { id: "useCases", label: "کاربرد‌ها", data: "useCasesData" },
  { id: "users", label: "کاربران", data: "usersData" },
];

// ==================== MOBILE DATA ====================

// آیتم‌های منوی موبایل
export const mobileMenuItems = [
  {
    id: "solutions",
    title: "راهکار‌ها",
    hasSubmenu: true,
    dropdownType: "solutions",
  },
  {
    id: "resources",
    title: "پایگاه دانش",
    hasSubmenu: true,
    dropdownType: "resources",
  },
  {
    id: "services",
    title: "خدمات ما",
    hasSubmenu: true,
    dropdownType: "services",
  },
  { id: "pricing", title: "قیمت اشتراک", hasSubmenu: false, href: "/pricing" },
  { id: "signup", title: "ساخت اکانت آیلایو", hasSubmenu: false },
];

// داده‌های ساب‌منوی راهکارها (موبایل)
export const solutionsSubmenuData = {
  title: "راهکار‌ها",
  sections: [
    {
      title: "بر اساس صنایع",
      items: industriesData.slice(0, 4),
    },
    {
      title: "بر اساس کاربرد‌ها",
      items: useCasesData.slice(0, 4),
    },
  ],
};

// لینک‌های شبکه‌های اجتماعی
export const socialLinks = [
  {
    id: "instagram",
    src: "/assets/social/instagram.svg",
    alt: "اینستاگرام",
    href: "#",
  },
  {
    id: "linkedin",
    src: "/assets/social/linkedin.svg",
    alt: "لینکدین",
    href: "#",
  },
  { id: "aparat", src: "/assets/social/aparat.svg", alt: "آپارات", href: "#" },
];

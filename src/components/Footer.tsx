import { useEffect } from "react";

export default function Footer() {
  
  // هذه الدالة لتشغيل إعلانات أدسنس تلقائياً عند تحميل الفوتر
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("خطأ في تحميل إعلانات أدسنس", error);
    }
  }, []);

  return (
    <footer className="bg-gradient-to-b from-green-950 to-green-900 text-white relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto">
          <path
            fill="#fcf9f2"
            d="M0,30L60,25C120,20,240,10,360,15C480,20,600,35,720,40C840,45,960,40,1080,30C1200,20,1320,10,1380,15L1440,20L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl animate-leaf">🌿</span>
              <div>
                <h3 className="text-xl font-bold">منصة الشامل التعليمية</h3>
                <p className="text-xs text-green-300/70">قسم موسوعة الأعشاب والطب البديل</p>
              </div>
            </div>
            <p className="text-green-200/70 text-sm leading-relaxed">
              موقع متخصص يقدم معلومات شاملة وموثوقة عن الأعشاب الطبية، فوائدها،
              استخداماتها، ومحاذيرها. نهدف لنشر الثقافة الصحية والوعي بالطب البديل ضمن منصتنا التعليمية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span>🔗</span>
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { icon: "🌿", name: "جميع الأعشاب" },
                { icon: "📚", name: "الفئات" },
                { icon: "📖", name: "الموسوعة" },
                { icon: "📞", name: "اتصل بنا" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-green-200/70 hover:text-green-300 transition-colors text-sm group"
                  >
                    <span className="transition-transform group-hover:-translate-x-1">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span>⚕️</span>
              تنبيه مهم
            </h3>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <p className="text-green-200/70 text-sm leading-relaxed">
                المعلومات الموجودة في هذا الموقع هي لأغراض تعليمية وتثقيفية فقط.
                لا تغني عن استشارة الطبيب المختص. يجب استشارة الطبيب قبل استخدام
                أي عشبة طبية خاصة للحوامل والمرضعات والأطفال.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* وحدة إعلانات جوجل أدسنس السفلية */}
        {/* ========================================== */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7579351935748180"
     crossorigin="anonymous"></script>
<!-- 336x280, تم إنشاؤها 18/01/10 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7579351935748180"
     data-ad-slot="7958686967"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
          {/* لا تنسَ تغيير XXXXXXXXXX بمعرفات الإعلان الخاصة بك */}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-green-200/50 text-sm text-center md:text-right">
            © {new Date().getFullYear()} جميع الحقوق محفوظة لمنصة الشامل | قسم موسوعة الأعشاب
          </p>
          <div className="flex items-center gap-2 text-green-200/50 text-sm">
            <span>تصميم وتطوير:</span>
            <span className="text-green-300 font-semibold">الأستاذ أحمد خمقاني</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

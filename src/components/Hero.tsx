import { cn } from "../utils/cn";

interface HeroProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  onStartExploring: () => void;
}

export default function Hero({ onSearch, searchQuery, onStartExploring }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with nature gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950 via-green-900 to-herb-green-dark">
        {/* Decorative nature elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float" style={{ animationDelay: "0s" }}>🌿</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>🍃</div>
        <div className="absolute bottom-40 left-20 text-7xl opacity-15 animate-float" style={{ animationDelay: "2s" }}>🌱</div>
        <div className="absolute bottom-60 right-32 text-5xl opacity-15 animate-float" style={{ animationDelay: "0.5s" }}>🌻</div>
        <div className="absolute top-1/2 left-1/4 text-4xl opacity-10 animate-float" style={{ animationDelay: "1.5s" }}>🌸</div>
        <div className="absolute top-1/3 right-1/4 text-6xl opacity-10 animate-float" style={{ animationDelay: "2.5s" }}>🌾</div>
      </div>

      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-green-200 text-sm border border-white/10">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            اكتشف قوة الطبيعة في شفاء الأبدان
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          دليلك الشامل
          <br />
          <span className="bg-gradient-to-l from-herb-gold via-yellow-300 to-herb-gold bg-clip-text text-transparent">
            للأعشاب الطبية
          </span>
        </h1>

        <p className="text-lg md:text-xl text-green-200/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          اكتشف كنوز الطبيعة من الأعشاب الطبية، فوائدها، استخداماتها، وطرق تحضيرها.
          دليل متكامل لكل من يبحث عن الصحة والشفاء الطبيعي.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-herb-gold to-herb-green rounded-2xl opacity-40 group-hover:opacity-70 transition-opacity blur" />
            <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
              <span className="text-2xl pr-5 text-green-200">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="ابحث عن عشبة... مثال: بابونج، زنجبيل، نعناع..."
                className="w-full bg-transparent text-white placeholder-green-300/60 py-5 px-3 text-lg outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearch("")}
                  className="pl-5 text-green-200 hover:text-white transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Quick tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["بابونج", "زنجبيل", "نعناع", "كركم", "قرفة"].map((tag) => (
              <button
                key={tag}
                onClick={() => onSearch(tag)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm transition-all border",
                  searchQuery === tag
                    ? "bg-herb-gold text-green-900 border-herb-gold font-medium"
                    : "text-green-200/70 border-white/10 hover:bg-white/10 hover:text-white"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onStartExploring}
            className="px-8 py-4 bg-herb-gold text-green-900 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-600/20 hover:shadow-xl hover:shadow-yellow-600/30 hover:-translate-y-0.5"
          >
            <span className="ml-2">🌱</span>
            ابدأ الاستكشاف
          </button>
          <a
            href="#categories"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-medium text-lg border border-white/20 hover:bg-white/20 transition-all"
          >
            <span className="ml-2">📚</span>
            تصفح الفئات
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#fcf9f2"
            d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}

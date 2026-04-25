import { useState, useMemo } from "react";
import { herbs, categories } from "./data/herbs";
import type { Herb } from "./data/herbs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import HerbCard from "./components/HerbCard";
import HerbDetail from "./components/HerbDetail";
import StatsSection from "./components/StatsSection";
import Footer from "./components/Footer";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);

  const filteredHerbs = useMemo(() => {
    let result = herbs;

    // Filter by category
    if (selectedCategory) {
      result = result.filter((h) => h.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter(
        (h) =>
          h.name.includes(query) ||
          h.scientificName.toLowerCase().includes(query) ||
          h.benefits.some((b) => b.includes(query)) ||
          h.description.includes(query) ||
          h.uses.some((u) => u.includes(query))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const handleStartExploring = () => {
    const categoriesSection = document.getElementById("categories");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-herb-bg" dir="rtl">
      {/* Header */}
      <Header
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      {/* Hero Section */}
      <Hero
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        onStartExploring={handleStartExploring}
      />

      {/* Stats Section */}
      <StatsSection />

      {/* Category Filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      {/* Results Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {searchQuery
                  ? `نتائج البحث عن "${searchQuery}"`
                  : selectedCategory
                    ? `الأعشاب - ${categories.find((c) => c.id === selectedCategory)?.name}`
                    : "جميع الأعشاب الطبية"}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {filteredHerbs.length} {filteredHerbs.length === 1 ? "عشبة" : "أعشاب"} متاحة
              </p>
            </div>

            {/* Active filters */}
            <div className="flex items-center gap-2">
              {(selectedCategory || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 text-sm bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors flex items-center gap-2"
                >
                  <span>✕</span>
                  إزالة التصفية
                </button>
              )}
            </div>
          </div>

          {/* Results grid */}
          {filteredHerbs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredHerbs.map((herb, index) => (
                <HerbCard
                  key={herb.id}
                  herb={herb}
                  onClick={setSelectedHerb}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-8xl mb-6 opacity-50">🌿</div>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">
                لا توجد نتائج
              </h3>
              <p className="text-gray-400 mb-6">
                لم نجد أعشاباً تطابق بحثك. جرب كلمة بحث مختلفة.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-6 py-3 bg-herb-green text-white rounded-xl hover:bg-herb-green-dark transition-colors"
              >
                عرض جميع الأعشاب
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-herb-green via-herb-green-light to-herb-green" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 text-5xl">🌿</div>
          <div className="absolute bottom-10 right-20 text-6xl">🍃</div>
          <div className="absolute top-1/2 right-1/4 text-4xl">🌱</div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="text-6xl block mb-6 animate-float">🌿</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            نحو حياة أكثر صحة مع الطبيعة
          </h2>
          <p className="text-green-100/80 text-lg mb-8 max-w-xl mx-auto">
            استكشف عالم الأعشاب الطبية واكتشف كيف يمكن للطبيعة أن تكون مصدر صحتك وعافيتك
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#categories"
              className="px-8 py-4 bg-white text-herb-green-dark rounded-2xl font-bold hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <span className="ml-2">📚</span>
              تصفح الموسوعة
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-medium border border-white/20 hover:bg-white/20 transition-all"
            >
              <span className="ml-2">⬆</span>
              العودة للأعلى
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Detail Modal */}
      {selectedHerb && (
        <HerbDetail
          herb={selectedHerb}
          onClose={() => setSelectedHerb(null)}
        />
      )}
    </div>
  );
}

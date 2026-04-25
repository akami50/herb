import { cn } from "../utils/cn";
import { categories } from "../data/herbs";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

export default function CategoryFilter({ selectedCategory, onCategorySelect }: CategoryFilterProps) {
  return (
    <section id="categories" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            تصفح الأعشاب حسب الفئة
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            اختر الفئة التي تهمك لاكتشاف الأعشاب الطبية المناسبة لاحتياجاتك الصحية
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* All button */}
          <button
            onClick={() => onCategorySelect(null)}
            className={cn(
              "group relative flex flex-col items-center justify-center p-5 md:p-6 rounded-2xl border-2 transition-all duration-300",
              !selectedCategory
                ? "border-herb-green bg-herb-green text-white shadow-lg shadow-green-200"
                : "border-gray-200 bg-white text-gray-600 hover:border-herb-green/30 hover:shadow-md hover:-translate-y-1"
            )}
          >
            <span className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform">
              🌿
            </span>
            <span className="text-sm md:text-base font-bold">الكل</span>
            <span className="text-xs opacity-70 mt-0.5">جميع الأعشاب</span>
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategorySelect(selectedCategory === cat.id ? null : cat.id)}
              className={cn(
                "group relative flex flex-col items-center justify-center p-5 md:p-6 rounded-2xl border-2 transition-all duration-300",
                selectedCategory === cat.id
                  ? "border-herb-green bg-herb-green text-white shadow-lg shadow-green-200"
                  : "border-gray-200 bg-white text-gray-600 hover:border-herb-green/30 hover:shadow-md hover:-translate-y-1"
              )}
            >
              <span className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform">
                {cat.icon}
              </span>
              <span className="text-sm md:text-base font-bold">{cat.name}</span>
              <span className="text-xs opacity-70 mt-0.5">
                {cat.description.slice(0, 20)}...
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

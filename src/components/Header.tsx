import { useState } from "react";
import { cn } from "../utils/cn";
import { categories } from "../data/herbs";

interface HeaderProps {
  onCategorySelect: (categoryId: string | null) => void;
  selectedCategory: string | null;
}

export default function Header({ onCategorySelect, selectedCategory }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-green-900/5"
          : "bg-gradient-to-b from-green-900/90 to-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onCategorySelect(null)}>
            <div className="relative">
              <span className="text-3xl md:text-4xl animate-leaf">🌿</span>
              <span className="absolute -top-1 -right-1 text-xs">✨</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-xl md:text-2xl font-bold leading-tight transition-colors",
                isScrolled ? "text-herb-green-dark" : "text-white"
              )}>
                طبيعة الأعشاب
              </span>
              <span className={cn(
                "text-xs md:text-sm leading-tight transition-colors",
                isScrolled ? "text-herb-green/70" : "text-green-100/80"
              )}>
                دليلك الشامل للتداوي بالأعشاب
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => onCategorySelect(null)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                !selectedCategory
                  ? isScrolled
                    ? "bg-herb-green text-white shadow-md"
                    : "bg-white/20 text-white backdrop-blur-sm"
                  : isScrolled
                    ? "text-herb-green-dark hover:bg-herb-green/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              <span className="ml-1">🏠</span>
              الرئيسية
            </button>
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategorySelect(selectedCategory === cat.id ? null : cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                  selectedCategory === cat.id
                    ? isScrolled
                      ? "bg-herb-green text-white shadow-md"
                      : "bg-white/20 text-white backdrop-blur-sm"
                    : isScrolled
                      ? "text-herb-green-dark hover:bg-herb-green/10"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                <span className="ml-1.5">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-xl transition-all",
              isScrolled ? "text-herb-green-dark hover:bg-green-50" : "text-white hover:bg-white/10"
            )}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 animate-fadeInUp">
            <div className="py-4 space-y-2">
              <button
                onClick={() => { onCategorySelect(null); setIsMenuOpen(false); }}
                className={cn(
                  "flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  !selectedCategory
                    ? "bg-herb-green text-white"
                    : "text-gray-700 hover:bg-green-50"
                )}
              >
                <span>🏠</span>
                الرئيسية
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { onCategorySelect(selectedCategory === cat.id ? null : cat.id); setIsMenuOpen(false); }}
                  className={cn(
                    "flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    selectedCategory === cat.id
                      ? "bg-herb-green text-white"
                      : "text-gray-700 hover:bg-green-50"
                  )}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import type { Herb } from "../data/herbs";

interface HerbCardProps {
  herb: Herb;
  onClick: (herb: Herb) => void;
  index: number;
}

export default function HerbCard({ herb, onClick, index }: HerbCardProps) {
  return (
    <div
      onClick={() => onClick(herb)}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-fadeInUp"
      style={{
        animationDelay: `${index * 0.08}s`,
        animationFillMode: "both",
      }}
    >
      {/* Top colored bar */}
      <div
        className="h-3 rounded-t-3xl transition-all duration-500 group-hover:h-4"
        style={{ backgroundColor: herb.color }}
      />

      {/* Image area */}
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center py-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <span className="text-7xl md:text-8xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            {herb.image}
          </span>
        </div>
        {/* Category badge */}
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium shadow-sm flex items-center gap-1.5">
          <span>{herb.color === "#FBBF24" ? "🌼" : herb.color === "#D97706" ? "🫚" : herb.color === "#22C55E" ? "🌿" : "🌸"}</span>
          {getCategoryName(herb.category)}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-herb-green transition-colors">
          {herb.name}
        </h3>
        <p className="text-xs text-gray-400 italic mb-3 font-arabic">
          {herb.scientificName}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {herb.description}
        </p>

        {/* Benefits preview */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {herb.benefits.slice(0, 3).map((benefit, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 bg-green-50 text-herb-green rounded-full"
            >
              ✦ {benefit.slice(0, 20)}{benefit.length > 20 ? "..." : ""}
            </span>
          ))}
          {herb.benefits.length > 3 && (
            <span className="text-xs px-2.5 py-1 bg-gray-50 text-gray-400 rounded-full">
              +{herb.benefits.length - 3}
            </span>
          )}
        </div>

        {/* Read more button */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-herb-green font-medium group-hover:gap-2 transition-all inline-flex items-center gap-1">
            اقرأ المزيد
            <span className="transition-transform group-hover:translate-x-1">←</span>
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm transition-transform group-hover:scale-110"
            style={{ backgroundColor: herb.color }}
          >
            {herb.image}
          </div>
        </div>
      </div>

      {/* Hover overlay shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute -inset-full top-0 h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer" />
      </div>
    </div>
  );
}

function getCategoryName(categoryId: string): string {
  const names: Record<string, string> = {
    digestive: "هضمي",
    immune: "مناعة",
    calming: "مهدئ",
    respiratory: "تنفسي",
    skin: "بشرة",
    energy: "طاقة",
  };
  return names[categoryId] || categoryId;
}

import type { Herb } from "../data/herbs";

interface HerbDetailProps {
  herb: Herb;
  onClose: () => void;
}

export default function HerbDetail({ herb, onClose }: HerbDetailProps) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeInUp"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all"
        >
          ✕
        </button>

        {/* Header with color */}
        <div
          className="h-4 rounded-t-3xl"
          style={{ backgroundColor: herb.color }}
        />

        {/* Hero section */}
        <div className="relative px-6 md:px-8 pb-4 -mt-10">
          <div className="flex items-end gap-4">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-4xl md:text-5xl shadow-xl border-4 border-white"
              style={{ backgroundColor: herb.color + "20" }}
            >
              {herb.image}
            </div>
            <div className="flex-1 pt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {herb.name}
              </h2>
              <p className="text-sm text-gray-400 italic mt-0.5">
                {herb.scientificName}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 pb-8 space-y-6">
          {/* Description */}
          <div className="bg-green-50/50 rounded-2xl p-5">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span>📖</span>
              نبذة عن العشبة
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {herb.description}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>✨</span>
              الفوائد الصحية
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {herb.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 bg-gradient-to-l from-green-50 to-transparent rounded-xl"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm shadow-sm"
                    style={{ backgroundColor: herb.color + "20" }}
                  >
                    <span style={{ color: herb.color }}>✦</span>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Uses */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>💡</span>
              طرق الاستخدام
            </h3>
            <div className="space-y-3">
              {herb.uses.map((use, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-amber-50/50 rounded-xl border border-amber-100"
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm shadow-sm"
                    style={{ backgroundColor: herb.color + "20" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Precautions */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span>⚠️</span>
              محاذير وتحذيرات
            </h3>
            <div className="p-5 bg-red-50/50 rounded-2xl border border-red-100">
              <p className="text-gray-600 text-sm leading-relaxed">
                {herb.precautions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

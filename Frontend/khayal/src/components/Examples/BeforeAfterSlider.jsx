import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function BeforeAfterSlider({ before, after, rtl = false }) {
  const { t, i18n } = useTranslation();
  const isRtl = rtl || i18n.language === "ar";

  const containerRef = useRef(null);
  const beforeRef = useRef(null);
  const lineRef = useRef(null);
  const handleRef = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const beforeDiv = beforeRef.current;
    const line = lineRef.current;
    const handle = handleRef.current;
    if (!container || !beforeDiv || !line || !handle) return;

    let rect = container.getBoundingClientRect();

    // ✅ Updated: RTL now behaves intuitively (move right → slider right)
    const updatePosition = (clientX) => {
      const percentage = ((clientX - rect.left) / rect.width) * 100;
      const clamped = Math.max(0, Math.min(100, percentage));

      if (isRtl) {
        // for RTL, we anchor the beforeDiv to right but keep direction natural
        beforeDiv.style.width = `${clamped}%`;
        beforeDiv.style.right = "auto";
        beforeDiv.style.left = "0";
        line.style.left = `${clamped}%`;
        handle.style.left = `${clamped}%`;
      } else {
        // LTR normal
        beforeDiv.style.width = `${clamped}%`;
        beforeDiv.style.left = "0";
        beforeDiv.style.right = "auto";
        line.style.left = `${clamped}%`;
        handle.style.left = `${clamped}%`;
      }
    };

    const startDrag = (e) => {
      isDragging.current = true;
      rect = container.getBoundingClientRect();
      move(e);
    };

    const move = (e) => {
      if (!isDragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };

    const stopDrag = () => {
      isDragging.current = false;
    };

    container.addEventListener("mousedown", startDrag);
    container.addEventListener("touchstart", startDrag, { passive: true });
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);

    // center on load
    updatePosition(rect.left + rect.width / 2);

    return () => {
      container.removeEventListener("mousedown", startDrag);
      container.removeEventListener("touchstart", startDrag);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [isRtl]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg select-none cursor-ew-resize"
    >
      {/* After image (base) */}
      <img
        src={after}
        alt={t("slider.after", "After")}
        className="w-full h-full block object-cover"
      />

      {/* Before image (overlay) */}
      <div
        ref={beforeRef}
        className="absolute top-0 bottom-0 overflow-hidden"
        style={{
          width: "50%",
          left: "0",
        }}
      >
        <img
          src={before}
          alt={t("slider.before", "Before")}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Divider */}
      <div
        ref={lineRef}
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400 via-blue-400 to-pink-400"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      ></div>

      {/* Handle */}
      <div
        ref={handleRef}
        className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10"
        style={{ left: "50%" }}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full shadow-lg border border-white/40 flex items-center justify-center hover:scale-110 transition-transform duration-200">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Labels */}
      <div
        className={`absolute top-4 ${
          isRtl ? "right-4" : "left-4"
        } bg-black/70 text-white text-xs md:text-sm px-3 py-1 rounded-md border border-gray-700 backdrop-blur-sm`}
      >
        {t("slider.before", "Before")}
      </div>
      <div
        className={`absolute top-4 ${
          isRtl ? "left-4" : "right-4"
        } bg-purple-500/70 text-white text-xs md:text-sm px-3 py-1 rounded-md border border-purple-400 backdrop-blur-sm`}
      >
        {t("slider.after", "After")}
      </div>
    </div>
  );
}

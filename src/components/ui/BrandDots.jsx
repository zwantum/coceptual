export default function BrandDots({ count = 3, dotSize = "8px", style = {} }) {
  const dots = [
    { class: "bdot-m", color: "var(--magenta)" },
    { class: "bdot-o", color: "var(--orange)" },
    { class: "bdot-p", color: "var(--purple)" },
  ];

  return (
    <div className="brand-dots flex gap-[6px] items-center" style={style}>
      {dots.slice(0, count).map((dot, index) => (
        <div
          key={index}
          className={dot.class}
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: dot.color,
            borderRadius: "50%",
            flexShrink: 0,
          }}
        ></div>
      ))}
    </div>
  );
}
export default function SectionDots({ mOrder = 1, oOrder = 2, pOrder = 3 }) {
  return (
    <div className="section-dots">
      <div className="bdot bdot-m" style={{ width: "10px", height: "10px", order: mOrder }}></div>
      <div className="bdot bdot-o" style={{ width: "10px", height: "10px", order: oOrder }}></div>
      <div className="bdot bdot-p" style={{ width: "10px", height: "10px", order: pOrder }}></div>
    </div>
  );
}
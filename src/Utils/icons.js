// utils/icons.js
export const BI = ({ icon, className = "", style = {}, marginEnd = "me-2", marginStart = "" }) => {
  return (
    <i
      className={`bi ${icon} ${marginEnd} ${marginStart} ${className}`}
      style={style}
    ></i>
  );
};
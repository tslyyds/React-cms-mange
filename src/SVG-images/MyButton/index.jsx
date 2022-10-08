import React from "react";
import "./index.css";

function Mybutton({ type, hover, ...restProps }) {
  return (
    <svg
      enableBackground="new 0 0 32 32"
      id="图层_1"
      version="1.1"
      viewBox="0 0 32 32"
      x="0px"
      width="32"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      y="0px"
      className={`${type} ${hover}`}
      {...restProps}
    >
      <rect x="2.96" y="6.24" className="st0" width="21.1" height="16.82" />
      <rect x="5.59" y="8.46" className="st1" width="21.06" height="16.47" />
      <circle className="st2" cx="12.88" cy="19.79" r="2.27" />
      <rect x="9.85" y="14.03" className="st2" width="2.72" height="8.02" />
      <ellipse className="st2" cx="12.57" cy="16.14" rx="1.88" ry="2.06" />
      <circle claclassName="st1" cx="12.23" cy="16.27" r="0.86" />
      <circle className="st1" cx="12.57" cy="20.01" r="0.98" />
      <rect x="11.21" y="15.4" className="st1" width="1.02" height="1.72" />
      <rect x="11.21" y="19.03" className="st1" width="1.47" height="1.96" />
      <rect x="14.44" y="14.08" className="st2" width="5.46" height="1.44" />
      <rect x="16.24" y="15.12" className="st2" width="1.83" height="6.94" />
      <rect x="20.59" y="14.03" className="st2" width="1.66" height="8.02" />
      <rect x="24.38" y="14.08" className="st2" width="1.69" height="7.98" />
      <rect
        x="22.54"
        y="13.97"
        transform="matrix(0.9091 -0.4166 0.4166 0.9091 -5.4049 11.3602)"
        className="st2"
        width="1.58"
        height="8.19"
      />
      <rect x="7.01" y="10.14" className="st0" width="22.05" height="16.01" />
    </svg>
  );
}
export default Mybutton;

import * as React from "react";
import { Svg } from "react-sketchapp";

const SvgTimesRegular = (props: any) => (
  <Svg
    aria-hidden="true"
    data-prefix="far"
    data-icon="times"
    className="times-regular_svg__svg-inline--fa times-regular_svg__fa-times times-regular_svg__fa-w-10"
    viewBox="0 0 320 512"
    {...props}
  >
    <Svg.Path
      fill={props.fill || "currentColor"}
      d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
    />
  </Svg>
);

export default SvgTimesRegular;

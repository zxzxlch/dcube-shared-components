import * as React from "react";
import { Svg } from "react-sketchapp";

const SvgSpinnerRegular = (props: any) => (
  <Svg
    aria-hidden="true"
    data-prefix="far"
    data-icon="spinner"
    className="spinner-regular_svg__svg-inline--fa spinner-regular_svg__fa-spinner spinner-regular_svg__fa-w-16"
    viewBox="0 0 512 512"
    {...props}
  >
    <Svg.Path
      fill={props.fill || "currentColor"}
      d="M296 48c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-40 376c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm248-168c0-22.091-17.909-40-40-40s-40 17.909-40 40 17.909 40 40 40 40-17.909 40-40zm-416 0c0-22.091-17.909-40-40-40S8 233.909 8 256s17.909 40 40 40 40-17.909 40-40zm20.922-187.078c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40c0-22.092-17.909-40-40-40zm294.156 294.156c-22.091 0-40 17.909-40 40s17.909 40 40 40c22.092 0 40-17.909 40-40s-17.908-40-40-40zm-294.156 0c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40z"
    />
  </Svg>
);

export default SvgSpinnerRegular;

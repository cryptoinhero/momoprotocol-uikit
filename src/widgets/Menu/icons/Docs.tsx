import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 19 19" {...props}>
      <image width="19" height="19" href="/images/WhitepaperLight.svg"></image>
    </Svg>
  );
};

export default Icon;

import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg {...props} width={18} height={16} fill="none">
    <Mask id="a" x={0} y={0} width={18} height={16}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.707 1.707A1 1 0 0 0 7.293.293l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L3.414 9H17a1 1 0 0 0 0-2H3.414l5.293-5.293Z"
        fill="#72A8BC"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#72A8BC" d="M-3-4h24v24H-3z" />
    </G>
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;

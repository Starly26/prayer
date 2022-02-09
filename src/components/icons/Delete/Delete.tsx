import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg {...props} width={20} height={22} fill="none">
    <Mask id="a" x={0} y={0} width={20} height={22}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.293 2.293A1 1 0 0 1 8 2h4a1 1 0 0 1 1 1v1H7V3a1 1 0 0 1 .293-.707ZM5 4V3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h4a1 1 0 0 1 0 2h-1v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6H1a1 1 0 0 1 0-2h4ZM4 6v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6H4Zm4 3a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1Zm5 1a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0v-6Z"
        fill="#A369EC"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#A369EC" d="M-2-1h24v24H-2z" />
    </G>
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;

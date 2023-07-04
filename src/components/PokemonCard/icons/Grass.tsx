import type { ImageProps, SvgProps } from 'react-native-svg';
import Svg, {
  Circle,
  Defs,
  Image,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';
import { colors } from '../../../utils/colors';

export const GrassPokemon = ({ ...props }: SvgProps & ImageProps) => (
  <Svg width={94} height={94} viewBox="0 0 85 92" fill="none" {...props}>
    <Path
      d="M13.8863 79.9023C13.5637 79.5988 13.2446 79.2895 12.9292 78.9741C-3.7199 62.325 -3.71989 35.3314 12.9292 18.6824C29.5783 2.03324 82.6288 0.919434 82.6288 0.919434C82.6288 0.919434 89.8701 62.325 73.2211 78.9741C58.4344 93.7607 35.4885 95.4149 18.8764 83.9368L32.2618 67.5105L53.6597 62.8907L36.1928 61.1445L47.2932 49.8421L59.9289 47.0741L49.9373 44.1151L59.9289 26.0906L45.7169 42.0317L40.2287 34.2872L42.1607 47.0741L32.2618 58.2333L27.6733 44.1149V62.8907L13.8863 79.9023Z"
      fillRule="evenodd"
      fill="url(#gradient_fill)"
    />
    <Defs>
      <LinearGradient
        id="gradient_fill"
        x1="-7.94043"
        y1="7.70895"
        x2="62.0856"
        y2="109.15"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset="1" stopColor="white" stopOpacity="0" />
      </LinearGradient>
    </Defs>
    <Image x="-3%" width={94} height={94} {...props} />
  </Svg>
);

export const GrassBadge = ({ ...props }: SvgProps) => (
  <Svg width={21} height={22} viewBox="0 0 21 22" fill="none" {...props}>
    <Circle cx="10.1569" cy="11.0587" r="10.1569" fill="#fff" />
    <Path
      d="M6.1128 15.768C6.06798 15.7258 6.02365 15.6829 5.97983 15.639C3.66688 13.3261 3.66688 9.57605 5.97983 7.26311C8.29278 4.95014 15.6627 4.79541 15.6627 4.79541C15.6627 4.79541 16.6687 13.3261 14.3558 15.639C12.3016 17.6933 9.11385 17.9231 6.80604 16.3285L8.66559 14.0465L11.6383 13.4047L9.21169 13.1621L10.7538 11.5919L12.5092 11.2074L11.1211 10.7963L12.5092 8.29228L10.5348 10.5069L9.77238 9.43098L10.0408 11.2074L8.66559 12.7577L8.02813 10.7963V13.4047L6.1128 15.768Z"
      fill={colors.type.grass}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

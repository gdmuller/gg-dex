import React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';
import { colors } from '../../utils/colors';

export function ExitIcon({ color = colors.red, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 512 512" fill="none" {...props}>
      <Path
        d="M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40M384 176l80 80-80 80M191 256h273"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={28}
      />
    </Svg>
  );
}

export function LinkIcon({ color = colors.text.dark, ...props }: SvgProps) {
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        stroke={color}
      />
    </Svg>
  );
}

export function RateIcon({ color = colors.text.dark, ...props }: SvgProps) {
  return (
    <Svg width={20} height={20} fill="none" viewBox="0 0 24 24" {...props}>
      <G clipPath="url(#a)">
        <Path
          d="m12.412 17.878 4.725 3c.61.384 1.36-.187 1.181-.89l-1.369-5.382a.816.816 0 0 1 .272-.825l4.238-3.534c.553-.46.271-1.388-.45-1.434l-5.532-.357a.778.778 0 0 1-.684-.506L12.73 2.756a.778.778 0 0 0-1.462 0L9.206 7.95a.778.778 0 0 1-.685.506l-5.531.357c-.722.046-1.003.975-.45 1.434l4.237 3.534a.815.815 0 0 1 .272.825l-1.265 4.988c-.216.843.684 1.528 1.406 1.069l4.397-2.785a.769.769 0 0 1 .825 0v0Z"
          stroke={color}
          strokeWidth={1.219}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

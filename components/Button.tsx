import { View, Text } from 'react-native';
import React from 'react';
import {
  FitBox,
  Group,
  Paint,
  RoundedRect,
  BoxShadow,
  rect,
  rrect,
  Box,
} from '@shopify/react-native-skia';

const src = rect(0, 0, 24, 24);
const border = rrect(rect(0, 0, 24, 24), 5, 5);
const container = rrect(rect(1, 1, 22, 22), 5, 5);

interface ButtonProps {
  x: number;
  y: number;
  size: number;
}

export const Theme = {
  white1: '#F0F0F3',
  white2: '#EEEEEE',
};

const Button = ({ x, y, size }: ButtonProps) => {
  return (
    <FitBox src={src} dst={rect(x, y, size, size)}>
      <Box box={border} color={Theme.white2} >
        <BoxShadow dx={-1} dy={-1} blur={3} color="white" />
        <BoxShadow dx={1} dy={1} blur={3} color="rgba(174, 174, 192, 0.4)" />
      </Box>
      <Box box={container} color={Theme.white2}>
        <BoxShadow dx={-1} dy={-1} blur={3} color="white" inner />
        <BoxShadow dx={1} dy={1} blur={3} color="rgba(174, 174, 192, 0.4)" inner />
      </Box>
    </FitBox>
  );
};

export default Button;

import { Dimensions, Text, View } from 'react-native';

import { Box, BoxShadow, Canvas, Fill, FitBox, rect, rrect } from '@shopify/react-native-skia';
import Button from '~/components/Button';

const { width } = Dimensions.get('window');
const padding = 32;
const size = width - padding * 2;
const x = padding;
const y = 75;

export const Theme = {
  white1: '#F0F0F3',
  white2: '#EEEEEE',
};

const src = rect(0, 0, 24, 24);
const circle = rrect(rect(0, 0, 24, 24), 24, 24);

export default function TabOneScreen() {
  return (
    <Canvas style={{ flex: 1 }}>
      <Fill color="#F0F0F3" />
      {/* <Button x={x} y={y} size={size} /> */}
      <FitBox src={src} dst={rect(x, y, size, size)}>
        <Box box={circle} color={Theme.white2}>
          <BoxShadow dx={0} dy={4} blur={8} color="white" inner />
          <BoxShadow dx={0} dy={-4} blur={8} color="rgba(174, 174, 192, 0.4)" inner />
          <BoxShadow dx={0} dy={4} blur={8} color="rgba(174, 174, 192, 0.25)" />
        </Box>
      </FitBox>
    </Canvas>
  );
}

const styles = {
  container: `items-center flex-1 justify-center h-80 w-80`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};

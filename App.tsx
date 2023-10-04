import React from 'react';
import {config, GluestackUIProvider, Text} from '@gluestack-ui/themed';

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <Text>Hello World!</Text>
    </GluestackUIProvider>
  );
}

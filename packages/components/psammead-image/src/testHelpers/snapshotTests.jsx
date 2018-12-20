import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { custom, landscape, portrait, square } from './fixtureData';

const snapshotTests = (Component, additionalProps) => {
  shouldMatchSnapshot(
    'should render landscape image correctly',
    <Component
      alt={landscape.alt}
      src={landscape.src}
      height={landscape.height}
      width={landscape.width}
      {...additionalProps}
    />,
  );
  shouldMatchSnapshot(
    'should render portrait image correctly',
    <Component
      alt={portrait.alt}
      src={portrait.src}
      height={portrait.height}
      width={portrait.width}
      {...additionalProps}
    />,
  );
  shouldMatchSnapshot(
    'should render square image correctly',
    <Component
      alt={square.alt}
      src={square.src}
      height={square.height}
      width={square.width}
      {...additionalProps}
    />,
  );
  shouldMatchSnapshot(
    'should render image with custom dimensions correctly',
    <Component
      alt={custom.alt}
      src={custom.src}
      height={custom.height}
      width={custom.width}
      {...additionalProps}
    />,
  );
  shouldMatchSnapshot(
    'should render image with srcset correctly',
    <Component
      alt={landscape.alt}
      src={landscape.src}
      srcset={landscape.srcset}
      height={landscape.height}
      width={landscape.width}
    />,
  );
};

export default snapshotTests;

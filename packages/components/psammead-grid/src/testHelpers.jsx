import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import Paragraph from '@bbc/psammead-paragraph';
import { cyrillicAndLatin } from '@bbc/gel-foundations/scripts';
import Image from '@bbc/psammead-image';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_1_SCREEN_WIDTH_MAX } from '@bbc/gel-foundations/breakpoints';
import MediaIndicator from '@bbc/psammead-media-indicator';

export const ExampleParagraph = ({ identifier }) => (
  <Paragraph script={cyrillicAndLatin} service="news">
    {identifier}This is a long paragraph that will wrap for several lines. This
    is a long paragraph that will wrap for several lines. This is a long
    paragraph that will wrap for several lines. This is a long paragraph that
    will wrap for several lines. This is a long paragraph that will wrap for
    several lines. This is a long paragraph that will wrap for several lines.
    This is a long paragraph that will wrap for several lines. This is a long
    paragraph that will wrap for several lines.
  </Paragraph>
);

export const ExampleFigure = styled.figure`
  margin: 0;
  padding: 0;
`;

const ImageSpacing = styled.div`
  margin: 0;
  padding: 0 0 ${GEL_SPACING} 0;
`;

export const ExampleImage = () => (
  <ImageSpacing>
    <Image
      alt="Robert Downey Junior in Iron Man"
      src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg"
      width="640"
    />
  </ImageSpacing>
);

export const ExampleMediaIndicator = styled(MediaIndicator)`
  height: ${GEL_SPACING_QUAD};
  padding: ${GEL_SPACING} ${GEL_SPACING_HLF};
  @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    height: 1.25rem;
    padding: ${GEL_SPACING_HLF} ${GEL_SPACING_HLF} 0;
  }
`;

export const ExampleTime = styled.time`
  padding: 0 ${GEL_SPACING_HLF};
`;

ExampleParagraph.propTypes = {
  identifier: string,
};
ExampleParagraph.defaultProps = {
  identifier: '1',
};

import React from 'react';
import styled, { css } from 'styled-components';
import { string, func, shape, oneOf } from 'prop-types';
import Image from '@bbc/psammead-image';
import PlayButton from '@bbc/psammead-play-button';
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import Guidance from '../Guidance';

const StyledPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ noJsClassName }) => `cursor: ${noJsClassName ? 'default' : 'pointer'};`}
`;

const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  bottom: 0;
  ${({ noJsClassName }) =>
    noJsClassName &&
    css`
      .${noJsClassName} & {
        display: none;
      }
    `}
  /* stylelint-disable */
  /* https://www.styled-components.com/docs/advanced#referring-to-other-components */
  ${StyledPlaceholder}:hover &,
  ${StyledPlaceholder}:focus & {
    background-color: ${C_POSTBOX};
  }
  /* stylelint-enable */
`;

const Placeholder = ({
  onClick,
  service,
  src,
  srcset,
  mediaInfo,
  noJsClassName,
  noJsMessage,
}) => {
  const {
    title,
    datetime,
    duration,
    durationSpoken,
    type,
    guidanceMessage,
  } = mediaInfo;

  return (
    <StyledPlaceholder onClick={onClick} noJsClassName={noJsClassName}>
      <Guidance
        service={service}
        guidanceMessage={guidanceMessage}
        noJsClassName={noJsClassName}
        noJsMessage={noJsMessage}
      />
      <StyledPlayButton
        title={title}
        service={service}
        onClick={() => {}}
        datetime={datetime}
        duration={duration}
        durationSpoken={durationSpoken}
        type={type}
        guidanceMessage={guidanceMessage}
        noJsClassName={noJsClassName}
      />

      <Image alt="" src={src} srcset={srcset} />
    </StyledPlaceholder>
  );
};

Placeholder.propTypes = {
  onClick: func.isRequired,
  service: string.isRequired,
  src: string.isRequired,
  srcset: string,
  noJsClassName: string,
  noJsMessage: string.isRequired,
  mediaInfo: shape({
    title: string.isRequired,
    datetime: string,
    duration: string,
    durationSpoken: string,
    type: oneOf(['audio', 'video']),
    guidanceMessage: string,
  }),
};
Placeholder.defaultProps = {
  srcset: null,
  noJsClassName: null,
  mediaInfo: shape({
    datetime: null,
    duration: null,
    durationSpoken: null,
    type: 'video',
    guidanceMessage: null,
  }),
};

export default Placeholder;

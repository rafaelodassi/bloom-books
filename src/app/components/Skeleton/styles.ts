import styled, { keyframes } from 'styled-components';

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Container = styled.div<{
  width: string | number;
  height: string | number;
}>`
  width: ${(props) =>
    typeof props.width === 'string' ? `${props.width}` : `${props.width}px`};
  height: ${(props) =>
    typeof props.height === 'string' ? `${props.height}` : `${props.height}px`};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
`;

import styled from 'styled-components';

export const Container = styled.div<{ $offsettop?: number }>`
  width: 100vw;
  height: ${(props) =>
    props.$offsettop ? `calc(100vh - ${props.$offsettop}px)` : '100vh'};
  position: fixed;
  top: ${(props) => (props.$offsettop ? `${props.$offsettop}px` : '0px')};
  right: 0px;
`;

export const DrawerContainer = styled.div<{ $width?: number }>`
  width: ${(props) => (props.$width ? `${props.$width}px` : '400px')};
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 2;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: #010311;
  opacity: 0.5;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
`;

import { Grid2X2, Rows3 } from 'lucide-react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const Text = styled.span<{ $hidemobile: boolean }>`
  font-size: 12px;
  color: #000000;

  @media (max-width: 768px) {
    ${(props) =>
      props.$hidemobile &&
      css`
        display: none;
      `}
  }
`;

export const ListIcon = styled(Rows3)<{ $isactive?: boolean }>`
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  ${(props) =>
    props.$isactive &&
    css`
      stroke: #5062f0;
    `}
`;

export const CardIcon = styled(Grid2X2)<{ $isactive?: boolean }>`
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  ${(props) =>
    props.$isactive &&
    css`
      stroke: #5062f0;
    `}
`;

export const ViewerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PerPageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Select = styled.select`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;

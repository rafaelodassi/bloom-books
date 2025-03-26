'use client';

import { Grid2X2, Rows3 } from 'lucide-react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 12px;
  color: #000000;
`;

export const ListIcon = styled(Grid2X2)`
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const CardIcon = styled(Rows3)`
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
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

'use client';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0px 120px;
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const PaginationItem = styled.button<{ $isactive?: boolean }>`
  border: 1px solid #1f2445;
  background: #ffffff;
  border-radius: 12px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1f2445;
  font-size: 12px;
  font-weight: 700;
  transition: all 0.3s linear;

  &:hover {
    cursor: pointer;
    background: #1f2445;
    color: #fff;
  }

  ${(props) =>
    props.$isactive &&
    css`
      background: #1f2445;
      color: #fff;
    `}
`;

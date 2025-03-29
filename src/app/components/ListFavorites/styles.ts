import { Star, BookText } from 'lucide-react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-top: 6px solid #0b1a8e;
  display: flex;
  gap: 12px;
  flex-direction: column;
  height: 100%;
`;

export const FavoriteContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const FavoriteIcon = styled(Star)<{ $isfavorite: boolean }>`
  flex-shrink: 0;

  ${(props) =>
    props.$isfavorite &&
    css`
      fill: #5062f0;
    `}

  &:hover {
    cursor: pointer;
    fill: #5062f0;
  }
`;

export const BookImage = styled.div`
  width: 60px;
  height: 80px;
  background: #f2f3f8;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookIcon = styled(BookText)`
  opacity: 0.5;
`;

export const BookTitle = styled.h1`
  font-size: 14px;
  font-weight: 700;
  color: #0e1337;
`;

export const Author = styled.span`
  font-size: 12px;
  color: #454a67;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BookInfo = styled.div``;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #0b1a8e;
  padding: 14px 16px;
  padding-bottom: 0px;
  box-shadow: rgba(255, 255, 255, 1) 0px 31px 15px -10px;
  z-index: 1;
`;

export const Overflow = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  flex-grow: 1;
  padding: 14px 16px;
`;
export const EmptyText = styled.span`
  padding: 14px 16px;
  padding-top: 0px;
`;

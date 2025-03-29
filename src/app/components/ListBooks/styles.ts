import { Star, BookText } from 'lucide-react';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ $viewmode: string }>`
  width: 100%;
  padding: 24px 120px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  flex-grow: 1;
  overflow-y: auto;

  ${(props) =>
    props.$viewmode === 'card' &&
    css`
      flex-direction: row;
      align-items: flex-start;
      gap: 30px;
      flex-wrap: wrap;
      justify-content: center;
      align-content: flex-start;
    `}

  @media (max-width: 768px) {
    padding: 10px;
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const BookContainer = styled.div<{ $viewmode: string }>`
  display: flex;
  gap: 30px;

  ${(props) =>
    props.$viewmode === 'card' &&
    css`
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      flex-grow: 1;
      gap: 12px;
      width: 186px;
      max-width: 186px;

      @media (max-width: 768px) {
        width: 45%;
        max-width: 45%;
      }
    `}
`;

export const BookImage = styled.div`
  width: 130px;
  height: 167px;
  background: #f2f3f8;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: #0e1337;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #0e1337;
  margin-bottom: 12px;
`;

export const Publisher = styled.span`
  font-size: 14px;
  color: #000000;
  display: block;
  margin-bottom: 8px;
`;

export const BookInfo = styled.div``;

export const Rank = styled.span`
  font-size: 14px;
  color: #000000;
  display: block;
  margin-bottom: 12px;
`;

export const ButtonBuy = styled.button`
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  background: #5062f0;
  border-radius: 24px;
  height: 32px;
  padding: 0px 12px;
  border: none;
  outline: none;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const Author = styled.span`
  font-size: 14px;
  color: #454a67;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TitleContainer = styled.div<{ $viewmode: string }>`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 6px;

  ${(props) =>
    props.$viewmode === 'card' &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

export const BookIcon = styled(BookText)`
  opacity: 0.5;
`;

export const SkeletonContainer = styled(Container)`
  gap: 22px;
`;

export const SkeletonContent = styled.div`
  gap: 22px;
  display: flex;
`;

export const SkeletonInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

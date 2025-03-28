import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ $viewmode: string }>`
  width: 100%;
  padding: 0px 120px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 50px;
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
    `}

  @media (max-width: 768px) {
    padding: 10px;
    gap: 26px;
  }
`;

export const LastPublished = styled.span`
  color: #454a67;
  font-size: 12px;
`;

export const OlderPost = styled.span`
  color: #454a67;
  font-size: 12px;
`;

export const Title = styled(Link)`
  font-size: 20px;
  color: #5062f0;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const TitleContainer = styled.div<{ $viewmode: string }>`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 12px;

  ${(props) =>
    props.$viewmode === 'card' &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    `}

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const Updated = styled.div`
  color: #9296ac;
  font-size: 10px;
  font-style: italic;
`;

export const CategoryContainer = styled.div<{ $viewmode: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

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
    `}

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-grow: 1;
    gap: 12px;
  }
`;

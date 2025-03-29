import { Search, Star, ArrowLeft } from 'lucide-react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const MainHeader = styled.div`
  width: 100%;
  height: 60px;
  background: #5062f0;
  display: flex;
  align-items: center;
  padding: 0px 120px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
    gap: 5px;
  }
`;

export const SubHeader = styled.div`
  width: 100%;
  height: 48px;
  background: #f2f3f8;
  padding: 0px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const TitleMainHeader = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  flex-shrink: 0;
`;

export const SearchContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-grow: 1;
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  border-radius: 16px;
  border: none;
  width: 100%;
  height: 100%;
  padding-left: 35px;
  padding-right: 15px;
  outline: none;
  transition: box-shadow 0.3s linear;
  font-size: 14px;
  color: #0b1a8e;

  &:hover,
  &:focus,
  &:active {
    box-shadow: #0b1a8e 0px 0px 0px 3px;
  }
`;

export const SearchInputContainer = styled.div`
  width: 368px;
  height: 32px;
  position: relative;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 4px;
  left: 6px;
`;

export const FavoriteIconContainer = styled.div<{ $isactive: boolean }>`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${(props) =>
    props.$isactive &&
    css`
      background-color: #0b1a8e;
    `}
`;

export const FavoriteIcon = styled(Star)`
  transition: opacity 0.3s linear;
  flex-shrink: 0;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const TitleSubHeader = styled.h1`
  color: #010311;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const BackIcon = styled(ArrowLeft)`
  transition: opacity 0.3s linear;
  flex-shrink: 0;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const MainHeaderIsMobile = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

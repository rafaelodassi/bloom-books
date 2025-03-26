'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0px 120px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const LastPublished = styled.span`
  color: #454a67;
  font-size: 12px;
`;

export const OlderPost = styled.span`
  color: #454a67;
  font-size: 12px;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #5062f0;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Updated = styled.div`
  color: #9296ac;
  font-size: 10px;
  font-style: italic;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

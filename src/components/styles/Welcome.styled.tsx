import styled from "styled-components";

export const HeroContainer = styled.div`
  @media (max-width: 932px) {
    margin-bottom: 1.5rem;
  }
`;

export const PreName = styled.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const PreWrapper = styled.div`
  text-align: center;
`;

export const PreNameMobile = styled.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const Separator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;

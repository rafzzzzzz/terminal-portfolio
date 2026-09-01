import styled from "styled-components";

export const HeroContainer = styled.div`
  @media (max-width: 932px) {
    margin-bottom: 1.5rem;
  }
`;

export const PreName = styled.pre`
  font-size: clamp(0.7rem, 1.7vw, 1rem);
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 549px) {
    display: none;
  }
`;

export const PreWrapper = styled.div`
  text-align: center;
`;

export const PreNameMobile = styled.pre`
  font-size: clamp(0.65rem, 3.2vw, 1rem);
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  max-width: 100%;
  overflow: hidden;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const Separator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Identity = styled.div`
  color: ${({ theme }) =>
    theme.colors?.accents?.heading ?? theme.colors?.primary};
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const CommandSuggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.6rem 0 0.75rem;
`;

export const CommandButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors?.text[200]};
  color: inherit;
  cursor: pointer;
  font: inherit;
  padding: 0.3rem 0.55rem;

  &::before {
    color: ${({ theme }) => theme.colors?.text[200]};
    content: "$ ";
  }

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors?.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors?.secondary};
    outline-offset: 2px;
  }
`;

export const Cmd = styled.span`
  color: ${({ theme }) =>
    theme.colors?.accents?.command ?? theme.colors?.primary};
`;

export const Link = styled.a`
  color: ${({ theme }) =>
    theme.colors?.accents?.link ?? theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  overflow-wrap: anywhere;
  border-bottom: 2px dashed
    ${({ theme }) => theme.colors?.accents?.link ?? theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }

  &:focus-visible {
    border-bottom-style: solid;
    outline: 2px solid ${({ theme }) => theme.colors?.secondary};
    outline-offset: 2px;
  }
`;

import styled from "styled-components";

export const AboutWrapper = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  p {
    margin-top: 0.5rem;
    line-height: 1.5rem;
  }
`;

export const HighlightSpan = styled.span`
  color: ${({ theme }) =>
    theme.colors?.accents?.heading ?? theme.colors?.primary};
  font-weight: 700;
`;

export const HighlightAlt = styled.span`
  color: ${({ theme }) =>
    theme.colors?.accents?.section ?? theme.colors?.text[100]};
  font-weight: 700;
`;

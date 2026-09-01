import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.25rem;
  padding-top: 0.75rem;

  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 2rem);
  max-height: calc(100dvh - 2rem);
  overflow-y: auto;

  @media (max-width: 550px) {
    padding: 0.75rem 1rem 1rem;
  }
`;

export const CmdNotFound = styled.div`
  color: ${({ theme }) =>
    theme.colors?.accents?.error ?? theme.colors?.text[100]};
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

export const Empty = styled.div`
  margin-bottom: 0.25rem;
`;

export const MobileSpan = styled.span`
  line-height: 1.5rem;
  margin-right: 0.75rem;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const MobileBr = styled.br`
  @media (min-width: 550px) {
    display: none;
  }
`;

export const Form = styled.form`
  margin-bottom: 0.25rem;

  @media (min-width: 550px) {
    display: flex;

    label {
      flex-shrink: 0;
      white-space: nowrap;
    }
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  min-width: 0;

  &:focus-visible {
    outline: none;
  }

  @media (max-width: 550px) {
    width: calc(100% - 2.5rem);
  }
`;

export const Hints = styled.span`
  color: ${({ theme }) =>
    theme.colors?.accents?.hint ?? theme.colors?.text[100]};
  margin-right: 0.875rem;
`;

export const LanguageControls = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.875rem;
  gap: 0.4rem;
  justify-content: flex-end;
  margin-bottom: 0.25rem;
`;

export const LanguageButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors?.text[200]};
  cursor: pointer;
  font: inherit;
  padding: 0.15rem 0.25rem;

  &[aria-pressed="true"] {
    color: ${({ theme }) => theme.colors?.primary};
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors?.secondary};
    outline-offset: 2px;
  }
`;

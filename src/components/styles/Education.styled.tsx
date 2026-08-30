import styled from "styled-components";

export const EduIntro = styled.div`
  margin-bottom: 0.75rem;
`;

export const EduList = styled.div`
  margin-bottom: 1rem;

  .title {
    color: ${({ theme }) =>
      theme.colors?.accents?.section ?? theme.colors?.text[100]};
    font-weight: 700;
    margin-bottom: 0.275rem;
  }

  .desc {
    color: ${({ theme }) => theme.colors?.text[200]};
  }
`;

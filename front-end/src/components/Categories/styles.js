import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: 650px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Logo = styled.h1`
  text-transform: uppercase;
`;

export const Description = styled.p`
  margin: 20px 0;
  line-height: 20px;
`;

export const SocialMedia = styled.div`
  display: flex;

  @media (max-width: 650px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Center = styled.div`
  padding: 20px;
  flex: 1;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  padding: 20px;
  flex: 1;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 650px) {
    justify-content: center;
  }
`;

export const Payment = styled.img`
  width: 50%;
`;

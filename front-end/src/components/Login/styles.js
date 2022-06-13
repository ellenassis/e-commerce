import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  min-width: 25%;
  padding: 20px;
  background-color: white;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

export const Button = styled.button`
  text-transform: uppercase;
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 20px 0;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;
  color: black;
`;

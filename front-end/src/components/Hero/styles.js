import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  margin-top: 50px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  height: 100vh;
  min-width: 100vw;
  padding: 0 40px;
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.div`
  height: 100%;
  width: 50%;
  flex: 1;
`;

export const Image = styled.img`
  height: 80%;
`;

export const InfoContainer = styled.div`
  text-transform: uppercase;
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;

  @media (max-width: 860px) {
    font-size: 50px;
  }
`;

export const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  text-transform: uppercase;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

import React from "react";

import { Container, Wrapper, Title, Form, Input, Button, Link } from "./styles";

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder="username ou email" />
          <Input placeholder="password" />
          <Button>Login</Button>
          <Link href="">Esqueceu a senha?</Link>
          <Link href="">Crie uma nova senha</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

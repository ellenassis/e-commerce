import React from "react";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Checkbox,
  Link,
  Button,
} from "./styles";

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Crie uma conta</Title>
        <Form>
          <Input placeholder="nome" />
          <Input placeholder="sobrenome" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            <Checkbox type="checkbox" /> Concordar com os termos <Link href="">Termos</Link>
          </Agreement>
        </Form>
        <Button>Criar</Button>
      </Wrapper>
    </Container>
  );
};

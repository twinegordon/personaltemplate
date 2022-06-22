import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.pinimg.com/originals/58/3e/14/583e142a65d1fce16735c41c1806b06a.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "90%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 15px;
  font-size: 18px;
  width: 95%;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <Container style={{ overflowX: "hidden" }}>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="password" />
          <Button onClick={handleLogin}>LOGIN</Button>
          <Link>FORGOTTEN PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

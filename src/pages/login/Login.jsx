import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../redux/apiCalls";
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

const ErrorComp = styled.div`
  background-color: rgba(200, 0, 0, 0.4);
  color: white;
  padding: 15px;
  width: 90%;
`;

const SuccessComp = styled.div`
  background-color: rgba(0, 200, 0, 0.6);
  color: white;
  padding: 15px;
  width: 90%;
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
  cursor: ${(props) =>
    props.disabled === "fetching" ? "not-allowed" : "pointer"};
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fetching, setFetching] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(false);
  };

  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault();

    // Using redux ********************
    login(dispatch, {email, password})

    // Uncomment this code if you want to use useState or useRef for login state management*******
    // try {
    //   const userDetails = {
    //     email,
    //     password,
    //   };

    //   setFetching(true);

    //   const res = await axios.post(
    //     "https://exprestemplate.herokuapp.com/api/auth/login",
    //     userDetails
    //   );
    //   console.log(res.data);
    //   setEmail("");
    //   setPassword("");
    //   setSuccess(true);
    //   setSuccessMessage("Success, redirecting ...");
    //   setTimeout(() => {
    //     navigate("/");
    //   }, 2000);

    //   setFetching(false);
    // } catch (err) {
    //   console.log(err);
    //   setError(true);
    //   setSuccess(false);
    //   setFetching(false);
    //   setErrorMessage("Sorry, something went wrong, try again");
    // }
  };

  return (
    <Container style={{ overflowX: "hidden" }}>
      <Wrapper>
        <Title>SIGN IN</Title>
        {error && <ErrorComp>{errorMessage}</ErrorComp>}
        {success && <SuccessComp>{successMessage}</SuccessComp>}
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button disabled={fetching}>
            {fetching ? "Logging In" : "LOGIN"}
          </Button>
          <Link>FORGOTTEN PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

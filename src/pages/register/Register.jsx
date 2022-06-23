import styled from "styled-components";
import { useRef, useState } from "react";
import { mobile } from "../../responsive";
import axios from "axios";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";
import { registerNewUser } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { registerNewUser2 } from "../../redux/registerSlice";

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
  ${mobile({
    background: "none",
  })}
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({
    width: "100%",
  })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  width: 90%;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [user, setUser] = useState([]);

  //   // Using useRef() hook
  //   const firstnameRef = useRef();
  //   const lastnameRef = useRef();
  //   const emailRef = useRef();
  //   const phoneRef = useRef();
  //   const birthdayRef = useRef();
  //   const passwordRef = useRef();
  //   const usernameRef = useRef();

  // useState hook
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const registerUser = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      firstName: firstname,
      lastName: lastname,
      email,
      birthday,
      phone,
      profileImage: "test profile img",
      coverImage: "test cover img",
      password,
    };

    // Using custom reducers
    // registerNewUser(dispatch, newUser);

    // using redux thunk
    dispatch(registerNewUser2(newUser))

    // try {
    //   // Using useRef
    //   //   const newUser = {
    //   //     username: usernameRef.current.value,
    //   //     firstName: firstnameRef.current.value,
    //   //     lastName: lastnameRef.current.value,
    //   //     email: emailRef.current.value,
    //   //     birthday: birthdayRef.current.value,
    //   //     phone: phoneRef.current.value,
    //   //     profileImage: "test profile img",
    //   //     coverImage: "test cover img",
    //   //     password: passwordRef.current.value,
    //   //   };

    //   //   Using useState
    //   const newUser = {
    //     username,
    //     firstName: firstname,
    //     lastName: lastname,
    //     email,
    //     birthday,
    //     phone,
    //     profileImage: "test profile img",
    //     coverImage: "test cover img",
    //     password,
    //   };

    //   const res = await axios.post(
    //     "https://exprestemplate.herokuapp.com/api/auth/register",
    //     newUser
    //   );
    //   console.log(res.data);
    //   setBirthday("");
    //   setEmail("");
    //   setUsername("");
    //   setFirstname("");
    //   setLastname("");
    //   setPhone("");
    //   setPassword("");

    //   navigate("/login");
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <Container
      style={{
        overflowX: "hidden",
      }}
    >
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="First Name"
            //   ref={firstnameRef}
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Input
            placeholder="Last Name"
            //   ref={lastnameRef}
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            placeholder="Username"
            //   ref={usernameRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Email"
            //   ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Phone"
            //   ref={phoneRef}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            placeholder="Birthday"
            //   ref={birthdayRef}
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <Input
            placeholder="password"
            //   ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Input placeholder="confirm password" ref={passwordRef} /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={registerUser}>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

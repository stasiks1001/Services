import React from "react";
import VideoSignIn from "../../videos/video.mp4";
import {
  BackgroundSignIn,
  VideoBgSignIn,
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
      <BackgroundSignIn>
        <VideoBgSignIn autoPlay loop muted src={VideoSignIn} type="video/mp4" />
      </BackgroundSignIn>
        <FormWrap>
          <Icon to="/"></Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sing in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

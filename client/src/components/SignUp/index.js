import React from "react";
import VideoRegister from "../../videos/video.mp4";
import {
  BackgroundRegister,
  VideoBgRegister,
  ContainerRegister,
  FormWrapRegister,
  IconRegister,
  FormContentRegister,
  FormRegister,
  FormH1Register,
  FormLabelRegister,
  FormInputRegister,
  FormButtonRegister,
  TextRegister,
} from "./SignUpElements";

const SignUp = () => {
  return (
    <>
      <ContainerRegister>
      <BackgroundRegister>
        <VideoBgRegister autoPlay loop muted src={VideoRegister} type="video/mp4" />
      </BackgroundRegister>
      <FormWrapRegister>
          <IconRegister to="/"></IconRegister>
          <FormContentRegister>
            <FormRegister action="#">
              <FormH1Register>
                At ****.de, all neighbors are active under their real names.
                This ensures trust and security in the online neighborhood.
              </FormH1Register>
              <FormLabelRegister htmlFor="for">Email</FormLabelRegister>
              <FormInputRegister type="email" required />
              <FormLabelRegister htmlFor="for">Password</FormLabelRegister>
              <FormInputRegister type="password" required />
              <FormLabelRegister htmlFor="for">
                Repeat Password
              </FormLabelRegister>
              <FormInputRegister type="password" required />

              <FormButtonRegister type="submit">Register</FormButtonRegister>
              <TextRegister>
                By creating an account you agree to our{" "}
                <a href="#">Terms & Privacy</a>.{" "}
              </TextRegister>
            </FormRegister>
          </FormContentRegister>
        </FormWrapRegister>
      </ContainerRegister>
    </>
  );
};

export default SignUp;

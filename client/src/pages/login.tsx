import { useLogin } from "@pankod/refine-core";
import { Box, Container } from "@pankod/refine-mui";
import { useEffect, useRef } from "react";

// logo

import {yariga} from "../assets"

import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
        
          theme: "filled_blue", // Blue theme for the button
          size: "medium", // Medium-sized button
          type: "standard", // Standard Google sign-in button
          // shape: "rect", // Rectangular button shape
          width: "350px", // Custom width for the button
          // height: "50px", // Custom height for the button
          // text: "Sign in with Google", // Custom button text
          // disabled: false, // Enable the button
  
        });
      } catch (error) {
        console.log(error);
      }
    }, []); // you can also add your client id as dependency here

    return <div ref={divRef} />;
  };

  return (
    <Box
      component="div"
      sx={{
        backgroundColor: '#FCFCFC'
        // backgroundSize: "cover",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img src={yariga} alt="yariga Logo" />
          </div>
          <Box mt={4}>
            <GoogleButton  />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

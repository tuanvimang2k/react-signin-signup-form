import React, { useState } from "react";
import * as Components from "./Components";
import { useNavigate } from "react-router-dom";
import { CheckLogin } from "./Helper";
import { HandleSignIn } from "./Service";
export const Login = () => {
  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const Login = async () => {
    const rp = await HandleSignIn(username, password);
    if (rp) {
      navigate("/my-chart");
    }
  }
//   const handleSignIn = async () => {
//     // Xử lý logic đăng nhập ở đây (nếu cần)
//     // Sau khi đăng nhập thành công, chuyển hướng đến "/my-chart"
//     // navigate("/my-chart");
//     const _body = {
//       email: username,
//       password: password,
//     };
//     try {
//       const rp = await CheckLogin(_body);
//       console.log("rp:", rp.status);
//       if (rp.status == 1) {
//         navigate("/my-chart");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };


  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form >
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Name"
            value={username}
            onChange={handleUsernameChange}
          />
          <Components.Input
            type="email"
            placeholder="Email"
            value={username}
            onChange={handleUsernameChange}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={(e) => e.preventDefault()} >
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            value={username}
            onChange={handleUsernameChange}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button onClick={() => Login()}>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton 
            // onClick={() => toggle(true)}
            >
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome to Sweets!</Components.Title>
            <Components.Paragraph>
              Chúc mừng bạn đã đến với Sweets
            </Components.Paragraph>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

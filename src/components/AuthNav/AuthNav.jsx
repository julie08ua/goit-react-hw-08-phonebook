import { AuthNavLink, AuthNavWrap } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <AuthNavWrap>
      <AuthNavLink to="/register">
        Register
      </AuthNavLink>
      <AuthNavLink to="/login">
        Log In
      </AuthNavLink>
    </AuthNavWrap>
  );
};
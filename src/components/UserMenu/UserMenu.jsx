import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUser } from 'redux/selectors';
import { Button, Span, UserName, WrapperUserMenu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <WrapperUserMenu>
      <UserName>Welcome, <Span>{user.name}</Span></UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </WrapperUserMenu>
  );
};

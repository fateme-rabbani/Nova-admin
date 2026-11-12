import { Menu, Bell, UserRound, LogOut } from "lucide-react";
import { dictionary } from "../../Dictionary";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { logoutUser } from "../../Redux/auth/authActions";
import {
  Container,
  Actions,
  Profile,
  ProfileText,
  Role,
  Avatar,
  LogoutButton,
} from "./styles";

function Header() {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.settings.language);

  const text = dictionary[language];

  return (
    <Container>
      <Actions>
        <Menu size={20} />
        <Bell size={20} />
        <LogoutButton type="button" onClick={() => logoutUser(dispatch)}>
          <LogOut size={18} />
          {text.auth.logout}
        </LogoutButton>
      </Actions>

      <Profile>
        <ProfileText>
          <span>{text.header.welcome}</span>
          <Role>{text.header.role}</Role>
        </ProfileText>

        <Avatar>
          <UserRound size={22} />
        </Avatar>
      </Profile>
    </Container>
  );
}

export default Header;

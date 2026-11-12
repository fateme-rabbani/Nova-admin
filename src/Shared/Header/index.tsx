import { Menu, Bell, UserRound } from "lucide-react";
import { dictionary } from "../../Dictionary";
import { useAppSelector } from "../../Redux/hooks";
import {
  Container,
  Actions,
  Profile,
  ProfileText,
  Role,
  Avatar,
} from "./styles";

function Header() {
  const language = useAppSelector((state) => state.settings.language);
  const text = dictionary[language];
  return (
    <Container>
      <Actions>
        <Menu size={20} />
        <Bell size={20} />
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

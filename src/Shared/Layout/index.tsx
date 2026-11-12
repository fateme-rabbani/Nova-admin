import type { ReactNode } from "react";
import {
  Moon,
  UserRound,
  House,
  Package,
  Users,
  Settings,
  Sun,
  Languages,
} from "lucide-react";
import {
  Container,
  Sidebar,
  Logo,
  Workspace,
  Content,
  Navigation,
  MenuLink,
  SidebarFooter,
  Controls,
  ControlButton,
  SidebarProfile,
  ProfileIcon,
  ThemeControl,
} from "./styles";

import logoDark from "../../assets/Icons/logo-dark.svg";
import { routes } from "../../Routes/routes";
import { dictionary } from "../../Dictionary";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  toggleLanguage,
  toggleTheme,
} from "../../Redux/settings/settingsSlice";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const dispatch = useAppDispatch();
  const { language, darkMode } = useAppSelector((state) => state.settings);

  const text = dictionary[language];
  return (
    <Container>
      <Sidebar>
        <Logo>
          <img src={logoDark} alt="NOVA" />
        </Logo>
        <Navigation>
          <MenuLink to={routes.dashboard}>
            <House size={20} />
            {text.navigation.dashboard}
          </MenuLink>

          <MenuLink to={routes.products}>
            <Package size={20} />
            {text.navigation.products}
          </MenuLink>

          <MenuLink to={routes.users}>
            <Users size={20} />
            {text.navigation.users}
          </MenuLink>

          <MenuLink to={routes.settings}>
            <Settings size={20} />
            {text.navigation.settings}
          </MenuLink>
        </Navigation>
        <SidebarFooter>
          <Controls>
            <ThemeControl onClick={() => dispatch(toggleTheme())}>
              <Sun size={18} className={!darkMode ? "active" : ""} />
              <Moon size={18} className={darkMode ? "active" : ""} />
            </ThemeControl>
            <ControlButton onClick={() => dispatch(toggleLanguage())}>
              <Languages size={18} />
              <span>{text.sidebar.currentLanguage}</span>
            </ControlButton>
          </Controls>

          <SidebarProfile>
            <ProfileIcon>
              <UserRound size={20} />
            </ProfileIcon>
            <span>{text.header.role}</span>
          </SidebarProfile>
        </SidebarFooter>
      </Sidebar>

      <Workspace>
        <Header />
        <Content>{children}</Content>
      </Workspace>
    </Container>
  );
}

export default Layout;

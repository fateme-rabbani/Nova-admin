import { NavLink } from "react-router";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  direction: ltr;
`;

export const Sidebar = styled.aside`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 16px;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.primary800};
  color: ${({ theme }) => theme.colors.white};
  direction: var(--content-direction);
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  img {
    display: block;
    width: 100px;
    height: auto;
  }
`;

export const Workspace = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  flex: 1;
  padding: 32px;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 12px 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  gap: 12px;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary50};
    color: ${({ theme }) => theme.colors.primary800};
  }

  &.active {
    background: ${({ theme }) => theme.colors.info500};
    color: ${({ theme }) => theme.colors.primary800};
  }
`;

export const SidebarFooter = styled.div`
  margin-top: auto;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: ltr;
`;

export const ControlButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 40px;
  min-height: 40px;
  padding: 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  cursor: pointer;
`;

export const ThemeControl = styled(ControlButton)`
  gap: 12px;
  margin-left: -16px;
  padding: 8px 24px 8px 14px;
  border-radius: 0 24px 24px 0;
  background: ${({ theme }) => `${theme.colors.primary50}1a`};

  svg {
    opacity: 0.45;
  }

  svg.active {
    opacity: 1;
    color: ${({ theme }) => theme.colors.secondary500};
  }
`;

export const SidebarProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  font-size: 14px;
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary50};
  color: ${({ theme }) => theme.colors.primary800};
`;

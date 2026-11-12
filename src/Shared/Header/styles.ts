import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: ${({ theme }) => theme.colors.contentBackground};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  direction: ltr;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ProfileText = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  direction: var(--content-direction);
`;

export const Role = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary50};
  color: ${({ theme }) => theme.colors.primary800};
`;

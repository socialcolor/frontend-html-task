import styled from "styled-components";

export const SideNav = styled.div`
  border: 1px solid red;
  position: relative;
  width: ${props => (props.theme.isSidebarOpened ? "200px" : "60px")};
  height: calc(100vh - 40px);
  margin-top: 20px;
  margin-left: 20px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  color: ${props => props.theme.colors[props.theme.currentTheme].colorTextDefault};
  background-color: ${props => props.theme.colors[props.theme.currentTheme].colorSidebarBackgroundDefault};
  border: ${props => `2px solid ${props.theme.colors[props.theme.currentTheme].colorButtonBackgroundActive}`};
  border-radius: 15px;
  outline: ${props => `2px solid ${props.theme.colors[props.theme.currentTheme].colorSidebarBackgroundDefault}`};
  transition:
    width 400ms ease-out,
    all 350ms ease-out;
`;

export const LogoWrap = styled.div`
  margin-top: 20px;
  margin-left: ${props => (props.theme.isSidebarOpened ? "25px" : "10px")};
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition: margin-left 300ms ease-out;
`;

export const Logo = styled.img`
  width: 35px;
  height: 35px;
  margin-right: ${props => (props.theme.isSidebarOpened ? "5px" : "0")};
  transition: margin 350ms ease-out;
`;

export const LogoText = styled.span`
  width: ${props => (props.theme.isSidebarOpened ? "100px" : "0px")};
  padding-top: 3px;
  font-size: 18px;
  font-weight: 500;
  overflow: hidden;
  opacity: ${props => (props.theme.isSidebarOpened ? "1" : "0")};
  color: ${props => props.theme.colors[props.theme.currentTheme].colorTextLogoDefault};
  transition:
    opacity 300ms ease-out,
    350ms ease-out;
`;

export const Arrow = styled.div`
  position: absolute;
  z-index: 100;
  top: 72px;
  right: ${props => (props.theme.isSidebarOpened ? "-15px" : "-50px")};
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  background-color: ${props =>
    props.theme.isSidebarOpened
      ? props.theme.colors[props.theme.currentTheme].colorButtonBackgroundActive
      : props.theme.colors[props.theme.currentTheme].colorSidebarBackgroundDefault};
  border-radius: 50%;
  cursor: pointer;
  transition:
    right 300ms ease-out,
    background-color 350ms ease-out;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-top: 20px;
  padding: 0;
  overflow: hidden;
`;

export const MenuListBottom = styled(MenuList)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 20px;
`;

export const MenuItem = styled.li`
  width: 100%;
`;

export const MenuButton = styled.button`
  min-width: ${props => (props.theme.isSidebarOpened ? "150px" : "30px")};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  background-color: ${props => props.theme.colors[props.theme.currentTheme].colorButtonBackgroundDefault};
  border: none;
  border-radius: 10px;
  outline: none;
  color: inherit;
  text-align: left;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 10px;
  padding-left: 10px;
  margin: 0;
  margin-left: ${props => (props.theme.isSidebarOpened ? "25px" : "10px")};
  margin-right: 25px;
  margin-bottom: 20px;
  font-size: 16px;
  transition:
    min-width 300ms ease-out,
    margin 250ms ease-out,
    all 350ms ease-out;
  overflow: hidden;
  white-space: nowrap;

  svg {
    transition: margin 300ms linear;
  }

  &:hover {
    color: ${props => props.theme.colors[props.theme.currentTheme].colorTextActive};
    background-color: ${props => props.theme.colors[props.theme.currentTheme].colorSidebarBackgroundHover};
  }
  &:active {
    color: ${props => props.theme.colors[props.theme.currentTheme].colorTextActive};
    background-color: ${props => props.theme.colors[props.theme.currentTheme].colorButtonBackgroundActive};
  }

  @media screen and (min-width: 320px) and ( max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ButtonText = styled.span`
  width: ${props => (props.theme.isSidebarOpened ? "100px" : "0px")};
  opacity: ${props => (props.theme.isSidebarOpened ? "1" : "0")};
  padding-left: ${props => (props.theme.isSidebarOpened ? "15px" : "0px")};
  transition:
    opacity 300ms ease-out,
    width 450ms ease-out,
    padding-left 400ms ease-out,
    all 350ms ease-out;

  &:hover {
    color: ${props => props.theme.colors[props.theme.currentTheme].colorTextLHover};
  }

  &:active {
    color: ${props => props.theme.colors[props.theme.currentTheme].colorTextLActive};
  }
`;

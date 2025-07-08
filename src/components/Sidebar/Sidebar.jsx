import { useState } from "react";
import * as S from "./style.js";
import { routes, bottomRoutes } from "../../const";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../../theme/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";

export default function Sidebar() {
  const [isOpened, setIsOpened] = useState(true);
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleSidebar = () => setIsOpened(isOpen => !isOpen);
  
  const themeToggl = () => {
    const toggl = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(toggl);
  };

  const goToRoute = path => console.log(`going to "${path}"`);

  return (
    <ThemeProvider theme={{ ...theme, currentTheme, isSidebarOpened: isOpened }}>
      <GlobalStyle />
      <S.SideNav>
        <S.LogoWrap>
          <S.Logo src={logo} alt="TensorFlow logo" width={35} height={35} />
          <S.LogoText>TensorFlow</S.LogoText>
          <S.Arrow onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
          </S.Arrow>
        </S.LogoWrap>
        <S.MenuList>
          {routes.map(route => (
            <S.MenuItem key={route.title}>
              <S.MenuButton
                onClick={() => {
                  goToRoute(route.path);
                }}
              >
                <FontAwesomeIcon icon={route.icon} />
                <S.ButtonText>{route.title}</S.ButtonText>
              </S.MenuButton>
            </S.MenuItem>
          ))}
        </S.MenuList>
        <S.MenuListBottom>
          <S.MenuItem>
          <S.MenuButton onClick={themeToggl}>
            <FontAwesomeIcon icon="fa-solid fa-sun" /> <S.ButtonText>Theme</S.ButtonText>
          </S.MenuButton>
          </S.MenuItem>
          {bottomRoutes.map(route => (
            <S.MenuItem key={route.title}>
              <S.MenuButton
                onClick={(e) => {
                  e.preventDefault();
                  goToRoute(route.path);
                }}
              >
                <FontAwesomeIcon icon={route.icon} />
                <S.ButtonText>{route.title}</S.ButtonText>
              </S.MenuButton>
            </S.MenuItem>
          ))}
        </S.MenuListBottom>
      </S.SideNav>
    </ThemeProvider>
  );
}


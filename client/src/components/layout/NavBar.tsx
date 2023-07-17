import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CardMedia, useScrollTrigger } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import styled from "styled-components";

import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { textColorActions } from "../../redux/slices/textColor";
import crest from "../../assets/family_crest.png";

const StyledCartBadge = styled(Badge)`
  & .MuiBadge-badge {
    position: absolute;
    top: 29px;
    padding: "0 4px";
    background: black;
    color: white;
    margin: 0;
  }
`;

export default function NavBar() {
  const isLogin = useSelector((state: RootState) => state.userLogin.isLogin);

  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const dispatch = useDispatch();

  const handleColorChange = () => {
    dispatch(textColorActions.updateTextColor("black"));
  };

  const handleDefaultColor = () => {
    dispatch(textColorActions.clearTextFormatting());
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsNavBarVisible(isScrollingUp || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, trigger]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        position="fixed"
        // color="transparent"

        sx={{
          backgroundColor: "#fffef1",
          boxShadow: "none",
          padding: "24px 40px",
          transform: isNavBarVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              "&:hover": { backgroundColor: "transparent" },
              color: "black",
            }}
          >
            {/*textColor*/}
            <Box component="div">
              <svg
                width="35"
                height="35"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 42"
              >
                <path
                  d="M47.79,4.34H2.21A2.19,2.19,0,0,1,0,2.17,2.19,2.19,0,0,1,2.21,0H47.79A2.19,2.19,0,0,1,50,2.17,2.19,2.19,0,0,1,47.79,4.34Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M37.5,23.17H2.21a2.17,2.17,0,1,1,0-4.34H37.5a2.17,2.17,0,1,1,0,4.34Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M25.74,42H2.21a2.17,2.17,0,1,1,0-4.34H25.74a2.17,2.17,0,1,1,0,4.34Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Box>
          </IconButton>
          <Link
            style={{ textDecoration: "none", color: "/" ? "black" : "black" }}
            to="/products"
            onClick={handleDefaultColor}
          >
            <Typography
              variant="h3"
              component="div"
              fontSize="32px"
              sx={{
                color: "black",
                ml: 2,
              }}
            >
              shop
            </Typography>
          </Link>
          <Box component="div" sx={{ flexGrow: 1 }}></Box>
          <Link
            style={{ textDecoration: "none", color: "/" ? "black" : "black" }}
            to="/"
            onClick={handleDefaultColor}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <Box
                component="div"
                maxWidth="100px"
                sx={{
                  margin: "0 auto",
                }}
              >
                <CardMedia
                  component="img"
                  height="85px"
                  image={crest}
                  alt="crest-image"
                />
              </Box>
              <Typography
                variant="h1"
                component="div"
                fontFamily="playfair display"
                fontSize="1.3rem"
                fontWeight="700"
                sx={{
                  flexGrow: 1,
                  color: "black",
                  mt: 1,
                }}
              >
                WILLIAM & HARRISON
              </Typography>
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon fontSize="large" sx={{ color: "black" }} />
          </IconButton>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/cart"
            onClick={handleColorChange}
          >
            <IconButton color="inherit" aria-label="cart">
              <StyledCartBadge color="secondary" badgeContent={0}>
                {/*cartItemCount*/}
                <ShoppingBagOutlinedIcon fontSize="large" />
              </StyledCartBadge>
            </IconButton>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={isLogin ? "/account" : "/account/login"}
            onClick={handleColorChange}
          >
            <Box component="div">
              <IconButton color="inherit" aria-label="wishlist">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 19 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.29229 11.67C9.9989 11.6799 10.7001 11.5455 11.353 11.275C12.0059 11.0046 12.5967 10.6038 13.0894 10.0972C13.5959 9.6046 13.9966 9.01386 14.267 8.36113C14.5374 7.70839 14.6719 7.00736 14.6622 6.30089C14.6719 5.59442 14.5374 4.8934 14.267 4.24066C13.9966 3.58792 13.5959 2.99719 13.0894 2.50456C12.5968 1.9977 12.006 1.59666 11.3531 1.32596C10.7003 1.05526 9.99901 0.920584 9.29229 0.930181C8.58582 0.92044 7.88478 1.05489 7.23203 1.32532C6.57929 1.59574 5.98856 1.99646 5.49596 2.50297C4.98931 2.9955 4.58845 3.5862 4.31788 4.23895C4.04732 4.89169 3.91274 5.59277 3.92238 6.2993C3.91253 7.00591 4.04693 7.7071 4.31736 8.35999C4.58779 9.01288 4.98856 9.60374 5.49517 10.0964C5.98785 10.6031 6.57869 11.004 7.23156 11.2745C7.88444 11.5451 8.58564 11.6797 9.29229 11.67ZM6.41959 3.4266C6.79025 3.04034 7.2368 2.73493 7.73117 2.52957C8.22554 2.32421 8.75706 2.22333 9.29229 2.23328C9.82753 2.22338 10.359 2.32428 10.8534 2.52964C11.3478 2.735 11.7943 3.04038 12.165 3.4266C12.5512 3.79728 12.8566 4.24384 13.062 4.7382C13.2673 5.23257 13.3682 5.76407 13.3583 6.2993C13.3682 6.83453 13.2673 7.36603 13.062 7.8604C12.8566 8.35477 12.5512 8.80132 12.165 9.17201C11.7943 9.55826 11.3478 9.86367 10.8534 10.069C10.359 10.2744 9.82753 10.3753 9.29229 10.3653C8.75706 10.3752 8.22557 10.2743 7.7312 10.069C7.23683 9.86361 6.79028 9.55822 6.41959 9.17201C6.03333 8.80135 5.72793 8.3548 5.52256 7.86043C5.3172 7.36605 5.21633 6.83454 5.22627 6.2993C5.21633 5.76406 5.3172 5.23255 5.52256 4.73818C5.72793 4.2438 6.03333 3.79725 6.41959 3.4266Z"
                    fill="currentColor"
                    stroke="black"
                    stroke-width="0.70"
                  ></path>
                  <path
                    d="M18.6878 18.0718C18.6536 17.5993 18.5941 17.129 18.5096 16.6629C18.4252 16.1838 18.3093 15.7107 18.1628 15.2468C18.0147 14.7877 17.8196 14.3452 17.5804 13.9262C17.3457 13.5045 17.0509 13.1191 16.7053 12.7822C16.3405 12.4379 15.9123 12.1677 15.4444 11.9867C14.9309 11.7889 14.3845 11.6901 13.8342 11.6955C13.5123 11.7294 13.2077 11.8582 12.9591 12.0655C12.6974 12.2357 12.3919 12.433 12.0498 12.6518C11.6805 12.8723 11.2853 13.0463 10.8732 13.1697C9.93909 13.4797 8.92984 13.4797 7.99573 13.1697C7.58233 13.0475 7.18575 12.8743 6.81514 12.6542C6.47703 12.4378 6.17075 12.2405 5.90504 12.0678C5.65647 11.8605 5.35187 11.7317 5.02994 11.6979C4.47958 11.6926 3.93321 11.7916 3.41976 11.9899C2.95155 12.1707 2.52301 12.4409 2.15803 12.7854C1.81244 13.1223 1.51766 13.5077 1.28293 13.9294C1.0452 14.3475 0.851121 14.789 0.703779 15.2468C0.55759 15.7108 0.441989 16.1838 0.357718 16.6629C0.272226 17.1289 0.211942 17.5993 0.177129 18.0718C0.147694 18.4982 0.132579 18.9413 0.132579 19.3884C0.109494 19.9063 0.195431 20.4232 0.384825 20.9057C0.574219 21.3883 0.862847 21.8256 1.23202 22.1895C2.00283 22.8946 3.02116 23.2664 4.06495 23.2237H14.8C15.8443 23.2668 16.8633 22.895 17.6345 22.1895C18.0037 21.8257 18.2924 21.3883 18.4818 20.9058C18.6712 20.4232 18.7571 19.9063 18.734 19.3884C18.7324 18.9397 18.7173 18.4966 18.6878 18.0718ZM16.7324 21.2428C16.4705 21.4768 16.165 21.6567 15.8334 21.7722C15.5017 21.8877 15.1506 21.9365 14.8 21.9159H4.06495C3.7144 21.9365 3.36322 21.8877 3.03159 21.7722C2.69997 21.6567 2.39445 21.4768 2.13257 21.2428C1.89262 21.0002 1.70675 20.7095 1.58718 20.3899C1.46762 20.0703 1.41707 19.729 1.43886 19.3884C1.43886 18.9708 1.45238 18.5579 1.48023 18.1625C1.51203 17.7369 1.56673 17.3133 1.64411 16.8936C1.71826 16.4711 1.82004 16.0538 1.9488 15.6446C2.07052 15.2711 2.23048 14.9112 2.42613 14.5706C2.59924 14.2591 2.81655 13.9742 3.07132 13.725C3.31465 13.4983 3.5997 13.3211 3.91061 13.2031C4.23921 13.0771 4.58737 13.0098 4.93925 13.0042C4.98539 13.0289 5.06654 13.075 5.1986 13.1633C5.46749 13.3383 5.77696 13.538 6.11904 13.7568C6.58171 14.0375 7.07776 14.259 7.59557 14.4163C8.79086 14.8107 10.0812 14.8107 11.2765 14.4163C11.7946 14.2588 12.2909 14.0369 12.7539 13.756C13.1039 13.5324 13.4046 13.3383 13.6735 13.1633C13.8056 13.0774 13.8867 13.0304 13.9329 13.0042C14.285 13.0097 14.6334 13.077 14.9623 13.2031C15.2729 13.3212 15.5576 13.4985 15.8008 13.725C16.0557 13.9741 16.273 14.259 16.446 14.5706C16.6418 14.9112 16.8017 15.2711 16.9233 15.6446C17.0521 16.0538 17.1539 16.471 17.228 16.8936C17.3051 17.3147 17.3595 17.7396 17.3911 18.1665C17.4189 18.5642 17.4325 18.9732 17.4333 19.3924C17.4536 19.7328 17.4017 20.0737 17.2809 20.3926C17.1601 20.7116 16.9731 21.0013 16.7324 21.2428Z"
                    fill="currentColor"
                    stroke="black"
                    stroke-width="0.70"
                  ></path>
                </svg>
              </IconButton>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

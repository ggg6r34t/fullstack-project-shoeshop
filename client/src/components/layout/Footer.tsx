import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  ListItem,
  List,
  Container,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styled from "styled-components";

import { theme } from "../theme/theme";

const StyledTextField = styled(TextField)`
  & .MuiFormLabel-root {
    color: #04460675;
  }
  & .MuiInputLabel-root {
    color: #04460675 !important;
  }

  & .MuiInputBase-root {
    color: #044606ad;
    margin-bottom: 16px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: 2px solid;
    border-radius: 20px;
    border-color: #04460675 !important;
  }

  & .Mui-focused fieldset {
    border-color: #04460675 !important;
  }
`;

const IconButtonStyled = styled(IconButton)`
  margin-right: 16px;
  &:hover {
    color: #04460675;
    background-color: transparent;
  }
`;

const SocialIconsContainer = styled(Grid)`
  margin-bottom: 16;
`;

const offersLinks = [
  {
    title: "spring-summer collection",
    link: "/pages/spring-summer-collection",
  },
  { title: "capsule collection", link: "/pages/capsule-collection" },
  { title: "men's shoes", link: "/pages/men's-shoes" },
  { title: "bags", link: "/pages/bags" },
  { title: "shoe care", link: "/pages/shoe-care" },
  { title: "accessories", link: "/pages/accessories" },
  { title: "gift card", link: "/pages/gift-card" },
  { title: "outlet", link: "/pages/outlet" },
  { title: "second walk", link: "/pages/second-walk" },
  { title: "sale", link: "/pages/sale" },
];

const aboutLinks = [
  { title: "history", link: "/pages/history" },
  { title: "values", link: "/pages/values" },
  { title: "sustainability", link: "/pages/sustainability" },
  { title: "magazine", link: "/pages/magazine" },
  { title: "jobs", link: "/pages/jobs" },
];

const otherLinks = [
  { title: "terms & conditions", link: "/pages/terms-of-sale" },
  { title: "privacy policy", link: "/pages/privacy-policy" },
  { title: "legal information", link: "/pages/legal notice" },
  { title: "right of withdrawal", link: "/pages/refund policy" },
  { title: "privacy settings", link: "/pages/privacy-settings" },
];

function Footer() {
  return (
    <footer>
      <Box
        component="div"
        sx={{
          maxWidth: "100%",
          overflow: "hidden",
          background: "#f3f3f3",
          padding: "40px 60px 0 60px",
          marginTop: "80px",
        }}
      >
        <Container maxWidth="xl">
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                  <List>
                    <Box component="div">
                      <Typography
                        variant="h5"
                        color="#044606"
                        fontFamily="Noto Serif"
                        textTransform="lowercase"
                      >
                        about us
                      </Typography>
                    </Box>
                    <ListItem>
                      <List>
                        {aboutLinks.map((linkItem, index) => (
                          <ListItem key={index}>
                            <Link
                              to={linkItem.link}
                              style={{ textDecoration: "none" }}
                            >
                              <Typography
                                color="#044606"
                                textTransform="lowercase"
                              >
                                {linkItem.title}
                              </Typography>
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <List>
                    <Box component="div">
                      <Typography
                        variant="h5"
                        color="#044606"
                        fontFamily="Noto Serif"
                        textTransform="lowercase"
                      >
                        offers
                      </Typography>
                    </Box>
                    <ListItem>
                      <List>
                        {offersLinks.map((linkItem, index) => (
                          <ListItem key={index}>
                            <Link
                              to={linkItem.link}
                              style={{ textDecoration: "none" }}
                            >
                              <Typography
                                color="#044606"
                                textTransform="lowercase"
                              >
                                {linkItem.title}
                              </Typography>
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Box component="div">
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {otherLinks.map((linkItem, index) => (
                    <ListItem key={index}>
                      <Link
                        to={linkItem.link}
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <Typography color="#044606" textTransform="lowercase">
                          {linkItem.title}
                        </Typography>
                      </Link>
                    </ListItem>
                  ))}
                </List>
                <SocialIconsContainer container alignItems="center">
                  <Grid item>
                    <Link to="https://www.facebook.com/" target="_blank">
                      <IconButtonStyled
                        sx={{ color: "#044606" }}
                        rel="noopener"
                        aria-label="Facebook"
                      >
                        <FacebookIcon />
                      </IconButtonStyled>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="https://twitter.com/" target="_blank">
                      <IconButtonStyled
                        sx={{ color: "#044606" }}
                        rel="noopener"
                        aria-label="Twitter"
                      >
                        <TwitterIcon />
                      </IconButtonStyled>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="https://instagram.com/" target="_blank">
                      <IconButtonStyled
                        sx={{ color: "#044606" }}
                        rel="noopener"
                        aria-label="Instagram"
                      >
                        <InstagramIcon />
                      </IconButtonStyled>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="https://youtube.com/" target="_blank">
                      <IconButtonStyled
                        sx={{ color: "#044606" }}
                        rel="noopener"
                        aria-label="YouTube"
                      >
                        <YouTubeIcon />
                      </IconButtonStyled>
                    </Link>
                  </Grid>
                </SocialIconsContainer>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box component="div">
                <Typography
                  variant="h3"
                  color="#044606"
                  fontFamily="Noto Serif"
                  textTransform="lowercase"
                  mb={4}
                >
                  contact
                </Typography>
              </Box>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={12}>
                    <StyledTextField
                      required
                      fullWidth
                      label="Name"
                      variant="outlined"
                    />
                    <StyledTextField
                      required
                      fullWidth
                      label="Email"
                      variant="outlined"
                    />
                    <StyledTextField
                      required
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: "#044606",
                        minHeight: "60px",
                        maxHeight: "60px",
                        minWidth: "125px",
                        borderRadius: "65px",
                        mt: "10px",
                        "&:hover": {
                          backgroundColor: "#044606",
                          border: "solid",
                          borderSize: "1px",
                          borderColor: "#fffef1",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          textTransform: "lowercase",
                          fontFamily: theme.typography.h6,
                        }}
                      >
                        send
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;

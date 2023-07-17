import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import styled from "styled-components";

import backgroundImage from "../../assets/AW22_-_Lewis_41___Harvey_9web--2.jpg";

const CategoryCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  marginRight: theme.spacing(8),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "140px",
  height: "92px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ItemTopPicks = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: "black",
  width: "450px",
  height: "500px",
}));

function LandingPage() {
  return (
    <div>
      <section>
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            padding: 0,
          }}
        >
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <CardMedia
              component="img"
              width="100%"
              height="100%"
              image={backgroundImage}
              alt="shoes"
              sx={{
                objectFit: "cover",
                zIndex: 1,
              }}
            />
            <Box
              component="div"
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                background: "#00000026",
                zIndex: 2,
              }}
            ></Box>
          </Box>
          <Box
            component="div"
            sx={{
              color: "#fff",
              textAlign: "center",
              position: "absolute",
              left: "545px",
              bottom: "225px",
              margin: "auto",
              zIndex: 3,
            }}
          >
            <Box component="div">
              <Typography
                variant="h1"
                component="h1"
                fontFamily="playfair display"
                fontSize="10rem"
                fontWeight="700"
              >
                Men's shoes
              </Typography>
            </Box>
            <Box component="div">
              <Typography
                variant="h6"
                fontFamily="Roboto"
                fontSize="1.6rem"
                fontWeight="300"
                sx={{ mt: 2 }}
              >
                Men's shoes in classic or more casual and original style,
                there's a pair for each taste
              </Typography>
            </Box>
          </Box>
        </Paper>
      </section>
      <section>
        <Box
          sx={{ backgroundColor: "#0446060d", padding: "66px", flexGrow: 1 }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={1}
                key={index}
                sx={{ minWidth: "185px" }}
              >
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <CategoryCard>
                    <Typography variant="h6" fontWeight="700" fontSize="1.5rem">
                      ankle boots
                    </Typography>
                  </CategoryCard>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>
      <section style={{ marginTop: "65px" }}>
        <Container maxWidth="xl">
          <Box component="div">
            <Typography
              variant="h1"
              component="h1"
              fontFamily="Noto Serif"
              fontWeight="700"
              color="#044606"
              sx={{ position: "relative", pt: 8, mb: 4 }}
            >
              our top picks
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              {Array.from(Array(3)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <ItemTopPicks>xs=2</ItemTopPicks>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </section>
    </div>
  );
}

export default LandingPage;

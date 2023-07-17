import { Box, Container, Paper, Stack, Typography } from "@mui/material";

import banner from "../../../assets/background-faq_1200x.png";

function UserInfoPage() {
  return (
    <div style={{ marginTop: "165px" }}>
      <Container
        sx={{
          position: "relative",
          padding: "0 18px",
          margin: "60px 184px 80px",
        }}
      >
        <Box sx={{}}>
          <Paper
            sx={{
              display: "flex",
              maxWidth: "80vw",
              padding: "48px 48px",
            }}
          >
            <Stack>
              <Box component="div">
                <Typography
                  variant="h1"
                  component="h1"
                  color="#044606"
                  fontFamily="Noto Serif"
                  fontSize="4rem"
                  textTransform="lowercase"
                >
                  Orders
                </Typography>
              </Box>
              <Box component="div">
                <Typography
                  color="#044606"
                  sx={{
                    mt: "16px",
                  }}
                >
                  You haven't placed any order yet.
                </Typography>
              </Box>
            </Stack>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "flex-start",
              backgroundImage: `url(${banner})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backdropFilter: "blur(10px)",
              maxWidth: "80vw",
              minHeight: "120px",
              p: "20px 20px",
              mt: 2,
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction="row">
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h1"
                    component="h1"
                    color="#fff"
                    fontSize="67px"
                    fontWeight="700"
                    textTransform="lowercase"
                  >
                    faq
                  </Typography>
                </Box>

                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontFamily="sans-serif"
                    fontWeight="300"
                    color="#fff"
                    sx={{
                      ml: "8px",
                    }}
                  >
                    about us & delivery
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default UserInfoPage;

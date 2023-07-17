import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
} from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          maxWidth: "100%",
          overflow: "hidden",
          background: "#AAC8A7",
          // background: "#0f4a429c",
          marginTop: "80px",
        }}
      >
        <Container maxWidth="xl" sx={{ paddingTop: "40px" }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Company Name</Typography>
              <Typography variant="body2">Address, City, Country</Typography>
              <Typography variant="body2">Phone: 123-456-7890</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Send
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

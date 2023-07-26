import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {
  Box,
  Container,
  CircularProgress,
  Grid,
  Typography,
  ListItem,
  List,
  ListItemText,
  IconButton,
  Paper,
  Stack,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductDetails } from "../../redux/thunk/products";
import { cartActions } from "../../redux/slices/cart";
import { Product } from "../../type/types";
import { theme } from "../theme/theme";

export default function ProductItem() {
  const productDetail = useSelector(
    (state: RootState) => state.productDetail.productDetail
  );
  const selectedSize = useSelector(
    (state: RootState) => state.cart.selectedSize
  );
  const isLoading = useSelector(
    (state: RootState) => state.productDetail.isLoading
  );

  const fetchDispatch = useDispatch<AppDispatch>();
  const functionDispatch = useDispatch();

  const handleSizeSelect = (shoeId: string, size: string) => {
    functionDispatch(cartActions.setSelectedSize({ shoeId, size }));
  };

  function addToCart(cartProd: Product) {
    functionDispatch(cartActions.addCartProduct(cartProd));
    functionDispatch(cartActions.getTotalQuantity());
  }

  const param = useParams();
  const productId = param.id as string | undefined;

  useEffect(() => {
    if (productId) {
      fetchDispatch(fetchProductDetails(productId));
    }
  }, [fetchDispatch, productId, param]);

  if (!productDetail) {
    return (
      <Box component="div">
        <Typography variant="h1" fontSize="4rem">
          no data
        </Typography>
      </Box>
    );
  } else if (isLoading) {
    return (
      <Container sx={{ mt: 15, minHeight: 950 }}>
        <Box
          sx={{
            position: "relative",
            top: "250px",
            left: "400px",
            display: "inline-flex",
          }}
        >
          <CircularProgress size={300} />
        </Box>
      </Container>
    );
  }

  // #044606 - emerald green
  return (
    <div>
      <Container maxWidth="xl" sx={{ mt: 25, mb: 25 }}>
        <Grid container spacing={1} justifyContent={"left"}>
          <Grid item xs={2} sm={4} md={8} key={productDetail._id}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {productDetail.additionalImage.map((productImg, index) => (
                <Grid item xs={2} sm={4} md={6} key={index}>
                  <Card
                    elevation={0}
                    sx={{
                      backgroundColor: "#0446060f",
                      height: 400,
                      minWidth: 420,
                      borderRadius: 11,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: 410,
                        width: 425,
                        backgroundRepeat: "no-repeat",
                        display: "block",
                        margin: "0 auto",
                      }}
                      image={productImg}
                      title={productDetail.title}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Box sx={{ paddingLeft: "40px" }}>
              <Grid container spacing={2}>
                <Grid item xs={4} md={12} sx={{ margin: "45px 0px 15px" }}>
                  <Typography
                    variant="h1"
                    color="#044606"
                    fontFamily="Noto Serif"
                    fontSize="4rem"
                  >
                    {productDetail.title}
                  </Typography>
                </Grid>
                <Grid item xs={4} md={12}>
                  <Typography
                    variant="body1"
                    color="#044606"
                    fontSize="1.5rem"
                    fontWeight="600"
                  >
                    {productDetail.price}0 €
                  </Typography>
                  <Typography variant="body2" color="#044606">
                    Tax included.
                  </Typography>
                </Grid>
              </Grid>
              <Box component="div" sx={{ margin: "15px 0 20px" }}>
                {productDetail && productDetail.productInfo ? (
                  <List>
                    {Object.entries(productDetail.productInfo).map(
                      ([key, value]) => {
                        if (value === "null") return null;

                        return (
                          <ListItem
                            key={key}
                            sx={{ padding: "0 16px", paddingLeft: "0" }}
                          >
                            <ListItemText
                              primary={`+ ${key.replace("_", " ")}: ${value}`}
                              sx={{ color: "#044606" }}
                            />
                          </ListItem>
                        );
                      }
                    )}
                  </List>
                ) : (
                  <p>Loading product details...</p>
                )}
              </Box>
              <Box component="div" maxWidth="523" mb={4}>
                <Grid container spacing={2}>
                  <Grid item xs={4} md={12} sx={{ paddingTop: "0" }}>
                    <Typography variant="h1" color="#044606" fontSize="1.2rem">
                      sizes
                    </Typography>
                  </Grid>
                  {productDetail.sizes.map((size) => (
                    <Grid
                      item
                      xs={4}
                      md={1}
                      sx={{ "&.MuiGrid-root": { maxWidth: "55px" } }}
                    >
                      <Paper
                        sx={{
                          width: "47px",
                          height: "38px",
                          borderRadius: "12.5px",
                          border:
                            selectedSize === size
                              ? "2px solid #044606"
                              : "none",
                        }}
                      >
                        <IconButton
                          sx={{
                            width: "47px",
                            height: "38px",
                            borderRadius: "12.5px",
                          }}
                          onClick={() =>
                            handleSizeSelect(productDetail._id, size)
                          }
                        >
                          <Typography
                            variant="body2"
                            color="#044606"
                            fontSize="1rem"
                            fontWeight="600"
                          >
                            {size}
                          </Typography>
                        </IconButton>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box component="div" sx={{ minHeight: "78px" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#044606",
                    minHeight: "60px",
                    minWidth: "463px",
                    borderRadius: "65px",
                    padding: "9px 30px 11px",
                    "&:hover": {
                      backgroundColor: "#044606",
                      border: "solid",
                      borderSize: "1px",
                      borderColor: "#fffef1",
                    },
                  }}
                  onClick={() => addToCart(productDetail)}
                >
                  <Typography
                    sx={{
                      textTransform: "lowercase",
                      fontFamily: theme.typography.h6,
                    }}
                  >
                    add to cart
                  </Typography>
                </Button>
              </Box>
              <Box component="div" sx={{ position: "relative" }}>
                <Accordion elevation={0} sx={{ position: "absolute" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Stack
                      direction="row"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M8 10a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6z"
                          fill-rule="#044606"
                        ></path>
                        <path
                          d="M15.79 8.62L15 8l.79-.62a1 1 0 010 1.24zM1 8l-.79.62.02.02a5.56 5.56 0 00.15.18 15.16 15.16 0 002.05 1.96C3.77 11.84 5.73 13 8 13c2.26 0 4.23-1.16 5.57-2.22a15.17 15.17 0 002.2-2.14l.01-.02L15 8l.79-.62-.02-.02a6.17 6.17 0 00-.6-.67c-.37-.4-.92-.94-1.6-1.47C12.23 4.16 10.27 3 8 3 5.73 3 3.77 4.16 2.43 5.22a15.16 15.16 0 00-2.2 2.14l-.01.02L1 8zm0 0l-.79.62a1 1 0 010-1.24L1 8zm0 0s3.13-4 7-4 7 4 7 4-3.13 4-7 4-7-4-7-4z"
                          fill-rule="#044606"
                        ></path>
                      </svg>
                      <Typography
                        variant="h1"
                        color="#044606"
                        fontSize="1.2rem"
                        ml={1}
                      >
                        product details
                      </Typography>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="#044606">
                      {productDetail.product_details}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

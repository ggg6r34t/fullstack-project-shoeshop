import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import styled from "styled-components";

import { AppDispatch, RootState } from "../../redux/store";
import { cartActions } from "../../redux/slices/cart";
import { Product } from "../../type/types";
import { fetchProductData } from "../../redux/thunk/products";
import backgroundImage from "../../assets/AW22_-_Lewis_41___Harvey_9web--2.jpg";

const AddToCartButton = styled(Button)`
  font-weight: 500 !important;
  background-color: #f3f3f3 !important;
  border-radius: 50px !important;
  border-color: #3d3c42 !important;

  position: absolute;
  top: -225px;
  left: 175px;
  visibility: hidden;
  z-index: 70px;
  &&:hover {
    background-color: #f3f3f3;
    border: 2px solid #044606;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
`;
const CardContainer = styled(Box)`
  position: relative;

  &:hover ${AddToCartButton} {
    visibility: visible;
  }
`;

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

function LandingPage() {
  const products = useSelector((state: RootState) => state.products.products);

  const dispatch = useDispatch();
  const fetchDispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchDispatch(fetchProductData());
  }, [fetchDispatch]);

  function addToCart(cartProd: Product) {
    dispatch(cartActions.addCartProduct(cartProd));
    dispatch(cartActions.getTotalQuantity());
  }

  const isDuplicateCategory = (
    product: Product,
    index: number,
    products: Product[]
  ) => {
    return products.findIndex((p) => p.category === product.category) !== index;
  };

  const uniqueCategory = products.filter(
    (product, index) => !isDuplicateCategory(product, index, products)
  );

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
            {/* {categoryLinks.map((category, index) => ( */}
            {uniqueCategory.map((product) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={1}
                key={product._id}
                sx={{ minWidth: "185px" }}
              >
                <Link
                  to={`products/category/${product.category}`}
                  style={{ textDecoration: "none" }}
                >
                  <CategoryCard>
                    <Typography
                      color="#044606"
                      fontFamily="Noto Serif"
                      fontSize="1.3rem"
                      textTransform="lowercase"
                    >
                      {product.category}
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
            <Grid container spacing={1} mt={8}>
              {products.slice(0, 3).map((product) => (
                <Grid item xs={2} sm={4} md={4} key={product._id}>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <CardContainer component="div" key={product._id}>
                      <Card elevation={0} sx={{ marginBottom: "20px" }}>
                        <Link to={`/products/${product._id}`}>
                          <Box
                            component="div"
                            sx={{
                              backgroundColor: "#0446060f",
                              borderRadius: "18px",
                            }}
                          >
                            <CardMedia
                              component="img"
                              sx={{
                                height: 405,
                                width: 404,
                                backgroundRepeat: "no-repeat",
                                margin: "0 auto",
                              }}
                              image={product.image}
                              title={product.title}
                            />
                          </Box>
                        </Link>
                        <CardContent>
                          <Box component="div" sx={{ marginTop: "13px" }}>
                            <Grid container>
                              <Grid item xs={8} md={12}>
                                <Typography
                                  variant="h5"
                                  component="div"
                                  color="#044606"
                                  fontSize="1.7rem"
                                  fontWeight="700"
                                  letterSpacing="0.06rem"
                                >
                                  {product.title}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Box>
                          <Box component="div" sx={{ marginTop: "13px" }}>
                            <Grid container>
                              <Grid item xs={8} md={12}>
                                <Typography
                                  variant="h4"
                                  color="#044606"
                                  fontSize="1.7rem"
                                  fontWeight="100"
                                  letterSpacing="0.1rem"
                                >
                                  {product.price} €
                                </Typography>
                              </Grid>
                              <Grid item xs={8} md={12}>
                                <Typography
                                  variant="h4"
                                  color="#044606"
                                  fontFamily="sans-serif"
                                  fontSize="1.7rem"
                                  fontWeight="100"
                                  letterSpacing="0.1rem"
                                  marginTop="10px"
                                >
                                  available in several sizes
                                  {/* {product.size} EUR */}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        </CardContent>
                        <AddToCartButton
                          variant="outlined"
                          onClick={() => addToCart(product)}
                        >
                          <Typography
                            variant="h4"
                            color="#044606"
                            fontSize="1.2rem"
                            fontWeight="500"
                            textTransform="lowercase"
                          >
                            add to bag
                          </Typography>
                        </AddToCartButton>
                      </Card>
                    </CardContainer>
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

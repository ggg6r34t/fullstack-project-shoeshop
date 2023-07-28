import React from "react";
import { Order } from "../../type/types";
import { ButtonBase, Grid, Paper, Stack, Typography } from "@mui/material";
import styled from "styled-components";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

type Prop = {
  orderItem: Order;
};

function ProductOrderList({ orderItem }: Prop) {
  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          minWidth: 425,
          // background: "#fffef1",
          flexGrow: 1,
          overflow: "hidden",
          marginLeft: "16px",
        }}
      >
        {orderItem.productList?.map((item) => (
          <Grid container spacing={2}>
            <Grid item p={2}>
              <ButtonBase
                sx={{
                  width: 85,
                  height: 85,
                  backgroundColor: "#0446060f",
                  border: "solid",
                  borderColor: "#04460675",
                  borderWidth: "0.5px",
                  borderRadius: "8px",
                }}
              >
                <Img src={item.image} alt={item.title} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container p={2}>
              <Grid item xs>
                <Stack direction="column">
                  <Typography
                    color="#044606"
                    fontWeight={"bold"}
                    variant="subtitle1"
                    component="div"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    color="#044606"
                    fontWeight={"bold"}
                    variant="subtitle1"
                    component="div"
                  >
                    {item.selectedSize}
                  </Typography>
                  <Typography
                    color="#044606"
                    fontWeight={"bold"}
                    variant="subtitle1"
                    component="div"
                  >
                    x{item.cartQuantity}
                  </Typography>
                </Stack>
              </Grid>

              <Grid
                display="flex"
                alignItems="center"
                justifyContent="center"
                marginRight="16px"
              >
                <Typography component="div" variant="subtitle1" color="#044606">
                  € {item.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Paper>
    </div>
  );
}

export default ProductOrderList;

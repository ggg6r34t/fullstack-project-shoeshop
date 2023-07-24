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
          maxWidth: 355,
          background: "#fffef1",
          flexGrow: 1,
          overflow: "hidden",
          marginBottom: "16px",
        }}
      >
        {orderItem.proudctList?.map((item) => (
          <Grid container spacing={2} mb="16px">
            <Grid item>
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
            <Grid item xs={12} sm container>
              <Grid item xs>
                <Stack direction="column">
                  <Typography
                    fontWeight={"bold"}
                    variant="subtitle1"
                    component="div"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    fontWeight={"bold"}
                    variant="subtitle1"
                    component="div"
                  >
                    {item.selectedSize}
                  </Typography>
                </Stack>
              </Grid>

              <Grid display="flex" alignItems="center" justifyContent="center">
                <Typography variant="subtitle1" component="div">
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

import axios from "axios";
import { AppDispatch } from "../store";
import { orderActions } from "../slices/order";
import { BASE_URL } from "../../api/api";

export function fetchOder(userId: string) {
  const orderUrl = `${BASE_URL}/orders/${userId}`;
  return async (dispatch: AppDispatch) => {
    const response = await axios(orderUrl);
    const order = await response.data;
    dispatch(orderActions.setOrder(order));
  };
}

/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispath = useDispatch();
  return (
    <Button type="small" onClick={() => dispath(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}
export default DeleteItem;

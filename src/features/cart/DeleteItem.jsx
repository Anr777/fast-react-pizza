import { useDispatch } from "react-redux"
import { Button } from "../../ui/Button"
import { deleteItem } from "./cartSlice";


export const DeleteItem = ({ pizza }) => {
  const dispatch = useDispatch();
  pizza.Id
  
  const onClick = ( id ) => {
    dispatch( deleteItem( id ) );
  }

  return (
    <Button type='small' onClick={ () => onClick( pizza ) }>Delete</Button>
  )
}

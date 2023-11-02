import { useDispatch } from "react-redux"
import { Button } from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";


export const UpdateItemQuantity = ({ pizza, currentQuantity }) => {

  const dispatch = useDispatch();

  return (
    <div className='flex gap-2 items-center md:gap-3'>
      <Button type='round1' onClick={ () => dispatch(decreaseItemQuantity( pizza )) }>
        -
      </Button>
      <span className='text-sm font-medium'>{ currentQuantity }</span>
      <Button type='round2' onClick={ () => dispatch(increaseItemQuantity( pizza )) }>
        +
      </Button>
    </div>
  )
}

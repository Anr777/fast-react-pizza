import { formatCurrency } from "../../utils/helpers";

export const OrderItem = ({ item, isLoadingIngredients, ingredients }) => {
  const { quantity, name, totalPrice } = item;
  console.log(ingredients)
  console.log(isLoadingIngredients)

  return (
    <li className='py-3 space-y-1'>
      <div className='flex items-center justify-between gap-4 text-sm'>
        <p>
          <span className='font-bold'>{quantity}&times;</span> {name}
        </p>
        <p className='font-bold'>{formatCurrency(totalPrice)}</p>
      </div>
      <p className='text-sm capitalize italic text-stone-500'>
        {
          // isLoadingIngredients ? 'Loading...' : ingredients.join(', ')
          isLoadingIngredients ? 'Loading...' : ingredients.join(', ')
        }
      </p>
    </li>
  );
}


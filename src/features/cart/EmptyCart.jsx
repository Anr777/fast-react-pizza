import { LinkButton } from '../../ui/LinkButton';

export const EmptyCart = () => {
  return (
    <div className='py-3 py-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className='font-bold mt-7'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}


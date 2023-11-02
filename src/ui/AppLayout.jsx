import { Outlet, useNavigation } from "react-router-dom"
import { CartOverview } from "../features/cart"
import { Header } from "./Header"
import { Loader } from "./Loader";


export const AppLayout = () => {

  const navigation = useNavigation();
  
  const isLoading = navigation.state === 'loading';

  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {
        isLoading && <Loader />
      }
      <Header />

      <div className='overflow-auto'>
        <main className='overflow-auto max-w-3xl mx-auto'>
          <Outlet />
        </main>
      </div>

      <CartOverview />

    </div>
  )
}

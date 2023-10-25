import { Link } from "react-router-dom"
import { SearchOrder } from "../features/order"


export const Header = () => {
  return (
    <header>
      <Link to='/' >
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <p>Anibal</p>
    </header>
  )
}

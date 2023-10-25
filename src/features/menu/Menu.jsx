import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services";
import { MenuItem } from "./MenuItem";


export const Menu = () => {

  const menu = useLoaderData();
  console.log(menu)

  return (
    <ul>
      { menu.map( ({id, ...pizza}) => (
        <MenuItem key={ id } pizza = { pizza } />
      ))}
    </ul>
  )
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
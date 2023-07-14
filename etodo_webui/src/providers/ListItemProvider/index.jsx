import { ListItemContext } from "../../contexts";
import { useListItem } from "../../hooks";

export default function ListItemProvider(props) {
  const [itemList, loading, filters, setFilters] = useListItem();

  return (
    <ListItemContext.Provider
      value={{ itemList, loading, filters, setFilters }}
    >
      {props.children}
    </ListItemContext.Provider>
  );
}

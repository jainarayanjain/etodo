import Paginator from "./Paginator";
import Table from "./Table";
import { ListItemProvider } from "../../providers";

export default function ListItem() {
  return (
    <ListItemProvider>
      <Table />
      <Paginator />
    </ListItemProvider>
  );
}

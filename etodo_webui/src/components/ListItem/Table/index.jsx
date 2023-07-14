import { useContext } from "react";

import { ListItemContext } from "../../../contexts";

export default function Table() {
  const { itemList, loading } = useContext(ListItemContext);
  const columns = ["ID", "Name"];

  if (loading) return <p>Loading...</p>;
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column}>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {itemList.results.length === 0 ? (
          <tr>
            <td colSpan={columns.length}>No Content</td>
          </tr>
        ) : (
          itemList.results.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
}

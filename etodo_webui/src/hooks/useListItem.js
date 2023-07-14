import { useEffect, useState } from "react";

import { API, PAGE_SIZE } from "../constants";
import axios from "../services/axios";

export default function useListItem() {
  const [itemList, setItemList] = useState({
    count: 0,
    results: [],
    next: null,
    previous: null,
  });
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ limit: PAGE_SIZE }); // if filter is applied

  const listItem = async () => {
    const queryParams = new URLSearchParams(filters);
    const response = await axios.get(
      `${API.V1.TRACKING_TASK}?${queryParams.toString()}`
    );
    const data = await response.data;
    setItemList(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    listItem();
  }, [filters]);

  return [itemList, loading, filters, setFilters];
}

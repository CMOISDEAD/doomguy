import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import useDoomStore from "../../store/store";

export const SearchInput = () => {
  const { requestList } = useDoomStore((state) => state);
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 100);

  useEffect(() => {
    if (debounceSearch) {
      const searchList = requestList.filter((request) =>
        request.title.toLowerCase().includes(debounceSearch.toLowerCase()),
      );
      useDoomStore.setState({ searchList });
    } else {
      useDoomStore.setState({ searchList: requestList });
    }
  }, [debounceSearch, requestList]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <input
      type="text"
      className="flex-grow py-2 px-4 w-full h-9 rounded-lg focus:outline-none bg-content2 text-foreground hover:bg-content3 focus:bg-content3"
      placeholder="Search..."
      onChange={handleChange}
    />
  );
};

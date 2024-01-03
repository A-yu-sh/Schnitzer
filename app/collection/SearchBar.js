import React from "react";

export let Filtered;

const SearchBar = ({ data }) => {
  //   const [query, setQuery] = useState("");
  let query = "";

  const searchFilter = (array) => {
    return array.filter((el) => el.name.toLowerCase().includes(query));
  };

  Filtered = searchFilter(data);
  return (
    <div className="">
      <input
        type="text"
        placeholder="enter text "
        className="outline outline-gray-600 "
        value={query}
        onChange={(e) => query.concat(e)}
      />
    </div>
  );
};

export default SearchBar;

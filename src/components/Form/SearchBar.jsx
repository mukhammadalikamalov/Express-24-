import React from "react";

const SearchBar = ({ handleSubmit, query, isLoading, setQuery }) => {
  return (
    <form style={{ marginTop: "2%", alignItems: "center" }} onSubmit={handleSubmit}>
      <input
        style={{
          width: "20%",
          height: "6vh",
          margin: "0 auto",
          borderRadius: "10px",
          border: "1px solid gray",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
        }}
        type="text"
        value={query}
        disabled={isLoading}
        onChange={() => setQuery(event.target.value)}
        placeholder="taom,tovar,oshxona"
      />
    </form>
  );
};

export default SearchBar;

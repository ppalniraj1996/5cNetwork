import React from "react";
import { useState } from "react";
import Card from "../card/Card";
import "./search.css";
const Search = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repo, setRepo] = useState([]);
  // "https://api.github.com/users/mralexgray/repos";

  const handleCHange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const search = await fetch(`https://api.github.com/users/${username}`);
    const ser = await search.json();
    // console.log(ser);

    const repo = await fetch(ser.repos_url);
    const repoJson = await repo.json();
    console.log(repoJson);

    if (ser) {
      setData(ser);
      setRepo(repoJson);
    }
  };

  return (
    <div>
      <input
        className="serach_bar"
        type="text"
        value={username}
        placeholder="search or jump to..."
        onChange={handleCHange}
      />
      <button className="serach_btn" type="submit" onClick={handleSubmit}>
        Click
      </button>
      <Card repo={repo} data={data}/>
    </div>
  );
};

export default Search;

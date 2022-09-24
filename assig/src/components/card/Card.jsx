import React from "react";

const Card = ({ data, repo }) => {
  return (
    <div className="cont">
      {!data.avatar_url ? (
        " "
      ) : (
        <img src={data.avatar_url} alt={data.avatar_url} />
      )}
      <div>
        {repo.map(item => (
          <div>{item.full_name}</div>
        ))}
      </div>
    </div>
  );
};

export default Card;

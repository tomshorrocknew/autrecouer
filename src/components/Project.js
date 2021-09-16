import { useParams } from "react-router-dom";

import useAPI from "../hooks/useNftmApi";

const stateToText = {
  free: "Available",
  error: "Error",
  reserved: "Reserved",
  sold: "Sold",
};

function Project() {
  let { id } = useParams("id");
  const { isLoading, result, error } = useAPI("GetNfts", `${id}/all`);

  return (
    <div className="project-items">
      {isLoading || !result ? (
        <p>Loading...</p>
      ) : (
        result.map((nft) => {
          return (
            <div className="nft-item" key={nft.id}>
              <h4>
                {nft.name} | <em>{stateToText[nft.state]}</em>
              </h4>
              <img src={nft.gatewayLink} width={300} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Project;

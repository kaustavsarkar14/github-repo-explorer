import { Chip } from "@mui/material";
import React from "react";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";

const Repository = ({ repository }) => {
  return (
    <div className=" bg-gray-100 rounded-lg p-3 flex gap-3">
      <div className="md:h-36 md:min-w-36 h-24 min-w-24 rounded-md overflow-hidden">
        <img src={repository.owner.avatar_url} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
        <div className="flex gap-2 mt-auto" >
          <Chip
            icon={<StarBorderRoundedIcon />}
            label={repository.stargazers_count + " stars"}
            variant="outlined"
          />
          <Chip
            icon={<AdjustRoundedIcon />}
            label={repository.open_issues_count + " issues"}
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};

export default Repository;

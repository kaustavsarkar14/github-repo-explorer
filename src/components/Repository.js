import { Chip } from "@mui/material";
import React, { useState } from "react";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import TotalChanges from "./TotalChanges";
import CommitAcitivity from "./CommitAcitivity";

const Repository = ({ repository }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" bg-gray-100 rounded-lg p-3 flex flex-col gap-3 relative ">
      <div className="flex relative gap-3 pr-12">
        <div className="md:w-36 min-w-16 h-16 md:h-full rounded-md object-cover overflow-hidden">
          <img
            src={repository.owner.avatar_url}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">{repository.name}</h1>
          <p>{repository.description}</p>
          <div className="flex gap-2 mt-auto">
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
        <button
          className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 opacity-60"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronRightRoundedIcon
            fontSize="large"
            style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "all 0.3s ease-in-out" }}
          />
        </button>
      </div>
      {isOpen && (
        <div>
          <TotalChanges repository={repository} />
          <CommitAcitivity repository={repository} />
        </div>
      )}
    </div>
  );
};

export default Repository;

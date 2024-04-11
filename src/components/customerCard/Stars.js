import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const Stars = ({ maxStars, nStarts }) => {
  return (
    <div>
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        const isYellow = nStarts >= starValue;
        return <>{isYellow ? <StarIcon /> : <StarBorderOutlinedIcon />}</>;
      })}
    </div>
  );
};

export default Stars;

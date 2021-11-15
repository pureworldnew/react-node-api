import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

/**
 *
 * @param props Take no props, just return skeleton while components load lazy
 */
const CustomSkeleton = () => {
  const width = "98vw";
  const widthHalf = "50vw";
  const height = "50px";
  return (
    <Stack spacing={1}>
      <Skeleton
        style={{ backgroundColor: "#cacaca" }}
        variant="text"
        width={width}
        height={height}
      ></Skeleton>
      <Skeleton variant="text" width={width} height={height}></Skeleton>
      <Skeleton variant="text" width={widthHalf} height={height}></Skeleton>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width="100%" height={118} />
    </Stack>
  );
};

export default CustomSkeleton;

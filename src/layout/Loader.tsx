import React from 'react'
import { useSelector } from 'react-redux';
import { LinearProgress, Stack } from "@mui/material";

export default function Loader() {
    const loadingSpin = useSelector((state: any) => state?.loading?.value);
  return (
    <>
        {loadingSpin?.val == "1" && (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="inherit" />
        </Stack>
      )}
    </>
  )
}

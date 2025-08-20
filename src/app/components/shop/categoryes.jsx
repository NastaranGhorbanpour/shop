"use client";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Categoryes({ current }) {
  const router = useRouter();

  const handleChange = (event) => {
    const value = event.target.value;
    router.push(`?category=${value}`);
  };
 
  return (
    <FormControl sx={{ borderTop: "1px solid #EBEBEB", width: "100%" }}>
      <RadioGroup
        name="category-options"
        value={current}
        onChange={handleChange}
      >
        <FormControlLabel value="ALL" control={<Radio />} label="ALL" />
        <FormControlLabel value="BEST SELLING" control={<Radio />} label="BEST SELLING" />
        <FormControlLabel value="DESK" control={<Radio />} label="DESK" />
        <FormControlLabel value="TRENDING" control={<Radio />} label="TRENDING" />
      </RadioGroup>
    </FormControl>
  );
}

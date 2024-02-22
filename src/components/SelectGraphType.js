import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectGraphType({graphType, setGraphType}) {


  const handleChange = (event) => {
    setGraphType(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Select</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={graphType}
        label="Graph Type"
        onChange={handleChange}
      >
        <MenuItem value="">
        </MenuItem>
        <MenuItem value={'c'}>Commits</MenuItem>
        <MenuItem value={'a'}>Additions</MenuItem>
        <MenuItem value={'d'}>Deletions</MenuItem>
      </Select>
    </FormControl>
  );
}
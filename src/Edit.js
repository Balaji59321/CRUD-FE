import React, { useState } from "react";
import { useLocation } from "react-router";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";
import { Alert } from "@mui/material";

function Edit(props) {
  const { state } = useLocation();
  const [val, setVal] = useState(state);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setVal((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = async () => {
    let resp = await axios.put(
      `http://localhost:3010/product/update/${val._id}`,
      val
    );
    console.log(resp);
    // resp["data"]["message"]
    // navigate(-1);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Edit Product</h1>
      <Box
        sx={{
          width: { xs: "90%", md: "40%" },
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          backgroundColor: "#eee",
          borderRadius: "5px",
        }}
        p={2}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
            width: "100%",
          }}
          py={2}
        >
          <Typography variant="p" style={{ display: "block", width: "100%" }}>
            Name
          </Typography>
          <TextField
            id="outlined-basic"
            label={val.name.length > 0 ? "" : "Name"}
            variant="outlined"
            value={val.name}
            name="name"
            onChange={changeHandler}
          />
        </Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
            width: "100%",
          }}
          py={2}
        >
          <Typography variant="p" style={{ display: "block", width: "100%" }}>
            Description
          </Typography>
          <TextField
            id="outlined-basic"
            label={val.description.length > 0 ? "" : "Description"}
            variant="outlined"
            style={{ width: "100%" }}
            value={val.description}
            name="description"
            onChange={changeHandler}
          />
        </Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
            width: "100%",
          }}
          py={2}
        >
          <Typography variant="p" style={{ display: "block", width: "100%" }}>
            Color
          </Typography>
          <TextField
            id="outlined-basic"
            label={val.variant.length > 0 ? "" : "Color"}
            variant="outlined"
            value={val.variant}
            name="variant"
            onChange={changeHandler}
          />
        </Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
            width: "100%",
          }}
          py={2}
        >
          <Typography variant="p" style={{ display: "block", width: "100%" }}>
            Price
          </Typography>
          <TextField
            id="outlined-basic"
            label={val.price > 0 ? "" : "Price"}
            variant="outlined"
            value={val.price}
            name="price"
            onChange={changeHandler}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }} pt={2}>
          <Button variant="outlined" onClick={submitHandler}>
            Submit
          </Button>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Edit;

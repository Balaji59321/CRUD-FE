import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";

function Create() {
  const navigate = useNavigate();
  const [val, setVal] = useState({
    name: "",
    description: "",
    price: 0,
    variant: "",
  });

  const changeHandler = (e) => {
    setVal((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = async () => {
    let resp = await axios.post(
      "https://crud-api-product.herokuapp.com/product/add",
      val
    );
    console.log(resp);
    resp["data"]["_message"] &&
      alert("Something went wrong.Please type proper value for form fields");
    setVal({
      name: "",
      description: "",
      price: 0,
      variant: "",
    });
  };
  console.log(val);

  return (
    <>
      <Typography variant="h6" sx={{ textAlign: "center" }} py={2}>
        Create a New Product
      </Typography>
      <Grid
        container
        sx={{
          width: { xs: "90%", md: "40%" },
          margin: "auto",
          display: "flex",
          backgroundColor: "#eee",
          borderRadius: "10px",
        }}
        p={2}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
          py={3}
        >
          <Typography>Name</Typography>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={val.name}
            name="name"
            onChange={changeHandler}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
          py={3}
        >
          <Typography>Description</Typography>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            sx={{ width: "60%" }}
            value={val.description}
            name="description"
            onChange={changeHandler}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
          py={3}
        >
          <Typography>Variant</Typography>
          <TextField
            id="outlined-basic"
            label="Variant"
            variant="outlined"
            value={val.variant}
            name="variant"
            onChange={changeHandler}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
          py={3}
        >
          <Typography>Price</Typography>
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={val.price}
            name="price"
            onChange={changeHandler}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <Button variant="outlined" onClick={submitHandler}>
            Submit
          </Button>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </Box>
      </Grid>
    </>
  );
}

export default Create;

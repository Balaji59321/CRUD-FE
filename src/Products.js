import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { Card, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Products = () => {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    const func = async () => {
      const resp = await axios.get("http://localhost:3010/product/get");
      console.log(resp["data"]);
      setProd(resp["data"]);
    };
    func();
  }, []);

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:3010/product/delete/${id}`);
    setProd(prod.filter((ele) => ele._id !== id));
  };

  const editHandler = (ele) => {
    console.log("triggered");
  };

  return (
    <>
      {prod.length === 0 && (
        <Typography variant="h6" sx={{ textAlign: "center" }} py={3}>
          No Products Found
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          width: { xs: "90%", md: "80%" },
          margin: "auto",
          gap: 7,
        }}
      >
        {prod.map((ele) => (
          <Box
            sx={{
              border: "1px solid #ccc",
              display: "flex",
              flexBasis: "400px",
              textAlign: "center",
              flexDirection: "column",
              borderRadius: "10px",
              backgroundColor: "#eee",
            }}
            p={2}
            key={ele._id}
          >
            <h1 style={{ textAlign: "center", width: "100%" }}>{ele.name}</h1>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="p">
                <strong>Description</strong>
              </Typography>
              <Typography variant="p">{ele.description}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="p">
                <strong>Color</strong>
              </Typography>
              <Typography variant="p">{ele.variant}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="p">
                <strong>Price</strong>
              </Typography>
              <Typography variant="p">{ele.price}</Typography>
            </Box>
            <Box>
              <Link to="/edit" state={ele} style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    marginX: "20px",
                    marginTop: "20px",
                    textDecoration: "none",
                  }}
                >
                  Edit
                </Button>
              </Link>
              <Button
                variant="contained"
                sx={{ marginX: "20px", marginTop: "20px" }}
                onClick={() => deleteHandler(ele._id)}
              >
                Delete
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Products;

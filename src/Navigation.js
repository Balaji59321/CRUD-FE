import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

function Navigation() {
  return (
    <Box
      sx={{
        backgroundColor: "#ddd",
        display: "flex",
        gap: 3,
        justifyContent: { xs: "space-between", sm: "flex-start" },
      }}
      p={2}
      mb={2}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#111" }}>
        Home
      </Link>
      <Link to="/create" style={{ textDecoration: "none", color: "#111" }}>
        Add a Product
      </Link>
    </Box>
  );
}

export default Navigation;

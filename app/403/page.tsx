// pages/403.js
import React from "react";
//ui库
import { Typography, Container, Box } from "@mui/material";

const ForbiddenPage = (): JSX.Element => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h4">
          403 - Forbidden
        </Typography>
        <Typography variant="body1">您没有权限访问此页面。</Typography>
      </Box>
    </Container>
  );
};

export default ForbiddenPage;

import * as React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Outlet } from "react-router-dom";

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        Bartkode participates in various affiliate marketing programs, which
        means we may get paid commissions on editorially chosen products
        purchased through our links to retailer sites.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://bartkode.com/">
          Bartkode
        </Link>
        {` ${new Date().getFullYear()}.`}
      </Typography>
    </>
  );
}

function Canvas() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container direction={largeScreen ? "row" : "column"}>
          <Outlet />
        </Grid>
      </Container>
      <Copyright sx={{ pt: 4 }} />
    </Box>
  );
}

export default Canvas;

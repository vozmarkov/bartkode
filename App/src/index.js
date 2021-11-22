import * as React from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import {
  AboutUs,
  Disclaimer,
  Home,
  PrivacyPolicy,
  Subscribe,
} from "./features";

const mdTheme = createTheme();

ReactDOM.render(
  <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="subscribe" element={<Subscribe />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  </ThemeProvider>,
  document.querySelector("#root")
);

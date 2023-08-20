import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const HeroSectionWrapper = styled(Box)(({ theme }) => ({
  height: "70vh",
  width: "100%",
  background: "url(https://i.ibb.co/Dk5wHt6/bannerbackground.png)",
  backgroundPosition: "center",
  backgroundSize: "115%",
}));

export const SearchBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "600px",
  mx: "auto",
  background: "#ffffff",
  borderRadius: "50px",
  overflow: "hidden",
  marginTop: theme.spacing(5),

  "& input": {
    border: "none",
    padding: "1rem 2rem",
    width: "100%",
    borderRadius: "30px",
    fontSize: "1.2rem",
  },
  "& button": {
    position: "absolute",
    right: "0",
    top: "0",
    background: "#f91944",
    border: "none",
    padding: "1rem 2rem",
    color: "#ffffff",
    fontSize: "1.2rem",
    borderRadius: "30px",
    cursor: "pointer",
  },
}));

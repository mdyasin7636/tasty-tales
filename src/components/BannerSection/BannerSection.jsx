import { Box, Container, Typography } from "@mui/material";
import { HeroSectionWrapper, SearchBox } from "./heroStyle";

const BannerSection = () => {
  return (
    <HeroSectionWrapper>
      <Container
        sx={{
          height: "100%"
        }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center"
          }}>
          <Box
            sx={{
              width: "50%",
            }}>
            <Typography variant="h4" fontWeight="600" textAlign="center">
              Best Food Waiting For Your Belly
            </Typography>
            <SearchBox>
              <input type="search" placeholder="Search Food" />
              <button>Search</button>
            </SearchBox>
          </Box>
        </Box>
      </Container>
    </HeroSectionWrapper>
  );
};

export default BannerSection;

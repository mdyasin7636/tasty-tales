import { Box, Container, Typography } from "@mui/material";

const BannerSection = () => {
  return (
    <Box
      sx={{
        height: "70vh",
        width: "100%",
        background: "url(https://i.ibb.co/Dk5wHt6/bannerbackground.png)",
        backgroundPosition: "center",
        backgroundSize: "115%",
      }}
    >
      <Container sx={{
        height: '100%'
      }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: 'grid',
            placeItems: 'center'
          }}
        >
          <Box sx={{
            width: '50%'
          }}>
            <Typography variant="h2" fontWeight="500">
              Best Food Waiting For Your Belly
            </Typography>
            <Box sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
                mx: 'auto',
                background: '#ffffff',
                borderRadius: '50px',
                overflow: 'hidden',

                '& input': {
                    border: 'none',   
                    padding: '1rem 2rem',
                    width: '100%',
                    borderRadius: '30px',
                    fontSize: '1.2rem'
                },
                '& button': {
                    position: 'absolute',
                    right: '0',
                    top: '0',
                    background: '#f91944',
                    border: 'none',
                    padding: '1rem 2rem',
                    color: '#ffffff',
                    fontSize: '1.2rem',
                    borderRadius: '30px',
                    cursor: 'pointer'
                }
            }}>
              <input type="search" placeholder="Search Food" />
              <button>Search</button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BannerSection;

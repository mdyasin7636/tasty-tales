import { Box, Button, Container, IconButton, Stack } from "@mui/material";
import logoImg from "../../assets/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { FlexBox } from "../styled/FlexBox";

const Header = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <FlexBox justifyContent='space-between'>
          <img
            src={logoImg}
            alt="Tasty Tales Logo"
            style={{ width: "160px" }}
          />

          <Stack direction='row' spacing={4}>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <Button>Sign In</Button>
            <Button>Sign Up</Button>
          </Stack>
        </FlexBox>
      </Container>
    </div>
  );
};

export default Header;

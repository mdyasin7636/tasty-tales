import { Button, Container, IconButton, Stack } from "@mui/material";
import logoImg from "../../assets/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { FlexBox } from "../styled/FlexBox";

const Header = () => {
  return (
    <div>
      <Container>
        <FlexBox justifyContent='space-between' sx={{
          padding: '1rem 0'
        }}>
          <img
            src={logoImg}
            alt="Tasty Tales Logo"
            style={{ width: "160px" }}
          />

          <Stack direction='row' spacing={4} sx={{
            alignItems: 'center'
          }}>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <Button variant="text">Login</Button>
            <Button>Sign Up</Button>
          </Stack>
        </FlexBox>
      </Container>
    </div>
  );
};

export default Header;

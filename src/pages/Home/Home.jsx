import { Stack } from "@mui/material";
import BannerSection from "../../components/BannerSection/BannerSection";
import FoodCategory from "../../components/FoodCategory/FoodCategory";

const Home = () => {
    return (
        <Stack spacing={10}>
            <BannerSection/>
            <FoodCategory/>
        </Stack>
    );
};

export default Home;
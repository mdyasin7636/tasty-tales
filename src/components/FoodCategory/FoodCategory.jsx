import { Box, Container } from "@mui/material";
import TabButtons from "../Custom/TabButtons";
import React from "react";

const FoodCategory = () => {

    const [value, setValue] = React.useState(0);
    console.log(value);
    return (
        <Box>
            <Container>
                <Box sx={{
                    maxWidth: 500,
                    mx: 'auto'
                }}>
                    <TabButtons value={value} setValue={setValue}></TabButtons>
                </Box>
            </Container>
        </Box>
    );
};

export default FoodCategory;
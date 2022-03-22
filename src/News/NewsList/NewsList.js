import React from 'react';
import NewsCard from "../NewsCard/NewsCard";
import {Box, Button} from "@mui/material";
import TextWrapper from "../TextWrapper";

function NewsList({news, nextPage}) {
    return (
        <div>
            {news.map((news, index) => <NewsCard news={news} key={index}/>)}
            <Box textAlign='center'>
                <Button
                    variant="contained"
                    onClick={nextPage}>
                    <TextWrapper languageKey="paginationButton"/>
                </Button>
            </Box>
        </div>
    );
}

export default NewsList;


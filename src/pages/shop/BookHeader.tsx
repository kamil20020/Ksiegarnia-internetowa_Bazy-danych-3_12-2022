﻿import { Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomImage from "../../components/common/CustomImage";
import Book from "../../models/Book";
import "./Shop.css"

const BookHeader = (props: {book: Book}) => {

    const book = props.book

    const navigate = useNavigate()

    return (
        <Grid item xs={3} container justifyContent="center" className="book-header" paddingBottom={4} 
            onClick={() => navigate(`/book-details/${book.id}`)}
        >
            <Grid item xs={6} container justifyContent="center" rowSpacing={1}>
                <Grid item>
                    <CustomImage img={book.avatar}/>
                </Grid>
                <Grid item>
                    <Typography component="h4" textAlign="right" marginRight={1}>
                        {book.title}
                    </Typography>
                </Grid>
                <Grid item xs={12} marginRight={1}>
                    <Typography component="h4" textAlign="right">
                        {book.price} zł
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BookHeader;
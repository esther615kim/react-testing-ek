import { Typography, CardMedia, CardContent, Stack } from '@mui/material';
import React,{useState}from 'react';
import { useSelector, useDispatch } from "react-redux";
import { StyledPaper, StyledChip } from './favlist.styled';

// dummy data => 작업1. local storage 저장 &redux 세팅 예정
const FAV_LIST = [
  {
    shop_id: 34,
    shop_name: 'PasTastic - Chippenham Road',
    image_url: 'https://rs-menus-api.roocdn.com/images/46bbf3fc-1853-4c2b-a505-62edc5d4dcb0/image.jpeg?width=343',
    description: 'Italian·Vegetarian·Pasta',
    delivery_distance: '25-30 min',
  },
  {
    shop_id: 14,
    shop_name: 'Burger King - Kentish Town',
    image_url:
      'https://rs-menus-api.roocdn.com/images/e11e2ed3-3450-48b6-8f7c-a02ee512f67f/image.jpeg?width=531&height=299&auto=webp&format=jpg&fit=crop',
    description: 'American·Burgers·Vegan Friendly',
    delivery_distance: '10-20 min',
  },
];

const FavCard = () => {

  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favs);
  console.log("즐겨찾기",favourites)

  return (
    <Stack pt={2} direction="row" spacing={2}>
       {/* {!favourites.favList ? (
          <Typography pb={2} gutterBottom variant="subtitle1">
            Your Favlist is empty
          </Typography>
        ) : ( */}
          <>
          {favourites.favs.map((item) => (
            <StyledPaper key={item.id}sx={{width:300, height:240}} key={item.shop_id}>
              <CardMedia component="img" height="194" image={item.image} alt="shopImage" />
              <CardContent>
                <Typography paragraph>{item.title}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </StyledPaper>
          ))
          }
                    </>
        {/* ) */}
        {/* } */}

    </Stack>
  );
};

export default FavCard;

// 작업2 favlist 없을 때 카드용 이미지
// https://deliveroo.co.uk/anonymous_user_guid.gif?guid=25b5ceb3-9885-4271-ab3a-2e612c56a056

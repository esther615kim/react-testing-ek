import { styled } from "@mui/styles";
import { Card, Button, Box, Stack, Paper, ButtonIcon } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "1.5rem 3rem",
}));

export const StyledPaper = styled(Paper)({
  margin: "1rem",
  padding: "1rem",
  width: "14rem",
  borderRadius: 5,
  position: "relative",
});

export const StyledStack = styled(Stack)({
  position: "absolute",
  right: 10,
  top: 20,
});

export const StyledBox = styled(Box)({
  flex: 5,
  width: "70%",
  background: "#eee",
  textAlign: "center",
});

export const StyledCard = styled(Card)(({ theme }) => ({
  flex: 2,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minWidth: 240,
  padding: "1rem 1.5rem",
  margin: "0 1rem",
  color: "#444745",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  background: "#eee",
  padding: "0.5rem 1rem",
  color: "#aaa",
  fontWeight: 600,
}));

export const StyledBasketBox = styled(Box)({
  textAlign: "left",
  padding:"0.5rem 1rem"
});

export const StyledItemBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent:"space-between",
  alignItems: "center",
  padding: "2.5px 10px 2.5px 4px",
  '& > span':{
    fontSize:"14px",
    fontWeight:500
  }
});

export const StyledAddIcon = styled(AddCircleOutlineIcon)({
  fontSize: "12px",
  paddingRight: "4px",
});

export const StyledRemoveIcon = styled(RemoveCircleOutlineIcon)({
  fontSize: "12px",
  padding: "0 10px 0 4px",
  // transition: '.1s ease-in',
});

export const StyledSubtotalBox = styled(Box)({
  flexDirection: "row",
  textAlign: "right",
});

export const StyledDeleteItemIcon = styled(DeleteForeverIcon)({
  fontSize: "12px",
  paddingLeft:"6px",
  
});

export const StyledPrdoctQtyBox= styled(Box)({
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  minWidth:"120px",
  fontSize:"14px",
  '&:hover': {
    fontWeight:600
   }, // not working


  // '& > div': {
  //   width:"52px",
  //   border:"1px solid #bbb",
  //   textAlign:"center",
  //   borderRadius:"3px;",
  //   paddingLeft:"5px"
  // }
});


// '& button': {
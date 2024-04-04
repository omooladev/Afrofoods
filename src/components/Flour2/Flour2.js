import { Box, Button, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { productContext } from "../../context/productContext";
import { useContext } from "react";

const Flour2 = (props) => {
  const { id, Name, Price, image } = props.data;
  const { addToCart, cartItems } = useContext(productContext);
  const cartItemCount = cartItems[id];

  return (
    <Box
      sx={{
        border: "1px solid #c0c0c1",
        borderRadius: "8px",
        padding: "0.1rem",
        ":hover": {
          boxShadow: "2px 2px 10px 0px grey",
          transition: "2s ease",
          borderRadius: "3px",
          width: "350",
          height: "auto",
          cursor: "pointer",
        },
      }}
    >
      <img
        src={image}
        width="270"
        height="auto"
        className="lg:w-44 xl:w-56 2xl:w-64 rounded-xl"
        alt=""
      />
      <Box
        sx={{
          padding: "0.5rem",
        }}
      >
        <Typography variant="body2" fontWeight="600">
          {Name}
        </Typography>
        <Typography variant="body2" color="#1A76D2">
          ${Price}
        </Typography>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            addToCart(id);
            Swal.fire({
              toast: true,
              icon: "success",
              title: "Item selected",
              position: "top",
              timer: 3000,
              showConfirmButton: false,
            });
          }}
          sx={{
            textDecoration: "none",
            mt: "1rem",
            fontSize: {
              xs: "10px",
              sm: "14px",
              md: "10px",
              lg: "14px",
            },
            color: "white",
            backgroundColor: "#FF7801",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
        >
          Add to cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </Button>
      </Box>
    </Box>
  );
};

export default Flour2;

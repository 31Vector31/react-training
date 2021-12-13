import styles from "./ProductCard.module.css";
import styled from "styled-components";
import {Paper} from "@mui/material";

const Image = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${({url}) => url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

function ProductCard({product}) {
    const {title, price, brand, image} = product;

    return (
        <Paper className={styles.productCard}>
            <Image url={image}/>
            <div>
                {title}
            </div>
            <div>
                {brand}
            </div>
            <div>
                {price} грн
            </div>
        </Paper>
    );
}

export default ProductCard;
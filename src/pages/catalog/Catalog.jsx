import { products, categories } from "./products"; //TODO: Retirar "procucts" após implementar back-end
import { Button, Grid, Typography } from "@mui/material";
import "./catalog.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Catalog = () => {
  const [products, setProducts] = useState({});
  const getProducts = () => {
    setProducts({
      33: {
        name: "Produto 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
        images: [
          "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
          "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
          "https://static3.tcdn.com.br/img/img_prod/769840/vestido_mirele_1329_1_20348177a5ec7e4dc844aae226aac5df.jpg",
        ],
        price: 299.99,
        categories: [1, 2, 3],
      }
    })
  }

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <Grid
      container
      spacing={4}
      sx={{
        marginTop: "10px",
        paddingLeft: "32px",
        paddingRight: "32px",
        boxSizing: "border-box",
      }}
    >
      {Object.keys(products).map((id) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} className="catalog-item">
            <span className="badge-item">10%</span>
            <img src={products[id].images[0]} />

            {products[id].categories.map((categoryId) => {
              return (
                <span className="category-label">
                  {categories[categoryId].name}
                </span>
              );
            })}

            <Typography variant="h5" component="h2">
              {products[id].name}
            </Typography>

            {products[id].promo_price ? (
              <Typography variant="p" component="p" className="promo_price">
                {products[id].promo_price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Typography>
            ) : (
              ""
            )}
            <Typography
              variant="p"
              component="p"
              className="price"
              style={{
                fontSize: products[id].promo_price ? "16px" : "20px",
                color: products[id].promo_price ? "#a9a9a9" : "#333333",
                textDecoration: products[id].promo_price
                  ? "line-through"
                  : "none",
              }}
            >
              {products[id].price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Typography>

            <Typography variant="p" component="p">
              {products[id].description.substring(0, 100)}...
            </Typography>
            <Link to={"../product/" + id}>
              <Button fullWidth variant="contained">
                Ver Produto
              </Button>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Catalog;

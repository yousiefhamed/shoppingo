import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useProductContext } from "./../context/ProductContext";
import { FaHeart } from "react-icons/fa";

export default function ProductsContainer() {
  const { products, addToCart, addToWishlist, wishlistItems } =
    useProductContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (products.length === 0) {
      setError("No products found");
    } else {
      setError(null);
    }
    setLoading(false);
  }, [products]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Row className="g-4 m-5">
      {products.map((product) => (
        <Col key={product.id} xs={12} md={6} lg={4}>
          <Card className="h-100 w-100">
            <Card.Img
              variant="top"
              src={product.image}
              className="w-100 h-100 object-fit-cover"
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${product.price.toFixed(2)}</Card.Text>
              <Button variant="primary" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
              <Button
                className="ms-2"
                onClick={() => addToWishlist(product)}
                variant="outline-secondary"
              >
                <FaHeart
                  className={
                    wishlistItems.some((item) => item.id === product.id)
                      ? "text-danger"
                      : ""
                  }
                />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

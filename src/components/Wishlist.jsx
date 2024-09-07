import React from "react";
import { ListGroup, Button, Card, Image } from "react-bootstrap";
import { useProductContext } from "../context/ProductContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useProductContext();

  return (
    <Card className="mt-5">
      <Card.Header>
        <h2>Wishlist</h2>
      </Card.Header>
      <Card.Body>
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty</p>
        ) : (
          <ListGroup variant="flush">
            {wishlistItems.map((item, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="me-3"
                  />
                  <div>
                    {item.name} - ${item.price.toFixed(2)}
                  </div>
                </div>
                <div>
                  <Button
                    variant="primary"
                    size="sm"
                    className="me-2"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
};

export default Wishlist;

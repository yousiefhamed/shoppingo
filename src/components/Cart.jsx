import React from "react";
import { ListGroup, Button, Card, Image } from "react-bootstrap";
import { useProductContext } from "../context/ProductContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useProductContext();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Card className="mt-5">
      <Card.Header>
        <h2>Shopping Cart</h2>
      </Card.Header>
      <Card.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item
                key={item.id}
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
                <div className="d-flex align-items-center">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
      {cartItems.length > 0 && (
        <Card.Footer>
          <div className="d-flex justify-content-between align-items-center">
            <h5>Total: ${totalPrice.toFixed(2)}</h5>
            <Button variant="success">Checkout</Button>
          </div>
        </Card.Footer>
      )}
    </Card>
  );
};

export default Cart;

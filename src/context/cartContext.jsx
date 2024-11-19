import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

  
  const addProductInCart = (newProduct) => {
   
    const isProductInCart = isInCart(newProduct.id);
    if (isProductInCart) {
     
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex((item) => item.id === newProduct.id);
      updatedCart[productIndex].quantity += newProduct.quantity;
      setCart(updatedCart);
    } else {
     
      setCart([...cart, newProduct]);
    }
  };


  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  
  const deleteProductById = (productId) => {
    const filteredCart = cart.filter((item) => item.id !== productId);
    setCart(filteredCart);
  };

  
  const deleteCart = () => {
    setCart([]);
  };

  
  const totalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  
  const totalPrice = () => {
    const total = cart.reduce((total, product) => {
     
      const price = parseFloat(product.price);
      const quantity = parseInt(product.quantity, 10);
      
     
      if (!isNaN(price) && !isNaN(quantity)) {
        return total + (price * quantity);
      }
      return total; 
    }, 0);
    return total.toFixed(2); 
  };

  return (
    <CartContext.Provider value={{
      cart,
      addProductInCart,
      totalQuantity,
      totalPrice,
      deleteProductById,
      deleteCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

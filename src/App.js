import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartPrivider";

function App() {
  const [cartIsShown, setChartIsShown] = useState(false);

  const showCartHandler = () => {
    setChartIsShown(true);
  };

  const hideCartHandler = () => {
    setChartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCardHander = () => {
		setCartIsShown((prev) => !prev);
	};
	return (
		<CartProvider>
			{cartIsShown && <Cart onClose={showCardHander} />}
			<Header onShowCart={showCardHander} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;

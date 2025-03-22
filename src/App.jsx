import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCardHander = () => {
		setCartIsShown((prev) => !prev);
	};
	return (
		<CartProvider>
			{cartIsShown && <div> Cart...</div>}
			<Header onShowCart={showCardHander} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;

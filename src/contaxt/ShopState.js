import React, { useEffect, useState } from "react";
import shopContaxt from "./shopContaxt";
import { firestore } from "../firebase-config";

function ShopState(props) {
	// initial values for state
	const initialState = {
		shopName: "",
		shopArea: "",
		shopCategory: "",
		openDate: "",
		closeDate: "",
	};

	const [shop, setshop] = useState(initialState);

	// handle submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(shop);
		firestore.collection("shops").add({
			shopName: shop.shopName,
			shopArea: shop.shopArea,
			shopCategory: shop.shopCategory,
			openDate: shop.openDate,
			closeDate: shop.closeDate,
		});
		console.log(shop);
	};
	// get the form values
	const onChange = (e) => {
		setshop({ ...shop, [e.target.name]: e.target.value });
	};



	return (
		<shopContaxt.Provider value={{ shop, onChange, handleSubmit }}>
			{props.children}
		</shopContaxt.Provider>
	);
}

export default ShopState;

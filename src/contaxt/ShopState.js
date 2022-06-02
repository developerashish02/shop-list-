import React, { useState } from "react";
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
		if (!shop.shopName) {
			alert("shop name is required");
			return;
		}
		if (!shop.shopArea) {
			alert("Shop Aera is required");
			return;
		}
		if (!shop.shopCategory) {
			alert("Shop category is required");
			return;
		}

		if (!shop.openDate) {
			alert("shop open date is required");
			return;
		}
		if (!shop.openDate && !shop.closeDate) {
			alert("please provide open and close dates");
			return;
		}

		firestore.collection("shops").add({
			shopName: shop.shopName,
			shopArea: shop.shopArea,
			shopCategory: shop.shopCategory,
			openDate: shop.openDate,
			closeDate: shop.closeDate,
		});

		setshop(initialState);
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

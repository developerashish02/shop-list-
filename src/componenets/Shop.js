import React, { useContext, useEffect, useState } from "react";
import shopContaxt from "../contaxt/shopContaxt";
import { firestore } from "../firebase-config";
import ShopItems from "./ShopItems";

function Shop() {
	// get the data and function from contaxt api
	const { shop, onChange, handleSubmit } = useContext(shopContaxt);
	const [shopData, setShopData] = useState([]);

	// get data from firestore 
	useEffect(() => {
		firestore
			.collection("shops")
			.onSnapshot((snapshot) => {
				const shopData = snapshot.docs.map((doc) => {
					const data = doc.data();
					data["id"] = doc.id;
					return data;
				});
				setShopData(shopData);
			})
	}, []);

	// handle delete 
	const handleDelete = () => {
		const ref = firestore.collection('shops').doc()
	}
	return (
		<>
			<div className="container align-items-center justify-content-center d-flex my-4">
				<form className="border rounded-3 border-dark px-5 py-3 " onSubmit={handleSubmit}>
					<h2 className="text-center  fw-light">Add Shop </h2>
					{/* taking input shop name */}
					<div className="mb-3">
						<label htmlFor="shoptitle" className="form-label">
							Shop Name
						</label>
						<input
							type="text"
							className="form-control"
							id="shoptitle"
							name="shopName"
							value={shop.shopName}
							onChange={onChange}
							required
						/>
					</div>
					{/* input Aeras Avaliables */}
					<div className="input-group mb-3">
						<label className="input-group-text" htmlFor="shopaera">
							Area
						</label>
						<select
							className="form-select"
							id="shopaera"
							name="shopArea"
							value={shop.shopArea}
							onChange={onChange}

						>
							<option defaultValue="Solapur">Solapur</option>
							<option value="Ahmednagar">Ahmednagar</option>
							<option value="Nagpur">Nagpur</option>
							<option value="Nashik">Nashik</option>
							<option value="Nashik">Mumbai Suburban</option>
							<option value="Pune">Pune</option>
							<option value="Thane">Thane</option>
						</select>
					</div>
					{/* input categaries */}
					<div className="input-group mb-3">
						<label className="input-group-text" htmlFor="shopcategory">
							Category
						</label>
						<select
							className="form-select"
							id="shopcategory"
							name="shopCategory"
							value={shop.shopCategory}
							onChange={onChange}
							required
						>
							<option defaultValue="1">Stationery shop</option>
							<option value="Chemist">Chemist</option>
							<option value="Baker">Baker</option>
							<option value="Butcher">Butcher</option>
							<option value="Butcher Suburban">Butcher Suburban</option>
						</select>
					</div>
					{/* opening dates  */}
					<div className="mb-3">
						<label htmlFor="opentime" className="form-label">
							Open Date
						</label>
						<input
							type="date"
							id="opentime"
							name="openDate"
							value={shop.openDate}
							className="form-control"
							onChange={onChange}
							required
						/>
					</div>
					{/* closig dates  */}
					<div className="mb-3">
						<label htmlFor="closetime" className="form-label">
							Close Date
						</label>
						<input
							type="date"
							id="closetime"
							name="closeDate"
							value={shop.closeDate}
							className="form-control"
							onChange={onChange}
							required
						/>
					</div>
					{/* button */}
					<button
						type="submit"
						className="btn btn-primary container align-items-center justify-content-center my-2"
					>
						Add Shop
					</button>
				</form>
			</div>

			<div className="container">
				<div className="row">
					<h2 className="text-center fw-bold">Your I-Notes</h2>
					{/* when notes array is empty  */}
					<div className="container mx-2">
						{shopData.length === 0 && "No Notes to display"}
					</div>
					{shopData.map((shops) => {
						return <ShopItems shops={shops} key={shops.id} />;
					})}
				</div>
			</div>
		</>
	);
}

export default Shop;

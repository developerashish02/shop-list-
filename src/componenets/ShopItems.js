
import { firestore } from "../firebase-config";
function ShopItems(props) {
	const { shops } = props;

	// handle delete
	const deleteShop = (id) => {
		firestore
			.collection("shops")
			.doc(id)
			.delete()
			.then(() => {
				console.log("deleted success");
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<>
			<div className="col-md-3 my-2 ">
				<div className="card text-white bg-primary my-3 ">
					<h3 className="card-header border-bottom border-warning">
						{shops.shopName}
					</h3>
					<div className="card-body">
						<h5 className="card-title">Shop Aera : {shops.shopArea}</h5>
						<p className="card-text">
							<span className="badge badge-warning">Shop Category</span>
							{shops.shopCategory}
						</p>
						<p className="card-text">
							<span className="badge badge-warning">Open Date</span>
							{shops.openDate}
						</p>
						<p className="card-text">
							<span className="badge badge-warning">Close Date</span>
							{shops.closeDate}
						</p>
					</div>
					<div className="container mb-2">
						<i class="fa-solid fa-pen-to-square"></i>
						<i
							className="fas fa-minus-circle  mx-2"
							onClick={() => deleteShop(shops.id)}
							style={{ cursor: "pointer" }}
						></i>
					</div>
				</div>
			</div>
		</>
	);
}

export default ShopItems;

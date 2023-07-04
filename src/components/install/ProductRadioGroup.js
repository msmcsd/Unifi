import { useContext, useState } from "react";
import ReducerAction from "../../constants/ReducerAction";
import { populateRadioButtonGroupWithBox } from "../../shared/populateRadioGroup";
import { CommandsContext } from "../../contexts/CommandsContext";

const productNames = ["Protect", "Optics2", "Optics3"];

const ProductRadioGroup = () => {
	const {
		state: { uiSettings },
		dispatch,
	} = useContext(CommandsContext);

	const [product, setProduct] = useState(uiSettings.product);

	const handleConfigChange = (e) => {
		// console.log("product=", e.target.value);
		setProduct(e.target.value);

		dispatch({
			type: ReducerAction.UpdateProduct,
			payload: { product: `${e.target.value}` },
		});
	};

	return populateRadioButtonGroupWithBox(
		productNames,
		product,
		handleConfigChange
	);
};

export default ProductRadioGroup;

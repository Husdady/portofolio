// React
import { useEffect, useState } from "react";

// Hooks
import { useValidations } from "@hooks";

const useClasses = ({
	className = null,
	defaultClasses = [],
	arrayDependecies = []
}) => {
	const { isString } = useValidations();
	const [classes, setClasses] = useState(defaultClasses);

	useEffect(() => {
		if (!isString(className)) return;

		const newClasses = [...classes, className];

		setClasses(newClasses);
	}, arrayDependecies);

	return classes.join(" ");
}

export default useClasses;

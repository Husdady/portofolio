// React
import { memo, useCallback } from "react";

// Librarys
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Hooks
import { useClasses, useValidations } from "@hooks";

const Button = ({ icon, title, style, className, backgroundColor, onClick }) => {
	const { isString, isEmptyObject } = useValidations();

	const renderIcon = useCallback(() => {
		if (isEmptyObject(icon)) return;

		return <FontAwesomeIcon className="me-1" {...icon} icon={icon.name || icon} />
	}, [icon]);

	const renderTitle = useCallback(() => {
		if (!isString(title)) return;

		return <span>{title}</span>
	}, [title]);

	const buttonStyle = {
		...style,
		backgroundColor: backgroundColor,
	}

	const buttonClassName = useClasses({
		className: className,
		defaultClasses: ["border-none", "cursor-pointer", "scale"],
	})

	return (
		<button
			onClick={onClick}
			style={buttonStyle}
			className={buttonClassName}
		>
			{renderIcon()}
			{renderTitle()}
		</button>
	)
};

export default memo(Button);

Button.defaultProps = {
	icon: {},
	style: {},
	title: "button",
}
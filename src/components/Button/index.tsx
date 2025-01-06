import './index.scss'
import { Button as ButtonUI } from "@/components/ui/button"

interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean
	/**
	 * What background color to use
	 */
	backgroundColor?: string
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'medium' | 'large'
	/**
	 * Button contents
	 */
	label: string
	/**
	 * Optional click handler
	 */
	onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	const mode = primary
		? 'storybook-button--primary'
		: 'storybook-button--secondary'
	return (
		<ButtonUI
			type='button'
			data-testid='button'
			className={[
				'text-1xl',
				mode,
			].join(' ')}
			style={{ backgroundColor }}
			{...props}>
			{label}
		</ButtonUI>
	)
}

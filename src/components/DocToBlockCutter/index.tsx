import './index.scss'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	ToggleGroup,
	ToggleGroupItem,
} from '@/components/ui/toggle-group'

interface DocToBlockCutterProps {
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
export const DocToBlockCutter = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: DocToBlockCutterProps) => {
	const mode = primary
		? 'storybook-button--primary'
		: 'storybook-button--secondary'
	return (
		<ToggleGroup type='single'>
			<ToggleGroupItem value='a'>
				<Dialog>
					<DialogTrigger>查看</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>
								Are you absolutely sure?
							</DialogTitle>
							<DialogDescription>
								This action cannot be undone. This will
								permanently delete your account and remove
								your data from our servers.
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</ToggleGroupItem>
			<ToggleGroupItem value='b'>
				<Dialog>
					<DialogTrigger>生成</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>生成文档?</DialogTitle>
							<DialogDescription>
								This action cannot be undone. This will
								permanently delete your account and remove
								your data from our servers.
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</ToggleGroupItem>
			<ToggleGroupItem value='c'>
				<Dialog>
					<DialogTrigger>查看进度</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>生成文档?</DialogTitle>
							<DialogDescription>
								This action cannot be undone. This will
								permanently delete your account and remove
								your data from our servers.
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</ToggleGroupItem>
		</ToggleGroup>
	)
}

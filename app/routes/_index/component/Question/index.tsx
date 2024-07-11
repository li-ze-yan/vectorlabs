import { Character } from '~/component'

export const Question = () => {
	const paragraph = 'So , As a front-end developer, what can I do ?'
	return (
		<div>
			<div className="h-[45vh]" />
			<Character paragraph={paragraph} />
			<div className="h-[45vh]" />
		</div>
	)
}

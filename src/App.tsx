import { useState } from 'react'
import './styles/app.scss'

export const App = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<section className='content'>
				<div className='center-content'>
					<img src='../public/doc/group.svg' alt='' />
				</div>
				<h1>
					Vite + React + Typescript + Sass
					<br />
					Storybook + Vitest + NPM Packaged
				</h1>
				<div className='card'>
					<button onClick={() => setCount(count + 1)}>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.tsx</code> and save to test
						HMR
					</p>
				</div>
				<p className='read-the-docs'>
					Click on the logos to learn more
				</p>
			</section>
		</>
	)
}

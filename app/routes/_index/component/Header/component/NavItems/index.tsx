import { Link } from '@remix-run/react'

export const NavItems = () => {
	return (
		<>
			<li>
				<Link to="" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200 ease-linear">
					框架
				</Link>
			</li>
			<li>
				<a href="1" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200 ease-linear">
					语法
				</a>
			</li>
			<li>
				<Link to="" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200 ease-linear">
					原理
				</Link>
			</li>
			<li>
				<Link to="" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200 ease-linear">
					英语
				</Link>
			</li>
			<li>
				<Link to="" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200 ease-linear">
					数据库
				</Link>
			</li>
			<li>
				<Link to="" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200 ease-linear">
					工作
				</Link>
			</li>
		</>
	)
}

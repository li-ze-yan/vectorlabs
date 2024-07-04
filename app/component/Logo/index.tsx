export const Logo = ({ path, className, props }: { path: string; className?: string; props?: any }) => {
	return <img src={path} alt="" className={className} {...props} />
}

export const ImageContainer = ({ imageSource, description }: any) => {
	return (
		<div className="lg:w-[40vw] w-[90vw]">
			<img className="w-full rounded-lg" src={imageSource} alt="" />
			<p className="lg:text-xl md:text-md text-xs mt-1 font-bold">{description}</p>
		</div>
	)
}

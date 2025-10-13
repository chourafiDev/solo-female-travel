const CategoryHeader = () => {
	return (
		<section className="mt-10 mb-16 lg:w-[60%]">
			<div className="flex items-center gap-3">
				<h1 className="text-foreground font-marcellus text-4xl font-semibold">
					{/* Use title from wordpress {category.slug} */}
					Destination
				</h1>
				<div className="px-3 py-1 bg-foreground rounded-full">
					<p className="text-xs font-medium text-background">45 articles</p>
				</div>
			</div>
			<p
				itemProp="description"
				className="text-muted-foreground text-[15px] font-normal mt-4"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi,
				dignissimos veritatis sunt quaerat, ea itaque facilis ut cumque aperiam
				vitae expedita! Corporis molestiae odio animi dolorum at vitae tempora?
			</p>
		</section>
	);
};

export default CategoryHeader;

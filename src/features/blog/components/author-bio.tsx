import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const AuthorBio = () => {
	return (
		<aside aria-labelledby="author-heading" className="w-[80%] mx-auto mb-10">
			<h2
				id="author-heading"
				className="text-foreground font-bold text-[22px] mb-5"
			>
				About The Author
			</h2>
			<div
				itemScope
				itemType="https://schema.org/Person"
				className="flex items-start gap-14"
			>
				<div>
					<Avatar className="size-20 mx-auto mb-2.5">
						<AvatarImage
							src="https://github.com/shadcn.png"
							alt="Emma Carlson"
							itemProp="image"
						/>
						<AvatarFallback>EC</AvatarFallback>
					</Avatar>

					<h3 className="text-foreground font-semibold text-center text-[15px]">
						<Link href="/author/emma-carlson" itemProp="url">
							<span itemProp="name">Emma Carlson</span>
						</Link>
					</h3>
					<p
						className="text-muted-foreground text-xs font-medium text-center"
						itemProp="address"
						itemScope
						itemType="https://schema.org/PostalAddress"
					>
						<span itemProp="addressLocality">Portland</span>,{" "}
						<span itemProp="addressCountry">USA</span>
					</p>
				</div>
				<div className="flex-1">
					<p itemProp="description" className="text-muted-foreground text-sm">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad unde
						laudantium earum atque, cum cumque doloribus reprehenderit maxime,
						natus architecto obcaecati soluta explicabo laboriosam illum in
						voluptatum tempore ducimus quo?
					</p>
				</div>
			</div>
		</aside>
	);
};

export default AuthorBio;

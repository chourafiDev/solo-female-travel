import Image from "next/image";
import Link from "next/link";
import { darkLogo } from "@/lib/assets";

const Info = () => {
	return (
		<div className="md:p-12 p-8 flex-1">
			<Link href="/">
				<Image src={darkLogo} alt="logo" width={190} />
			</Link>

			<p className="text-sm text-muted-foreground mt-6">
				Empowering solo female travelers to explore the world with confidence.
				We share authentic travel experiences, practical safety tips, and
				budget-friendly advice to help you plan your next adventure. Join our
				community of fearless women travelers.
			</p>
		</div>
	);
};

export default Info;

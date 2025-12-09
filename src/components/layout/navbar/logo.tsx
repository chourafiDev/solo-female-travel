import Image from "next/image";
import Link from "next/link";
import { darkLogo } from "@/lib/assets";

const Logo = () => {
	return (
		<Link href="/">
			<Image src={darkLogo} alt="logo" width={190} />
		</Link>
	);
};

export default Logo;

import CallActions from "./call-actions";
import Logo from "./logo";
import NavLinks from "./nav-links";

const index = () => {
	return (
		<header className="custom-container sticky top-0 bg-white z-50 flex items-center justify-between border-b py-2.5">
			<div className="flex items-center gap-24">
				<Logo />
				<NavLinks />
			</div>

			<CallActions />
		</header>
	);
};

export default index;

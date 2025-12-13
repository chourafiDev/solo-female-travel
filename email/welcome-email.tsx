import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Link,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface SimpleWelcomeEmailProps {
	isExistingSubscriber?: boolean;
}

export const WelcomeEmail = ({
	isExistingSubscriber = false,
}: SimpleWelcomeEmailProps) => {
	const greeting = isExistingSubscriber
		? "Welcome back! You're already part of our community."
		: "Welcome to our newsletter! We're excited to have you.";

	return (
		<Html>
			<Head />
			<Preview>🎉 Welcome to our newsletter! Thanks for subscribing.</Preview>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans px-2">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[600px]">
						{/* Header */}
						<Section className="mt-[32px]">
							<Text className="text-center text-[24px] font-bold text-black m-0">
								Welcome! 🎉
							</Text>
							<Text className="text-center text-[16px] leading-[24px] text-[#666666] mt-[8px] mb-0">
								Thanks for joining our community
							</Text>
						</Section>

						{/* Main Content */}
						<Section className="bg-[#f9fafb] rounded-[8px] p-[24px] mt-[32px]">
							<Text className="text-[16px] leading-[24px] text-black">
								Hi there! 👋
							</Text>

							<Text className="text-[16px] leading-[24px] text-black">
								{greeting}
							</Text>

							<Text className="text-[16px] leading-[24px] text-black">
								You&apos;ll receive valuable tips, insights, and updates about
								digital entrepreneurship, side hustles, and building online
								businesses. We promise to only send you content that adds real
								value to your journey.
							</Text>
						</Section>

						{/* What to Expect */}
						<Section className="mt-[32px]">
							<Heading
								as="h2"
								className="text-[20px] font-bold text-black mt-0 mb-[16px]"
							>
								📬 What to expect:
							</Heading>
							<ul className="text-[16px] text-black pl-[20px] m-0">
								<li className="mb-[8px]">
									Weekly tips on building online businesses
								</li>
								<li className="mb-[8px]">
									Latest trends in digital entrepreneurship
								</li>
								<li className="mb-[8px]">
									Exclusive insights and case studies
								</li>
								<li className="mb-[8px]">No spam, just valuable content</li>
							</ul>
						</Section>

						{/* Footer */}
						<Section className="border-t border-solid border-[#eaeaea] pt-[20px] mt-[32px] text-center">
							<Text className="text-[16px] text-black mb-[8px]">
								Thanks for joining us!
							</Text>
							<Text className="text-[16px] text-black">
								Best regards,
								<br />
								<strong>Make Earn Easy</strong>
							</Text>
						</Section>

						{/* Unsubscribe */}
						<Section className="mt-[32px] pt-[20px] border-t border-solid border-[#eaeaea]">
							<Text className="text-[12px] text-[#8898aa] text-center m-0">
								You&apos;re receiving this because you subscribed to our
								newsletter.
								<br />
								<Link href="#" className="text-[#8898aa] underline">
									Unsubscribe here
								</Link>{" "}
								if you no longer wish to receive emails from us.
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default WelcomeEmail;

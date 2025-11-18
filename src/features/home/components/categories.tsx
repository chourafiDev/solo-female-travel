import { touristCarryingLuggage } from '@/lib/assets';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    name: 'Destinations',
    slug: 'destinations',
    postCount: 234,
    image: touristCarryingLuggage,
  },
  {
    name: 'Travel Tips',
    slug: 'travel-tips',
    postCount: 156,
    image: touristCarryingLuggage,
  },
  {
    name: 'Safety',
    slug: 'safety',
    postCount: 89,
    image: touristCarryingLuggage,
  },
  {
    name: 'Budget Travel',
    slug: 'budget-travel',
    postCount: 142,
    image: touristCarryingLuggage,
  },
  {
    name: 'Tours',
    slug: 'tours',
    postCount: 78,
    image: touristCarryingLuggage,
  },
  {
    name: 'Money and Budget',
    slug: 'money-and-budget',
    postCount: 78,
    image: touristCarryingLuggage,
  },
];

const Categories = () => {
  return (
    <section aria-labelledby="categories-heading" className="section-bottom">
      <h2 id="categories-heading" className="title mb-4">
        Top Categories
      </h2>

      <div className="flex md:flex-row flex-col gap-4">
        {/* Left Column - 2 cards stacked */}
        <div className="md:w-[30%] w-full space-y-4">
          <Link
            href={`/${categories[0].slug}`}
            className="block relative h-56 w-full rounded-lg overflow-hidden group"
          >
            <Image
              src={categories[0].image}
              alt={`Browse ${categories[0].name} articles - ${categories[0].postCount} posts`}
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />

            <div className="absolute bottom-4 left-4 z-30">
              <h3 className="text-white font-bold text-lg">{categories[0].name}</h3>
              <p className="text-white text-sm">{categories[0].postCount} Posts</p>
            </div>

            <div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-foreground/50 to-transparent" />
          </Link>

          <Link
            href={`/${categories[1].slug}`}
            className="block relative h-56 w-full rounded-lg overflow-hidden group"
          >
            <Image
              src={categories[1].image}
              alt={`Browse ${categories[1].name} articles - ${categories[1].postCount} posts`}
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />

            <div className="absolute bottom-4 left-4 z-30">
              <h3 className="text-white font-bold text-lg">{categories[1].name}</h3>
              <p className="text-white text-sm">{categories[1].postCount} Posts</p>
            </div>

            <div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-foreground/50 to-transparent" />
          </Link>
        </div>

        {/* Middle Column - 1 tall card */}
        <Link
          href={`/${categories[2].slug}`}
          className="block relative md:h-auto h-56 md:w-[30%] w-full rounded-lg overflow-hidden group"
        >
          <div className="md:h-[464px] h-56">
            <Image
              src={categories[2].image}
              alt={`Browse ${categories[2].name} articles - ${categories[2].postCount} posts`}
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />

            <div className="absolute bottom-4 left-4 z-30">
              <h3 className="text-white font-bold text-lg">{categories[2].name}</h3>
              <p className="text-white text-sm">{categories[2].postCount} Posts</p>
            </div>

            <div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-foreground/50 to-transparent" />
          </div>
        </Link>

        {/* Right Column - 1 card on top, 2 cards on bottom */}
        <div className="md:w-[40%] w-full space-y-4">
          <Link
            href={`/${categories[3].slug}`}
            className="block relative h-56 w-full rounded-lg overflow-hidden group"
          >
            <Image
              src={categories[3].image}
              alt={`Browse ${categories[3].name} articles - ${categories[3].postCount} posts`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />

            <div className="absolute bottom-4 left-4 z-30">
              <h3 className="text-white font-bold text-lg">{categories[3].name}</h3>
              <p className="text-white text-sm">{categories[3].postCount} Posts</p>
            </div>

            <div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-foreground/50 to-transparent" />
          </Link>

          {/* Bottom 2 cards - FIXED HEIGHT */}
          <div className="flex md:flex-row flex-col gap-4">
            <Link
              href={`/${categories[4].slug}`}
              className="block relative md:h-56 h-56 w-full rounded-lg overflow-hidden group"
            >
              <Image
                src={categories[4].image}
                alt={`Browse ${categories[4].name} articles - ${categories[4].postCount} posts`}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute bottom-4 left-4 z-30">
                <h3 className="text-white font-bold text-lg">{categories[0].name}</h3>
                <p className="text-white text-sm">{categories[0].postCount} Posts</p>
              </div>

              <div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-foreground/50 to-transparent" />
            </Link>

            <Link
              href={`/${categories[5].slug}`}
              className="block relative md:h-56 h-56 w-full rounded-lg overflow-hidden group"
            >
              <Image
                src={categories[5].image}
                alt={`Browse ${categories[5].name} articles - ${categories[5].postCount} posts`}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute bottom-4 left-4 z-30">
                <h3 className="text-white font-bold text-lg">{categories[5].name}</h3>
                <p className="text-white text-sm">{categories[5].postCount} Posts</p>
              </div>

              <div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-foreground/50 to-transparent" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;

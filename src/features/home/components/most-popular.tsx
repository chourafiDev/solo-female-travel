import { Separator } from '@/components/ui/separator';
import { touristCarryingLuggage } from '@/lib/assets';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { RxDividerVertical } from 'react-icons/rx';

const MostPopular = () => {
  return (
    <section aria-labelledby="most-popular-heading" className="section-bottom">
      <h2 id="most-popular-heading" className="title mb-6">
        Most Popular
      </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-10">
        {/* DESTINATIONS COLUMN */}
        <div className="w-full lg:border-r border-border lg:pr-3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-foreground font-bold text-lg italic">Destinations</h3>
            <Link
              href="/category/destinations"
              className="text-sm text-foreground/60 font-semibold underline flex items-center gap-1"
              aria-label="View more Destinations posts"
            >
              View More <ArrowRight className="size-3 mt-1" aria-hidden="true" />
            </Link>
          </div>

          {/* Featured Article with Image */}
          <article itemScope itemType="https://schema.org/BlogPosting">
            <Link
              href="/blog/best-places-travel-solo-female-us"
              itemProp="url"
              className="w-full h-full"
            >
              <figure
                itemProp="image"
                itemScope
                itemType="https://schema.org/ImageObject"
                className="relative w-full h-[300px] rounded-xl overflow-hidden"
              >
                <Image
                  src={touristCarryingLuggage}
                  alt="Best places to travel solo female in us"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute object-cover transition-all duration-300 hover:scale-110"
                  itemProp="url"
                  loading="lazy"
                />
              </figure>
            </Link>

            <div className="flex items-center gap-2 mt-4">
              <time
                dateTime="2025-02-12T10:00:00Z"
                itemProp="datePublished"
                className="text-[11px] font-semibold text-foreground"
              >
                {format(new Date('2025-02-12'), 'MMMM d, yyyy').toUpperCase()}
              </time>
              <RxDividerVertical
                className="text-foreground font-bold rotate-12"
                aria-hidden="true"
              />
              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
                className="mb-1"
              >
                <Link
                  href="/author/maya-pena"
                  className="text-[11px] text-foreground font-semibold"
                >
                  <span className="text-muted-foreground">POST BY</span>{' '}
                  <span itemProp="name">MAYA PENA</span>
                </Link>
              </div>
            </div>

            <h4 itemProp="headline" className="post-title">
              <Link href="/blog/best-places-travel-solo-female-us">
                Best places to travel solo female in us
              </Link>
            </h4>

            {/* Hidden Publisher Schema */}
            <div
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
              className="hidden"
            >
              <meta itemProp="name" content="DROZY" />
              <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                <meta itemProp="url" content="https://yourdomain.com/logo.png" />
              </div>
            </div>
          </article>

          <Separator className="my-4" aria-hidden="true" />

          {/* Article 2 */}
          <article itemScope itemType="https://schema.org/BlogPosting">
            <div className="flex items-center gap-2">
              <time
                dateTime="2025-02-10T10:00:00Z"
                itemProp="datePublished"
                className="text-[11px] font-semibold text-foreground"
              >
                {format(new Date('2025-02-10'), 'MMMM d, yyyy').toUpperCase()}
              </time>
              <RxDividerVertical
                className="text-foreground font-bold rotate-12"
                aria-hidden="true"
              />
              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
                className="mb-1"
              >
                <Link
                  href="/author/maya-pena"
                  className="text-[11px] text-foreground font-semibold"
                >
                  <span className="text-muted-foreground">POST BY</span>{' '}
                  <span itemProp="name">MAYA PENA</span>
                </Link>
              </div>
            </div>
            <h4 itemProp="headline" className="post-title">
              <Link href="/blog/best-places-travel-solo-female-travelers" itemProp="url">
                Best places to travel for solo female travelers
              </Link>
            </h4>

            <div
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
              className="hidden"
            >
              <meta itemProp="name" content="DROZY" />
            </div>
            <meta itemProp="image" content="https://yourdomain.com/default-image.jpg" />
          </article>

          <Separator className="my-4" aria-hidden="true" />

          {/* Article 3 */}
          <article itemScope itemType="https://schema.org/BlogPosting">
            <div className="flex items-center gap-2">
              <time
                dateTime="2025-02-08T10:00:00Z"
                itemProp="datePublished"
                className="text-[11px] font-semibold text-foreground"
              >
                {format(new Date('2025-02-08'), 'MMMM d, yyyy').toUpperCase()}
              </time>
              <RxDividerVertical
                className="text-foreground font-bold rotate-12"
                aria-hidden="true"
              />
              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
                className="mb-1"
              >
                <Link
                  href="/author/maya-pena"
                  className="text-[11px] text-foreground font-semibold"
                >
                  <span className="text-muted-foreground">POST BY</span>{' '}
                  <span itemProp="name">MAYA PENA</span>
                </Link>
              </div>
            </div>
            <h4 itemProp="headline" className="post-title">
              <Link href="/blog/safest-countries-solo-female-travelers" itemProp="url">
                Best places to travel for solo female travelers
              </Link>
            </h4>

            <div
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
              className="hidden"
            >
              <meta itemProp="name" content="DROZY" />
            </div>
            <meta itemProp="image" content="https://yourdomain.com/default-image.jpg" />
          </article>
        </div>

        {/* TRAVEL TIPS COLUMN */}
        <div className="w-full lg:border-r border-border lg:pr-3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-foreground font-bold text-lg italic">Travel Tips</h3>
            <Link
              href="/category/travel-tips"
              className="text-sm text-foreground/60 font-semibold underline flex items-center gap-1"
              aria-label="View more Travel Tips posts"
            >
              View More <ArrowRight className="size-3 mt-1" aria-hidden="true" />
            </Link>
          </div>

          {/* Featured Article with Image */}
          <article itemScope itemType="https://schema.org/BlogPosting">
            <Link
              href="/blog/essential-packing-tips-solo-travelers"
              itemProp="url"
              className="w-full h-full"
            >
              <figure
                itemProp="image"
                itemScope
                itemType="https://schema.org/ImageObject"
                className="relative w-full h-[300px] rounded-xl overflow-hidden"
              >
                <Image
                  src={touristCarryingLuggage}
                  alt="Essential packing tips for solo travelers"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute object-cover transition-all duration-300 hover:scale-110"
                  itemProp="url"
                  loading="lazy"
                />
              </figure>
            </Link>

            <div className="flex items-center gap-2 mt-4">
              <time
                dateTime="2025-02-11T10:00:00Z"
                itemProp="datePublished"
                className="text-[11px] font-semibold text-foreground"
              >
                {format(new Date('2025-02-11'), 'MMMM d, yyyy').toUpperCase()}
              </time>
              <RxDividerVertical
                className="text-foreground font-bold rotate-12"
                aria-hidden="true"
              />
              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
                className="mb-1"
              >
                <Link
                  href="/author/maya-pena"
                  className="text-[11px] text-foreground font-semibold"
                >
                  <span className="text-muted-foreground">POST BY</span>{' '}
                  <span itemProp="name">MAYA PENA</span>
                </Link>
              </div>
            </div>

            <h4 itemProp="headline" className="post-title">
              <Link href="/blog/essential-packing-tips-solo-travelers">
                Best places to travel solo female in us
              </Link>
            </h4>

            <div
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
              className="hidden"
            >
              <meta itemProp="name" content="DROZY" />
              <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                <meta itemProp="url" content="https://yourdomain.com/logo.png" />
              </div>
            </div>
          </article>

          <Separator className="my-4" aria-hidden="true" />

          {/* Article 2 */}
          <article itemScope itemType="https://schema.org/BlogPosting">
            <div className="flex items-center gap-2">
              <time
                dateTime="2025-02-09T10:00:00Z"
                itemProp="datePublished"
                className="text-[11px] font-semibold text-foreground"
              >
                {format(new Date('2025-02-09'), 'MMMM d, yyyy').toUpperCase()}
              </time>
              <RxDividerVertical
                className="text-foreground font-bold rotate-12"
                aria-hidden="true"
              />
              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
                className="mb-1"
              >
                <Link
                  href="/author/maya-pena"
                  className="text-[11px] text-foreground font-semibold"
                >
                  <span className="text-muted-foreground">POST BY</span>{' '}
                  <span itemProp="name">MAYA PENA</span>
                </Link>
              </div>
            </div>
            <h4 itemProp="headline" className="post-title">
              <Link href="/blog/stay-safe-traveling-solo" itemProp="url">
                Best places to travel for solo female travelers
              </Link>
            </h4>

            <div
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
              className="hidden"
            >
              <meta itemProp="name" content="DROZY" />
            </div>
            <meta itemProp="image" content="https://yourdomain.com/default-image.jpg" />
          </article>

          <Separator className="my-4" aria-hidden="true" />

          {/* Article 3 */}
          <article itemScope itemType="https://schema.org/BlogPosting">
            <div className="flex items-center gap-2">
              <time
                dateTime="2025-02-07T10:00:00Z"
                itemProp="datePublished"
                className="text-[11px] font-semibold text-foreground"
              >
                {format(new Date('2025-02-07'), 'MMMM d, yyyy').toUpperCase()}
              </time>
              <RxDividerVertical
                className="text-foreground font-bold rotate-12"
                aria-hidden="true"
              />
              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
                className="mb-1"
              >
                <Link
                  href="/author/maya-pena"
                  className="text-[11px] text-foreground font-semibold"
                >
                  <span className="text-muted-foreground">POST BY</span>{' '}
                  <span itemProp="name">MAYA PENA</span>
                </Link>
              </div>
            </div>
            <h4 itemProp="headline" className="post-title">
              <Link href="/blog/budget-travel-tips-solo" itemProp="url">
                Best places to travel for solo female travelers
              </Link>
            </h4>

            <div
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
              className="hidden"
            >
              <meta itemProp="name" content="DROZY" />
            </div>
            <meta itemProp="image" content="https://yourdomain.com/default-image.jpg" />
          </article>
        </div>

        {/* SAFETY GUIDE COLUMN */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-foreground font-bold text-lg italic">Safety Guide</h3>
            <Link
              href="/category/safety"
              className="text-sm text-foreground/60 font-semibold underline flex items-center gap-1"
              aria-label="View more Safety Guide posts"
            >
              View More <ArrowRight className="size-3 mt-1" aria-hidden="true" />
            </Link>
          </div>

          {/* Featured Article with Image */}
          <article itemScope itemType="https://schema.org/BlogPosting">
            <Link
              href="/blog/solo-female-travel-safety-essentials"
              itemProp="url"
              className="w-full h-full"
            >
              <figure
                itemProp="image"
                itemScope
                itemType="https://schema.org/ImageObject"
                className="relative w-full h-[300px] rounded-xl overflow-hidden"
              >
                <Image
                  src={touristCarryingLuggage}
                  alt="Solo female travel safety essentials"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute object-cover transition-all duration-300 hover:scale-110"
                  itemProp="url"
                  loading="lazy"
                />
              </figure>
            </Link>

            <div className="flex items-center gap-2 mt-4">
              <time
                dateTime="2025-02-13T10:00:00Z"
                itemProp="datePublished"
                className="text-[11px] font-semibold text-foreground"
              >
                {format(new Date('2025-02-13'), 'MMMM d, yyyy').toUpperCase()}
              </time>
              <RxDividerVertical
                className="text-foreground font-bold rotate-12"
                aria-hidden="true"
              />
              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
                className="mb-1"
              >
                <Link
                  href="/author/maya-pena"
                  className="text-[11px] text-foreground font-semibold"
                >
                  <span className="text-muted-foreground">POST BY</span>{' '}
                  <span itemProp="name">MAYA PENA</span>
                </Link>
              </div>
            </div>

            <h4 itemProp="headline" className="post-title">
              <Link href="/blog/solo-female-travel-safety-essentials">
                Best places to travel solo female in us
              </Link>
            </h4>

            <div
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
              className="hidden"
            >
              <meta itemProp="name" content="DROZY" />
              <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                <meta itemProp="url" content="https://yourdomain.com/logo.png" />
              </div>
            </div>
          </article>

          <Separator className="my-4" aria-hidden="true" />

          {/* Article 2 */}
          <article itemScope itemType="https://schema.org/BlogPosting">
            <div className="flex items-center gap-2">
              <time
                dateTime="2025-02-06T10:00:00Z"
                itemProp="datePublished"
                className="text-[11px] font-semibold text-foreground"
              >
                {format(new Date('2025-02-06'), 'MMMM d, yyyy').toUpperCase()}
              </time>
              <RxDividerVertical
                className="text-foreground font-bold rotate-12"
                aria-hidden="true"
              />
              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
                className="mb-1"
              >
                <Link
                  href="/author/maya-pena"
                  className="text-[11px] text-foreground font-semibold"
                >
                  <span className="text-muted-foreground">POST BY</span>{' '}
                  <span itemProp="name">MAYA PENA</span>
                </Link>
              </div>
            </div>
            <h4 itemProp="headline" className="post-title">
              <Link href="/blog/top-safety-devices-solo-travelers" itemProp="url">
                Best places to travel for solo female travelers
              </Link>
            </h4>

            <div
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
              className="hidden"
            >
              <meta itemProp="name" content="DROZY" />
            </div>
            <meta itemProp="image" content="https://yourdomain.com/default-image.jpg" />
          </article>

          <Separator className="my-4" aria-hidden="true" />

          {/* Article 3 */}
          <article itemScope itemType="https://schema.org/BlogPosting">
            <div className="flex items-center gap-2">
              <time
                dateTime="2025-02-05T10:00:00Z"
                itemProp="datePublished"
                className="text-[11px] font-semibold text-foreground"
              >
                {format(new Date('2025-02-05'), 'MMMM d, yyyy').toUpperCase()}
              </time>
              <RxDividerVertical
                className="text-foreground font-bold rotate-12"
                aria-hidden="true"
              />
              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
                className="mb-1"
              >
                <Link
                  href="/author/maya-pena"
                  className="text-[11px] text-foreground font-semibold"
                >
                  <span className="text-muted-foreground">POST BY</span>{' '}
                  <span itemProp="name">MAYA PENA</span>
                </Link>
              </div>
            </div>
            <h4 itemProp="headline" className="post-title">
              <Link href="/blog/emergency-preparedness-women-travelers" itemProp="url">
                Best places to travel for solo female travelers
              </Link>
            </h4>

            <div
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
              className="hidden"
            >
              <meta itemProp="name" content="DROZY" />
            </div>
            <meta itemProp="image" content="https://yourdomain.com/default-image.jpg" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default MostPopular;

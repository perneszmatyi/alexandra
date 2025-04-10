import classNames from 'classnames';

export enum CardVariant {
  LARGE = 'LARGE',
  SMALL = 'SMALL',
}

interface NewsCardProps {
  title: string;
  content: string;
  cover?: boolean;
  variant: CardVariant;
}

export const NewsCard = ({ title, content, cover = false, variant }: NewsCardProps) => {
  return (
    <div
      className={`bg-white-text flex h-full w-60 flex-col items-center justify-center gap-14 rounded-lg md:w-80 xl:h-full xl:w-full`}
    >
      <div className="flex flex-col items-start gap-5 px-6 pt-8 pb-5">
        <h1 className="text-blue-main font-montagu-slab font-semibold md:text-2xl xl:text-3xl">
          {title}
        </h1>
        {cover && <div className="bg-brown-2 aspect-[16/9] w-full"></div>}
        <p
          className={classNames('text-blue-main font-raleway leading-tight', {
            'line-clamp-12 font-medium': (variant = CardVariant.LARGE),
            'font-regular': (variant = CardVariant.SMALL),
          })}
        >
          {content}
        </p>
        <button
          className={classNames(
            'font-raleway text-blue-light cursor-pointer md:text-xl lg:text-2xl xl:text-3xl',
          )}
        >
          Tovább
        </button>
      </div>
    </div>
  );
};

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

export const NewsCard = ({ title, variant, content, cover = false }: NewsCardProps) => {
  return (
    <div
      className={`bg-white-text mb-14 flex w-60 flex-col items-center justify-center rounded-2xl shadow-[0.5rem_1rem_0_0_#A6CCDE] md:w-80 xl:h-full xl:w-full`}
    >
      <div className="flex flex-col items-start gap-5 px-6 pt-8 pb-5">
        <h1 className="text-blue-main font-montagu-slab text-xl md:text-2xl xl:text-3xl xl:font-semibold">
          {title}
        </h1>
        {cover && <div className="bg-brown-2 aspect-[16/9] w-full"></div>}
        <p
          className={classNames('text-blue-main font-raleway leading-tight', {
            'line-clamp-12 font-medium': variant === CardVariant.LARGE,
            'font-regular': variant === CardVariant.SMALL,
          })}
        >
          {content}
        </p>
        <button
          aria-label={`${title} olvasása`}
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

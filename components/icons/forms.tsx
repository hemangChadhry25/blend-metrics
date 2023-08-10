import { cn } from "@/lib/utils";

export const Forms = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M11.6663 1.89124V5.33335C11.6663 5.80006 11.6663 6.03342 11.7572 6.21168C11.8371 6.36848 11.9645 6.49596 12.1213 6.57586C12.2996 6.66669 12.533 6.66669 12.9997 6.66669H16.4418M11.6663 14.1666H6.66634M13.333 10.8333H6.66634M16.6663 8.32348V14.3333C16.6663 15.7334 16.6663 16.4335 16.3939 16.9683C16.1542 17.4387 15.7717 17.8211 15.3013 18.0608C14.7665 18.3333 14.0665 18.3333 12.6663 18.3333H7.33301C5.93288 18.3333 5.23281 18.3333 4.69803 18.0608C4.22763 17.8211 3.84517 17.4387 3.60549 16.9683C3.33301 16.4335 3.33301 15.7334 3.33301 14.3333V5.66663C3.33301 4.26649 3.33301 3.56643 3.60549 3.03165C3.84517 2.56124 4.22763 2.17879 4.69803 1.93911C5.23281 1.66663 5.93288 1.66663 7.33301 1.66663H10.0095C10.621 1.66663 10.9267 1.66663 11.2144 1.7357C11.4695 1.79694 11.7134 1.89795 11.9371 2.03503C12.1893 2.18963 12.4055 2.40582 12.8379 2.8382L15.4948 5.49505C15.9271 5.92743 16.1433 6.14362 16.2979 6.39591C16.435 6.61959 16.536 6.86346 16.5973 7.11855C16.6663 7.40627 16.6663 7.712 16.6663 8.32348Z"
        stroke="#306CFE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

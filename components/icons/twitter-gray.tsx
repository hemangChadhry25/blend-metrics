import { cn } from "@/lib/utils";

export const TwitterGray = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.54752 21.7508C16.6042 21.7508 21.5578 14.2474 21.5578 7.74052C21.5578 7.5274 21.5578 7.31524 21.5434 7.10404C22.507 6.407 23.3389 5.54392 24 4.55524C23.1014 4.95364 22.148 5.2148 21.1718 5.32996C22.1998 4.71465 22.9692 3.74674 23.3366 2.60644C22.3701 3.18005 21.3126 3.58427 20.2099 3.80164C19.4675 3.01222 18.4856 2.48948 17.4162 2.31432C16.3468 2.13917 15.2494 2.32135 14.294 2.83269C13.3385 3.34403 12.5782 4.15601 12.1307 5.14299C11.6833 6.12996 11.5735 7.23691 11.8186 8.29252C9.8609 8.19432 7.94576 7.68555 6.19745 6.79924C4.44915 5.91294 2.90676 4.6689 1.6704 3.14788C1.04073 4.23188 0.847872 5.51511 1.1311 6.7363C1.41433 7.9575 2.15234 9.02483 3.19488 9.721C2.41123 9.69804 1.64465 9.48663 0.96 9.10468V9.16708C0.960311 10.3039 1.35385 11.4057 2.07387 12.2854C2.79389 13.1652 3.79606 13.7689 4.9104 13.994C4.18548 14.1917 3.42487 14.2206 2.68704 14.0784C3.00181 15.0568 3.61443 15.9123 4.43924 16.5254C5.26405 17.1385 6.25983 17.4785 7.28736 17.498C6.26644 18.3004 5.09731 18.8938 3.84687 19.244C2.59643 19.5942 1.28921 19.6944 0 19.5389C2.25183 20.9839 4.87192 21.7504 7.54752 21.7469"
        fill="#98A2B3"
      />
    </svg>
  );
};
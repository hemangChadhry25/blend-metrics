import { cn } from "@/lib/utils";

export const AlertTriangle = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.99986 5.33339V8.00006M7.99986 10.6667H8.00653M6.85986 1.90672L1.21319 11.3334C1.09677 11.535 1.03517 11.7636 1.03452 11.9964C1.03387 12.2292 1.09419 12.4581 1.20948 12.6604C1.32477 12.8627 1.49101 13.0312 1.69167 13.1493C1.89232 13.2674 2.12039 13.3308 2.35319 13.3334H13.6465C13.8793 13.3308 14.1074 13.2674 14.3081 13.1493C14.5087 13.0312 14.675 12.8627 14.7902 12.6604C14.9055 12.4581 14.9659 12.2292 14.9652 11.9964C14.9646 11.7636 14.903 11.535 14.7865 11.3334L9.13986 1.90672C9.02102 1.71079 8.85368 1.5488 8.65399 1.43638C8.45431 1.32395 8.22902 1.26489 7.99986 1.26489C7.77071 1.26489 7.54542 1.32395 7.34573 1.43638C7.14605 1.5488 6.97871 1.71079 6.85986 1.90672Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

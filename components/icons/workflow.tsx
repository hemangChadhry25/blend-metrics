import { cn } from "@/lib/utils";

export const WorkFlow = ({
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
      <g clipPath="url(#clip0_1279_10886)">
        <path
          d="M9.1665 3.74996H15.2498C16.1833 3.74996 16.65 3.74996 17.0065 3.93162C17.3201 4.0914 17.5751 4.34637 17.7348 4.65998C17.9165 5.01649 17.9165 5.48321 17.9165 6.41663V7.49996C17.9165 8.27653 17.9165 8.66481 17.7896 8.9711C17.6205 9.37948 17.296 9.70394 16.8876 9.87309C16.5814 9.99996 16.1931 9.99996 15.4165 9.99996M10.8332 16.25H4.74984C3.81642 16.25 3.34971 16.25 2.99319 16.0683C2.67958 15.9085 2.42462 15.6535 2.26483 15.3399C2.08317 14.9834 2.08317 14.5167 2.08317 13.5833V12.5C2.08317 11.7234 2.08317 11.3351 2.21004 11.0288C2.37919 10.6204 2.70365 10.296 3.11203 10.1268C3.41832 9.99996 3.8066 9.99996 4.58317 9.99996M8.58317 12.0833H11.4165C11.6499 12.0833 11.7665 12.0833 11.8557 12.0379C11.9341 11.9979 11.9978 11.9342 12.0378 11.8558C12.0832 11.7667 12.0832 11.65 12.0832 11.4166V8.58329C12.0832 8.34994 12.0832 8.23326 12.0378 8.14413C11.9978 8.06573 11.9341 8.00199 11.8557 7.96204C11.7665 7.91663 11.6499 7.91663 11.4165 7.91663H8.58317C8.34982 7.91663 8.23314 7.91663 8.14401 7.96204C8.06561 8.00199 8.00187 8.06573 7.96192 8.14413C7.9165 8.23326 7.9165 8.34994 7.9165 8.58329V11.4166C7.9165 11.65 7.9165 11.7667 7.96192 11.8558C8.00187 11.9342 8.06561 11.9979 8.14401 12.0379C8.23314 12.0833 8.34982 12.0833 8.58317 12.0833ZM14.8332 18.3333H17.6665C17.8999 18.3333 18.0165 18.3333 18.1057 18.2879C18.1841 18.2479 18.2478 18.1842 18.2878 18.1058C18.3332 18.0167 18.3332 17.9 18.3332 17.6666V14.8333C18.3332 14.5999 18.3332 14.4833 18.2878 14.3941C18.2478 14.3157 18.1841 14.252 18.1057 14.212C18.0165 14.1666 17.8999 14.1666 17.6665 14.1666H14.8332C14.5998 14.1666 14.4831 14.1666 14.394 14.212C14.3156 14.252 14.2519 14.3157 14.2119 14.3941C14.1665 14.4833 14.1665 14.5999 14.1665 14.8333V17.6666C14.1665 17.9 14.1665 18.0167 14.2119 18.1058C14.2519 18.1842 14.3156 18.2479 14.394 18.2879C14.4831 18.3333 14.5998 18.3333 14.8332 18.3333ZM2.33317 5.83329H5.1665C5.39986 5.83329 5.51654 5.83329 5.60567 5.78788C5.68407 5.74793 5.74781 5.68419 5.78776 5.60579C5.83317 5.51666 5.83317 5.39998 5.83317 5.16663V2.33329C5.83317 2.09994 5.83317 1.98326 5.78776 1.89413C5.74781 1.81573 5.68407 1.75199 5.60567 1.71204C5.51654 1.66663 5.39986 1.66663 5.1665 1.66663H2.33317C2.09982 1.66663 1.98314 1.66663 1.89401 1.71204C1.81561 1.75199 1.75187 1.81573 1.71192 1.89413C1.6665 1.98326 1.6665 2.09994 1.6665 2.33329V5.16663C1.6665 5.39998 1.6665 5.51666 1.71192 5.60579C1.75187 5.68419 1.81561 5.74793 1.89401 5.78788C1.98314 5.83329 2.09982 5.83329 2.33317 5.83329Z"
          stroke="#306CFE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1279_10886">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
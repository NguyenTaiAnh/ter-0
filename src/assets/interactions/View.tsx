import { IconProps } from "@/types/icons";

const ViewIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => {
  const svgSize = `${size}px`;

  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      className={className}
    >
      <g>
        <path
          fill="currentColor"
          d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
        ></path>
      </g>
    </svg>
  );
};

export default ViewIcon;

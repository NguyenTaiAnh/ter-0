import { IconProps } from "@/types/icons";

const ReTweetIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => {
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
          d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
        ></path>
      </g>
    </svg>
  );
};

export default ReTweetIcon;

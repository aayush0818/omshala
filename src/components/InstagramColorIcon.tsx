import { useId } from "react";

const InstagramColorIcon = ({ className = "w-5 h-5" }: { className?: string }) => {
  const rawId = useId();
  const gid = `igGradient-${rawId.replace(/[:]/g, "")}`;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient
          id={gid}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(2 22) rotate(-45) scale(30)"
        >
          <stop stopColor="#FFDD55" />
          <stop offset="0.25" stopColor="#FF8B3D" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="0.75" stopColor="#C837AB" />
          <stop offset="1" stopColor="#4C68D7" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gid})`} />
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="white" strokeWidth="1.5" fill="none" />
      <path
        d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="17" cy="7" r="1.25" fill="white" />
    </svg>
  );
};

export default InstagramColorIcon;

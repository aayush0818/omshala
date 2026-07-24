const InstagramColorIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="igGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2 22) rotate(90) scale(22)">
        <stop stopColor="#FFDD55" />
        <stop offset="0.5" stopColor="#FF543E" />
        <stop offset="1" stopColor="#C837AB" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#igGradient)" />
    <path
      d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="17" cy="7" r="1.25" fill="white" />
    <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);

export default InstagramColorIcon;

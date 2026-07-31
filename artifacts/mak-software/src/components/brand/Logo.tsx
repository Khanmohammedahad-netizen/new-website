import React from 'react';

/**
 * MAK brand lockup: a rounded "badge" monogram (M) plus the wordmark.
 * The mark is drawn in currentColor with no fill, so it adapts to whatever
 * text colour the navbar sets over a given hero (white on dark, green on
 * light). The filled + green-accented version lives in /public/favicon.svg.
 */
export default function Logo({
  withWordmark = true,
  className = '',
}: {
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="1.6"
          y="1.6"
          width="28.8"
          height="28.8"
          rx="8"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.85"
        />
        <path
          d="M9 22 V10.5 L16 17.5 L23 10.5 V22"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-mono font-semibold text-lg tracking-tight">MAK</span>
          <span className="font-sans text-[0.55rem] tracking-[0.2em] uppercase opacity-60 mt-1">
            Software Solutions
          </span>
        </span>
      )}
    </span>
  );
}

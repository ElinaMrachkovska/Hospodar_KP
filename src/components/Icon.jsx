const paths = {
  shears: (
    <>
      <circle cx="7" cy="19" r="2.4" />
      <circle cx="17" cy="19" r="2.4" />
      <path d="M9 17.5 20 4M15 17.5 4 4" />
    </>
  ),
  tree: (
    <>
      <path d="M12 21V13" />
      <path d="M12 13 6 7h5.2L7 3h10l-4.2 4H18l-6 6Z" />
    </>
  ),
  grass: (
    <>
      <path d="M4 21c0-6 2-10 2-14M9 21c0-8 1.5-12 1.5-16M14 21c0-7-1-11 1-15M19 21c0-5-2-9-2-13" />
    </>
  ),
  bush: (
    <>
      <path d="M12 21v-6" />
      <circle cx="8" cy="11" r="4.2" />
      <circle cx="16" cy="11" r="4.2" />
      <circle cx="12" cy="8" r="4.2" />
    </>
  ),
  conifer: (
    <>
      <path d="M12 3 6 11h3l-4 6h5v4h4v-4h5l-4-6h3L12 3Z" />
    </>
  ),
  landscape: (
    <>
      <path d="M3 18 8.5 9l3.5 5 2.5-3.5L21 18Z" />
      <circle cx="7" cy="6.5" r="1.8" />
    </>
  ),
  chipper: (
    <>
      <rect x="4" y="10" width="10" height="8" rx="1" />
      <path d="M14 12h3.5l2.5 3v3h-6" />
      <circle cx="7.5" cy="19.5" r="1.4" />
      <circle cx="17" cy="19.5" r="1.4" />
      <path d="M8 10V7a2 2 0 0 1 2-2h3" />
    </>
  ),
  phone: (
    <>
      <path d="M6 3h3l1.5 4L8.5 8.5a10 10 0 0 0 7 7L17 13.5l4 1.5v3a2 2 0 0 1-2 2C11.5 20 4 12.5 4 5a2 2 0 0 1 2-2Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </>
  ),
  roller: (
    <>
      <rect x="3" y="6" width="18" height="7" rx="3.5" />
      <path d="M7 13v3M17 13v3" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  sprayer: (
    <>
      <rect x="5" y="9" width="7" height="11" rx="1.5" />
      <path d="M8.5 9V5.5a2 2 0 0 1 2-2h1" />
      <path d="M12 7h4.5l3 2.2" />
      <path d="M18 8.2v2M20 7.5v3.4" />
    </>
  ),
  stump: (
    <>
      <ellipse cx="12" cy="8" rx="7" ry="3.2" />
      <path d="M5 8v6c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2V8" />
      <path d="M9 8.6c1 .6 4 .6 5 0" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M8 21h8M12 18v3" />
      <path d="M7 9l3 3" />
    </>
  ),
  circuit: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" />
      <circle cx="12" cy="12" r="1.8" />
    </>
  ),
  switch: (
    <>
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <circle cx="12" cy="9" r="1.8" />
      <path d="M12 12.5v3M9.5 20h5" />
    </>
  ),
  scrap: (
    <>
      <path d="M4 15l3-9h4l-2 6h4l3-9h4l-3 12H7Z" />
      <path d="M6 19h13" />
    </>
  ),
  copper: (
    <>
      <path d="M4 8c3-3 13-3 16 0M4 12c3-3 13-3 16 0M4 16c3-3 13-3 16 0" />
    </>
  ),
  recycle: (
    <>
      <path d="M7 8 4.5 12.3 8 14.5M4.5 12.3H10M14 4.5l3 5.3-3.5 2M17 9.8l2.8-4.8M9.8 20l4-1 -.8-3.8M13.8 19l-6-1M17.2 15l2.8 5" />
    </>
  ),
  hammer: (
    <>
      <path d="M14.5 6.5 18 3l3 3-3.5 3.5" />
      <path d="M12.8 8.2 16 11.4 6.5 21 3 17.5Z" />
    </>
  ),
  woodbeam: (
    <>
      <rect x="3" y="9" width="18" height="6" rx="1" />
      <circle cx="6.5" cy="12" r="0.9" />
      <circle cx="12" cy="12" r="0.9" />
      <circle cx="17.5" cy="12" r="0.9" />
    </>
  ),
  metalbeam: (
    <>
      <path d="M3 19 12 4l9 15Z" />
      <path d="M8.2 13h7.6M6.5 16h11" />
    </>
  ),
  broom: (
    <>
      <path d="M14 3 6 15" />
      <path d="M6 15 3 21l8-4Z" />
      <path d="M11 9l6 3" />
    </>
  ),
  truck: (
    <>
      <rect x="2.5" y="8" width="11" height="8" rx="1" />
      <path d="M13.5 11h4l3 3v2h-7Z" />
      <circle cx="7" cy="18.5" r="1.6" />
      <circle cx="17" cy="18.5" r="1.6" />
    </>
  ),
  sofa: (
    <>
      <path d="M5 12V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <rect x="3" y="12" width="18" height="6" rx="1.5" />
      <path d="M5 18v2M19 18v2" />
    </>
  ),
  firewood: (
    <>
      <circle cx="8" cy="9" r="4" />
      <circle cx="16" cy="9" r="4" />
      <circle cx="8" cy="17" r="4" />
      <circle cx="16" cy="17" r="4" />
    </>
  ),
  woodchips: (
    <>
      <path d="M4 6l5 3-2 4-5-3Z" />
      <path d="M14 4l6 4-3 5-6-4Z" />
      <path d="M6 15l6 3-2 5-6-3Z" />
    </>
  ),
  branch: (
    <>
      <path d="M4 20 15 4" />
      <path d="M9 13l4-2M11 9l4-2M7 17l4-2" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l6 3.5-6 3.5Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <>
      <path d="M14 21v-7h2.5l.5-3H14V9.2c0-.9.3-1.7 1.7-1.7H17V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.1V11H8v3h2.5v7Z" />
    </>
  ),
  tiktok: (
    <>
      <path d="M16 3.5c.4 2 1.8 3.4 4 3.7v3c-1.5 0-2.9-.4-4-1.2v6.3a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v3.1a2.6 2.6 0 1 0 1.8 2.5V3.5Z" />
    </>
  ),
  viber: (
    <>
      <path d="M7 4.5h10a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3h-6l-4 3.2v-3.2H7a3 3 0 0 1-3-3v-6.5a3 3 0 0 1 3-3Z" />
      <path d="M9 9.2c0 3 2.3 5.3 5.2 5.4.3 0 .6-.2.7-.5l.3-1a.6.6 0 0 0-.3-.7l-1.3-.6a.6.6 0 0 0-.7.1l-.4.4a3.8 3.8 0 0 1-2.1-2.1l.4-.4a.6.6 0 0 0 .1-.7l-.6-1.3a.6.6 0 0 0-.7-.3l-1 .3c-.3.1-.5.4-.5.7Z" fill="currentColor" stroke="none" />
    </>
  ),
  
telegram: (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M6.5 12.2 17 7.8l-1.7 9.6c-.1.5-.6.6-.9.3l-2.8-2.3-1.5 1.5c-.2.2-.5.1-.5-.2l.2-2.9 6-5.6-7.3 4.6Z" fill="currentColor" stroke="none" />
  </>
),
whatsapp: (
  <>
    <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z" />
    <path d="M8.7 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.5.6 1.6.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.6-.7.8-.9.2-.2.3-.2.5-.1l1.5.7c.2.1.3.2.4.3 0 .2 0 .9-.3 1.3-.3.5-1.4 1-2 .9-.5-.1-2.2-.5-3.9-2.1-1.9-1.7-2.5-3.2-2.6-3.4-.1-.2-.7-1.2-.7-2.2 0-1 .5-1.5.7-1.7Z" fill="currentColor" stroke="none" />
  </>
),
}

export default function Icon({ name, size = 24, strokeWidth = 1.6, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  )
}

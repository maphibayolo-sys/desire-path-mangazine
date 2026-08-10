/* ────────────────────────────────────────────────────────────────
   PUBLICATION CONSTANTS
   ──────────────────────────────────────────────────────────────── */

/* The registered DOI for Desire Path Mangazine, Volume 1 */
export const VOLUME_ONE_DOI = '10.5281/zenodo.21455630';

/* The persistent DOI link. This resolves to the Zenodo record, so it is
   used for every "Read Volume One" action across the site. */
export const DOI_URL = `https://doi.org/${VOLUME_ONE_DOI}`;
export const VOLUME_ONE_URL = DOI_URL;

// Taken from the existing project source
export const LINKEDIN_URL = 'https://www.linkedin.com/in/maphi-b-22a23b155';

// Taken from the existing project source. Change if you prefer another address.
export const CONTACT_EMAIL = 'maphi.bayolo@gmail.com';

export const SITE_URL = 'https://desirepath.example.com';

/* The editorial framework, as printed in Volume One (Editor's Welcome, p.2) */
export const THEME_FRAMEWORK: { name: string; body: string }[] = [
  { name: 'Observe', body: 'We start with real observations from the world around us.' },
  { name: 'Question', body: 'We challenge assumptions and look deeper.' },
  { name: 'Understand', body: 'We connect patterns, people and behaviours.' },
  { name: 'Build Better', body: 'We turn insight into action and better systems.' },
  { name: 'Tomorrows', body: 'We imagine possibilities and shape the future.' },
];

/* The ten pieces collected in Volume One (Contents, pp.3-4) */
export const VOLUME_ONE_CONTENTS: string[] = [
  'What Is a Desire Path?',
  'Active SC Clearance Loop',
  'Presence Economy',
  'Work Culture By Design',
  'Everyone Wants a Hero',
  'The Return of Ownership',
  'Beyond the Paycheck',
  'The Antidote to Slop Is Taste',
  'The Infinite AI Detection Loop',
  'The Disclosure of It All: Now What?',
];

/* Subject areas, as printed on the Volume One cover */
export const SUBJECT_AREAS: { name: string; body: string }[] = [
  { name: 'Work', body: 'New ways of thinking and doing.' },
  { name: 'Technology', body: 'Tools, systems and their impact.' },
  { name: 'AI', body: 'Opportunities, risks and reality.' },
  { name: 'Life', body: 'The human side of progress.' },
];

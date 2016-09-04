import moment from 'moment';

export default function determineDeafultSemester () {
  const now = moment();
  const month = now.month();

  // Jan, Feb, Mar, Apr, May (0-4) = Spring
  // June, July (5-6) = Summer
  // Aug, Sept, Oct, Nov, Dec (7-11) = Fall
  let season;
  if ((month >= 0) && (month <= 4)) {
    season = 'Spring';
  } else if ((month >= 5) && (month <= 6)) {
    season = 'Summer';
  } else {
    season = 'Fall';
  }

  const year = now.year();

  return `${season} ${year}`;
}

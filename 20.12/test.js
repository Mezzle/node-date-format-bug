const dateFormatOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

console.log(new Date().toLocaleTimeString('en-GB', dateFormatOptions));

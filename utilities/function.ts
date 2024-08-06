export const formatDate = (date: string): string => {
  const itemDate = new Date(date);
  const formattedDate = `${String(itemDate.getDate()).padStart(
    2,
    '0',
  )}-${itemDate.toLocaleString('en-US', {month: 'short'})}-${String(
    itemDate.getFullYear(),
  ).slice(-2)}`;

  return formattedDate;
};

export const formatDateENGB = (dateString: string): string => {
  const date = new Date(dateString);
  
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short', 
    year: '2-digit'
  };

  const formatter = new Intl.DateTimeFormat('en-GB', options);
  
  const [day, month, year] = formatter.format(date).toUpperCase().split(' ');
  
  return `${day}-${month}-${year}`;
};

export const calcAgingDate = (date: string): number => {
  const itemDate = new Date(date);

  const currDate = new Date();
  const dayDiff = Math.round(
    (currDate.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  return dayDiff;
};

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

export const calcAgingDate = (date: string): number => {
  const itemDate = new Date(date);

  const currDate = new Date();
  const dayDiff = Math.round(
    (currDate.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  return dayDiff;
};

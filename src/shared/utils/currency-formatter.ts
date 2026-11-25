export const currencyFormatter = (value: number | string): string => {
  if (value === null || value === undefined || value === '') {
    return '$0.00';
  }

  const numericValue =
    typeof value === 'string' ? Number(value.trim().replace(',', '.')) : Number(value);

  if (!Number.isFinite(numericValue)) {
    return '$0.00';
  }

  return numericValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
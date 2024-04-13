const formatCL = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
}).format;

const getDecimals = (number) => {
  let decimalPortion = Math.abs(number % 1).toFixed(2);
  return decimalPortion.substring(decimalPortion.indexOf(".") + 1);
};

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.substring(0, maxLength).trim() + '...' : text;
}

export {formatCL, getDecimals, truncateText}
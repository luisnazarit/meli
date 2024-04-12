const formatCL = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
}).format;

export {formatCL}
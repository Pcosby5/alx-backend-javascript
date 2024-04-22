/**
 * Returns an object representing the budget for the current year.
 *
 * @param {number} income - The income value.
 * @param {number} gdp - The gdp value.
 * @param {number} capita - The capita value.
 * @returns {Object} - The budget object for the current year.
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = (new Date()).getFullYear();

  return {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita,
  };
}

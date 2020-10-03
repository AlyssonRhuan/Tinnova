export default [
  {
    name: 'Vehicle',
    selector: 'vehicle',
    sortable: true,
  },
  {
    name: 'Brand',
    selector: 'brand',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
  },
    {
      name: 'Sold',
      selector: 'isSold',
      sortable: true,
      format: row => row.isSold ? "Yes" : "No"
    },
];
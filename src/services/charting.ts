export const getChartOptions = (title: string) => ({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: title,
    },
  },
});

export const getChartData = () => { };

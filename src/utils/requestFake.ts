const requestFake = () =>
  new Promise(resolve => setTimeout(() => resolve({ data: true }), 1500));

export default requestFake;

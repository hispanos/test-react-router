export const saveData = (data) => {
  const currentData = JSON.parse(localStorage.getItem("imc")) || [];
  currentData.unshift(data);
  localStorage.setItem("imc", JSON.stringify(currentData));
};

export const getData = () => {
  return JSON.parse(localStorage.getItem("imc")) || [];
};

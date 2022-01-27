export const save = ({ key, payload }) => {
  localStorage.setItem(key, payload);
};

export const get = key => localStorage.getItem(key);

export const remove = key => {
  localStorage.removeItem(key);
};
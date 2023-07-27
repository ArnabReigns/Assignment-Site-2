export const useSetLocalStorage = (key: string, value: string | object) => {
  var newvalue = JSON.stringify(value);
  localStorage.setItem(key, newvalue);

  return [key, newvalue];
};

export const useGetLocalStorage = (key: string) => {
  var data = localStorage.getItem(key);
  if (data) {
    var newvalue = JSON.parse(data);
    return [key, newvalue];
  }

  return [key, null];
};

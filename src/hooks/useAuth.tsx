const useAuth = () => {
  var data = localStorage.getItem("user_data");
  if (data) {
    var userData = JSON.parse(data);
    return userData;
  }

  return null;
};

export default useAuth;

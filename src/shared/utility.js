export const handleResponse = (response) => {
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("id", response.data.id || response.data.admin.id);

  const authState = {
    token: response.data.token,
    id: response.data.id,
  };

  return authState;
};

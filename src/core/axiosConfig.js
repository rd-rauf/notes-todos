const config = {
  init: axiosInstance => {
    axiosInstance.interceptors.request.use(
      request => {
        // modify request ...
        return request;
      },
      error => {
        return Promise.reject(error);
      }
    );

    axiosInstance.interceptors.response.use(
      response => {
        // modify request ...
        return response;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }
};

export default config;

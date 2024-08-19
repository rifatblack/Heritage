import AxiosInstance from "../../axiosinstance";
export const getSession = async () => {
  try {
    const response = await AxiosInstance.get("auth/session");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching session:", error);
    throw error;
  }
};

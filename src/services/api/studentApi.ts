import apiClient from "./apiClient";


export const fetchStudent = async () => {
    const response = await apiClient.get(`/student`);
    // const data = renameFields(response.data);
    const data = response.data.data;

    return data;
};
    

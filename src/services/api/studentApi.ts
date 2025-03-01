import apiClient from "./apiClient";

// const renameFields = (data: StudentApi) => {
//     if (Array.isArray(data)) {
//         return data.map((item) => {
//             const { firstName, lastName, ...rest } = item;
//             return {
//                 ...rest,
//                 fullName: `${firstName} ${lastName}`,
//             };
//         });
//     } else {
//         const { firstName, lastName, ...rest } = data;
//         return {
//             ...rest,
//             fullName: `${firstName} ${lastName}`,
//         };
//     }
// };

// export const fetchStudents = async () => {
//     const response = await apiClient.get("/students");
//     const data = renameFields(response.data);

//     return data ?? [];
// };

export const fetchStudentById = async (id: number) => {
    const response = await apiClient.get(`/student/${id}`);
    // const data = renameFields(response.data);
    const data = response.data;

    return data;
};

// export const fetchStudentList = async () => {
//     const response = await apiClient.get("/students");
//     const data = response.data.map((item: any) => ({ id: item.id, name: `${item.firstName} ${item.lastName}` }));

//     return data ?? [];
// };

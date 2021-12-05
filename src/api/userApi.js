import axiosClient from "./axiosClient";

const userApi = {
    getAll(params) {
        const url = '/auth/local/register';
        return axiosClient.post(url, { params });
    },
}

export default userApi;
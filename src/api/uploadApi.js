import axiosClient from './axiosClient'

const uploadApi = {
    detect: (body) => {
        const url = "/detections";
        return axiosClient.post(url, body)
    },
    image: (body) => {
        const url = "/image";
        return axiosClient.post(url, body)
    }
}

export default uploadApi
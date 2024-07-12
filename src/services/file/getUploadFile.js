import axios from "axios";
import { HOST } from "../index";

export function getUploadFile(setAttachments, formData, id) {
  return axios
    .post(`${HOST}/api/File/UploadFile/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      if (res.data.success) {
        setAttachments((prev) => [
          ...prev,
          {
            id: res.data.data.id,
            fileName: res.data.data.fileName,
            address: res.data.data.address,
          },
        ]);
      }
    })
    .catch((error) => console.log(error, "error in getUploadFile axios"));
}

import axios from "axios";
const { REACT_APP_API_ENDPOINT } = process.env;
const apiEndpointEnv = REACT_APP_API_ENDPOINT || "http://localhost:5000"
export default {
  getApps: async (params) => {
    return (
      (await axios.get(`${apiEndpointEnv}/api/v2/apps`, {params}))?.data ||
      0
    );
  },
  createApp: async (id, params = {}) => {
    return (
      (await axios.post(`${apiEndpointEnv}/api/v2/launch`, { id, params }))?.data ||
      0
    ); 
  },
  deleteApp: async (id) => {
    return (
      (await axios.delete(`${apiEndpointEnv}/api/v2/apps/${id}`))?.data ||
      0
    );
  },
};

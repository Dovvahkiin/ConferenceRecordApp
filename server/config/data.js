require("dotenv").config();
const nodePort = process.env.NODE_PORT;
const hostHTTP = process.env.HOST_HTTP;

module.exports = {
  nodePort,
  hostHTTP,
  corsOptions: {
    origin: [hostHTTP + nodePort],
  },
};

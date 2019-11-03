module.exports = {
  // CONNECTION_URL: "mongodb://user:user@localhost:27017/weblog", これだとTypeError: Cannot read property 'db' of null出力される 原因考える
  CONNECTION_URL: "mongodb://localhost:27017/weblog",
  DATABASE: "weblog",
  OPTIONS: {
    family: 4
  }
};
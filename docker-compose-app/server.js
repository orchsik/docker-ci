const express = require("express");
const redis = require("redis");

const app = express();

const redisClient = redis.createClient({
  host: "redis-server", // docker-compose.yml에 명시한 컨테이너 이름으로 주면된다.
  port: 6379,
});

redisClient.set("number", 0);

app.get("/", (req, res) => {
  redisClient.get("number", (err, number) => {
    res.send(`숫자가 1씩 올라갑니다. 숫자: ${number}`);
    redisClient.set("number", parseInt(number, 10) + 1);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running PORT:${PORT}`);
});

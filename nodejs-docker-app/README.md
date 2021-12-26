## 도커 볼륨설정

```bash
docker run \
 --publish 3000:3000 \
 --volume /usr/src/app/node_modules \
 --volume $(pwd):/usr/src/app \
 --rm \
 --detach \
 {이미지 ID}
```

```cmd
docker run ^
  --publish 3000:3000 ^
  --volume /usr/src/app/node_modules ^
  --volume %cd%:/usr/src/app ^
  --rm ^
  --detach ^
  {이미지 ID}
```

---

<br />

## 도커 명령로 경로 지정시(볼륨옵션 등) Window, Mac 기호가 다름.

### MAC 에서

```
-v $(pwd):/usr/src/app
```

### Window 에서

```
-v %cd%:/usr/src/app
```

이런 식으로 다르게 $(pwd) => %cd% 이렇게 다르게 사용.

---

<br />

## [nodemon -L server.js](https://www.npmjs.com/package/nodemon)

- In some networked environments (such as a container running nodemon reading across a mounted drive), you will need to use the legacyWatch: true which enables Chokidar's polling.

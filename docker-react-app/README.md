## [개발] docker run command

```cmd
docker run ^
  --publish 3000:3000 ^
  --volume /usr/src/app/node_modules ^
  --volume %cd%:/usr/src/app ^
  --name react ^
  --env CHOKIDAR_USEPOLLING=true ^
  --rm ^
  react
```

## [개발 + docker-compose] docker run command

```bash
docker-compose up --build
```

## [운영] docker run command

```bash
# 80포트는 Nginx의 기본 포트.
docker run --publish 3000:80 {이미지이름}
```

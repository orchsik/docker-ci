## docker run command

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

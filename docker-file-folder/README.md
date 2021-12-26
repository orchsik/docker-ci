## dockerfile로 도커 이미지 만들기

$ docker build ./
$ docker build -t orchsik/hello ./

## FROM RUN CMD 등은 도커 서버에게 무엇을 하라고 알려주는 것이다.

### FROM

이미지 생성시 기반이 되는 디미지 레이어.
{이미지이름}:{태그}형식으로 작성.
태그를 붙히지 않으면 자동으로 가장 최신 버전 다운로드.
ex) ubuntu:14.04

### RUN

도커 이미지가 생성되기 전에 수행할 쉘 명령어.

### CMD

컨테이너가 시작되었을 때 실행할 실행 파일 또는 쉘 스크립트.
해당 명령어는 Dockerfile 내에서 1회만 쓸 수 있다.

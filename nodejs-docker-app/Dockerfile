
# node를 사용할 수 있는 베이스 이미지 사용.
FROM node:10

# 이미지 안에서 애플리케이션 소스코드를 갖고 있을 디렉토리 생성.
# 이 디렉토리가 애플리케이션에 working 디렉토리가 된다.
# 왜 따로 working 디렉토리가 있어야 하나요? 지정하지 않으면 root 디렉토리에 소스코드가 생성되기때문에
WORKDIR /usr/src/app

# 베이스 이미지에는 package.json, server.js 파일이 없다.
# 임시컨테이너로 복사해야 베이스이미지와 복사한 파일로 이미지를 임시컨테이너로 만들 수 있다.
COPY ./package.json ./
# npm install 전에 소스파일을 COPY 하게하면 소스파일만 변경되서 npm install이 필요하지 않는 경우가 발생
# COPY ./ ./

# 추가적으로 필요한 파일들을 다운로드 받는다.
RUN npm install

# 소스코드는 npm install 후 COPY
# docker run 명령시 볼륨 설정하면 소스코드는 COPY 하지 않아도 되요.
# COPY ./ ./

# 컨테이너 시작시 실행 될 명령어를 명시해준다.
CMD ["npm", "run", "dev"]
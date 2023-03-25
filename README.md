<img src="https://user-images.githubusercontent.com/53360337/201550869-95438e85-8d56-4be2-a0db-bd17725201b9.png" width="200" height="200">


# DIA(DIrecting Assistance)

> 실시간 풋살 영상 분석 및 전술 보드 서비스

**DIA**는 풋살을 즐기는 일반인들이 쉽고 간단하게 사용할 수 있는 실시간 운동 분석 서비스입니다. 자체 구현한 인공지능 모델이 드론으로 촬영한 **경기 영상을 실시간으로 분석하여** 좌표를 표시한 영상을 제공하며, 더욱 편리한 전술 수립을 위해 **드로잉 기능**을 지원합니다. 또한, Wear OS를 활용하여 **선수 개개인의 경기 내역을 기록 및 분석**할 수 있습니다.

- 서비스명 : DIA
- 팀 구성원 : 권혁림, 강승훈, 김진산, 윤영훈, 이슬기, 조경민 
- 개발 기간 : 2022.10.11 ~ 2022.11.21 (6주)
- 서비스 개요 : 축구 영상 분석 서비스
- [Notion](https://www.notion.so/DIA-5a85b033e8134ea5a01e6d54be33906e)

# 목차
[1. 서비스 소개](#1)

[2. 시스템 아키텍처](#2)

[3. 개발 설정](#3)

[4. 프로젝트 파일 구조](#4)

[5. 기술 스택](#5)

[6. 프로젝트 산출물](#6)

[7. 데이터 출처](#7)

<br/>
<div id = '1'>

# 서비스 소개


<br>

## 주요 기능
    
- 실시간 드론 영상 좌표 처리 및 트래킹
- 영상 좌표 2D 표시 및 드로잉, 실시간 심박수 측정 기능 제공
- 히트맵 등 경기 분석 데이터 제공
    
## 세부 기능

| 구분 | 기능                       | 설명                                                                          | 비고                    |
| :--- | :------------------------- | :---------------------------------------------------------------------------- | :---------------------- |
| 1    | 실시간 트래킹              | 실시간으로 드론 영상을 분석하여 좌표 처리 및 트래킹                           | PC 실행 파일(exe)       |
| 2    | 좌표 데이터 기반 영상 표시 | 실시간으로 트래킹한 좌표 데이터를 2D 영상으로 표시                            | Tablet PC(Web)          |
| 3    | 버퍼링 및 재생바 조절      | 사용자 경험 향상을 위한 버퍼링 및 재생바를 통한 영상 재생 시점 조절 기능 제공 | Tablet PC(Web)          |
| 4    | 전술보드 드로잉            | 실시간 영상 위에 색상을 선택하여 다양한 전술 표시 가능                        | Tablet PC(Web)          |
| 5    | 선수별 실시간 심박수 측정  | 갤럭시 워치를 이용한 실시간 심박수 측정 및 표시                               | Wear OS, Tablet PC(Web) |
| 6    | 선수별 경기 기록 분석      | 경기별 심박수, 히트맵 등 경기 내용 기록 및 분석 결과를 능력치와 그래프로 제공 | Mobile(Android App)     |

    
## 화면 소개

### 사용법 및 선수 등록
![태블릿](https://user-images.githubusercontent.com/77014020/202987251-4cf541dd-3c12-40c5-9383-be7678ee2ee1.gif)


### 영상 분석
- 실시간 영상 좌표 처리 및 트래킹
- 드론 영상 좌표 처리 및 트래킹
1.  실시간 트래킹

    ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/77014020/202988539-99641c66-21ee-4f55-b6ce-d3f2ebbce5ff.gif)

2.  실시간 2D 좌표 변환

    ![ezgif com-gif-maker](https://user-images.githubusercontent.com/77014020/202987916-bcb7f0c6-537a-4d92-af75-3ea2fcb504a6.gif)

<br>

### 전술 보드
- 영상 2D 표시
- 버퍼링
- 시간 이동
- 전술보드 그리기
- 선수 이동
- 선수별 실시간 심박수 확인

  ![2D그림판](https://user-images.githubusercontent.com/77014020/202992408-65700ec2-31bf-459d-913d-31f53b0b4957.gif)

<br>

### 심박수 측정

  <br/>
  <img src="https://user-images.githubusercontent.com/77014020/202990459-d6712e77-1d53-4099-a4b9-8ebd37e54d5a.jpg" width="250" height="500"/>

<br/>

### 마이페이지
- 선수 능력치 
- 선수 기록
- 경기당 선수 히트맵 및 분석 데이터

<br>

<img src="https://user-images.githubusercontent.com/77014020/202991021-f5724536-b0bd-4315-b310-d8b718501823.jpg" width="250" height="500"/>
<img src="https://user-images.githubusercontent.com/77014020/202991184-1ab2e0d6-2f1f-4f8b-b918-03f1628cdcc0.jpg" width="250" height="500"/>




<br>







<br>

<div id = '2'>

<br>

## 시스템 아키텍처
![image](https://user-images.githubusercontent.com/53360337/201556720-4a847a20-e02a-417b-8898-8d9293ee7a18.png)
    
Samsung Flow와 드론을 이용하여 촬영한 영상을 GPU가 탑재된 노트북으로 전송하여, StrongSORT 및 YOLO로 구성된 영상 처리 프로그램을 실행 후 실시간으로 분석한 결과를 태블릿에 표시합니다. Wear OS를 착용한 선수는 실시간 심박수 측정이 가능합니다.
    
<br>
<div id = '3'>

## 개발 설정

### 서비스별 포트 번호

| 구분 | 포트번호 |
| --- | --- |
| Jenkins | 8080 |
| Spring boot | 8081 |
| React | 8082 |
| MySQL | 3306 |
| Redis | 6379 |

<br>
    
### Dockerfile

```
# backend/Dockerfile (Spring Boot)

FROM openjdk:8-jdk-alpine
RUN addgroup -S seungh1024 && adduser -S seungh1024 -G seungh1024
USER seungh1024:seungh1024
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"] 
```

```
# frontend/Dockerfile (React)

FROM node:16.15.0 as build-stage
WORKDIR /app
COPY package*.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as production-stage
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 8082
CMD ["nginx", "-g","daemon off;"] 
```

### Docker-Compose.yml

```
version: "3.8"
services:
  react:
    container_name: dia-react
    build: ./frontend/
    restart: on-failure
    volumes:
      - ./frontend/nginx/:/etc/nginx/conf.d/
    ports:
      - 8082:8082
  redis:
    container_name: redis
    image: redis:7-alpine
    ports:
      - 6379:6379
    command: redis-server --save 20 1 --loglevel warning --requirepass eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81
    volumes:
      - /redis/data:/data
      - /redis/conf/redis.conf:/usr/local/conf/redis.conf

  mysqldb:
    container_name: mysql
    image: mysql:latest
    restart: unless-stopped
    environment:
      - MYSQL_ROOT_PASSWORD=rnjsgurfla
      - MYSQL_DATABASE=ssafy
      - MYSQL_USER=ssafy
      - MYSQL_PASSWORD=rnjsgurfla
    ports:
      - 3306:3306
    command: --default-authentication-plugin=mysql_native_password
      - --lower_case_table_names=1
    volumes:
      - ./mysqldata:/var/lib/mysql
  spring:
    container_name: dia-spring
    depends_on:
```

### Jenkins 설정 파일

```
pipeline {
    agent any

    stages {
        stage('Prepare') {
            steps {
                sh 'echo "Clonning Repository"'
                git branch: 'release',
                    url: 'https://lab.ssafy.com/s07-final/S07P31B307.git',
                    credentialsId: 'DIA'
            }
            post {
                success {
                     sh 'echo "Successfully Cloned Repository"'
                 }
                 failure {
                     sh 'echo "Fail Cloned Repository"'
                 }
            }
        }

        stage('Docker stop'){
            steps {
                sh 'sudo chmod -R 777 /usr/local/bin'
                sh 'sudo chmod +x /usr/local/bin/docker-compose'

                // 기존 백그라운드에 돌아가던 컨테이너 중지
                sh 'echo "Docker Container Stop"'
                sh 'sudo docker-compose stop'

            }
            post {
                 failure {
                     sh 'echo "Docker Fail"'
                }
            }
        }

        stage('RM Docker'){
            steps {
                sh 'echo "Remove Docker"'

                // 정지된 도커 컨테이너 찾아서 컨테이너 ID로 삭제함
                sh '''
                    result=$(sudo  docker container ls -a --filter "name=dia*" -q )
                    if [ -n "$result" ]
                    then
                        sudo docker rm $(sudo docker container ls -a --filter "name=dia*" -q)
                    else
                        echo "No such containers"
                    fi
                '''

                // dia로 시작하는 이미지 찾아서 삭제함
                sh '''
                    result=$(sudo  docker images -f "reference=dia*" -q )
                    if [ -n "$result" ]
                    then
                        sudo docker rmi -f $(sudo docker images -f "reference=dia*" -q)
                    else
                        echo "No such container images"
                    fi
                '''

                // 안쓰는이미지 -> <none> 태그 이미지 찾아서 삭제함
                sh '''
                    result=$(sudo docker images -f "dangling=true" -q)
                    if [ -n "$result" ]
                    then
                        sudo docker rmi -f $(sudo docker images -f "dangling=true" -q)
                    else
                        echo "No such container images"
                    fi
                '''
            }
            post {
                 failure {
                     sh 'echo "Remove Fail"'
                }
            }
        }

        stage('Build Gradle'){
            steps{
                dir('backend') {
                    sh "sudo chmod +x gradlew"
                    sh """
                    sudo ./gradlew clean build --exclude-task test
                    """
                }
            }
            post{
                failure{
                    sh 'echo "Build Gradle Fail"'
                }
            }
        }

        stage('Bulid & Run') {
            steps {
                sh 'echo " Image Bulid Start"'
                script {
                    // 업데이트된 코드로 빌드 및 실행
                    sh 'sudo docker-compose up -d'
                    sh 'sudo chmod 777 -R /home/ubuntu/profile'
                    sh 'sudo chmod 777 -R /var/lib/docker'
                    sh 'sudo chmod 777 -R /var/lib/docker/containers/*'
                }
                
            }

            post {
                failure {
                    sh 'echo "Bulid Docker Fail"'
                }
            }
        } 
    }
} 
```

<br>
<div id = '4'>
    
## 프로젝트 파일 구조

### Backend

```
backend
 ├─gradle
 │  └─wrapper
 └─src
    ├─main
    │  ├─java
    │  │  └─com
    │  │      └─ssafy
    │  │          └─backend
    │  │              ├─config
    │  │              ├─controller
    │  │              ├─dto
    │  │              ├─entity
    │  │              ├─env
    │  │              ├─jwt
    │  │              ├─mapper
    │  │              ├─redis
    │  │              ├─repository
    │  │              ├─service
    │  │              └─util
    │  └─resources
    └─test
        └─java
            └─com
                └─ssafy
                    └─backend
```

### Frontend

```
frontend
 ├─public
 └─src
    ├─assets
    │  └─Fonts
    ├─components
    │  ├─Common
    │  ├─ExplainPage
    │  ├─FieldPage
    │  │  └─FieldTools
    │  ├─FisrtPage
    │  ├─MainPage
    │  ├─MyPage
    │  ├─Navbar
    │  ├─TeamMake
    │  └─test
    ├─context
    ├─hooks
    ├─pages
    ├─theme
    └─utils
```

### Android

```
MyApplication3
 ├─.idea
 ├─app
 │  └─src
 │      ├─androidTest
 │      │  └─java
 │      │      └─com
 │      │          └─example
 │      │              └─myapplication
 │      ├─debug
 │      │  └─res
 │      │      ├─mipmap-hdpi
 │      │      ├─mipmap-mdpi
 │      │      ├─mipmap-xhdpi
 │      │      ├─mipmap-xxhdpi
 │      │      ├─mipmap-xxxhdpi
 │      │      └─values
 │      ├─main
 │      │  ├─java
 │      │  │  └─com
 │      │  │      └─example
 │      │  │          └─myapplication
 │      │  └─res
 │      │      ├─anim
 │      │      ├─drawable
 │      │      ├─drawable-v24
 │      │      ├─layout
 │      │      ├─mipmap-anydpi-v26
 │      │      ├─mipmap-hdpi
 │      │      ├─mipmap-mdpi
 │      │      ├─mipmap-xhdpi
 │      │      ├─mipmap-xxhdpi
 │      │      ├─mipmap-xxxhdpi
 │      │      ├─values
 │      │      ├─values-night
 │      │      └─xml
 │      └─test
 │          └─java
 │              └─com
 │                  └─example
 │                      └─myapplication
 └─gradle
    └─wrapper
```

### WearOS

```
WearOS
  ├─.idea
  ├─app
  ├─release
  │  └─src
  │      ├─debug
  │      │  └─res
  │      │      ├─mipmap-anydpi-v26
  │      │      ├─mipmap-hdpi
  │      │      ├─mipmap-mdpi
  │      │      ├─mipmap-xhdpi
  │      │      ├─mipmap-xxhdpi
  │      │      ├─mipmap-xxxhdpi
  │      │      └─values
  │      └─main
  │          ├─java
  │          │  └─com
  │          │      └─example
  │          │          └─wearos
  │          └─res
  │              ├─drawable
  │              ├─layout
  │              ├─mipmap-hdpi
  │              ├─mipmap-mdpi
  │              ├─mipmap-xhdpi
  │              ├─mipmap-xxhdpi
  │              ├─mipmap-xxxhdpi
  │              ├─values
  │              └─values-round
  └─gradle
        └─wrapper
```


<div id = '5'>

# 기술 스택
<div align=center></div>

<div align=center> 
  <img src="https://img.shields.io/badge/JAVA-6DB33F?style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white">
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">
  <img src="https://img.shields.io/badge/JPA-6DB33F?style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/QueryDSL-6DB33F?style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white">
  <img src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white">
  <img src="https://img.shields.io/badge/STOMP-6DB33F?style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/JWT-6DB33F?style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white">

  <br/>

  <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
  <img src="https://img.shields.io/badge/YOLO-00FFFF?style=for-the-badge&logo=YOLO&logoColor=white">
  <img src="https://img.shields.io/badge/SOCKETS-00FFFF?style=for-the-badge&logo=SOCKETS&logoColor=white">
  <img src="https://img.shields.io/badge/Numpy-013243?style=for-the-badge&logo=Numpy&logoColor=white">
  <img src="https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white">
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=PyTorch&logoColor=white">
  <img src="https://img.shields.io/badge/Anaconda-44A833?style=for-the-badge&logo=Anaconda&logoColor=white">
  

  <br>

  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
  <img src="https://img.shields.io/badge/SOCKJS-FF9900?style=for-the-badge&logo=SOCKJS&logoColor=white">

  <br>

  <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=Android&logoColor=white">
  <img src="https://img.shields.io/badge/Wear OS-4285F4?style=for-the-badge&logo=Wear OS&logoColor=white">

  <br>

  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"> 
  

  <br>

  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"> 
  <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"> 
  <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white">
  <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white">
   

  <br>

  <img src="https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=GitLab&logoColor=white"> 
  <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white">
  <img src="https://img.shields.io/badge/Mattermost-0058CC?style=for-the-badge&logo=Amazon EC2&logoColor=white">

  <br>
</div>
<br>

## 기술스택 및 버전 상세

| 구분       | 기술스택                    | 상세내용                 | 버전          |
| -------- | ----------------------- | -------------------- | ----------- |
| 공통     |                     |                |         |
|          | 형상관리                    | Gitlab               | \-          |
|          | 이슈관리                    | Jira                 | \-          |
|          | 커뮤니케이션                  | Mattermost   | \-          |
|          | 커뮤니케이션                  | Notion   | \-          |
| Server   |                       |             |          |
|          | 서버                      | AWS EC2              | \-          |
|          | 플랫폼                     | Ubuntu               | 20.04         |
|          | 배포                      | Docker               | 20.10.20         |
|          | 배포                      | Docker Compose              |  1.29.2         |
|          | 배포                      | Jenkins              | 2.361.2        |
|          | 배포                      | Nginx              | 1.18.0          |
| BackEnd  |                      |                 |        |
|         | DB                      | MySQL                | 8.0.30         |
|          | Cache Storage           | Redis              | 7-alpine         |
|          | Java                    | Zulu                 | 8   |
|          | Java                    | Spring boot                 | 2.7.4   |
|         |Java                      | QueryDSL                    | 5.0.0    |
|Local         |                     |                  |    |
|          | Python                    |                  | 3.10   |
|          | Numpy                    |                  | 1.23.3 |
|          | Pandas                    |                  |  1.5.1  |
|          | Anaconda                    |                  | -  |
|          | Pytorch                    |                  |  1.12.1  |
|          | Yolo                    |         v7          |  -  |
|          | StrongSort                    |      OSnet            |  -  |
|          | openCV-python                    |                 |   4.6.0.66  |
| FrontEnd |                    |                      |          |
|          | HTML5                   |                      | \-          |
|          | CSS3                    |                      | \-          |
|          | JavaScript(ES6)         |                      |\-           |
|          | React         |                      |  18.2.0       |
|          | Build                   | Node               | 16.15.0        |
|          | Android          |                     |             |
| Wear OS  |                  |                     |               |
|          | Android          |                     | 7.3.1         |
|          | Kotlin          |                      | 1.7.20        |
| IDE          |   Visual Studio Code                   |   |1.70.0          |

<br>

<div id = '6'>

# 프로젝트 산출물
- 세부 내용 : 노션 참조

<br>

## 시나리오

<img width="2811" alt="시연 시나리오 (2)" src="https://user-images.githubusercontent.com/53360337/202848267-070c204f-a4a5-4730-8b15-c09f53c37782.PNG">


<br>

## 기능 명세서
![image](https://user-images.githubusercontent.com/53360337/201557410-0bcca18c-35cf-485b-aaba-ba1a96d71220.png)

<br>

## ER-Diagram
![ER-Diagram](https://user-images.githubusercontent.com/53360337/201557265-b3c497e8-62f0-40cc-96eb-558d2cc26bb6.png)

<br>

## API 명세서
![image](https://user-images.githubusercontent.com/53360337/201559702-f5857677-5e36-445a-bf50-34e131043ce2.png)


<br>

## 화면설계서
[화면설계서 - Figma](https://www.figma.com/file/QA2ab9vGnFSnd6hqNJSwAk/자율~?node-id=0%3A1)

<br>



<br>

<div id="7">

# 데이터 출처
- 팀 자체 촬영

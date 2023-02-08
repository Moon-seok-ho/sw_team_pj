<h1>진행 상황 ~23.02.03</h1>

# 신수빈

개인 공부 진행 중 📖✏️

(API 계획)

1. user 기능 CRU
2. 일기 CRUD
3. 통계 CRU

model 정의해야함
라우팅

0. 초기화면
   /index (GET)

[세부기능]

1. user - 로그인 =========================================================
   /members/login (POST)

1) request
   {
   "user_id" : "user1",
   "user_password" : "password"
   }
   - 인증 방식 결정 필요 -> 세션
   - DB에 존재할 경우, 세션 등 할당
2) response
   {
   "status" : 200,
   "message" : "OK",
   }
   - 예외 경우
     - id 존재 x -> 404
     - password 일치 x -> 409

2. user - 회원가입 =========================================================
   /members/new (POST)

1) request
   {
   "user_id" : "user1",
   "user_password" : "password",
   }

2) response
   {
   "status" : 200,
   "message" : "OK",
   }
   - 예외 경우
     - id, 닉네임 중복 -> 409
     - 값 입력 x -> 400

3. user - 회원정보 수정 =========================================================
   /members/{id}/edit (POST)

1) request
   {
   "user_id" : "user1",
   "user_new_pw" : "password",
   }

2. response
   {
   "status" : 200,
   "message" : "OK",
   }

- 서비스 코드 적용되면 트랜잭션 종료 되므로 DB만 변경되고,
  세션 값은 변경 되지 않음 -> 세션 이용하면 재로그인 필요
- 값 입력 x -> 400

4. user - 로그아웃 =========================================================
   -> 인증 방식 결정 후 결정 -> 세션 -> /logout (GET)

5. 홈화면 =========================================================
   /home/{id} (GET)

1) request (front -> back)

   - user_id는 세션에 존재하기에 따로 요청 필요 X
   - 💥세션 사용자와 url id 일치 여부 검증 필요!!!
   - 오늘 날짜도 서버에서 받아오면 되기에 요청 필요 X
     {

   }

2) response
   {
   "diary_write_date" :
   [
   "230226", "220604", "150815", ...
   ]
   }

diary - 일기 작성
/diaries/{id}/write?date=230102 (POST)

1. request (front -> back)
   {
   "diary_write_date" : "230226",
   "diary_contents" : "...",
      <!-- 백에서 리퀘스트 오류없이 받으면 모델에 데이터 전달 -->
   }
2. response
   {
   "status" : 200,
      <!-- 프론트에서 200코드 받으면, loading.html 띄워주기 -->

   "message" : "OK",
   }

   - 값 입력 x -> 400
   - contents 글자수 제한 오류 -> 416

diary - 일기 수정
/diaries/{id}/edit?date=230102 (POST)

<!-- 동시에, front에서 쿼리 날리기 -> 조회 정보 -> 출력 -->

1. request (front -> back)
   {
   "diary_write_date" : "230226",
   "diary_contents" : "...",
      <!-- 백에서 리퀘스트 오류없이 받으면 모델에 데이터 전달 -->
   }
2. response
   {
   "status" : 200,
   <!-- 프론트에서 200코드 받으면, loading.html 띄워주기 -->
   "message" : "OK",
   }
   diary - 일기 삭제
   diary - 일기 조회
   diary - 통계 저장
   diary - 통계 업데이트 (일기 업데이트 되는 경우)
   diary - 통계 조회

7

# 고은아

front에서 db로 바로 쿼리 날리기

서버할것: 로그만 남기기

패스워드 비밀키로 넘기기

(1) get
데이터를 read 조회하는데 사용한다.
get https://(도메인)/classes/2/students

(2)post
post는 create, 새로운 정보를 추가하는데 사용한다.

# 황세현

react, nodejs 연동 시도

- 현재진행상황
  nodejs만으로 로그인페이지, 회원가입 페이지 생성
  세션 이용한 로그인 기능 구현

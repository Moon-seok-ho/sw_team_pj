## 1. 개발 현황
1. LoginPage.jsx, server.js 수정 중
- 로그인 창에서 아이디, 패스워드 입력 시 db에 있는 데이터 있는 경우 로그인 성공 및 페이지 이동
2. EditPage.jsx 수정 중
- 비밀번호 수정시 현재 입력한 비밀번호가 유효한 비밀번호인지를 표시하는 기능(정규 표현식)
- 비밀번호 확인에 들어간 문자가 비밀번호와 일치하는지를 표시하는 기능

## 2. 개요
### [실행 방법]
front-end 폴더에서 터미널에 npm start 입력 

### [폴더 구조]
1. src: 컴파일 시에 사용되는 파일들 (대부분의 코드가 여기에 들어감)
* src 내부에서 기능별로(ex: Register, Login...) 폴더를 따로 만들어 관리 중입니다. <br>
2. public: 컴파일시에 사용되지 않는 파일들

### [Figma로 그린 대략적인 Flow]
https://www.figma.com/proto/5GivgDbnMIQB0Cm3FUN0sL/%EC%B5%9C%EC%A2%85%EB%B3%B8?node-id=36%3A161&scaling=scale-down&page-id=0%3A1&starting-point-node-id=36%3A161&show-proto-sidebar=1

## 3. 회의 내용
### 0203 (금)
1. 수정사항<br>
home.html - 오늘 날짜 표시해놓기, 프론트 쪽에서 날짜 불러와야댐, 연도와 달 선택해서 불러오기<br>
login.html - 로그인 실패 시 알람<br>
write.html - 날짜 변경 기능은 보류, 저장버튼 누르면 loading.html<br>
loading.html - 제작 필요<br>
diary.html → 삭제 버튼 → 삭제하시겠습니까? (팝업창)<br>
editinfo.html - 비밀번호 수정하면 팝업창 띄우고 다시 login.html로<br>

2. 보류 사항<br>
mypage - 통계 부분은 보류<br>

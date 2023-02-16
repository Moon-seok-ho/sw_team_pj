/*
[통계 기능 정리]
1) 월별 감정 개수 (연월% diary_write_date를 가진 행을 뽑아내서 diary_emotion 종류에 따라 count -> Json 형식 or list 형식으로 저장 -> res)
2) 플리 추천 기록

[req 항목]
- 현재 연월 정보
- token(user_id)

+) 월별 감정 개수 관련 쿼리: select count(diary_emotion) from diary where DIARY_WRITER_ID = "(사용자 아이디)" and diary_emotion="(감정 키워드)";    //아직 날짜 정보 대입 X
+) 월별 감정 개수 관련 쿼리: select count(diary_emotion) from diary where DIARY_WRITER_ID = "hello" and diary_write_date like "2023-02-__" and diary_emotion="분노";     //날짜 정보 대입 O
+) 플리 기록 관련 쿼리: SELECT playlist_title FROM playlist where playlist_id IN (SELECT distinct diary_playlist FROM diary where diary_writer_id = ?);


1) 월별 감정 개수 구현 방법
- 감정 키워드 7개 저장하는 리스트 생성
- 감정 키워드 리스트를 하나씩 돌면서 (for) 각 감정 키워드에 따른 일기 개수 세기

*/

var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
const db = require("../../server/config/db.js");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post("/", (req, res) => {
  const id = req.body.id;
  const date = req.body.date; //현재 날짜
  const yearMonth = date.substring(0, 8);

  db.getConnection((err, conn) => {
    //db 연결 실패 시,
    if (err) {
      console.log("Mysql 연결 실패");
      conn.release(); //커넥션 풀에 커넥션 반환 -> 연결 해제
      res.writeHead("404", { "content-Type": "text/html; charset=utf8" });
      res.write("<h2>DB 서버 연결 실패</h2>");
      res.end();
      return;
    }
    // db 연결 성공 시
    console.log("데이터베이스 conn");

    // 1) playlist 관련 쿼리
    /*
    const exec = conn.query(
      "SELECT playlist_title FROM playlist where playlist_id IN (SELECT distinct diary_playlist FROM diary where diary_writer_id = ?);",
      [id],
      (err, result) => {
        conn.release();
        console.log("실행된 SQL: " + exec.sql);
        // sql 오류 시
        if (err) {
          console.log("SQL 실행 시, 오류 발생");
          console.dir(err);
          res.writeHead("200", { "content-Type": "text/html; charset=utf8" });
          res.write("<h2>SQL 실행 실패;</h2>");
          res.status(404).send("오류");
          res.end();
          return;
        } else {
          // sql 성공 시
          //오류가 없을 경우
          console.log("쿼리문 성공");
          console.log(result);
          console.dir(result);
          res.send(result);
          res.end();
        }
      }
    );
    */

    // 2) 월별 감정 개수 관련 쿼리
    const exec = conn.query(
      "select count(diary_emotion) from diary where DIARY_WRITER_ID = ? and diary_write_date like ? and diary_emotion=?;",
      [id, yearMonth, "분노"],
      (err, result) => {
        conn.release();
        console.log("실행된 SQL: " + exec.sql);
        // sql 오류 시
        if (err) {
          console.log("SQL 실행 시, 오류 발생");
          console.dir(err);
          res.writeHead("200", { "content-Type": "text/html; charset=utf8" });
          res.write("<h2>SQL 실행 실패;</h2>");
          res.status(404).send("오류");
          res.end();
          return;
        } else {
          // sql 성공 시
          //오류가 없을 경우
          console.log("쿼리문 성공");
          console.log(result);
          console.dir(result);
          res.send(result);
          res.end();
        }
      }
    );
  });
});

module.exports = router;
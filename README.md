## React Tutorial

[react-kr 공식 문서의 튜토리얼](https://reactjs-kr.firebaseapp.com/tutorial/tutorial.html)을 따라해본 프로젝트.

[공부하면서 작성하고 있는 velog 게시글](https://velog.io/@minjeong-dev/React-튜토리얼-도전기-Angular만-써본-개발자가)

---
## 학습 목록

- [x] React.Component
- [x] props & state
- [x] 함수형 컴포넌트 작성법
- [x] ```<li key={}/>``` 사용법

## 틱택토 게임 구현

### 기본 기능
- [x] Square, Board, Game으로 3x3 보드 출력
- [x] 클릭 이벤트 발생 시 X/O 표기
- [x] 게임 승패 검사
- [x] 게임 종료 시 클릭 이벤트 발생해도 보드 변경 안 되도록 처리
- [ ] 게임 히스토리 저장 후 출력하는 기능

### advanced
- [ ] 움직임 리스트에서 (col, row) 형태에 각 움직임 위치를 표시하기
- [ ] 움직임 리스트의 선택된 아이템을 볼드 처리
- [x] 하드 코딩한 것들 대신 사각형을 두 개의 루프를 사용하여 Board를 다시 작성하기
- [ ] 오름차순 혹은 내림차순이든 움직임을 정렬하는 버튼을 추가하기
- [ ] 누군가 이겼을 때 무엇 때문에 이겼는지 세 개의 사각형을 하이라이트하기
- [ ] 클래스 컴포넌트 -> 함수 컴포넌트로 바꾸기
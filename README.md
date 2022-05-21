# Album Application
## Next.js + Redux 를 이용한 CRUD 구현

-  CRUD 구현
- 로그인 유효성 검사 구현

---

```bash
npm install
npm run dev
```
---

## 더미 계정을 이용하여 로그인
~~~
1. { email : "user1@gmail.com" , pw : "pw1"}
2. { email : "user2@gmail.com" , pw : "pw2"}
                       .
                       .  
                       .
9. { email : "user9@gmail.com" , pw : "pw9"}
10. { email : "user10@gmail.com" , pw : "pw10"}
~~~

- 로그인시 해당 계정이 작성한 앨범 삭제,수정 가능
- 다른 계정이 작성한 앨범에 대해서는 삭제,수정 버튼이 보이지 않음
- 1쪽~20쪽 까지  album의 id 1~100 순으로 5개씩 배치
- 1,2 쪽에 배치 되어있는 앨범을 수정,삭제 하고 싶다면 user1으로 로그인

---


![image](https://user-images.githubusercontent.com/68550254/169650815-2a69b151-a1ff-46fc-b77d-82b909786c8a.png)

앨범 데이터 : https://jsonplaceholder.typicode.com/albums

앨범 사진 : https://place-hold.it/

## react practice 


## 0729
Function Component 가 Render된다
-> Function Component 가 다시 실행되었다

#### 리렌더링의 조건 /src/hook
1. prop이 update 된 경우
2. state가 update 된 경우
3. 부모 component가 다시 렌더된 경우
4. (위의 1번, 2번 이유 등으로 re-rendering 된 경우)
5. *update를 판단할 때 주의할점* (참고: deep vs shallow)
6. primitive type인 경우 값까지 비교
# With Me 디자인 시스템 모노레포

with me의 모든 디자인 요소를 작업하는 레포지토리 입니다.

- [withme-ui](https://github.com/Team-WithMe/WithMe_UI/tree/master/packages/withme-ui) - 컴포넌트 패키지 with react
- [withme-icon](https://github.com/Team-WithMe/WithMe_UI/tree/master/packages/withme-style) - 아이콘 패키지 with react
- [withme-scss](https://github.com/Team-WithMe/WithMe_UI/tree/master/packages/withme-scss) - 스타일 패키지 with scss

> `packages`에 있는 라이브러리의 사용법들은 각 워크스페이스 README.md를 참고하면 됩니다!

<details>
<summary>Todo List</summary>
<div markdown="1">
<br />

- [x] ~scss 패키지 기본구조 리팩토링~
- [x] ~각 패키지 name 수정~
- [x] ~rollup 설정 변경~
- [ ] Loading Spinner 만들기
- [x] ~Button Loading 상태 추가~
- [ ] Button prefix styling (icon, loading)
- [ ] Button hover, active 수정 (loading, disabled 상태일 땐 제외)
- [ ] Typography Component 리팩토링
- [ ] readme image 경로 수정

</div>
</details>
<br />

## Links

- [npm](https://www.npmjs.com/package/@with-me/design)
- [storybook](https://with-me-ui.netlify.app)

<br />

## Scripts

### 기본적인 명령어

```
# 설치
yarn

# 패키지 추가
yarn add <package-name>

# 모든 의존성 삭제
yarn clean

# git 커밋
yarn commit

# 개발 시작
yarn dev
```

### storybook 실행

- 경로를 withme-ui 패키지로 이동하고 해당 터미널에서

```
# 스토리북 실행 (port 6006)
yarn storybook
```

### 워크스페이스별 의존성 추가, 제거

```
# 추가
yarn workspace <workspace-name> add <package-name>

# 제거
yarn workspace <workspace-name> remove <package-name>
```

### npm 배포

```
# npm login
yarn npm login

# 모든 패키지 npm 배포
yarn publish
```

### 각 워크스페이스별 npm 배포

```
# 빌드
yarn workspace <workspace-name> build
# ex: yarn workspace @pickk/design-token build

# 버전 업데이트 (strategy = 'major'|'minor'|'patch')
yarn workspace <workspace-name> version <strategy>

# 버전 업데이트 커밋 생성
git commit -m "chore(<scope-name>): release <workspace-name> <version>"

# 태그 부여
git tag -a "<workspace-name>@<version>"

# 배포
yarn workspace <workspace-name> npm publish
```

<br />

## Setting

```
# node version
node -v
# 16.15.1
```

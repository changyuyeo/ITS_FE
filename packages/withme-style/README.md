<div align="middle">

<a href="https://github.com/Team-WithMe" rel="noopener" target="_blank">
	<img src="https://user-images.githubusercontent.com/80776262/184354157-58183005-6144-4938-83c5-e6f95d8c179c.png" alt="with-me" width="150" />
</a>

<h1>With Me UI</h1>

A With ME React Design System, powered by <a href="https://github.com/changyuyeo" rel="noopener" target="_blank">changyu</a>.

![npm](https://img.shields.io/npm/v/@with-me/style)
![npm](https://img.shields.io/npm/l/@with-me/style)
[![build CI](https://github.com/Team-WithMe/WithMe_UI/actions/workflows/ci.yml/badge.svg)](https://github.com/Team-WithMe/WithMe_UI/actions/workflows/ci.yml)

</div>

<br />

## Installation

npm

```
npm i @with-me/ui @with-me/style
```

yarn

```
yarn add @with-me/ui @with-me/style
```

<br />

## @with-me/style

[@with-me/ui](https://www.npmjs.com/package/@with-me/ui) 의 컴포넌트 라이브러리를 사용하기 위해서는 `@with-me/style` 의 style이 필요합니다.

<br />

## Usage

최상단 파일에 해당 style를 import 해주세요!

```tsx
import '@with-me/style/dist/global.css';
```

<br />

## CSS variables

- 실시간 커스텀마이징을 할 수 있도록 **css 사용자 정의 변수**를 제공합니다!
- with-me 의 모든 변수는 **wm-** 으로 시작합니다!
- `@with-me/styles/build/global.css` 가 적용된 곳이면 어디서나 접근하여 오버라이딩을 할 수 있습니다.

<br />

```css
/* 최상위 변수 */
:root {
	--wm-body-bg-color: #f8f9fd;
	--wm-body-font-color: #262626;
	--wm-body-font-family: 'Noto Sans KR', sans-serif;
	--wm-body-font-size: calc(1rem * 1);
	--wm-body-font-weight: 400;
	--wm-body-line-height: 1.5;

	--wm-primary-color-100: #e2defa;
	--wm-primary-color-200: #c4bef5;
	--wm-primary-color-300: #a79df1;
	--wm-primary-color-400: #897dec;
	--wm-primary-color-500: #6c5ce7;
	--wm-primary-color-600: #564ab9;
	--wm-primary-color-700: #41378b;
	--wm-primary-color-800: #2b255c;
	--wm-primary-color-900: #16122e;

	--wm-secondary-color-100: #e6f7ff;
	--wm-secondary-color-200: #bae7ff;
	--wm-secondary-color-300: #91d5ff;
	--wm-secondary-color-400: #69c0ff;
	--wm-secondary-color-500: #40a9ff;
	--wm-secondary-color-600: #1890ff;
	--wm-secondary-color-700: #096dd9;
	--wm-secondary-color-800: #0050b3;
	--wm-secondary-color-900: #003a8c;

	--wm-success-color-100: #f6ffed;
	--wm-success-color-200: #d9f7be;
	--wm-success-color-300: #b7eb8f;
	--wm-success-color-400: #95de64;
	--wm-success-color-500: #73d13d;
	--wm-success-color-600: #52c41a;
	--wm-success-color-700: #389e0d;
	--wm-success-color-800: #237804;
	--wm-success-color-900: #135200;

	--wm-error-color-100: #fff1f0;
	--wm-error-color-200: #ffccc7;
	--wm-error-color-300: #ffa39e;
	--wm-error-color-400: #ff7875;
	--wm-error-color-500: #ff4d4f;
	--wm-error-color-600: #f5222d;
	--wm-error-color-700: #cf1322;
	--wm-error-color-800: #a8071a;
	--wm-error-color-900: #820014;

	--wm-xs-font-size: calc(1rem * 0.75);
	--wm-sm-font-size: calc(1rem * 0.875);
	--wm-base-font-size: calc(1rem * 1);
	--wm-lg-font-size: calc(1rem * 1.125);
	--wm-xl-font-size: calc(1rem * 1.25);

	--wm-h-1-font-size: calc(1rem * 2.5);
	--wm-h-2-font-size: calc(1rem * 2);
	--wm-h-3-font-size: calc(1rem * 1.75);
	--wm-h-4-font-size: calc(1rem * 1.5);
	--wm-h-5-font-size: calc(1rem * 1.25);
	--wm-h-6-font-size: calc(1rem * 1);
}
```

<br />

## Links

- [github](https://github.com/Team-WithMe/WithMe_UI)
- [storybook](https://with-me-ui.netlify.app)

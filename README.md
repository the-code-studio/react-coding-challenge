# Code Studio Frontend Coding Challenge

## Introduction

Thanks for your interest in joining the Code Studio engineering team! Before we proceed with more formal
interviews, we ask that all candidates submit a coding challenge. The coding challenge is a foundational
piece of our process and it's referenced later in our process during the technical interviews.

You should not expect to spend more than 2-3 hours on the challenge. We want to be respectful of your time,
so if you find yourself exceeding the suggested time limit, there's a chance you may be over-engineering your solution.

If at any point you have questions concerning the coding challenge and/or interview process, please do not
hesitate to email hello@thecodestudio.co

## Challenge Overview

The coding challenge is inspired by a real task our engineering team worked on: building a React hook for managing
[toasts](https://stackoverflow.com/questions/1348788/what-does-toast-mean). The hook is named `useToasts`, but you won't
be directly implementing the hook. Rather, you'll be implementing the React context provider that powers the hook, `ToastProvider`.

`ToastProvider` is responsible for implementing the interface for managing toasts as well as rendering toasts to the viewport.
Details about the interface and how toasts should render can be found in the next section.

This repo has all the scaffolding you'll need so you should be able to jump right in. When you fire up the dev
environment, http://localhost:3000 will have a UI built on top of the `useToasts` interface so you can
use that to verify your implementation is working correctly.

The libraries and frameworks used mirror our real stack:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)

Usage of Tailwind CSS and TypeScript are optional. You won't get bonus points for using them and you
won't get demerits for not using them. The reason for including them is because interviewing is as much
about seeing if we're a fit for you as it is seeing if you're a fit for us. This gives you a chance
to work in an environment that will approximate what you'd experience as an Code Studio engineer.

The final result of the challenge should resemble something like this:

https://user-images.githubusercontent.com/314351/146152563-c55f8f4d-5938-46ca-ab4e-d2742bed2bee.mov

## Challenge Details

**Your job is to implement [`ToastProvider`](https://github.com/the-code-studio/react-coding-challenge/blob/master/src/toast/ToastProvider.tsx)**.
There are 2 main components to implementing `ToastProvider`: implementing the expected context value for `ToastContext.Provider` and
rendering toasts to the viewport.

### Implement the expected context value for `ToastContext.Provider`

The context value is an object that contains 2 properties: `addToast` and `stats`.

`addToast` is a function that accepts a config object detailing how to render a toast. The config object has 3 properties:

- `type`: determines the background color of the toast
- `ttl`: if set to a number, the toast should automatically be removed from the viewport after `ttl` milliseconds
- `body`: the content rendered within the toast

`stats` is an object that contains usage counts for each toast type. It's tracked by an API and should be `null`
while it is being fetched for the first time. There are 2 relevant API endpoints that you will use to interact with this data:

- `GET /api/toasts`: returns the data
- `POST /api/toasts/:type`: increments the count for the provided `type`, returns new data

### Render toasts added through `addToast` to the viewport

When a toast is added through `addToast`, it should be rendered to the viewport. The appearance of the rendered
toasts depends on 2 factors: the `type` of the toast and the width of the viewport.

Each toast has a `type` and that determines its background color. It's suggested `success` maps to green,
`warning` maps to yellow, and `error` maps to red. Any shade of those colors will do.

When the viewport has a width greater than or equal to `768px`, the toasts should be fixed to the bottom right of the
viewport. When the viewport is less than `768px`, the toasts should be fixed to the top of the viewport.

## Getting Started

In order to get started, clone this repo to your local machine. You can then install the dependencies and
fire up the dev environment by running:

```
$ yarn install
$ yarn dev
```

You can now navigate to http://localhost:3000 and you'll see the UI adapter for interacting with your implementation.

You should only have to make modifications to [_src/toast/ToastProvider.tsx_](https://github.com/the-code-studio/react-coding-challenge/blob/master/src/toast/ToastProvider.tsx),
please do not modify any other files. If you'd like to split your implementation across multiple files, that's
completely fine, just keep any net new files contained to the _src/toast/_ directory.

## Submission

To submit your coding challenge, ensure all of your changes have been committed to the `main` branch and
run the following command:

```
git bundle create coding-challenge.bundle HEAD master
```

This will generate a _coding-challenge.bundle_ file which you can then email to hello@thecodestudio.co. We do our best
to review and respond to submissions within 1-2 business days.

Thanks for taking the time to do this coding challenge and here's hoping we talk soon!

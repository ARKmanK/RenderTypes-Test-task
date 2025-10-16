# Next + shadcn Test App

Тестовое задание: Next.js (App Router), 4 вида рендеринга (CSR/SSR/SSG/ISR), работа с API (jsonplaceholder). UI — shadcn/ui + Tailwind.

## Содержание

- [Next + shadcn Test App](#next--shadcn-test-app)
  - [Содержание](#содержание)
  - [Стек и решения](#стек-и-решения)
  - [Структура проекта](#структура-проекта)
  - [Страницы и режимы рендеринга](#страницы-и-режимы-рендеринга)
  - [Работа с API](#работа-с-api)
  - [Запуск локально](#запуск-локально)

## Стек и решения

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS + shadcn/ui**
- **Data fetching**: в зависимости от страницы

  - CSR: SWR
  - SSR: fetch с `cache: "no-store"`
  - SSG: `dynamic = "force-static"`
  - ISR: `revalidate = 60`

## Структура проекта

```
/app
  page.tsx                # Главная (статическая)
  /client/page.tsx        # CSR
  /todos/page.tsx         # SSR
  /posts/page.tsx         # SSG
  /users/page.tsx         # ISR
/components
  /navbar.tsx             # Top navigation (shadcn NavigationMenu)
  /theme-provider.tsx
  /ui/*                   # shadcn компоненты
/lib
  /api.ts                 # jsonplaceholder
```

## Страницы и режимы рендеринга

- **`/client` (CSR)** — чистый клиентский рендер. Данные запрашиваются на стороне клиента через хук SWR (`useSWR`).
- **`/todos` (SSR)** — серверный рендер на каждый запрос. Используется `fetch(..., { cache: "no-store" })` и
  `export const dynamic = "force-dynamic"`.

- **`/posts` (SSG)** — статическая генерация при билде: `export const dynamic = "force-static"` и `fetch` с
  `revalidate: false`.

- **`/users` (ISR)** — инкрементальная регенерация: `export const revalidate = 60`, Next заново собирает страницу не
  чаще, чем раз в 60 сек при обращении.

## Работа с API

**Источник данных:** `https://jsonplaceholder.typicode.com`

- `getTodos(limit)` — SSR (no-store)
- `getPosts(limit)` — SSG (static)
- `getUsers()` — ISR (revalidate: 60)

Каждая страница отображает данные в своём стиле (списки/таблица), состояния загрузки/ошибок предусмотрены.

## Запуск локально

```bash
# Установка зависимостей
npm i

# создание .env.local
echo $null > .env.local
# добавить API_URL=https://jsonplaceholder.typicode.com

# Dev-режим
npm run dev
# http://localhost:3000
```

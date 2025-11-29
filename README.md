# My Task Board App

このプロジェクトは、DevChallenges.io の [My Task Board App](https://devchallenges.io/challenge/my-task-board-app) チャレンジの解答です。

## はじめに

### 必要な環境

- Node.js
- pnpm
- Docker と Docker Compose

### インストールと起動方法

1. バックエンドサービス（PostgreSQL データベース）を起動します：

```bash
docker compose up -d
```

2. フロントエンド開発サーバーを起動します：

```bash
cd frontend
pnpm install
pnpm dev
```

フロントエンドは `http://localhost:5173`（Vite のデフォルトポート）で利用できます。

3. （オプション）バックエンド開発サーバーを起動します：

```bash
cd backend
pnpm install
pnpm start:dev
```

バックエンド API は `http://localhost:3000` で利用できます。

## 技術スタック

### フロントエンド

- **React** 19.2.0 - UI ライブラリ
- **TypeScript** 5.9.3 - 型安全な JavaScript
- **Vite** (rolldown-vite 7.2.2) - 最適化されたバンドラーを備えた高速ビルドツール
- **Tailwind CSS** 4.1.17 - ユーティリティファーストの CSS フレームワーク
- **React Router** 7.9.6 - クライアントサイドルーティング
- **React Hook Form** 7.66.1 - フォームのバリデーションと管理
- **Storybook** 10.0.8 - コンポーネント開発とドキュメント

### バックエンド

- **NestJS** 11.0.1 - Node.js フレームワーク
- **TypeScript** 5.7.3 - 型安全な JavaScript
- **Prisma** 6.19.0 - ORM とデータベースツールキット
- **PostgreSQL** - リレーショナルデータベース
- **Zod** 4.1.13 - スキーマバリデーション
- **Jest** 30.0.0 - テストフレームワーク

## API エンドポイント

### ボード (Boards)

- `GET /boards/:id` - ボードとそのタスクを取得
- `POST /boards` - 新しいボードを作成
- `PATCH /boards/:id` - ボードを更新
- `DELETE /boards/:id` - ボードを削除

### タスク (Tasks)

- `POST /tasks` - 新しいタスクを作成
- `PATCH /tasks/:id` - タスクを更新
- `DELETE /tasks/:id` - タスクを削除

## プロジェクト構成

```
/
├── frontend/          # React SPA
│   └── src/          # React コンポーネントとアプリケーションコード
├── backend/          # NestJS REST API
│   └── src/          # コントローラー、サービス、モジュール
└── compose.yaml      # Docker Compose 設定
```

## 備考

このプロジェクトはバックエンド開発の学習を目的として実施しました。そのため、フロントエンドの実装に関しては約5割が Claude Code による実装となっています。バックエンドの実装は手動で行い、NestJS、Prisma、PostgreSQL などの技術スタックの理解を深めることに注力しました。

## ライセンス

UNLICENSED

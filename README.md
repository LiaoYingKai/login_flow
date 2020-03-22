# Login Flow
這是一個練習 Unit Test、E2E Test 與完整登入流程的專案

有機會會在[部落格](https://liaoyingkai.github.io/)新增文章，講解部分程式碼與思考的層面

## 重點檔案

`src/test/__test__` 爲 unit test 的檔案

`src/test/__e2e-test__` 爲 End To End 的測試檔案

## 指令

### 開啓 server
```
npm run dev
```

### 測試
```
npm run test <檔案名稱>
```

### 安裝
```
npm install
```

## 流程

- 首頁爲 `/` 的 Login 頁面
- 預設可以進入 `/about` 頁面
- 當沒有權限的時候，不用直接進入 `/home` 頁面，會跳回 `/`
- 當登入成功會跳轉並可以進入 `/home` 頁面

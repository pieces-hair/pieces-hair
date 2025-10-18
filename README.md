# pieces-site-starter

このフォルダ一式をそのまま使えば、テンプレベースのサイトが動きます。

## 使い方（ローカル表示）
1. このフォルダを Mac の `~/Desktop/` に置く（例：`~/Desktop/pieces-site-starter`）
2. 画像を `images/` に入れる（**ファイル名は以下に合わせる**）
   - logo.jpeg
   - hero.jpeg
   - care.jpg
   - salon1.jpeg
   - staff1.jpg
   - staff2.jpg
3. ターミナルで：
   ```bash
   python3 -m http.server 5500 --directory "$HOME/Desktop/pieces-site-starter"
   ```
4. ブラウザで `http://127.0.0.1:5500/index.html` を開く

> 画像が出ないときは、index.html の末尾の「画像チェック」リンクをクリックして、404 になっているファイル名を実際のファイル名に合わせてください。

## 公開（GitHub Pages）
1. GitHub で新規リポジトリを作成（例：pieces-site）
2. このフォルダ内のファイルをアップロード
3. Settings → Pages → Deploy from a branch → main / root を選択
4. `https://ユーザー名.github.io/pieces-site/` で公開されます

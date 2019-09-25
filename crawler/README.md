# crawler

- 定期的にhtmlを取得して、特定の要素の数と内容を取得したい
- お金はかけたく無い
- 極力手軽に済ませたい
- 結果を通知したい

## 候補手段

### コードかかずに済ませたい

https://www.octoparse.jp/

スクレイピングサービス

無料トライアルと書いていたけど、14日後に自動的に有料プランに移行されるらしい

お金をかけるならAWS Lambdaでもいいので使わない

### querySelectorAllのようなもの

調べたけどなさそう

### querySelectorAllのPolyfillをGASにもってこれないか

https://gist.github.com/chrisjlee/8960575

IE7程度のdocumentオブジェクトは前提として必要そう

### getElementsByClassNameの実装例

https://sites.google.com/site/scriptsexamples/learn-by-example/parsing-html

対象のXMLが壊れてるので `XmlService.parse(html);` が通らない

### 独自のgetElementByClassNameライブラリ

https://tadaken3.hatenablog.jp/entry/parser-for-gas

`XmlService.parse(src)` が通らないでしょう（未確認）

### 独自のParserライブラリ

https://www.kotanin0.work/entry/2019/01/06/200000

これ使うぐらいだったら正規表現で文字列抽出でもいい気になった

### match + RegExp

https://tonari-it.com/scraping-javascript-gas-phantomjscloud-regexp/

結局文字列を正規表現で抽出した

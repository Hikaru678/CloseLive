const text = require("./TextAsset");

//画面サイズを指定
//既定値は{width=768,height=432}に設定されます
let { width, height } = require("./DisplaySize");

const template = {
    //画像IDとその表示位置を保持するテンプレートクラス
    imageLocation: class ImageLocation {
        constructor() {
            this.center = Location(width / 3.2, height / 3, "EndLive");
            this.downRight = Location(width / 1.5, height / 1.4, "No");
            this.downLeft = Location(width / 3.7, height / 1.4, "Yes");
        }
    },
};

//ImageLocationクラス用関数群
//1.TextAsset.jsのTextImageクラスをラップし、画像を生成する関数
function Location(x, y, id) {
    return new text.text.image({
        x: x,
        y: y,
        ID: id
    }).sprite;
}

/*
    2.ImageLocationクラスのメンバ値を引き継ぎ、新しい画像IDを登録する関数
        location : ImageLocationクラスのメンバ
           id    : 画像IDを表す文字列
*/
function ImageChenge(location, id) {
    return Location(location.x, location.y, id);
}

module.exports = { width, height, template, Location, ImageChenge };
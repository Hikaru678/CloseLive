const scene = require("./SceneList").scene;
const { width, height } = require("./DisplaySize");
const [baseWidth, baseHeight] = [50, 50];

//エンティティを定義するオブジェクト変数
const entity = {
    //四角形を描画するクラス
    square: class Square {
        constructor(rect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            color: null
        }) {
            [this.x, this.y, this.width, this.height, this.color] =
                [rect.x, rect.y, rect.width, rect.height, rect.color];
        }

        Rect() {
            return new g.FilledRect({
                scene: scene,
                cssColor: this.color,
                width: this.width > 0 ? this.width : baseWidth,
                height: this.height > 0 ? this.height : baseHeight,
                x: this.x,
                y: this.y
            });
        }
    }
}

//画面幅を示すマーカーオブジェクト
const [up, down] = [new entity.square({ x: 0, y: 0, color: "red" }).Rect(), new entity.square({ x: width - baseWidth, y: height - baseHeight, color: "red" }).Rect()];
module.exports = { up, down, entity, baseWidth, baseHeight };
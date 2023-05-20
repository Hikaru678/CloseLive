//ゲームシーンを保持
const scene = require("./SceneList").scene;

//テキストをデザインするオブジェクト変数
const text = {
    //テキスト画像を生成するクラス
    image: class TextImage {
        constructor(size = {
            x: 0,
            y: 0,
            ID: null
        }) {
            this.sprite = SpriteConfigure([size.x, size.y, size.ID]);
        }
    },

    //フォントを生成するクラス
    font: class Font {
        constructor(font = {
            x: 0,
            y: 0,
            size: 0,
            text: null,
            color: null
        }) {
            [this.x, this.y, this.size, this.text, this.color] =
            [font.x, font.y, font.size, font.text, font.color];

            this.font = new g.DynamicFont({
                game: g.game,
                fontFamily: "monospace",
                size: 25
            });
        }
        
        Font() {
            const message = new g.Label({
                scene: scene,
                font: this.font,
                text: this.text,
                fontSize: this.size,
                textColor: this.color,
                x: this.x,
                y: this.y
            });

            return message;
        }
    }
};

//TextImageクラス用関数
//この関数は外部から参照できません
function SpriteConfigure([x, y, ID]) {
    return new g.Sprite({
        scene: scene,
        src: scene.asset.getImageById(ID),
        x: x,
        y: y,
        touchable:true
    });
}

module.exports = { scene, text };
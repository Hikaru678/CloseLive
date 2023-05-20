//＊マークでチェックされたコメント部のコードを編集することでゲームを安全に改変できます
function main(param) {
    //シーンと関数を読み込み
    const scene = require("./SceneList").scene;
    const load = require("./GameScene");

    scene.onLoad.add(() => {
        
        load.AscText(
            scene,
            
            //＊テキスト画像IDを表す文字列を列挙
            [
                "EndLive2",
                "EndLive3",
                "Pettern1",
                "Pettern2",
                "EndLive4",
                "EndLive5",
                "EndLive6",
                "EndLive7",
                "EndLive8",
                "EndLive9",
                "EndLive10"
            ],

            true
        );
    });

    g.game.pushScene(scene);
}

module.exports = main;

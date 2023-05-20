const textclass = require("./TemplateOption");
const entity = require("./EntityAsset");
const text = require("./TextAsset").text;

/*
    出題する質問内容を定義するテキスト画像の登録関数
    引数でテキスト画像ID文字列の配列を受け付けます
    petternOnがtrueの場合、特定のメッセージに対応した特別なイベントを呼び出します
*/
function AscText(scene, idList, petternOn) {
    const message = new textclass.template.imageLocation();

    //背景色用エンティティを
    const square=new entity.entity.square({
        width:textclass.width,
        height:textclass.height,
        color:"Gray"
    }).Rect();

    scene.append(square);

    //テキスト画像の表示位置調整変数
    const regulation = 8;

    //テキストの画像の配置
    scene.append(message.center);
    scene.append(message.downLeft);
    scene.append(message.downRight);

    //テキスト画像ID文字列の配列とそのインデックス変数を準備
    const ids = idList;
    let index = 0;

    //カウント変数とそのフォント化の準備
    let count = 0;

    const font = new text.font({
        text: count.toString()
    });

    let result = font.Font();
    scene.append(result);
    
    //ゲーム終了フラグを表す変数
    let endFlag = false, gameEnd = false;

    //message.downLeftクリック時message.centerのテキスト画像を変更
    message.downLeft.onPointDown.add(() => {
        PetternEvent("Yes");

        if (!endFlag)
            NextMessage();
    });

    message.downRight.onPointDown.add(() => {
        if (!gameEnd)
            PetternEvent("No");

        if (endFlag && !gameEnd) {
            endFlag = false;
            return;
        }
        else if (endFlag && gameEnd)
            ;

        Ending();
        endFlag = true;
    });

    //次の質問へ遷移させる処理を司る内部関数
    function NextMessage() {
        scene.remove(message.center);
        message.center.x += count == 0 ? 0 : message.center.width / regulation;
        message.center = textclass.ImageChenge(message.center, ids[Math.floor((index = parseInt(g.game.random.generate() * ids.length, 10)))]);
        message.center.x -= message.center.width / regulation;
        scene.append(message.center);
        message.center.modified();
        font.text = (++count).toString();
        scene.remove(result);
        result = font.Font();
        scene.append(result);
    }

    //エンディングパターンを処理する内部関数
    function Ending() {
        scene.remove(message.center);
        scene.remove(message.downLeft);
        scene.remove(message.downRight);
        message.center = textclass.ImageChenge(message.center, "End1");
        message.center.x += count == 0 ? 0 : message.center.width / (regulation - (regulation / 2));
        scene.append(message.center);
        message.center.modified();
        gameEnd = true;
    }

    //petternOnがtrue時に呼び出し対象となる固有イベントを定義する内部関数
    function PetternEvent(pettern) {
        //＊固有イベントのフラグとなるidsのインデックス番号を指定
        if (petternOn) {
            switch (index) {
                case 3:
                case 4:
                case 5:
                case 7:
                case 8:
                case 9:
                case 10:
                    EventCall(pettern);
                    endFlag = true;
                    break;
            }
        }

        //フラグ起動時に呼ばれるイベント
        function EventCall(flagPettern) {
            switch (flagPettern) {
                case "Yes":
                    Ending();
                    gameEnd = true;
                    break;

                case "No":
                    NextMessage();
                    break;;
            }
        }
    }
}

//画面幅確認用途のエンティティを右傾対角端に配置する関数
function SizeCheckEntity(scene) {
    scene.append(entity.up);
    scene.append(entity.down);
}

module.exports = { AscText, };
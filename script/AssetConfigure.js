//ゲームシーンを生成する関数
function AssetEntry(assetIds) {
    return new g.Scene({
        game: g.game,
        
        // このシーンで利用するアセットのIDを列挙し、シーンに通知します
        assetIds: assetIds
    });
}

module.exports = {AssetEntry,};
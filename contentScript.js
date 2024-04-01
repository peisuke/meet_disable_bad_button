function updateButtonStyle(xpath) {
    const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element) {
        element.style.opacity = "0.5"; // グレーアウト
        element.style.cursor = "not-allowed"; // カーソルを変更
        element.style.pointerEvents = "none"; // クリックを無効化
        element.title = "This button is disabled."; // ツールチップを追加
    }
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (!mutation.addedNodes) return;

        const xpath = "/html/body/div[1]/c-wiz/div/div/div[24]/div[3]/div[9]/div/div[2]/div/div/div[2]/div[9]/div/span/button";
        const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (element) {
            // ボタンを無効にするか、クリックイベントを阻止する
            element.disabled = true; // または、クリックイベントを阻止するロジックを再適用
            updateButtonStyle(xpath); // ボタンをグレーアウトする
            // observer.disconnect(); この行は削除して、監視を継続する
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});


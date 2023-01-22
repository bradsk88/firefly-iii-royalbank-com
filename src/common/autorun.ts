function addLocationObserver(
    callback: () => void,
    subtree=false,
    observeTarget: Node,
) {
    const config = {
        attributes: false,
        childList: true,
        subtree: subtree,
    }
    const observer = new MutationObserver(callback)
    observer.observe(observeTarget, config)
}

export function runOnContentChange(
    urlPath: string,
    func: () => void,
    observeTarget: (() => Node) = () => document.body,
): void {
    if (!!observeTarget && !observeTarget()) {
        setTimeout(() => {
            runOnContentChange(urlPath, func, observeTarget);
        }, 500)
        return;
    }

    let callback = () => {
        let curUrl = window.location.href.split('?')[0];
        if (curUrl.endsWith(urlPath)) {
            func();
        }
    };
    addLocationObserver(callback, true, observeTarget());
    callback();
}
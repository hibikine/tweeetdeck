import * as React from 'react';
import contextMenu from 'electron-context-menu';
import { WebviewTag } from 'electron';

const TwitterView = ({ index }: { index: number }) => {
  const webView = React.useRef<WebviewTag>(null);
  React.useEffect(() => {
    if (webView.current != null) {
      contextMenu({
        window: webView.current,
        prepend: (_, params) => [
          { label: '画像を保存', visible: params.mediaType === 'image' } as any,
        ],
      });
    }
  });
  return (
    <webview
      src="https://twitter.com/notifications"
      partition={`persist:tw${index}`}
      allowpopups
      key={index}
      ref={webView}
    ></webview>
  );
};

export default TwitterView;

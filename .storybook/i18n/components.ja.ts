export const componentsJa = {
  react: {
    title: 'React',
    components: {
      title: 'コンポーネント',
      button: {
        title: 'Button',
      },
      dialog: {
        title: 'Dialog',
      },
    },
  },
  vue: {
    title: 'Vue',
    components: {
      title: 'コンポーネント',
      button: {
        title: 'Button',
      },
      dialog: {
        title: 'Dialog',
      },
    },
  },
  components: {
    button: {
      description: 'フォーム送信やアクションのトリガーに使うクリック可能な要素。',
      props: {
        loading: '非同期処理中はスピナーを表示し、操作をブロックします。',
        disabled: 'ボタンを無効化 — クリック / フォーカス / submit すべて受け付けません。',
        type: 'ネイティブ button の type 属性。<form> 内は "submit"、それ以外は "button"。',
      },
    },
    dialog: {
      description:
        'ネイティブ <dialog> 要素を基盤とするモーダル — フォーカストラップ / 背景 inert / Esc 閉じが標準で付属。',
      'size-usage-description': [
        'サイズをカスタマイズしたい場合は、inline style でデフォルト値を上書きするか、独自の className に対応する CSS ルールを書いて <Dialog> に渡せば OK。',
        '注意: fullscreen は backdrop が無いため、閉じるボタンか Esc が必須。',
      ],
      props: {
        defaultOpen:
          '非制御モードの初期開閉状態 — マウント時に 1 回だけ読み取り、その後の変更は無視されます。',
        open: '制御モードの開閉状態。onOpenChange / @open-change と組み合わせて消費側から駆動します。',
        onOpenChange:
          'Dialog が開閉しようとするとき発火（Esc / backdrop クリック / ref 呼び出し）。制御モードでは必須。',
        closeOnBackdropClick: 'パネル外の backdrop をクリックしたら Dialog を閉じます。',
        closeOnEsc: 'Esc キーで Dialog を閉じます。',
        lockScroll: 'Dialog 表示中は body のスクロールをロックします。',
        ariaLabel:
          '可視ヘッダーがないときの Dialog のアクセシブルネーム。ariaLabelledBy と二者択一。',
        ariaLabelledBy: 'Dialog のラベルとなる要素の ID（通常は見出し）。ariaLabel と二者択一。',
      },
    },
  },
} as const;

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
      tabs: {
        title: 'Tabs',
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
      tabs: {
        title: 'Tabs',
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
    tabs: {
      description:
        '複数パネルを切り替える headless な Tabs — キーボード操作と ARIA セマンティクスは標準装備、DOM とスタイルは消費側で自由に。',
      'vertical-usage-description': [
        '縦並びレイアウトは単なる CSS —— orientation prop は無し。[role="tablist"] で組み込み list を狙って flex-direction: column を自分で当てる。',
      ],
      'keep-mounted-description': [
        'tab 切替で状態（フォーム入力 / スクロール / ウィジェット）を保持したい <TabPanel> に keepMounted を指定。デフォルト false。',
        '注意：有効な panel は隠れていても描画継続 — 重い panel（チャート / エディタ）はパフォーマンスコスト発生。',
      ],
      props: {
        defaultValue:
          '非制御モードの初期選択値 — マウント時に 1 回だけ読み取り、その後の変更は無視されます。',
        value: '制御モードの選択値。onValueChange と組み合わせて消費側から駆動します。',
        onValueChange:
          'いずれかの tab が選択されたとき発火（クリック / キーボード操作 / setValue 命令的呼び出し）。',
        activationMode:
          '"automatic": フォーカス移動と同時に切り替え。"manual": Enter / Space を押して初めて確定。',
        loop: '先頭/末尾を超えて移動するときに反対側へラップするか。',
        keepMounted:
          'この panel を tab 切替時に DOM に残す（hidden 属性のみ切替）。デフォルト false。有効後は隠れていても描画継続。',
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

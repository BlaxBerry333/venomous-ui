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
      popover: {
        title: 'Popover',
      },
      portal: {
        title: 'Portal',
      },
      tabs: {
        title: 'Tabs',
      },
      tooltip: {
        title: 'Tooltip',
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
      popover: {
        title: 'Popover',
      },
      portal: {
        title: 'Portal',
      },
      tabs: {
        title: 'Tabs',
      },
      tooltip: {
        title: 'Tooltip',
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
          'この panel を tab 切替時に DOM に残す（hidden 属性のみ切替）。有効後は隠れていても描画継続。',
      },
    },
    popover: {
      description: 'トリガーにアンカーされる headless なフローティングレイヤ。',
      'composition-note': 'Popover、PopoverTrigger、PopoverContent を組み合わせて使います。',
      'trigger-note': 'PopoverContent の表示をトリガーするコンテナ。',
      'positioning-note': [
        '本コンポーネントは止むを得ず少量の inline style を含みます：配置は CSS Anchor Positioning（Chrome 125+ / Safari 26+）を使い、position-anchor / position-area でブラウザが layout 段階にフローターをトリガーへ追従させ、同一フレームで paint — ドリフトなし。',
        '主流の Popover ライブラリ（Floating UI、Radix、Headless UI、Material UI、Ant Design）は依然として JS で位置を計算し、scroll イベント + getBoundingClientRect で再計算しています。しかし scroll イベントはブラウザの paint 後に非同期で発火するため、フローターは常にトリガーに 1 フレーム遅れます — これが「速くスクロールするとフローターが浮く」現象の正体です。本ライブラリはブラウザネイティブの anchor を直接使い、未対応ブラウザ（Firefox）のみ JS rAF にフォールバックします。',
      ],
      'placement-usage-description': [
        'placement で優先する配置側を指定。視口に収まらない場合は対側へ反転し、副軸方向にシフトして視口内に収めます。最終的な値は content と arrow の data-placement に反映され、CSS フックとして利用できます。',
      ],
      props: {
        defaultOpen:
          '非制御モードの初期開閉状態 — マウント時に 1 回だけ読み取り、その後の変更は無視されます。',
        open: '制御モードの開閉状態。onOpenChange と組み合わせて消費側から駆動します。',
        onOpenChange:
          'Popover が開閉しようとするとき発火。第 2 引数の reason で閉じる原因を区別できます。',
        placement:
          '優先する配置位置。top / bottom / left / right ＋ 任意の -start / -end の 12 種類。',
        offset: 'メイン軸方向で content と trigger の距離（px）。',
        collisionPadding: '反転 / シフト時に視口端から確保する最小余白（px）。',
        flip: '優先側に収まらない場合、対側へ反転。',
        shift: '副軸方向にシフトして視口内に収めます。',
        closeOnOutsideClick:
          'trigger と content の外で pointerdown が発生したら閉じます（composedPath 判定。portal で抽出された子ツリーも inside 扱い）。',
        closeOnEsc: 'Esc で閉じます。ネスト時は最上層のみ反応。',
        closeOnScroll:
          'trigger が視口外にスクロールしたら閉じます。派生の Tooltip 等で必要に応じて有効化。',
        returnFocusOnClose: '開いたときに focus 要素をスナップショットし、閉じたときに戻します。',
        anchorEl:
          'デフォルトの trigger アンカーを上書き。HTMLElement または仮想要素（getBoundingClientRect のみで OK）を受け付けます — ContextMenu / マウス座標 / 選択範囲アンカーの拡張口。',
        ariaRole: 'content に書く role。trigger の aria-haspopup を決定します。',
        ariaLabel:
          'role="dialog" でかつ可視ヘッダーが無いときのアクセシブルネーム。ariaLabelledBy と二者択一。',
        ariaLabelledBy: 'ラベルとなる要素の ID（通常は見出し）。ariaLabel と二者択一。',
        keepMounted: '閉じた状態でも DOM を保持（hidden 属性のみ切替）。',
        container:
          'portal のマウント先。HTMLElement を渡すと上書き、null でインラインレンダー（portal なし）。',
        matchTriggerWidth:
          'true で content の min-width を trigger と同じにします（select / combobox スタイル）。中身がより広ければ content はそのまま伸びます。',
      },
    },
    tooltip: {
      description: 'トリガーにアンカーされる軽量ヒント — hover / click でトリガー。',
      'composition-note': 'Tooltip、TooltipTrigger、TooltipContent を組み合わせて使います。',
      'trigger-note': 'TooltipContent の表示をトリガーするコンテナ。',
      'positioning-note': [
        'Popover と同じ anchor positioning エンジンを共有：CSS Anchor Positioning（Chrome 125+ / Safari 26+）でブラウザが layout 段階にフローターをトリガーへ追従させ、同一フレームで paint — ドリフトなし。未対応ブラウザ（Firefox）のみ JS rAF にフォールバック。',
      ],
      props: {
        defaultOpen:
          '非制御モードの初期開閉状態 — マウント時に 1 回だけ読み取り、その後の変更は無視されます。',
        open: '制御モードの開閉状態。onOpenChange と組み合わせて消費側から駆動します。',
        onOpenChange:
          'Tooltip が開閉しようとするとき発火。第 2 引数の reason は hover / unhover / click / esc-key / imperative のいずれか。',
        placement:
          '優先する配置位置。top / bottom / left / right ＋ 任意の -start / -end の 12 種類。',
        offset: 'メイン軸方向で content と trigger の距離（px）。',
        collisionPadding: '反転 / シフト時に視口端から確保する最小余白（px）。',
        flip: '優先側に収まらない場合、対側へ反転。',
        shift: '副軸方向にシフトして視口内に収めます。',
        openDelay: 'hover が継続して何 ms で開くか。click モードはこのディレイをスキップします。',
        closeDelay:
          'hover が外れて何 ms 待ってから閉じるか。期間中に逆方向のイベントが来ると保留中の close は破棄されます。',
        closeOnEsc:
          'Esc で閉じます。Tooltip は overlay-stack に乗らないため、Dialog / Popover を巻き込んで閉じることはありません。',
        trigger:
          'トリガーソース。デフォルト "hover"。"hover" = ポインタ hover ／キーボード focus で表示（a11y 込み）、離れると自動で閉じる；"click" = クリックでトグル、外部クリック / Esc でのみ閉じる。',
        disabled:
          'すべてのトリガーパスを無効化。true 切替時は即座に閉じ、保留中の timer もクリアします。',
        keepMounted: '閉じた状態でも DOM を保持（hidden 属性のみ切替）。',
        container:
          'portal のマウント先。HTMLElement を渡すと上書き、null でインラインレンダー（portal なし）。',
      },
    },
    portal: {
      description:
        'children を DOM の別の場所（デフォルトは <body> の末尾）へレンダリングします。React / Vue ツリーとの接続は維持されたまま —— context / イベント / ref は通常通り動作。Portal 自身は DOM ノードもスタイルも持ちません。',
      'why-note': [
        'portal を使わないと、フローティング層は決まって 2 パターンで壊れます：スクロール / overflow: hidden の祖先によって視覚的にクリップされる、そして祖先が作る stacking context（transform / filter / will-change）に閉じ込められて兄弟要素より上に出せなくなる。z-index をいくら上げても解決しません —— 構造的な制約だからです。',
      ],
      props: {
        container:
          'レンダー先。HTMLElement を渡すとそこへ直接レンダー。関数 (() => HTMLElement | null) はクライアント側でのみ呼び出される —— ターゲットが後からマウントされる、または Shadow DOM / iframe 内にあるケースで有用。文字列は CSS セレクタとして document.querySelector で解決され、解決できない場合は document.body へフォールバック。null を渡すと portal を完全に無効化し、children はインラインのまま。デフォルトは document.body。',
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

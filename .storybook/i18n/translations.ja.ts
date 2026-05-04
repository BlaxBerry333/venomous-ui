export const ja = {
  introduction: {
    title: 'はじめに',
    description: {
      a: 'React と Vue の両方で使える headless UI ライブラリ。コアは共通。',
      b: '振る舞いは作り込んでありますが、スタイルは任意。コンポーネントだけ、コンポーネント + 内蔵 CSS、CSS だけ —— 好きな使い方を選んでください。',
    },
    motivation: {
      title: 'なぜ作っているか',
      body: 'フロントエンドの仕事を続ける中で、コンポーネントライブラリというテーマはずっと頭の片隅から離れませんでした —— インタラクションの細部、アクセシビリティ、テーマ化、そして「スタイル付き／ヘッドレス」の境界線。考えるほど面白いトピックです。venomous-ui は、そうした問いをじっくり練り直すための長期サンドボックスとして始めました。これまで積み上げてきた経験を整理しつつ、自分自身をもう一段押し上げるための場所でもあります。もし誰かが使ってくださったら、本当にありがたいです。そしてそれ以上に、率直なご指摘やフィードバックを心から歓迎します —— 厳しいほど助かります。',
    },
    installation: {
      title: 'インストール',
      body: 'npm でインストールし、フレームワークごとのエントリーから import します。',
    },
    'usage-modes': {
      title: '使用モード',
      body: 'venomous-ui は 3 つの使用モードをサポート —— プロジェクトに合わせて選択。',
      'mode-a': {
        title: 'モード A —— headless コンポーネントのみ',
        body: 'headless はビヘイビアのみ提供。スタイルは自前で用意してください。',
      },
      'mode-b': {
        title: 'モード B —— コンポーネント + 組み込みスタイル',
        body: 'コンポーネントと組み込み CSS を併用します。',
      },
      'mode-c': {
        title: 'モード C —— スタイルのみ',
        body: 'コンポーネントを使わず、マークアップを自前で書いて class 名を付けます。',
      },
    },
  },
  overview: {
    title: '概要',
  },
  docs: {
    title: 'ドキュメント',
  },
  styles: {
    title: '組込スタイル',
  },
  'design-tokens': {
    title: 'デザイントークン',
    table: {
      name: 'CSS 変数名',
      value: '値',
      'default-value': 'デフォルト値',
      preview: 'プレビュー',
    },
    colors: {
      title: 'カラー',
      base: 'ベースカラー',
      theme: 'テーマカラー',
    },
    font: {
      title: 'フォント',
    },
    motion: {
      title: 'モーション',
    },
    radius: {
      title: '角丸',
    },
    shadow: {
      title: 'シャドウ',
    },
    'z-index': {
      title: 'Z-Index',
    },
  },
  classnames: {
    title: '組込クラス名',
    table: {
      name: 'クラス名',
      value: '値',
      preview: 'プレビュー',
    },
    typography: {
      title: 'タイポグラフィ',
      ellipsis: '省略',
    },
  },
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
  sections: {
    props: 'Props',
    'basic-usage': '基本的な使い方',
    'sample-usage': '応用例',
    headless: 'Headless',
    styled: 'Styled',
    'headless-uncontrolled': 'Headless · 非制御',
    'headless-controlled': 'Headless · 制御',
    'styled-uncontrolled': 'Styled · 非制御',
    'styled-controlled': 'Styled · 制御',
    source: 'GitHub でソースを見る',
  },
  table: {
    name: '名前',
    type: '型',
    default: 'デフォルト',
    description: '説明',
  },
  'theme-vars': {
    primary: 'ブランドのメインカラー（デフォルト / 静止状態）',
    'primary-hover': 'メインカラー - ホバー時',
    'primary-active': 'メインカラー - 押下 / アクティブ時',
    'on-primary': 'メインカラー背景上のテキスト / アイコン色',
    danger: '危険 / エラー',
    success: '成功 / ポジティブ',
    warning: '警告 / 注意',
    neutral: 'ニュートラル / 情報',
    'text-strong': '見出し / 強調テキスト',
    'text-default': '本文テキスト',
    'text-weak': '補助テキスト',
    'text-subtle': 'ヒント / 無効テキスト',
    'bg-strong': '凹み / 強調サーフェス',
    'bg-default': 'ページ背景',
    'bg-weak': 'カード / パネルサーフェス',
    'bg-subtle': '最高コントラスト面（モーダル内側など）',
    'border-strong': '強調ボーダー / 区切り線',
    'border-default': '既定ボーダー',
    'border-weak': '弱い区切り線',
    'border-subtle': '最も淡い区切り線',
  },
  components: {
    button: {
      description: 'フォーム送信やアクションのトリガーに使うクリック可能な要素。',
    },
    dialog: {
      description:
        'ネイティブ <dialog> 要素を基盤とするモーダル — フォーカストラップ / 背景 inert / Esc 閉じが標準で付属。',
      'size-usage-description': {
        a: 'サイズをカスタマイズしたい場合は、inline style でデフォルト値を上書きするか、独自の className に対応する CSS ルールを書いて <Dialog> に渡せば OK。',
        b: '注意: fullscreen の Dialog はビューポート全体を覆うため backdrop をクリックして閉じられません。独自の閉じるボタンを用意するか、Esc キーで閉じてください。',
      },
    },
  },
} as const;

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
  styles: {
    title: '組込スタイル',
  },
  'design-tokens': {
    title: 'デザイントークン',
    table: {
      name: 'CSS 変数名',
      value: '値',
      preview: 'プレビュー',
    },
    colors: {
      title: 'カラー',
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
    semantic: {
      title: 'セマンティック',
    },
    theme: {
      title: 'テーマ',
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
    },
  },
  vue: {
    title: 'Vue',
    components: {
      title: 'コンポーネント',
    },
  },
} as const;

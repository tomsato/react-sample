/*
■ props
コンポーネントは外部からプロパティを受け取って
それを表示させたりなどデータを扱うことができる
今回の例ではHelloAppコンポーネントに名前を渡して表示させる

■ state
そのコンポーネントが持っている状態で可変するデータを扱うことができる
今回の例ではstateデータとしてクリックカウント数を作成して表示させる
*/

var HelloApp = React.createClass ({
	// propTypesでpropの型指定などの制約を指定できる
	propTypes: {
		name: React.PropTypes.string.isRequired
	},
	// stateの初期値を設定できる
    getInitialState() {
        return { count: 0 };
    },
	// ボタンがクリックされた時にstateを更新する
	onClick() {
		this.setState({count: this.state.count + 1});
	},
	// 外から渡された値を表示できる
	render: function() {
		return (
			<div>
				<p>{this.props.name}, Hello world!</p>
				<p>click count: {this.state.count}</p>
				<button onClick={this.onClick}>click</button>
			</div>
		);
	}
});

// HelloAppにpropを渡す
ReactDOM.render(
  <HelloApp name={"hoge"} />,
  document.getElementById('container')
);

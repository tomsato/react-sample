// 大枠となるコンポーネント
// HelloHeader,HelloFooterコンポーネントを持っている
var HelloApp = React.createClass ({
	render: function() {
		return (
			<div>
				<HelloHeader />
				<p>mainです</p>
				<HelloFooter />
			</div>
		);
	}
});

var HelloHeader = React.createClass ({
	render: function() {
		return (
			<div><p>headerです</p></div>
		);
	}
});
var HelloFooter = React.createClass ({
	render: function() {
		return (
			<div><p>footerです</p></div>
		);
	}
});

ReactDOM.render(
  <HelloApp />,
  document.getElementById('container')
);

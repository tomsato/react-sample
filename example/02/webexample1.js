var Header = React.createClass({
	render: function() {
		return  <div className="header-innner">
				<h1>Hello, World!</h1>
				</div>;
	}
});
var Footer = React.createClass({
	render: function() {
		return  <div className="footer-innner">
				<hr/>
				<p>copyright 2016 <br/>hoge</p>
				</div>;
	}
});
var Main = React.createClass({
	render: function() {
		return  <ul className="main-innner">
				<li id="content-1">hoge</li>
				</ul>;
	}
});
var Section= React.createClass({
	render: function() {
		return  <div className="section-innner">
				<p>hoge hoge</p>
				</div>;
	}
});

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<Section />, document.getElementById('content-1'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

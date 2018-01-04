webpackJsonp([1],{

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(530);

var _MainLayout = __webpack_require__(1224);

var _MainLayout2 = _interopRequireDefault(_MainLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 容器组件代码
var mapStateToProps = function mapStateToProps(state, ownProps) {
    debugger;
    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_MainLayout2.default);

/***/ }),

/***/ 1224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antd = __webpack_require__(529);

var _reactRouterDom = __webpack_require__(225);

var _Bundle = __webpack_require__(532);

var _Bundle2 = _interopRequireDefault(_Bundle);

var _HomeContainer = __webpack_require__(1225);

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

var _CreateContainer = __webpack_require__(1234);

var _CreateContainer2 = _interopRequireDefault(_CreateContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer,
    Switch = _antd.Layout.Switch,
    Sider = _antd.Layout.Sider;

var SubMenu = _antd.Menu.SubMenu;
//包装好的处理按需加载的组件

//import Home from "../containers/HomeContainer.jsx"
//import About from "./About.jsx"
//异步加载组件

//组件按需加载
var Home = function Home(props) {
  return _react2.default.createElement(
    _Bundle2.default,
    { load: _HomeContainer2.default },
    function (Container) {
      return _react2.default.createElement(Container, props);
    }
  );
};
var Create = function Create(props) {
  return _react2.default.createElement(
    _Bundle2.default,
    { load: _CreateContainer2.default },
    function (Container) {
      return _react2.default.createElement(Container, props);
    }
  );
};

var Topic = function Topic(_ref) {
  var match = _ref.match;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      match.params.topicId
    )
  );
};

var Topics = function Topics(_ref2) {
  var match = _ref2.match;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Topics'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: match.url + '/rendering' },
          'Rendering with React'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: match.url + '/components' },
          'Components'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: match.url + '/props-v-state' },
          'Props v. State'
        )
      )
    ),
    _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/:topicId', component: Topic }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url, render: function render() {
        return _react2.default.createElement(
          'h3',
          null,
          'Please select a topic.'
        );
      } })
  );
};
//路由配置
var routes = [{ path: '/home',
  exact: true,
  sidebar: function sidebar() {
    return _react2.default.createElement(
      'div',
      null,
      'Home!'
    );
  },
  main: function main() {
    return Home;
  }
}, { path: '/about',
  sidebar: function sidebar() {
    return _react2.default.createElement(
      'div',
      null,
      'About!'
    );
  },
  main: function main() {
    return About;
  }
}, { path: '/topics',
  sidebar: function sidebar() {
    return _react2.default.createElement(
      'div',
      null,
      'shoelaces!'
    );
  },
  main: function main() {
    return Topics;
  }
}];

var MainLayout = function (_React$Component) {
  _inherits(MainLayout, _React$Component);

  function MainLayout() {
    var _ref3;

    _classCallCheck(this, MainLayout);

    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref3 = MainLayout.__proto__ || Object.getPrototypeOf(MainLayout)).call.apply(_ref3, [this].concat(arg)));

    _this.onCollapse = function (collapsed) {
      // console.log("collapsed",collapsed);
      _this.setState({ collapsed: collapsed });
    };

    _this.state = {
      theme: 'dark',
      current: '1',
      collapsed: false
    };
    return _this;
  }

  _createClass(MainLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var BreadcrumbItem = this.props.location.hash.replace(/\#\//, "").split("/").map(function (element, i) {
        return _react2.default.createElement(
          _antd.Breadcrumb.Item,
          { key: i },
          element
        );
      });
      var match = this.props.match;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _antd.Layout,
          { style: { minHeight: '100vh' } },
          _react2.default.createElement(
            Sider,
            {
              collapsible: true,
              collapsed: this.state.collapsed,
              onCollapse: this.onCollapse
            },
            _react2.default.createElement('div', { className: 'logo' }),
            _react2.default.createElement(
              _antd.Menu,
              { theme: 'dark', defaultSelectedKeys: ['1'], mode: 'inline' },
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: '1' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: match.url + "/home" },
                  _react2.default.createElement(_antd.Icon, { type: 'pie-chart' }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Home'
                  )
                )
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: '2' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { replace: true, to: match.url + "/create" },
                  _react2.default.createElement(_antd.Icon, { type: 'desktop' }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'create'
                  )
                )
              ),
              _react2.default.createElement(
                SubMenu,
                {
                  key: 'sub1',
                  title: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(_antd.Icon, { type: 'pie-user' }),
                    _react2.default.createElement(
                      'span',
                      null,
                      'User'
                    )
                  )
                },
                _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: '3' },
                  'Tom'
                ),
                _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: '4' },
                  'Bill'
                ),
                _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: '5' },
                  'Alex'
                )
              ),
              _react2.default.createElement(
                SubMenu,
                {
                  key: 'sub2',
                  title: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(_antd.Icon, { type: 'team' }),
                    _react2.default.createElement(
                      'span',
                      null,
                      'Team'
                    )
                  )
                },
                _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: '6' },
                  'Team 1'
                ),
                _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: '8' },
                  'Team 2'
                )
              ),
              _react2.default.createElement(
                _antd.Menu.Item,
                { key: '9' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/index/topics' },
                  _react2.default.createElement(_antd.Icon, { type: 'file' }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'topics'
                  )
                )
              ),
              _react2.default.createElement(
                SubMenu,
                {
                  key: 'sub10',
                  title: _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(_antd.Icon, { type: 'user' }),
                    _react2.default.createElement(
                      'span',
                      null,
                      'User'
                    )
                  )
                },
                _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: '10' },
                  _react2.default.createElement(_antd.Icon, { type: 'file' }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'topics'
                  )
                ),
                _react2.default.createElement(
                  _antd.Menu.Item,
                  { key: '11' },
                  _react2.default.createElement(_antd.Icon, { type: 'file' }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'topics'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _antd.Layout,
            null,
            _react2.default.createElement(
              Content,
              { style: { margin: '0 16px' } },
              _react2.default.createElement(
                _antd.Breadcrumb,
                { style: { margin: '16px 0' } },
                BreadcrumbItem
              ),
              _react2.default.createElement(
                'div',
                { style: { padding: 24, background: '#fff', minHeight: 360 } },
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url + "/home", component: Home }),
                _react2.default.createElement(_reactRouterDom.Route, { path: match.url + "/create", component: Create }),
                _react2.default.createElement(_reactRouterDom.Route, { path: match.url + "/topics", component: Topics })
              )
            ),
            _react2.default.createElement(
              Footer,
              { style: { textAlign: 'center' } },
              'sealing react system'
            )
          )
        )
      );
    }
  }]);

  return MainLayout;
}(_react2.default.Component);

exports.default = MainLayout;

/***/ }),

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(1226));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 1234:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(1235));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ })

});
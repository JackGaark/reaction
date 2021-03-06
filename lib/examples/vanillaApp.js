'use strict';

var React = require('../react'),
    ReactDOM = require('../reactDOM');

var Comment = React.createClass({
  displayName: 'Comment',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'comment' },
      React.createElement(
        'p',
        null,
        this.props.message
      )
    );
  },

  componentDidMount: function componentDidMount() {
    var message = this.props.message;

    console.log('Comment mounted with message: ' + message);
  },

  componentWillUnmount: function componentWillUnmount() {
    var message = this.props.message;

    console.log('Comment unmounted with message: ' + message);
  }
});

var CommentsList = React.createClass({
  displayName: 'CommentsList',
  getInitialState: function getInitialState() {
    var messages = ['Hello, world!', 'Hello world again...'],
        state = {
      messages: messages
    };

    return state;
  },


  componentDidMount: function componentDidMount() {
    console.log('Comments list mounted.');
  },

  render: function render() {
    var state = this.getState(),
        messages = state.messages,
        comments = messages.map(function (message) {
      return React.createElement(Comment, { message: message });
    });


    return React.createElement(
      'div',
      { className: 'comments-list' },
      comments
    );
  }
});

var vanillaApp = function vanillaApp() {
  var commentsList = React.createElement(CommentsList, null),
      rootDOMElement = document.getElementById('root');

  ReactDOM.render(commentsList, rootDOMElement);

  setTimeout(function () {
    var messages = ['Hello world yet again!!!'],
        state = {
      messages: messages
    };

    commentsList.setState(state);
  }, 1000); ///
};

module.exports = vanillaApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy92YW5pbGxhQXBwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIlJlYWN0RE9NIiwiQ29tbWVudCIsImNyZWF0ZUNsYXNzIiwicmVuZGVyIiwicHJvcHMiLCJtZXNzYWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJDb21tZW50c0xpc3QiLCJnZXRJbml0aWFsU3RhdGUiLCJtZXNzYWdlcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJjb21tZW50cyIsIm1hcCIsInZhbmlsbGFBcHAiLCJjb21tZW50c0xpc3QiLCJyb290RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLFdBQVdELFFBQVEsYUFBUixDQURqQjs7QUFHQSxJQUFNRSxVQUFVSCxNQUFNSSxXQUFOLENBQWtCO0FBQUE7O0FBQ2hDQyxVQUFRLGtCQUFXO0FBQ2pCLFdBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0csYUFBS0MsS0FBTCxDQUFXQztBQURkO0FBREYsS0FGRjtBQVNELEdBWCtCOztBQWFoQ0MscUJBQW1CLDZCQUFXO0FBQzVCLFFBQU1ELFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxPQUEzQjs7QUFFQUUsWUFBUUMsR0FBUixDQUFZLG1DQUFtQ0gsT0FBL0M7QUFDRCxHQWpCK0I7O0FBbUJoQ0ksd0JBQXNCLGdDQUFXO0FBQy9CLFFBQU1KLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxPQUEzQjs7QUFFQUUsWUFBUUMsR0FBUixDQUFZLHFDQUFxQ0gsT0FBakQ7QUFDRDtBQXZCK0IsQ0FBbEIsQ0FBaEI7O0FBMEJBLElBQU1LLGVBQWVaLE1BQU1JLFdBQU4sQ0FBa0I7QUFBQTtBQUNyQ1MsaUJBRHFDLDZCQUNuQjtBQUNoQixRQUFNQyxXQUFXLENBQ1QsZUFEUyxFQUVULHNCQUZTLENBQWpCO0FBQUEsUUFJTUMsUUFBUTtBQUNORDtBQURNLEtBSmQ7O0FBUUEsV0FBT0MsS0FBUDtBQUNELEdBWG9DOzs7QUFhckNQLHFCQUFtQiw2QkFBVztBQUM1QkMsWUFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0QsR0Fmb0M7O0FBaUJyQ0wsVUFBUSxrQkFBVztBQUNYLGdCQUFRLEtBQUtXLFFBQUwsRUFBUjtBQUFBLFFBQ0VGLFFBREYsR0FDZUMsS0FEZixDQUNFRCxRQURGO0FBQUEsUUFFQUcsUUFGQSxHQUVXSCxTQUFTSSxHQUFULENBQWEsVUFBQ1gsT0FBRDtBQUFBLGFBRXRCLG9CQUFDLE9BQUQsSUFBUyxTQUFTQSxPQUFsQixHQUZzQjtBQUFBLEtBQWIsQ0FGWDs7O0FBUU4sV0FFRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGVBQWY7QUFDR1U7QUFESCxLQUZGO0FBT0Q7QUFqQ29DLENBQWxCLENBQXJCOztBQW9DQSxJQUFNRSxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixNQUFNQyxlQUVFLG9CQUFDLFlBQUQsT0FGUjtBQUFBLE1BS01DLGlCQUFpQkMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUx2Qjs7QUFRQXJCLFdBQVNHLE1BQVQsQ0FDRWUsWUFERixFQUVFQyxjQUZGOztBQUtBRyxhQUFXLFlBQVc7QUFDcEIsUUFBTVYsV0FBVyxDQUNULDBCQURTLENBQWpCO0FBQUEsUUFHTUMsUUFBUTtBQUNORDtBQURNLEtBSGQ7O0FBT0FNLGlCQUFhSyxRQUFiLENBQXNCVixLQUF0QjtBQUNELEdBVEQsRUFTRyxJQVRILEVBZHVCLENBdUJiO0FBQ1gsQ0F4QkQ7O0FBMEJBVyxPQUFPQyxPQUFQLEdBQWlCUixVQUFqQiIsImZpbGUiOiJ2YW5pbGxhQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJy4uL3JlYWN0JyksXG4gICAgICBSZWFjdERPTSA9IHJlcXVpcmUoJy4uL3JlYWN0RE9NJyk7XG5cbmNvbnN0IENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgIGNvbnNvbGUubG9nKCdDb21tZW50IG1vdW50ZWQgd2l0aCBtZXNzYWdlOiAnICsgbWVzc2FnZSlcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgIGNvbnNvbGUubG9nKCdDb21tZW50IHVubW91bnRlZCB3aXRoIG1lc3NhZ2U6ICcgKyBtZXNzYWdlKVxuICB9XG59KTtcblxuY29uc3QgQ29tbWVudHNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICAnSGVsbG8sIHdvcmxkIScsXG4gICAgICAgICAgICAnSGVsbG8gd29ybGQgYWdhaW4uLi4nXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0NvbW1lbnRzIGxpc3QgbW91bnRlZC4nKVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBtZXNzYWdlcyB9ID0gc3RhdGUsXG4gICAgICAgICAgY29tbWVudHMgPSBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+XG5cbiAgICAgICAgICAgIDxDb21tZW50IG1lc3NhZ2U9e21lc3NhZ2V9IC8+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50cy1saXN0XCI+XG4gICAgICAgIHtjb21tZW50c31cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmNvbnN0IHZhbmlsbGFBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzTGlzdCA9XG5cbiAgICAgICAgICA8Q29tbWVudHNMaXN0IC8+XG5cbiAgICAgICAgLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgY29tbWVudHNMaXN0LFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgICdIZWxsbyB3b3JsZCB5ZXQgYWdhaW4hISEnXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIGNvbW1lbnRzTGlzdC5zZXRTdGF0ZShzdGF0ZSk7XG4gIH0sIDEwMDApOyAvLy9cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdmFuaWxsYUFwcDtcbiJdfQ==
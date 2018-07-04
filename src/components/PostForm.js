import React from 'react';

// export default 는 값을 export하는거고 export 는 여러가지가 가능하다
export default class PostForm extends React.Component {
  static defaultProps = {
    onCreate: () => { }, // 할일 추가 버튼 클릭시 호출되는 함수
  };
  state = {
    newPostBody: '',
  };

  handleInputChange = e => {
    this.setState({
      newPostBody: e.target.value,
    });
  };

  handleButtonClick = e => {
    // 함수 내려받기
    this.props.onCreate(this.state.newPostBody);
    this.setState({
      newPostBody: '',
    });
  };

  render() {
    return (
      <div>
        <label>
          <button onClick={this.handleButtonClick}>
            <i className="fas fa-edit" title="메모 추가">
              <span className="blind">메모 추가</span>
            </i>
          </button>
        </label>
      </div>
    );
  }
}

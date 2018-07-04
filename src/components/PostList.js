import React from 'react';
import PostItem from './PostItem';
import debounce from 'lodash.debounce';

export default class PostList extends React.Component {
  state = {
    textAreaValue: '',
    id: '',
  };

  detailValue = answerValue => {
    this.setState({ textAreaValue: answerValue });
  };
  handleChangeView = e => {
    this.setState({
      textAreaValue: e.target.value,
    });

    const autoSavePost = debounce(this.onUpdate, 2000);
    autoSavePost();
  };

  onUpdate = () => {
    this.props.updatePosts(this.state.id, this.state.textAreaValue);
  };
  idComunity = (id, body) => {
    this.setState({
      textAreaValue: body,
      id: id,
    });
  };
  render() {
    const { posts, deletePosts, privatePosts } = this.props;
    return (
      <div>
        <section id="wrap" className="">
          <section id="container" className="container" role="main">

            <div className="memo-side">
              <h2 className="blind">메모 리스트</h2>
              <ul className="memo-side__list">

                <li className="on">
                  {posts
                    .map(post => (
                      <PostItem
                        key={post.id}
                        {...post}
                        deletePosts={deletePosts}
                        detailValue={this.detailValue}
                        updatePosts={this.updatePosts}
                        privatePosts={privatePosts}
                        idComunity={this.idComunity}
                      />
                    ))
                    .reverse()}
                </li>
              </ul>
            </div>

            <div className="memo-contents">
              <div className="memo-contents__form">
                <fieldset className="memo-contents__fieldset">
                  <legend className="blind">메모 입력 폼</legend>
                  <label htmlFor="contentTextarea" className="blind">내용</label>
                  <textarea
                    id="contentTextarea" className="memo-contents__fieldset-textarea"
                    key={posts.id}
                    name="detailContent"
                    cols="30"
                    rows="10"
                    placeholder="여기에 내용이 뜹니다."
                    value={this.state.textAreaValue}
                    onChange={this.handleChangeView}
                  />
                </fieldset>
              </div>
            </div>

          </section>
        </section>
        {/* <ul>
          {posts
            .map(post => (
              <PostItem
                key={post.id}
                {...post}
                deletePosts={deletePosts}
                detailValue={this.detailValue}
                updatePosts={this.updatePosts}
                privatePosts={privatePosts}
                idComunity={this.idComunity}
              />
            ))
            .reverse()}
        </ul> */}
        {/* <div>
          <textarea
            key={posts.id}
            name="detailContent"
            cols="30"
            rows="10"
            placeholder="여기에 내용이 뜹니다."
            value={this.state.textAreaValue}
            onChange={this.handleChangeView}
          />
        </div> */}
        {/* <button
          onClick={e => {
            deletePosts(this.state.id);
          }}
        >
          삭제
        </button>
        <button
          onClick={e => {
            privatePosts(this.state.id);
          }}
        >
          잠금
        </button> */}
      </div>
    );
  }
}

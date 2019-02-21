import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Articles from "../components/Article";
import CustomForm from "../components/Form";


class ArticleList extends React.Component {
  state = {
    articles: []
  };

  fetchArticles = () => {
    axios.get("/api/").then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();
    }
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} /> <br />
        {
            this.props.token !== null ?

            <div>
              <h2> Create an article </h2>
              <CustomForm requestType="post" articleID={null} btnText="Create" />
            </div>

            :

            <div>
              <h2>Log in first to create an article.</h2>
            </div>

        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(ArticleList);

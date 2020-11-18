import React from 'react';

class DogImages extends React.Component {
  constructor() {
    super();
    this.returnDog = this.returnDog.bind(this);
    this.newDog = this.newDog.bind(this);
    this.state = {
      urlImg: localStorage.getItem('url'),
      loading: false,
    };
  }

  async fetchDog() {
    this.setState({ loading: true }, async () => {
      const requestHeader = { headers: { Accept: 'apliccation/json' } };
      const requestReturn = await fetch(
        'https://dog.ceo/api/breeds/image/random',
        requestHeader,
      );
      const requestObj = await requestReturn.json();
      if (requestObj.message.includes('terrier')) {
        this.setState({
          loading: false,
        });
      } else {
        this.setState({
          urlImg: requestObj.message,
          loading: false,
        });
        alert(requestObj.message.split('/')[4]);
        localStorage.setItem('url', this.state.urlImg);
      }
    });
  }

  returnDog() {
    const urlImg = this.state.urlImg;
    return <img src={urlImg} />;
  }

  newDog() {
    this.fetchDog();
  }

  componentDidMount() {
    if (!localStorage.getItem('url')) {
      this.fetchDog();
    }
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <span>loading...</span>;
    return (
      <div>
        {loading ? loadingElement : this.returnDog()}
        <button onClick={this.newDog}>clique</button>
      </div>
    );
  }
}

export default DogImages;

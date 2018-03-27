import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starList: [
        {name: "Fomalhaut", diameter: 20},
        {name: "Gacrux", diameter: 40},
        {name: "Hadar", diameter: 30},
        {name: "Elnath", diameter: 50},
      ],
      newStar: {
        name: '',
        diameter: '',
      },
      newStarList: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeFor = (prop) => (event) => {
    console.log(event.target.value);
    this.setState({
      newStar: {
        ...this.state.newStar,
        [prop]: event.target.value
      }
    })


    // {this.state.newStarList = [...this.state.starList, this.state.newStar]}
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({starList: [...this.state.starList, this.state.newStar],
      newStar: {
        name:'',
        diameter:'',
      }
    });
      // this.setState({newStar:{...this.state.newStar, [prop]: event.target.value}});
    }
  
  render() {
    //Works
    // let starListItemArray = [];
    // for(let i = 0; i < this.state.starList.length; i++) {
    //   starListItemArray.push(<li>{this.state.starList[i]}</li>);
    //   console.log(starListItemArray);
    // }
    //Works better
    // const starListItemArray = this.state.starList.map(star => <li key={star}>{star}</li>);
    return (
      <div className="App">
        <pre>{JSON.stringify(this.state)}</pre>
        {/* <p>{this.state.starList[0]}</p> */}
        {/* {this.state.starList} */}
        {/* Best */}
        <ul>
        {this.starListItemArray = this.state.starList.map(star => <li>{star.name} is {star.diameter}km away.</li>)}
        {/* {this.state.starList.map(star => <li key={star.name}>{star.name} us {star.diameter}yay</li>)} */}
        </ul>
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.newStar.name} onChange={this.handleChangeFor('name')}/>
        <input value={this.state.newStar.diameter} onChange={this.handleChangeFor('diameter')}/>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default App;

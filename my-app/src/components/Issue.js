import React from 'react';

class Issue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        items: [
          { id: 0, text: "Learn JavaScript", done: false },
          { id: 1, text: "Learn React", done: false },
          { id: 2, text: "Build something awesome", done: true }
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.items.length} todos</h2>
      </div>
    )
  }
}

export default Issue;

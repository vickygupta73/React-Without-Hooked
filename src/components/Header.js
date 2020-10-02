import React from 'react'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: "Demo"
    }
  }

  render() {
    return (
      <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
          <div className="row m-auto">
            <i className="fa fa-film fa-2x text-white my-auto"></i>
            <div className="h3 ml-3 my-auto text-light" href="/">{this.props.title}</div>
          </div>
        </div>
      </nav>
    )
  }

}

export default Header;

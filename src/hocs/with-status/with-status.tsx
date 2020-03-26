import React, {PureComponent} from 'react';

const withStatus = (Component) => {
  class WithStatus extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpened: false,
      };

      this.handleSortClick = this.handleSortClick.bind(this);
    }

    handleSortClick() {
      this.setState((state) => (
        {isOpened: !state.isOpened}
      ));
    }

    render() {
      return (
        <Component
          {...this.props}
          onSortClick={this.handleSortClick}
          isOpened={this.state.isOpened}
        >
        </Component>
      );
    }
  }

  return WithStatus;
};

export default withStatus;

import React from 'react';

const LazyLoadWrapper = (callback) => {

    return class LazyLoadedComponent extends React.Component {

        state = {
            component : null
        }

        componentDidMount() {
            callback()
                .then(cmp => this.setState({component : cmp.default}))
        }

        render() {
            const Component = this.state.component;

            return (
                <div>
                    {this.state.component ? <Component {...this.props} /> : null}
                </div>
            )
        }
    }
};

export default LazyLoadWrapper;
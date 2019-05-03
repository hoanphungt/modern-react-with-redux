import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.lat === null && this.state.errorMessage === '') return <Loader message='Please allow access to your location' />;
        if (this.state.errorMessage) return <h1>Error: {this.state.errorMessage}</h1>;
        return (
            <SeasonDisplay lat={this.state.lat} />
        );
    }

    render() {
        return <div className='border red'>{this.renderContent()}</div>
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

//constructor function from React.Component
// constructor(props) {
//     super(props);
//     this.state = {
//         lat: null
//     };
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => {
//             //use setState to update the local state
//             this.setState({
//                 lat: Math.floor(position.coords.latitude) 
//             })
//         },
//         (err) => console.log(err)
//     );
// }

// Challenge on updating Component
// class Clock extends React.Component {
//     state = {
//         time: new Date().toLocaleTimeString()
//     }

//     componentDidMount() {
//         //setInterval is a built-in function in JS that run the call-back function inside once in every interval that you have set
//         setInterval(() => {
//             this.setState({
//                 time: new Date().toLocaleTimeString()
//             })
//         }, 1000)
//     }

//     render() {
//         return (
//             <div className='time'>
//                 The time is: {this.state.time}
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Clock />,
//     document.querySelector('#root')
// );



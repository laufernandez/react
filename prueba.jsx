import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
        }
    }

    componentWillMount() {
        fetch('https://api.mercadolibre.com/sites/MLA/trends/search')
            .then(function(response) {
                return response.json()
            }).then((response) => {
            response.forEach(element => {
                fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + element.keyword)
                    .then(function(response) {
                        return response.json()
                    }).then((response) => {
                        element=
                            {
                            "name":response.query, "image": response.results[0].thumbnail
                            }
                            var array = this.state.items;
                        array.push(element);
                    this.setState({items:array})
                })
            });
            console.log(this.state.items)
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <table>
                    <tbody>
                    {this.state.items.map((trend, i) => <TableRow key = {i} data = {trend} />)}
                    </tbody>
                </table>
            </div>
        );
    }

}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}


class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.name}</td>
            </tr>
        );
    }
}


export default App;
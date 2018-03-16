import React from 'react';

class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
                ["hola", "chau", "perro", "gato", "jorge"]
        }
    }

    render() {
        return (
            <div>
                <table width="100%">
                    <tbody>
                        <TableRow data = {this.state.data}/>
                        <TableRow data = {this.state.data}/>
                        <TableRow data = {this.state.data}/>
                        <TableRow data = {this.state.data}/>
                        <TableRow data = {this.state.data}/>
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        var palabras = this.props.data;
        var colors = ['#FF5733', '#900C3F', '#FFC300', '#C70039', '#581845'];
        function rand_color() {return colors[Math.floor(Math.random() * colors.length)]};
        function style() {
            var style = {backgroundColor: rand_color(), width: '20%', height:'40px'};
            return style;
        }
        function rand() {
            return palabras[Math.floor(Math.random() * palabras.length)];
        }
        return (
            <tr>
                <td style={style()}>{rand()}</td>
                <td style={style()}>{rand()}</td>
                <td style={style()}>{rand()}</td>
                <td style={style()}>{rand()}</td>
                <td style={style()}>{rand()}</td>
            </tr>
        );
    }
}

export default Table;
import React from 'react';
import '../../styles/notes.css';

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    async handleDelete(event){
        const url = 'http://localhost:8080/notes/' + this.props.id;
        await fetch(url, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json"}
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

        document.location.reload();
    }

    render() {
        return (
            <div className="anote">
                <link rel="stylesheet" href="notes.css"></link>
                <div className="positionbutton">
                <button onClick={this.handleDelete}>x</button>
                </div>
                <p className={"notetext"}>{this.props.text}</p>
            </div>
        )
    }
}

export default Note;
import React, { Component } from 'react';

export class AppointmentItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            appointment: props.appointment,
            key: props.key,
            isEditing: false
        }
    }

    toggleEdit = () => {
        this.setState( { isEditing: !this.state.isEditing } );
    }

    changeValue = (e) => {
        this.setState({...this.state, [e.target.id]: e.target.value})
    }

    saveChanges = () => {
        this.toggleEdit();
        const newItem = {
            id: this.props.appointment.id,
            idBuilding: this.state.idBuilding,
            idBoiler: this.state.idBoiler,
            idTechnician: this.state.idTechnician,
            date: this.state.date,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            type: this.state.type
        }
        this.props.updateAppointment(newItem);
    }
    render() {
        if (this.state.isEditing) {
            return (
                <tr>
                <td>
                    {this.props.appointment.id}
                </td>
                <td>
                    <input
                    type="number"
                    id="idBuilding"
                    placeholder="....."
                    value={this.state.idBuilding}
                    onChange={this.changeValue}
                    required/>
                </td>
                <td>
                    <input
                    type="number"
                    id="idBoiler"
                    placeholder="....."
                    value={this.state.idBoiler}
                    onChange={this.changeValue}
                    required/>
                </td>
                <td>
                <input
                    type="number"
                    id="idTechnician"
                    placeholder="....."
                    value={this.state.idTechnician}
                    onChange={this.changeValue}
                    required/>
                </td>
                <td>
                <input
                    type="text"
                    id="date"
                    placeholder="....."
                    value={this.state.date}
                    onChange={this.changeValue}
                    required/>
                </td>
                <td>
                <input
                    type="text"
                    id="startTime"
                    placeholder="....."
                    value={this.state.startTime}
                    onChange={this.changeValue}
                    required/>
                </td>
                <td>
                <input
                    type="text"
                    id="endTime"
                    placeholder="....."
                    value={this.state.endTime}
                    onChange={this.changeValue}
                    required />
                </td>
                <td>
                <input
                    type="text"
                    id="type"
                    placeholder="....."
                    value={this.state.type}
                    onChange={this.changeValue}
                    required />
                </td>
                    <div>
                        <button onClick={this.saveChanges}>SAVE</button>
                        <button onClick={this.toggleEdit}>CANCEL</button>
                    </div>
                </tr>
            )
        }
        return (
            <tr>
                <td>{this.props.appointment.id}</td>
                <td>{this.props.appointment.idBuilding}</td>
                <td>{this.props.appointment.idBoiler}</td>
                <td>{this.props.appointment.idTechnician}</td>
                <td>{this.props.appointment.startTime}</td>
                <td>{this.props.appointment.endTime}</td>
                <td>{this.props.appointment.date}</td>
                <td>{this.props.appointment.type}</td>
                <td>
                    <button onClick={() =>
                    this.props.deleteAppointment(this.props.appointment.id)}>Delete</button>
                </td>
                <td>
                    <button onClick={this.toggleEdit}>Edit</button>
                </td>
            </tr>
        )
    }
}

export default AppointmentItem;


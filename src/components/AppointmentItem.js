import React, { Component } from 'react';

export class AppointmentItem extends Component {
    render() {
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
                    <button onClick={() =>
                    this.props.updateAppointment(this.props.appointment.id)}>Update</button>
                </td>
            </tr>
        )
    }
}

export default AppointmentItem;

import React from 'react';
import Button from '../components/button'
import TextField from '../components/textField'
import './Form.css';

function Form() {
    return (
        <div>
            <p className="header"> Lunchplace </p>
            <div style={{paddingBottom:"20px"}}>
                <TextField placeholder="10999 Berlin" class="search"></TextField> <span style={{ margin: "10px" }}></span>
                <Button name={"Search"} ></Button>
            </div>
            <table>
                <tr>
                    <td valign="bottom" style={{ textAlign: "left", paddingLeft: "10px" }} >
                        <p className="smallText" >Participants</p>
                    </td>
                    <td style={{ textAlign: "center", padding: "30px" }}>
                        <b className="laregeText" >Falafel in Berlin</b>
                        <p className="smallText" >Falafel Restaurant</p>
                        <b className="number" >6</b>
                    </td>
                    <td style={{ textAlign: "center", padding: "30px" }}>
                        <b className="laregeText" >Baraka</b>
                        <p className="smallText" >Turkish Restaurant</p>
                        <b className="number" >7.8</b>
                    </td>
                    <td style={{ textAlign: "center", padding: "30px" }}>
                        <b className="laregeText" >McDonalds</b>
                        <p className="smallText" >Gourmet Restaurant</p>
                        <b className="number" >9.8</b>
                    </td>
                </tr>
                <tr>
                    <td className="nameTableField" >
                        <TextField class="nameField" value="Max Mustermann"></TextField>
                    </td>
                    <td>
                    </td>
                    <td className="greenField" >
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td className="nameTableField">
                        <TextField class="nameField" value="Kevin Muller"></TextField>
                    </td>
                    <td className="greenField">
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td className="nameTableField" >
                        <TextField class="nameField" value="Dennis Mustermann"></TextField>
                    </td>
                    <td>
                    </td>
                    <td className="greenField" >
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td className="nameTableField" >
                        <TextField class="nameField" value="Donald Trump"></TextField>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td className="greenField" >
                    </td>
                </tr>
                <tr>
                    <td className="nameTableField" >
                        <TextField class="nameField" placeholder="Type here"></TextField>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
            </table>
            <div style={{ paddingTop: "20px" }}>
                <Button name={"Add participants"} ></Button>
            </div>
        </div>
    );
}

export default Form;

import React from 'react';
import Button from '../components/button'
import TextField from '../components/textField'
import './Form.css';
import { connect } from 'react-redux';
import Axios from 'axios';

const get_venues = () => {
    Axios.get('https://api.foursquare.com/v2/venues/explore', {
      params: {
        client_id: 'GH4BWS2A1V0K0RAIGWA401NNQ04JUIF55HUTP30LQ1IKINUL',
        client_secret: 'NRTY31TIGPDGK5GWODTMDKTQL1JTW1VKLWHWZJR425E03WSN',
        v: 20120610,
        limit: 10,
        near: 'amman',
        query: 'lunch',
      }
    }).then((response) => {
        let venues = response.data.response.groups[0].items;
        console.log(venues);
        // venues.map((venue)=>(
        //     console.log(venue.venue)
        // ));
    });
}

function Form(props) {
    return (
        <div>
            {get_venues()}
            <p className="header"> Lunchplace </p>
            <div style={{ paddingBottom: "20px" }}>
                <TextField placeholder="10999 Berlin" class="search"></TextField> <span style={{ margin: "10px" }}></span>
                <Button name={"Search"} ></Button>
            </div>
            <table>
                <tr>
                    <td valign="bottom" style={{ textAlign: "left", paddingLeft: "10px" }} >
                        <p className="smallText" >Participants</p>
                    </td>
                    {props.restaurants.map((restaurant) =>
                        <td style={{ textAlign: "center", padding: "30px" }}>
                            <b className="laregeText" >{restaurant.name}</b>
                            <p className="smallText" >{restaurant.type}</p>
                            <b className="number" >{restaurant.rating}</b>
                        </td>
                    )}
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

const mapStateToProps = (state) => ({
    venues: state.venues,
    restaurants: state.resturaunt
})

export default connect(mapStateToProps)(Form);

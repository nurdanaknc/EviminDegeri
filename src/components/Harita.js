import './Harita.css'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import Grid from '@mui/material/Grid';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import redIcon from './placeholder.png';


function Harita(props){
    <><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
        integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
        crossorigin="" /><script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
            integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
            crossorigin=""></script></>
     

    const konumDegerleri = {
        'Adalar':          [40.8741659, 29.1293251],
        'Arnavutköy':      [41.0671774, 29.0432713],
        'Ataşehir':        [40.9929379, 29.1135187],
        'Avcılar':         [40.9799389, 28.7216689],
        'Bağcılar':        [41.034547, 28.8567558],
        'Bahçelievler':    [41.0181451, 28.4843571],
        'Güngören':        [41.0252791, 28.8726908],
        'Beylikdüzü':      [41.0037541, 28.6372583],
        'Şişli':           [41.0637891, 28.9831642],
        'Sancaktepe':      [40.9905196, 29.2288624],
        'Ümraniye':        [41.0256362, 29.0963049],
        'Beşiktaş':        [41.0428465, 29.0075283],
        'Esenyurt':        [41.0342862, 28.6801113],
        'Sarıyer':         [41.1685803, 29.0572623],
        'Pendik':          [40.8768715, 29.2349672],
        'Fatih':           [41.0091982, 28.9662187],
        'Büyükçekmece':    [41.021654, 28.579757],
        'Eyüpsultan':      [41.0478358, 28.9327383],
        'Başakşehir':      [41.1075794, 28.7950711],
        'Beyoğlu':         [41.0284233, 28.9736808],
        'Kartal':          [40.88858, 29.1856536],
        'Sultangazi':      [41.1043344, 28.8614367],
        'Sultanbeyli':     [40.9670242, 29.2671314],
        'Kadıköy':         [40.990992, 29.0254305],
        'Çekmeköy':        [41.0351579, 29.1739149],
        'Maltepe':         [40.9247539, 29.1310782],
        'Tuzla':           [40.8161732, 29.3034194],
        'Kağıthane':       [41.0812087, 28.9730151],
        'Zeytinburnu':     [40.9898653, 28.9037467],
        'Üsküdar':         [41.0265498, 29.0151321],
        'Küçükçekmece':    [40.9918737, 28.7711956],
        'Bakırköy':        [40.9782585, 28.8744461],
        'Silivri':         [41.0742476, 28.2481709],
        'Bayrampaşa':      [41.0345549, 28.9118417],
        'Beykoz':          [41.1176978, 29.09821095],
        'Çatalca':         [41.1436804, 28.4605154],
        'Esenler':         [41.0376175, 28.8824519],
        'Gaziosmanpaşa':   [41.0578322, 28.9122521],
        'Şile':            [41.1744067, 29.6125216] 
     };

     const { lat, lng } = props;
     
     const circleProps = {
        center: [40.8741659, 29.1293251],
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.1,
        radius: 1000,
      };

      const myIcon = L.icon({
        iconUrl: redIcon,
        iconSize: [19, 19],
        iconAnchor: [9.5, 9.5],
        popupAnchor: [0, -9],
    });

    return(
       


        
            <div className="map">

            <MapContainer center={[40.8741659, 29.1293251]} zoom={13} style={{ height: '50vh', width: '100%', position:'relative' }}>
                <TileLayer
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">Istanbul</a>'
                />
                <Marker icon={myIcon} position={[40.8741659, 29.1293251]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Circle {...circleProps} />
            </MapContainer>














      </div>
    )




}


export default Harita
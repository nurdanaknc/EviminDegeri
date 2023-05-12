import './Glass.css'
import { useState } from 'react'
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


function Glass() {
  const [cluster_A, setCluster_A] = useState('')
  const [cluster_B, setCluster_B] = useState('')
  const [cluster_C, setCluster_C] = useState('')
  const [net_alan, setNet_alan] = useState('')
  const [brut_alan, setBrut_alan] = useState('')
  const [kredi_durumu, setKredi_durumu] = useState('')
  const [kat_sayisi, setKat_sayisi] = useState('')
  const [isitma, setIsitma] = useState('')
  const [bulundugu_kat, setBulundugu_kat] = useState('')
  const [bina_yasi, setBina_yasi] = useState('')
  const [esya, setEsya] = useState('')
  const [kullanim_durumu, setKullanim_durumu] = useState('')
  const [toplam_oda_sayisi, setToplam_oda_sayisi] = useState('')
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = {cluster_A, cluster_B, cluster_C, net_alan, brut_alan, bina_yasi, kat_sayisi, bulundugu_kat, toplam_oda_sayisi, isitma, esya, kullanim_durumu, 
      kredi_durumu, lat, lng}

    axios
      .post('http://localhost:8080/prediction', params)
      .then((res) => {
        const data = res.data.data
        const parameters = JSON.stringify(params)
        const msg = `Tahmin Edilen Fiyat: ${data.Tahmin_Edilen_Fiyat}\nParameters: ${parameters}`
        alert(msg)
        reset()
      })
      .catch((error) => alert(`Error: ${error.message}`))
  }

  const reset = () => {
    setCluster_A('')
    setCluster_B('')
    setCluster_C('')
    setNet_alan('')
    setBrut_alan('')
    setKredi_durumu('')
    setKat_sayisi('')
    setIsitma('')
    setBulundugu_kat('')
    setBina_yasi('')
    setEsya('')
    setKullanim_durumu('')
    setToplam_oda_sayisi('')
    setLat('')
    setLng('')
  }




  return (
    <div className="glass">
      <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
            <h4>HOUSE PRICE PREDICTION ML MODEL</h4>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-select-small-label" >İlçe Adı</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    type="string"
                    label="İlçe Adı"
                    
                    
                    
                    
                    onChange={(e) => {

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
                 
                     const ilceAdlari = {                                                                                     
                         'Adalar': [0, 1, 0],
                         'Arnavutköy': [0, 0, 1],
                         'Ataşehir': [1, 0, 0],
                         'Avcılar': [0, 1, 0],
                         'Bağcılar': [0, 0, 1],
                         'Bahçelievler': [0, 1, 0],
                         'Güngören': [1, 0, 0],
                         'Beylikdüzü': [0, 1, 0],
                         'Şişli': [0, 1, 0],
                         'Sancaktepe': [1, 0, 0],
                         'Ümraniye': [0, 1, 0],
                         'Beşiktaş': [0, 1, 0],
                         'Esenyurt': [1, 0, 0],
                         'Sarıyer': [0, 1, 0],
                         'Pendik': [0, 0, 1],
                         'Fatih': [0, 1, 0],
                         'Büyükçekmece': [0, 0, 1],
                         'Eyüpsultan': [0, 0, 1],
                         'Başakşehir': [0, 1, 0],
                         'Beyoğlu': [1, 0, 0],
                         'Kartal': [0, 0, 1],
                         'Sultangazi': [0, 0, 1],
                         'Sultanbeyli': [1, 0, 0],
                         'Kadıköy': [0, 1, 0],
                         'Çekmeköy': [0, 1, 0],
                         'Maltepe': [0, 1, 0],
                         'Tuzla': [0, 1, 0],
                         'Kağıthane': [0, 1, 0],
                         'Zeytinburnu': [0, 1, 0],
                         'Üsküdar': [1, 0, 0],
                         'Küçükçekmece': [0, 0, 1],
                         'Bakırköy': [0, 0, 1],
                         'Silivri': [0, 0, 1],
                         'Bayrampaşa': [0, 0, 1],
                         'Beykoz': [1, 0, 0],
                         'Çatalca': [0, 1, 0],
                         'Esenler': [0, 1, 0],
                         'Gaziosmanpaşa': [1, 0, 0],
                         'Şile': [0, 1, 0]
                     };
                 
                     const [newClusterA, newClusterB,newClusterC] = ilceAdlari[e.target.value] || [0, 0];
                     setCluster_A(newClusterA);
                     setCluster_B(newClusterB);
                     setCluster_C(newClusterC);
                               
                     const [newLat, newLng] = konumDegerleri[e.target.value] || [0, 0];
                     setLat(newLat);
                     setLng(newLng);
                     
                    }}
                  >
                        <MenuItem value={'Adalar'}>Adalar</MenuItem>
                        <MenuItem value={'Arnavutköy'}>Arnavutköy</MenuItem>
                        <MenuItem value={'Ataşehir'}>Ataşehir</MenuItem>
                        <MenuItem value={'Avcılar'}>Avcılar</MenuItem>
                        <MenuItem value={'Bağcılar'}>Bağcılar</MenuItem>
                        <MenuItem value={'Bahçelievler'}>Bahçelievler</MenuItem>
                        <MenuItem value={'Güngören'}>Güngören</MenuItem>
                        <MenuItem value={'Beylikdüzü'}>Beylikdüzü</MenuItem>
                        <MenuItem value={'Şişli'}>Şişli</MenuItem>
                        <MenuItem value={'Sancaktepe'}>Sancaktepe</MenuItem>
                        <MenuItem value={'Ümraniye'}>Ümraniye</MenuItem>
                        <MenuItem value={'Beşiktaş'}>Beşiktaş</MenuItem>
                        <MenuItem value={'Esenyurt'}>Esenyurt</MenuItem>
                        <MenuItem value={'Sarıyer'}>Sarıyer</MenuItem>
                        <MenuItem value={'Pendik'}>Pendik</MenuItem>
                        <MenuItem value={'Fatih'}>Fatih</MenuItem>
                        <MenuItem value={'Büyükçekmece'}>Büyükçekmece</MenuItem>
                        <MenuItem value={'Eyüpsultan'}>Eyüpsultan</MenuItem>
                        <MenuItem value={'Başakşehir'}>Başakşehir</MenuItem>
                        <MenuItem value={'Beyoğlu'}>Beyoğlu</MenuItem>
                        <MenuItem value={'Kartal'}>Kartal</MenuItem>
                        <MenuItem value={'Sultangazi'}>Sultangazi</MenuItem>
                        <MenuItem value={'Sultanbeyli'}>Sultanbeyli</MenuItem>
                        <MenuItem value={'Kadıköy'}>Kadıköy</MenuItem>
                        <MenuItem value={'Çekmeköy'}>Çekmeköy</MenuItem>
                        <MenuItem value={'Maltepe'}>Maltepe</MenuItem>
                        <MenuItem value={'Tuzla'}>Tuzla</MenuItem>
                        <MenuItem value={'Kağıthane'}>Kağıthane</MenuItem>
                        <MenuItem value={'Zeytinburnu'}>Zeytinburnu</MenuItem>
                        <MenuItem value={'Üsküdar'}>Üsküdar</MenuItem>
                        <MenuItem value={'Küçükçekmece'}>Küçükçekmece</MenuItem>
                        <MenuItem value={'Bakırköy'}>Bakırköy</MenuItem>
                        <MenuItem value={'Silivri'}>Silivri</MenuItem>
                        <MenuItem value={'Bayrampaşa'}>Bayrampaşa</MenuItem>
                        <MenuItem value={'Beykoz'}>Beykoz</MenuItem>
                        <MenuItem value={'Çatalca'}>Çatalca</MenuItem>
                        <MenuItem value={'Esenler'}>Esenler</MenuItem>
                        <MenuItem value={'Gaziosmanpaşa'}>Gaziosmanpaşa</MenuItem>
                        <MenuItem value={'Şile'}>Şile</MenuItem>                    
                  </Select>
                </FormControl>
              </Box>


        <div className="glass__form__group">

            
            <Box component="form" sx={{ minWidth: 120 }}  noValidate autoComplete="off"
           
             >
              <FormControl fullWidth>
                    
              <TextField id="outlined-basic" label="Net Alan" variant="outlined" 
               value={net_alan}
               onChange={(e) => setNet_alan(e.target.value)}
               size="small"
              />
              </FormControl>
           </Box> 
        </div>

        <div className="glass__form__group">
            <Box component="form" sx={{ minWidth: 120 }}  noValidate autoComplete="off"
              
              >
                <FormControl fullWidth>
                      
                <TextField id="outlined-basic" label="Brüt Alan" variant="outlined" 
                value={brut_alan}
                onChange={(e) => setBrut_alan(e.target.value)}
                size="small"
                />
                </FormControl>
            </Box> 
        </div>

        <div className="glass__form__group">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-select-small-label">Kredi Durumu</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    type="number"
                    label="Kredi Durumu"
                    onChange={(e) => setKredi_durumu(e.target.value)}
                    
                  >
                    <MenuItem value={1}>Krediye Uygun</MenuItem>
                    <MenuItem value={0}>Krediye Uygun Değil</MenuItem>
                  </Select>
                </FormControl>
              </Box>          
        </div>

        <div className="glass__form__group">
           <Box component="form" sx={{ minWidth: 120 }}  noValidate autoComplete="off"
           
           >
              <FormControl fullWidth>
                    
              <TextField id="outlined-basic" label="Kat Sayısı" variant="outlined" 
               value = {kat_sayisi}
               onChange={(e) => setKat_sayisi(e.target.value)}
               size="small"
              />
              </FormControl>
           </Box>          
        </div>

        <div className="glass__form__group">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-select-small-label">Isıtma</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    type="number"
                    label="Isıtma"
                    onChange={(e) => setIsitma(e.target.value)}
                    
                  >
                    <MenuItem value={1}>Soba</MenuItem>
                    <MenuItem value={2}>Kalorifer</MenuItem>
                    <MenuItem value={3}>Yerden Isıtma</MenuItem>
                    
                  </Select>
                </FormControl>
              </Box>          
      
        </div>

        <div className="glass__form__group">
           <Box component="form" sx={{ minWidth: 120 }}  noValidate autoComplete="off"
           
           >
              <FormControl fullWidth>
                    
              <TextField id="outlined-basic" label="Bulunduğu Kat" variant="outlined" 
               value={bulundugu_kat}
               onChange={(e) => setBulundugu_kat(e.target.value)}
               size="small"
              />
              </FormControl>
           </Box> 
        </div>

        <div className="glass__form__group">
           <Box component="form" sx={{ minWidth: 120 }}  noValidate autoComplete="off"
           
           >
              <FormControl fullWidth>
                    
              <TextField id="outlined-basic" label="Bina Yaşı" variant="outlined" 
               value={bina_yasi}
               onChange={(e) => setBina_yasi(e.target.value)}
               size="small"
              />
              </FormControl>
           </Box> 
        </div>

        <div className="glass__form__group">

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-select-small-label">Eşya Durumu</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    type="number"
                    label="Eşya Durumu"
                    onChange={(e) => setEsya(e.target.value)}
                    
                  >
                    <MenuItem value={1}>Eşyalı</MenuItem>
                    <MenuItem value={0}>Eşyasız</MenuItem>
                    <MenuItem value={2}>Sadece Beyaz Eşya</MenuItem>
                    <MenuItem value={3}>Sadece Mutfak</MenuItem>
                    
                  </Select>
                </FormControl>
              </Box>
        </div>

        <div className="glass__form__group">

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-select-small-label">Kullanım Durumu</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    type="number"
                    label="Kullanım Durumu"
                    onChange={(e) => setKullanim_durumu(e.target.value)}
                    
                  >
                    <MenuItem value={0}>Boş</MenuItem>
                    <MenuItem value={1}>Mülk Sahibi</MenuItem>
                    <MenuItem value={2}>Kiracılı</MenuItem>
                    
                  </Select>
                </FormControl>
              </Box>


              
        </div>

        <div className="glass__form__group">
                

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-select-small-label">Toplam Oda Sayısı</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"

                    label="Toplam Oda Sayısı"
                    onChange={(e) => setToplam_oda_sayisi(e.target.value)}
                    
                  >
                    <MenuItem value={1}>1+0</MenuItem>
                    <MenuItem value={2}>1+1</MenuItem>
                    <MenuItem value={2}>2+0</MenuItem>
                    <MenuItem value={3}>2+1</MenuItem>
                    <MenuItem value={4}>2+2</MenuItem>
                    <MenuItem value={4}>3+1</MenuItem>
                    <MenuItem value={5}>3+2</MenuItem>
                    <MenuItem value={5}>4+1</MenuItem>
                    <MenuItem value={6}>4+2</MenuItem>
                    <MenuItem value={7}>4+3</MenuItem>
                    <MenuItem value={8}>4+4</MenuItem>
                    <MenuItem value={6}>5+1</MenuItem>
                    <MenuItem value={7}>5+2</MenuItem>
                    <MenuItem value={8}>5+3</MenuItem>
                    <MenuItem value={9}>5+4</MenuItem>
                    <MenuItem value={7}>6+1</MenuItem>
                    <MenuItem value={8}>6+2</MenuItem>
                    <MenuItem value={9}>6+3</MenuItem>
                    <MenuItem value={8}>7+1</MenuItem>
                    <MenuItem value={9}>7+2</MenuItem>
                    <MenuItem value={10}>7+3</MenuItem>
                    <MenuItem value={9}>8+1</MenuItem>
                    <MenuItem value={10}>8+2</MenuItem>
                    <MenuItem value={11}>8+3</MenuItem>
                    <MenuItem value={12}>8+4</MenuItem>
                    <MenuItem value={10}>9+1</MenuItem>
                    <MenuItem value={11}>9+2</MenuItem>
                    <MenuItem value={12}>9+3</MenuItem>
                    <MenuItem value={11}>10 ve üzeri</MenuItem>
                  </Select>
                </FormControl>
              </Box>
        </div>


        <div>
        <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
              <span>Launch</span>
        </button>   
              
        </div>
      </form>
      
    </div>

      
  )
}

export default Glass
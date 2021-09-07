import React from 'react';
import "./SuccesConfirm.css";

const SuccesConfirm = () => {
    return (
        <div className="not">
            <div className="kbl">
                <a href="/">
                    <button type="button" className="btn">Kembali</button><br />
                </a>
                
            </div>
            <img alt="checklist" src="./images/check1.png"/>
            <h1 style={{fontWeight: "bold"}}>Pendaftaran Sukses!</h1>
            <p>Jawaban Anda Telah Terekam</p>
            <p>Silahkan Bergabung Dengan Grup Whastapp</p>
             <a href="https://chat.whatsapp.com/GBDPorigJ8WK0AntwWbuYk" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn">Gabung Sekarang</button><br />
            </a>
        </div>
    )
}

export default SuccesConfirm

import React, { useState } from 'react'
import { useHistory } from 'react-router';
import "./style.css";

const Daftar = () => {
    const [data, setData] = useState<any>();
    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [address, setAddress] = useState('');
    const [education, setEducation] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const history = useHistory();
    const checked = () => setIsChecked(!isChecked);

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handleChangeBirthday = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBirthday(event.target.value);
    }
    const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    }
    const handleChangeEducation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEducation(event.target.value);
    }
    const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.currentTarget.value);
    }
    const handleChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    const handleSubmit = async () => {
        try {
            // setData({name, birthday, address, education, phone, message});
            const response = await fetch("https://v1.nocodeapi.com/yukafi/google_sheets/YqMSJoIqwPQEsqwu?tabId=Sheet1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([
                    [name, birthday, address, education, phone, message]
                ]),
            })
            await response.json();
            setData({...data, name, birthday, address, education, phone, message})
            if(response.ok === true) {
                history.push('/success');
            } else {
                alert("Mohon maaf sepertinya ada yang salah, mohon tunggu sampai sistem kami sukses diperbaiki");
            }
        } catch(error) {
            console.error(error);
        }
    } 

    return (
        <div className="wrapper">
            <div className="title">
                FORM PENDAFTARAN
            </div>
            <div className="form">
                <div className="inputfield">
                    <label>Nama Lengkap</label>
                    <input type="text" className="input" value={name} onChange={(event) => handleChangeName(event)} />
                </div>
                <div className="inputfield">
                    <label>Tempat, Tanggal Lahir</label>
                    <input type="text" className="input" value={birthday} onChange={(event) => handleChangeBirthday(event)} />
                </div>
                <div className="inputfield">
                    <label>Alamat</label>
                    <input type="text" className="input" value={address} onChange={(event) => handleChangeAddress(event)} />
                </div>
                <div className="inputfield">
                    <label>Pendidikan Saat Ini</label>
                    <input type="text" className="input" value={education} onChange={(event) => handleChangeEducation(event)} />
                </div>
                <div className="inputfield">
                    <label htmlFor="phone">No Hp/Whatsapp</label>
                    <input type="text" className="input" value={phone} onChange={(event) => handleChangePhone(event)} />
                </div>
                <div className="inputfield">
                    <label>Alasan mengikuti program ini</label>
                    <textarea className="textarea" value={message} onChange={(value) => handleChangeMessage(value)}></textarea>
                </div>
                <div className="inputCheckbox">
                    <label>
                        <input type="checkbox"
                            defaultChecked={isChecked}
                            onChange={checked}
                        />
                        <p>Saya siap berkomitmen mengikuti acara ini sampai selesai.</p>
                    </label>
                </div>
                <div className="input_field">
                    {isChecked ? <button type="button" className="btn" onClick={handleSubmit} >Daftar</button> : <p style={{textAlign: 'center', marginTop: '10px', color: 'red'}}>Silahkan setujui komitmen untuk mendaftar!</p>}
                    
                </div>
            </div>
        </div>
    )
}

export default Daftar

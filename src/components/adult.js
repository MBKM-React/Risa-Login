import { useState } from "react";

export default function Adult(){
    const [people, setPeople] = useState();
    const [nik, setNik] = useState();
    const [umur, setUmur] = useState();

return(
    <>
    <h6>Nama Pemesan</h6>
    <input type="text">Nama Sesuai KTP</input>

    <h6>Nomor Identitas</h6>
    <input type="text">Nomor Induk Kependudukan</input>
    </>
)

}
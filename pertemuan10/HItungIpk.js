lat*0.2 + keh*0.1 + uts*0.3 + uas*0.4

function hitungipk(lat, keh, uts, uas){
    const totalNilai = lat*0.2 + keh*0.1 + uts*0.3 + uas*0.4;

    const ipk = totalNilai(75,100,75,80) / 0.1;

    console.log("ipk saya" + ipk);
    document.writeln(ipk);

}
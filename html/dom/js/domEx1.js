function changeBGColor() {
    const rval = document.getElementById("redtxt").value;
    const gval = document.getElementById("greentxt").value;
    const bval = document.getElementById("bluetxt").value;
    document.body.style.backgroundColor = `rgb(${rval}, ${gval}, ${bval})`;
}
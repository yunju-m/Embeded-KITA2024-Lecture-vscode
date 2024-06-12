$(function () {
    const filelist = document.getElementById("filelist");
    let fileNum = 2;

    $("#fileplus").click(function () {
        // <p><input id="file1" type="file" /></p> dom으로 작성
        const newP = document.createElement("P");
        const newInput = document.createElement("INPUT");
        newInput.setAttribute("id", "file" + fileNum++);
        newInput.setAttribute("type", "file");
        newP.appendChild(newInput);
        filelist.append(newP);
    });

    $("#fileminus").click(function () {
        if (fileNum != 1) {
            filelist.removeChild(filelist.lastChild);
            fileNum--;
        }
    });
});
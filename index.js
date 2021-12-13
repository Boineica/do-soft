function title2() {
        ocument.getElementById("title").innerHTML = "Do-Soft | Your open-source future"
        document.getElementById("title").setAttribute("onclick", "title3()")
}

function title3() {
        document.getElementById('title').innerHTML = "Do-Soft | There's always room for improvement in open-source"
        document.getElementById('title').setAttribute("onclick", "title1()")
}

function title1() {
        document.getElementById('title').innerHTML = "Do-Soft | Do your soft job"
        document.getElementById('title').setAttribute("onclick", "title2()")
}
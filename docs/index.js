function title2() {
    document.getElementsByID("title").innerHTML = "Do-Soft | Your open-source future"
    document.getElementsByID("title").onclick = "title3()"
}

function title3() {
    document.getElementsByID('title').innerHTML = "Do-Soft | There's always room for improvement in open-source"
    document.getElementsByID('title').onclick = "title1()"
}

function title1() {
    document.getElementsByID('title').innerHTML = "Do-Soft | Do your soft job"
    document.getElementsByID('title').onclick = "title2()"
}
window.onscroll = function() {
    logo();
}

function init() {
    for (var index = 0; index < 10; index++) {
        createdMini('', '', '');
    }
}
init();



function scrollTop() {
    //возвращяет текущий скролл
    var html = document.documentElement;
    var body = document.body;
    var scrollTop = html.scrollTop || body && body.scrollTop || 0;
    scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)
    return scrollTop;
}

function logo() {
    var scroll = scrollTop();
    var logo = document.getElementById("logo").children[0].children[0];

    logo.style.filter = "invert(1)";
    if (scroll > 120) {
        logo.style.filter = "invert(0)";
    }


}
// Initialize Firebase

firebase.initializeApp({
    apiKey: "AIzaSyBKS4omXQ2OX0dd9gL-Bugb6lgJBOZBTLE",
    authDomain: "ffewf-5ab2a.firebaseapp.com",
    projectId: "ffewf-5ab2a"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("ships").get().then((querySnapshot) => {
    document.getElementById('root').innerHTML = '';
    querySnapshot.forEach((doc) => {
        createdMini(doc.data().name, doc.data().imgMax, doc.id);
    });
});

function createdMini(name, img, id) {
    var h3 = document.createElement('h3')
    var imge = document.createElement('div')
    var contein = document.createElement('div')
    var root = document.getElementById('root');

    h3.textContent = name;
    h3.className = 'ship-title'

    imge.style.backgroundImage = 'url(' + img + ')';
    imge.className = 'ship-img'

    contein.dataset.id = id;
    contein.className = 'contShip'

    contein.appendChild(imge);
    contein.appendChild(h3);

    contein.addEventListener('click', createdBig);

    root.appendChild(contein);
}

function createdBig(e) {

    db.collection("ships").doc(e.currentTarget.dataset.id).get().then((doc) => {
        var name, primary, crew, length, height, weigth, desc, img, id;
        name = doc.data().name;
        primary = doc.data().primary;
        crew = doc.data().crew;
        length = doc.data().length;
        height = doc.data().height;
        weight = doc.data().weight;
        desc = doc.data().desc;
        img = doc.data().imgMax;
        id = doc.id;
        console.log(doc.data());
        cr(name, primary, crew, length, height, weight, desc, img, id)
    });


}

function cr(name, primary, crew, length, height, weight, desc, img, id) {

    var title = document.createElement('h3');
    var shipWeight = document.createElement('div');
    var shipDesc = document.createElement('div');
    var shipImge = document.createElement('div');
    var shipPrimary = document.createElement('div');
    var shipCrew = document.createElement('div');
    var shipLength = document.createElement('div');
    var shipHeight = document.createElement('div');
    var contein = document.createElement('div');
    var props = document.createElement('div');
    var shadow = document.createElement('div');

    var root = document.getElementById('root');


    title.textContent = name;
    title.className = 'ship-title-big';

    shipPrimary.innerHTML = '<span  class="desc speed-i">Производитель: </span>' + primary;
    shipPrimary.className = 'ship-primary';

    shipWeight.innerHTML = '<span  class="desc weight-i">Вес: </span>' + weight;
    shipWeight.className = 'ship-weight-big';
    shipLength.innerHTML = '<span  class="desc weight-i">Длина: </span>' + length;
    shipLength.className = 'ship-weight-big';
    shipHeight.innerHTML = '<span  class="desc weight-i">Высота: </span>' + height;
    shipHeight.className = 'ship-weight-big';
    shipCrew.innerHTML = '<span  class="desc weight-i">Пассажиры: </span>' + crew;
    shipCrew.className = 'ship-weight-big';




    props.className = 'ship-props';

    shipDesc.innerHTML = '<div class="desc desc-i">Описание: </div>' + desc;
    shipDesc.className = 'ship-desc-big';

    shipImge.style.backgroundImage = 'url(' + img + ')';
    shipImge.className = 'ship-img-big';

    shadow.className = 'ship-shadow';

    contein.className = 'contShipBig';

    contein.appendChild(shipImge);

    props.appendChild(title);
    props.appendChild(shipPrimary);
    props.appendChild(shipWeight);
    props.appendChild(shipLength);
    props.appendChild(shipHeight);
    props.appendChild(shipCrew);
    props.appendChild(shipDesc);

    contein.appendChild(props);


    var end = document.createElement('div');
    end.appendChild(contein);
    end.appendChild(shadow);
    end.className = 'end';

    shadow.addEventListener('click', function() {
        root.removeChild(end)
    })


    root.appendChild(end);
}



function sub(e) {
    console.log(12)
    var name = document.getElementById('name').value;
    var primary = document.getElementById('primary').value;
    var crew = document.getElementById('crew').value;
    var length = document.getElementById('length').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var desc = document.getElementById('desc').value;
    db.collection("ships").doc(Date.now().toString() + '').set({
            name: name,
            primary: primary,
            crew: crew,
            length: length,
            height: height,
            weight: weight,
            desc: desc
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    document.getElementById('name').value = '';
    document.getElementById('primary').value = '';
    document.getElementById('crew').value = '';
    document.getElementById('length').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('desc').value = '';
}
document.onkeypress = (e) => {
    console.log(e);
    if (e.key === 'Enter') {
        sub();
    }
}
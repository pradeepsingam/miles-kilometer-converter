(function () {

    const heading = document.querySelector('h1');
    const subHeading = document.querySelector('p');
    const convertBtn = document.getElementById('convert');
    const distance = document.getElementById('distance');
    var convertType = "miles";



    document.addEventListener('keydown', (event) => {

        key = event.code;

        if (key === 'KeyK') {
            heading.innerHTML = "Kilometers to Miles Converter";
            subHeading.innerHTML = "Type in a number of Kilometers and click the button to convert the distance to Miles.";
            convertType = "km";

        } else if (key === 'KeyM') {
            heading.innerHTML = "Miles to Kilometers Converter";
            subHeading.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers."
            convertType = "miles";
        }
    })



    convertBtn.addEventListener('submit', (event) => {
        event.preventDefault();

        if (convertType === "miles") {

            if (distance.value) {
                document.querySelector('h2').innerHTML = `${distance.value} Miles is equals to  ${(distance.value * 1.60934).toFixed(3)} Kilometers`;
                document.querySelector('.invisible').style.color = 'black'
                distance.value = null;
            } else {
                document.querySelector('h2').innerHTML = "Please enter a Number";
                document.querySelector('.invisible').style.color = 'black'
            }
        } else if (convertType === "km") {
            if (distance.value) {
                document.querySelector('h2').innerHTML = `${distance.value} Kilometers is equals to  ${(distance.value / 1.60934).toFixed(3)} Miles`;
                document.querySelector('.invisible').style.color = 'black'
                distance.value = null;
            } else {
                document.querySelector('h2').innerHTML = "Please enter a Number";
                document.querySelector('.invisible').style.color = 'black'
            }
        }

    })
})()
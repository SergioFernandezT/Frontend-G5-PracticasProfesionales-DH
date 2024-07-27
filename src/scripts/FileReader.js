// var base64String = '';
export default function Uploaded() {
    var file = document.querySelector('input[type=file]')['files'][0];
    var reader = new FileReader();
    reader.onload = function () {
        var base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        var imageBase64Stringsep = base64String;
        console.log(imageBase64Stringsep);
    };
    reader.readAsDataURL(file);
    return imageBase64Stringsep
}
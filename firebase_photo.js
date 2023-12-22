//reference firebase storage
let storageRef = firebase.storage().ref();

//declare variables
let filePath;

//register jquery events
$('#input-file').change(setFilePath);
$('#btnUpload').click(uploadFile);

function setFilePath(){
    filePath = this.files[0];
}

function uploadFile(){
    // Check if a file is selected
    if (!filePath) {
        console.error('No file selected for upload.');
        return;
    }
    $('#btnUpload').html('<span class = "spinner-border spinner-border-sm"></span>');
}

//reference upload file
let fileRef = storageRef.child(`uploadFiles/${filePath.name}`);

//upload file to firestorage
fileRef.put(filePath)
 .then(function(snapshot){
    return snapshot.ref.getDownloadURL();
 })
 .then(function(downloadURL){
    $('#btnUpload').html('上傳');
    $('#upload-filename').html(`<a href="${downloadURL}">${filePath.name}</a> 已上傳圖片`);
 })
 .catch(function(error){
    console.error('Failed to upload file and get link', error);
 });

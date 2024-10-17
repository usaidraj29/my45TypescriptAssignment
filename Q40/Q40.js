function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Usaid", "21");
var album2 = make_album("Sufiyan", "bikes");
var album3 = make_album("Aatif Aslam", "Red", 40);
console.log(album1);
console.log(album2);
console.log(album3);

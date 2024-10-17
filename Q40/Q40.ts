interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
      artist: artist,
      title: title
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  const album1 = make_album("Usaid", "21");
  const album2 = make_album("Sufiyan", "bikes");
  const album3 = make_album("Aatif Aslam", "Red", 40);
  console.log(album1);
  console.log(album2);
  console.log(album3);
  
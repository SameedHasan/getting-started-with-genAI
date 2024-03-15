// Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(
  artist_name: string,
  album_title: string,
  tracks?: number
): object {
  let record: { artist_name: string; album_title: string; tracks?: number } = {
    artist_name,
    album_title,
  };
  if (tracks !== undefined) {
    record.tracks = tracks;
  }
  return record;
}

const record1 = make_album("Atif Aslam", "Jal Pari");
const record2 = make_album("Micheal Jackson", "Thriller");
const record3 = make_album("Arijit Singh", "Best of Me");
console.log(record1);
console.log(record2);
console.log(record3);
const record4 = make_album("Nazia Hassan", "Disco Deewane", 7);
console.log(record4);

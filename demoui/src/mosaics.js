import Talking from "./img/talking.jpg";
import Cat from "./img/cat.jpg";
import Frog from "./img/frogs.jpg";
import Rain from "./img/rain.jpg";

const sources = [
  {
    title: "Human Voice",
    img: Talking,
    desc:
      "This is an audio file gained from Nico talking into the microphone for a minute",
    audio: "http://streaming.tdiradio.com:8000/house.mp3"
  },
  {
    title: "Frogs Croaking",
    img: Frog,
    desc:
      "This is an audio file contains a frog meowing [filler to make this card not so small]",
    audio: "http://streaming.tdiradio.com:8000/house.mp3"
  },

  {
    title: "Cat Meowing",
    img: Cat,
    desc:
      "This is an audio file contains a cat meowing [filler to make this card not so small]",
    audio: "http://streaming.tdiradio.com:8000/house.mp3"
  },
  {
    title: "Thunderstorm",
    img: Rain,
    desc:
      "This is an audio file contains a thunderstorm [filler to make this card not so small]",
    audio: "http://streaming.tdiradio.com:8000/house.mp3"
  }
];

export default sources;

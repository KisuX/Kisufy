class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Yine Edemedik Dans", "Gazapizm", "1.jpg", "1.mp3"),
  new Music("Kalbi Çiçek", "Emre Nalbantoğlu", "2.jpg", "2.mp3"),
  new Music("Poşet (cover)", "Hugola Covers", "3.jpg", "3.mp3"),
  new Music("Beni Al", "Ankara Echoes", "4.jpg", "4.mp3"),
];

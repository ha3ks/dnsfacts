function genQuote() {
  var randNum = Math.floor(Math.random() * 15) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
}

//quote array
var quotes = ["Blank", "\"In Ghostbusters (1984) the laser containment grid designed and built by Egon and Ray was the inspiration for the DNS system used by modern day internet.\"<br>", "\"In The Mummy (1999) starring Brandan Fraser and Rachel Weisz, Rick and Evelyn's chemistry was so strong because even back in the 1920's they beleived DNS would solve everything.\"<br>", "\"In the 2016 CW Television series 'DC Legends of Tomorrow', Time Master Rip Hunter traveled from the distant future to recruit Superheros and Villains from earth history who would not be 'missing from the timeline' so that they could implement proper DNS security to stop Vandal Savage from taking over the internet with is Snake Oil.\"<br>", "\"The Island in the television show 'Lost' was nicknamed DNS because of a 'Dark Non-human Shadow' creature that stalked any humans, or to liken it to modern day technology, data packets, and killed them... or something. I'm not sure because I dropped off after a few episodes, something about 'not Pennys boat' and the entire thing was purgatory.\"<br>", "\"When setting up a brand new Windows Computer and progressing through the Microsoft Out Of Box (OOB) experience, if you click 'No' for using Cortana, God kills a DNS\"<br>", "\"Every time you exit VIM on the first try, God kills a DNS\"<br>", "\"There is infact a 'lost' episode of Friends entitled 'The One Without DNS'\"<br>", "\"Darth Vader tried to turn Luke to the dark side of the force by telling him DNS would solve every security issue. Luke responded famously with 'Nooooo' and dropped from the comms tower to escape.\"<br>", "\"It is well known Meatloaf 'would do anything for love, but I won't do that'. The 'that' is be a Snake Oil peddler.\"<br>", "\"Scientists invented the worlds tiniest violin that can be played every time a Snake Oil salesman fumbles a sale, if you listen closely you can hear it!\"<br>", "\"I don't believe in love at first sight, but if somebody tries to sell you DNS Quantum PKI at first sight, run!\"<br>", "\"Futurama, set in the year 3000+ has an episode where the MOM company invents a new way to sell products to users. It was DNS FUD Marketing.\"<br>", "\"DNS was origionally named Windows3.1 for networks.\"<br>", "\"Why was the girl sad? because she had just been told a load of DNS Snake Oil.\"<br>", "\"In the song Bad boy for Life, the chorus lyrics were written after Black Rob, Mark Curry and Diddy decided to take on Snake Oil peddlers.\"<br>",];
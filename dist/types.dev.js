"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var typesList = {
  bulbasaur: ["Grass", "Poison"],
  ivysaur: ["Grass", "Poison"],
  venusaur: ["Grass", "Poison"],
  charmander: ["Fire", "None"],
  charmeleon: ["Fire", "None"],
  charizard: ["Fire", "Flying"],
  squirtle: ["Water", "None"],
  wartortle: ["Water", "None"],
  blastoise: ["Water", "None"],
  caterpie: ["Bug", "None"],
  metapod: ["Bug", "None"],
  butterfree: ["Bug", "Flying"],
  weedle: ["Bug", "Poison"],
  kakuna: ["Bug", "Poison"],
  beedrill: ["Bug", "Poison"],
  pidgey: ["Normal", "Flying"],
  pidgeotto: ["Normal", "Flying"],
  pidgeot: ["Normal", "Flying"],
  rattata: ["Normal", "None"],
  raticate: ["Normal", "None"],
  spearow: ["Normal", "Flying"],
  fearow: ["Normal", "Flying"],
  ekans: ["Poison", "None"],
  arbok: ["Poison", "None"],
  pikachu: ["Electric", "None"],
  raichu: ["Electric", "None"],
  sandshrew: ["Ground", "None"],
  sandslash: ["Ground", "None"],
  "nidoran-f": ["Poison", "None"],
  nidorina: ["Poison", "None"],
  nidoqueen: ["Poison", "Ground"],
  "nidoran-m": ["Poison", "None"],
  nidorino: ["Poison", "None"],
  nidoking: ["Poison", "Ground"],
  clefairy: ["Fairy", "None"],
  clefable: ["Fairy", "None"],
  vulpix: ["Fire", "None"],
  ninetales: ["Fire", "None"],
  jigglypuff: ["Normal", "Fairy"],
  wigglytuff: ["Normal", "Fairy"],
  zubat: ["Poison", "Flying"],
  golbat: ["Poison", "Flying"],
  oddish: ["Grass", "Poison"],
  gloom: ["Grass", "Poison"],
  vileplume: ["Grass", "Poison"],
  paras: ["Bug", "Grass"],
  parasect: ["Bug", "Grass"],
  venonat: ["Bug", "Poison"],
  venomoth: ["Bug", "Poison"],
  diglett: ["Ground", "None"],
  dugtrio: ["Ground", "None"],
  meowth: ["Normal", "None"],
  persian: ["Normal", "None"],
  psyduck: ["Water", "None"],
  golduck: ["Water", "None"],
  mankey: ["Fighting", "None"],
  primeape: ["Fighting", "None"],
  growlithe: ["Fire", "None"],
  arcanine: ["Fire", "None"],
  poliwag: ["Water", "None"],
  poliwhirl: ["Water", "None"],
  poliwrath: ["Water", "Fighting"],
  abra: ["Psychic", "None"],
  kadabra: ["Psychic", "None"],
  alakazam: ["Psychic", "None"],
  machop: ["Fighting", "None"],
  machoke: ["Fighting", "None"],
  machamp: ["Fighting", "None"],
  bellsprout: ["Grass", "Poison"],
  weepinbell: ["Grass", "Poison"],
  victreebel: ["Grass", "Poison"],
  tentacool: ["Water", "Poison"],
  tentacruel: ["Water", "Poison"],
  geodude: ["Rock", "Ground"],
  graveler: ["Rock", "Ground"],
  golem: ["Rock", "Ground"],
  ponyta: ["Fire", "None"],
  rapidash: ["Fire", "None"],
  slowpoke: ["Water", "Psychic"],
  slowbro: ["Water", "Psychic"],
  magnemite: ["Electric", "Steel"],
  magneton: ["Electric", "Steel"],
  farfetchd: ["Normal", "Flying"],
  doduo: ["Normal", "Flying"],
  dodrio: ["Normal", "Flying"],
  seel: ["Water", "None"],
  dewgong: ["Water", "Ice"],
  grimer: ["Poison", "None"],
  muk: ["Poison", "None"],
  shellder: ["Water", "None"],
  cloyster: ["Water", "Ice"],
  gastly: ["Ghost", "Poison"],
  haunter: ["Ghost", "Poison"],
  gengar: ["Ghost", "Poison"],
  onix: ["Rock", "Ground"],
  drowzee: ["Psychic", "None"],
  hypno: ["Psychic", "None"],
  krabby: ["Water", "None"],
  kingler: ["Water", "None"],
  voltorb: ["Electric", "None"],
  electrode: ["Electric", "None"],
  exeggcute: ["Grass", "Psychic"],
  exeggutor: ["Grass", "Psychic"],
  cubone: ["Ground", "None"],
  marowak: ["Ground", "None"],
  hitmonlee: ["Fighting", "None"],
  hitmonchan: ["Fighting", "None"],
  lickitung: ["Normal", "None"],
  koffing: ["Poison", "None"],
  weezing: ["Poison", "None"],
  rhyhorn: ["Ground", "Rock"],
  rhydon: ["Ground", "Rock"],
  chansey: ["Normal", "None"],
  tangela: ["Grass", "None"],
  kangaskhan: ["Normal", "None"],
  horsea: ["Water", "None"],
  seadra: ["Water", "None"],
  goldeen: ["Water", "None"],
  seaking: ["Water", "None"],
  staryu: ["Water", "None"],
  starmie: ["Water", "Psychic"],
  "mr-mime": ["Psychic", "Fairy"],
  scyther: ["Bug", "Flying"],
  jynx: ["Ice", "Psychic"],
  electabuzz: ["Electric", "None"],
  magmar: ["Fire", "None"],
  pinsir: ["Bug", "None"],
  tauros: ["Normal", "None"],
  magikarp: ["Water", "None"],
  gyarados: ["Water", "Flying"],
  lapras: ["Water", "Ice"],
  ditto: ["Normal", "None"],
  eevee: ["Normal", "None"],
  vaporeon: ["Water", "None"],
  jolteon: ["Electric", "None"],
  flareon: ["Fire", "None"],
  porygon: ["Normal", "None"],
  omanyte: ["Rock", "Water"],
  omastar: ["Rock", "Water"],
  kabuto: ["Rock", "Water"],
  kabutops: ["Rock", "Water"],
  aerodactyl: ["Rock", "Flying"],
  snorlax: ["Normal", "None"],
  articuno: ["Ice", "Flying"],
  zapdos: ["Electric", "Flying"],
  moltres: ["Fire", "Flying"],
  dratini: ["Dragon", "None"],
  dragonair: ["Dragon", "None"],
  dragonite: ["Dragon", "Flying"],
  mewtwo: ["Psychic", "None"],
  mew: ["Psychic", "None"],
  chikorita: ["Grass", "None"],
  bayleef: ["Grass", "None"],
  meganium: ["Grass", "None"],
  cyndaquil: ["Fire", "None"],
  quilava: ["Fire", "None"],
  typhlosion: ["Fire", "None"],
  totodile: ["Water", "None"],
  croconaw: ["Water", "None"],
  feraligatr: ["Water", "None"],
  sentret: ["Normal", "None"],
  furret: ["Normal", "None"],
  hoothoot: ["Normal", "Flying"],
  noctowl: ["Normal", "Flying"],
  ledyba: ["Bug", "Flying"],
  ledian: ["Bug", "Flying"],
  spinarak: ["Bug", "Poison"],
  ariados: ["Bug", "Poison"],
  crobat: ["Poison", "Flying"],
  chinchou: ["Water", "Electric"],
  lanturn: ["Water", "Electric"],
  pichu: ["Electric", "None"],
  cleffa: ["Fairy", "None"],
  igglybuff: ["Normal", "Fairy"],
  togepi: ["Fairy", "None"],
  togetic: ["Fairy", "Flying"],
  natu: ["Psychic", "Flying"],
  xatu: ["Psychic", "Flying"],
  mareep: ["Electric", "None"],
  flaaffy: ["Electric", "None"],
  ampharos: ["Electric", "None"],
  bellossom: ["Grass", "None"],
  marill: ["Water", "Fairy"],
  azumarill: ["Water", "Fairy"],
  sudowoodo: ["Rock", "None"],
  politoed: ["Water", "None"],
  hoppip: ["Grass", "Flying"],
  skiploom: ["Grass", "Flying"],
  jumpluff: ["Grass", "Flying"],
  aipom: ["Normal", "None"],
  sunkern: ["Grass", "None"],
  sunflora: ["Grass", "None"],
  yanma: ["Bug", "Flying"],
  wooper: ["Water", "Ground"],
  quagsire: ["Water", "Ground"],
  espeon: ["Psychic", "None"],
  umbreon: ["Dark", "None"],
  murkrow: ["Dark", "Flying"],
  slowking: ["Water", "Psychic"],
  misdreavus: ["Ghost", "None"],
  unown: ["Psychic", "None"],
  wobbuffet: ["Psychic", "None"],
  girafarig: ["Normal", "Psychic"],
  pineco: ["Bug", "None"],
  forretress: ["Bug", "Steel"],
  dunsparce: ["Normal", "None"],
  gligar: ["Ground", "Flying"],
  Steelix: ["Steel", "Ground"],
  snubbull: ["Fairy", "None"],
  granbull: ["Fairy", "None"],
  qwilfish: ["Water", "Poison"],
  scizor: ["Bug", "Steel"],
  shuckle: ["Bug", "Rock"],
  heracross: ["Bug", "Fighting"],
  sneasel: ["Dark", "Ice"],
  teddiursa: ["Normal", "None"],
  ursaring: ["Normal", "None"],
  slugma: ["Fire", "None"],
  magcargo: ["Fire", "Rock"],
  swinub: ["Ice", "Ground"],
  piloswine: ["Ice", "Ground"],
  corsola: ["Water", "Rock"],
  remoraid: ["Water", "None"],
  octillery: ["Water", "None"],
  delibird: ["Ice", "Flying"],
  mantine: ["Water", "Flying"],
  skarmory: ["Steel", "Flying"],
  houndour: ["Dark", "Fire"],
  houndoom: ["Dark", "Fire"],
  kingdra: ["Water", "Dragon"],
  phanpy: ["Ground", "None"],
  donphan: ["Ground", "None"],
  porygon2: ["Normal", "None"],
  stantler: ["Normal", "None"],
  smeargle: ["Normal", "None"],
  tyrogue: ["Fighting", "None"],
  hitmontop: ["Fighting", "None"],
  smoochum: ["Ice", "Psychic"],
  elekid: ["Electric", "None"],
  magby: ["Fire", "None"],
  miltank: ["Normal", "None"],
  blissey: ["Normal", "None"],
  raikou: ["Electric", "None"],
  entei: ["Fire", "None"],
  suicune: ["Water", "None"],
  larvitar: ["Rock", "Ground"],
  pupitar: ["Rock", "Ground"],
  tyranitar: ["Rock", "Dark"],
  lugia: ["Psychic", "Flying"],
  "ho-oh": ["Fire", "Flying"],
  celebi: ["Psychic", "Grass"],
  treecko: ["Grass", "None"],
  grovyle: ["Grass", "None"],
  sceptile: ["Grass", "None"],
  torchic: ["Fire", "None"],
  combusken: ["Fire", "Fighting"],
  blaziken: ["Fire", "Fighting"],
  mudkip: ["Water", "None"],
  marshtomp: ["Water", "Ground"],
  swampert: ["Water", "Ground"],
  poochyena: ["Dark", "None"],
  mightyena: ["Dark", "None"],
  zigzagoon: ["Normal", "None"],
  linoone: ["Normal", "None"],
  wurmple: ["Bug", "None"],
  silcoon: ["Bug", "None"],
  beautifly: ["Bug", "Flying"],
  cascoon: ["Bug", "None"],
  dustox: ["Bug", "Poison"],
  lotad: ["Water", "Grass"],
  lombre: ["Water", "Grass"],
  ludicolo: ["Water", "Grass"],
  seedot: ["Grass", "None"],
  nuzleaf: ["Grass", "Dark"],
  shiftry: ["Grass", "Dark"],
  taillow: ["Normal", "Flying"],
  swellow: ["Normal", "Flying"],
  wingull: ["Water", "Flying"],
  pelipper: ["Water", "Flying"],
  ralts: ["Psychic", "Fairy"],
  kirlia: ["Psychic", "Fairy"],
  gardevoir: ["Psychic", "Fairy"],
  surskit: ["Bug", "Water"],
  masquerain: ["Bug", "Flying"],
  shroomish: ["Grass", "None"],
  breloom: ["Grass", "Fighting"],
  slakoth: ["Normal", "None"],
  vigoroth: ["Normal", "None"],
  slaking: ["Normal", "None"],
  nincada: ["Bug", "Ground"],
  ninjask: ["Bug", "Flying"],
  shedinja: ["Bug", "Ghost"],
  whismur: ["Normal", "None"],
  loudred: ["Normal", "None"],
  exploud: ["Normal", "None"],
  makuhita: ["Fighting", "None"],
  hariyama: ["Fighting", "None"],
  azurill: ["Normal", "Fairy"],
  nosepass: ["Rock", "None"],
  skitty: ["Normal", "None"],
  delcatty: ["Normal", "None"],
  sableye: ["Dark", "Ghost"],
  mawile: ["Steel", "Fairy"],
  aron: ["Steel", "Rock"],
  lairon: ["Steel", "Rock"],
  aggron: ["Steel", "Rock"],
  meditite: ["Fighting", "Psychic"],
  medicham: ["Fighting", "Psychic"],
  electrike: ["Electric", "None"],
  manectric: ["Electric", "None"],
  plusle: ["Electric", "None"],
  minun: ["Electric", "None"],
  volbeat: ["Bug", "None"],
  illumise: ["Bug", "None"],
  roselia: ["Grass", "Poison"],
  gulpin: ["Poison", "None"],
  swalot: ["Poison", "None"],
  carvanha: ["Water", "Dark"],
  sharpedo: ["Water", "Dark"],
  wailmer: ["Water", "None"],
  wailord: ["Water", "None"],
  numel: ["Fire", "Ground"],
  camerupt: ["Fire", "Ground"],
  torkoal: ["Fire", "None"],
  spoink: ["Psychic", "None"],
  grumpig: ["Psychic", "None"],
  spinda: ["Normal", "None"],
  trapinch: ["Ground", "None"],
  vibrava: ["Ground", "Dragon"],
  flygon: ["Ground", "Dragon"],
  cacnea: ["Grass", "None"],
  cacturne: ["Grass", "Dark"],
  swablu: ["Normal", "Flying"],
  altaria: ["Dragon", "Flying"],
  zangoose: ["Normal", "None"],
  seviper: ["Poison", "None"],
  lunatone: ["Rock", "Psychic"],
  solRock: ["Rock", "Psychic"],
  barboach: ["Water", "Ground"],
  whiscash: ["Water", "Ground"],
  corphish: ["Water", "None"],
  crawdaunt: ["Water", "Dark"],
  baltoy: ["Ground", "Psychic"],
  claydol: ["Ground", "Psychic"],
  lileep: ["Rock", "Grass"],
  cradily: ["Rock", "Grass"],
  anorith: ["Rock", "Bug"],
  armaldo: ["Rock", "Bug"],
  feebas: ["Water", "None"],
  milotic: ["Water", "None"],
  castform: ["Normal", "None"],
  kecleon: ["Normal", "None"],
  shuppet: ["Ghost", "None"],
  banette: ["Ghost", "None"],
  duskull: ["Ghost", "None"],
  dusclops: ["Ghost", "None"],
  tropius: ["Grass", "Flying"],
  chimecho: ["Psychic", "None"],
  absol: ["Dark", "None"],
  wynaut: ["Psychic", "None"],
  snorunt: ["Ice", "None"],
  glalie: ["Ice", "None"],
  spheal: ["Ice", "Water"],
  sealeo: ["Ice", "Water"],
  walrein: ["Ice", "Water"],
  clamperl: ["Water", "None"],
  huntail: ["Water", "None"],
  gorebyss: ["Water", "None"],
  relicanth: ["Water", "Rock"],
  luvdisc: ["Water", "None"],
  bagon: ["Dragon", "None"],
  shelgon: ["Dragon", "None"],
  salamence: ["Dragon", "Flying"],
  beldum: ["Steel", "Psychic"],
  metang: ["Steel", "Psychic"],
  metagross: ["Steel", "Psychic"],
  regiRock: ["Rock", "None"],
  regice: ["Ice", "None"],
  regiSteel: ["Steel", "None"],
  latias: ["Dragon", "Psychic"],
  latios: ["Dragon", "Psychic"],
  kyogre: ["Water", "None"],
  groudon: ["Ground", "None"],
  rayquaza: ["Dragon", "Flying"],
  jirachi: ["Steel", "Psychic"],
  "deoxys-Normal": ["Psychic", "None"],
  turtwig: ["Grass", "None"],
  grotle: ["Grass", "None"],
  torterra: ["Grass", "Ground"],
  chimchar: ["Fire", "None"],
  monferno: ["Fire", "Fighting"],
  infernape: ["Fire", "Fighting"],
  piplup: ["Water", "None"],
  prinplup: ["Water", "None"],
  empoleon: ["Water", "Steel"],
  starly: ["Normal", "Flying"],
  staravia: ["Normal", "Flying"],
  staraptor: ["Normal", "Flying"],
  bidoof: ["Normal", "None"],
  bibarel: ["Normal", "Water"],
  kricketot: ["Bug", "None"],
  kricketune: ["Bug", "None"],
  shinx: ["Electric", "None"],
  luxio: ["Electric", "None"],
  luxray: ["Electric", "None"],
  budew: ["Grass", "Poison"],
  roserade: ["Grass", "Poison"],
  cranidos: ["Rock", "None"],
  rampardos: ["Rock", "None"],
  shieldon: ["Rock", "Steel"],
  bastiodon: ["Rock", "Steel"],
  burmy: ["Bug", "None"],
  "wormadam-plant": ["Bug", "Grass"],
  mothim: ["Bug", "Flying"],
  combee: ["Bug", "Flying"],
  vespiquen: ["Bug", "Flying"],
  pachirisu: ["Electric", "None"],
  buizel: ["Water", "None"],
  floatzel: ["Water", "None"],
  cherubi: ["Grass", "None"],
  cherrim: ["Grass", "None"],
  shellos: ["Water", "None"],
  gastrodon: ["Water", "Ground"],
  ambipom: ["Normal", "None"],
  drifloon: ["Ghost", "Flying"],
  drifblim: ["Ghost", "Flying"],
  buneary: ["Normal", "None"],
  lopunny: ["Normal", "None"],
  mismagius: ["Ghost", "None"],
  honchkrow: ["Dark", "Flying"],
  glameow: ["Normal", "None"],
  purugly: ["Normal", "None"],
  chingling: ["Psychic", "None"],
  stunky: ["Poison", "Dark"],
  skuntank: ["Poison", "Dark"],
  bronzor: ["Steel", "Psychic"],
  bronzong: ["Steel", "Psychic"],
  bonsly: ["Rock", "None"],
  "mime-jr": ["Psychic", "Fairy"],
  happiny: ["Normal", "None"],
  chatot: ["Normal", "Flying"],
  spiritomb: ["Ghost", "Dark"],
  gible: ["Dragon", "Ground"],
  gabite: ["Dragon", "Ground"],
  garchomp: ["Dragon", "Ground"],
  munchlax: ["Normal", "None"],
  riolu: ["Fighting", "None"],
  lucario: ["Fighting", "Steel"],
  hippopotas: ["Ground", "None"],
  hippowdon: ["Ground", "None"],
  skorupi: ["Poison", "Bug"],
  drapion: ["Poison", "Dark"],
  croagunk: ["Poison", "Fighting"],
  toxicroak: ["Poison", "Fighting"],
  carnivine: ["Grass", "None"],
  finneon: ["Water", "None"],
  lumineon: ["Water", "None"],
  mantyke: ["Water", "Flying"],
  snover: ["Grass", "Ice"],
  abomasnow: ["Grass", "Ice"],
  weavile: ["Dark", "Ice"],
  magnezone: ["Electric", "Steel"],
  lickilicky: ["Normal", "None"],
  rhyperior: ["Ground", "Rock"],
  tangrowth: ["Grass", "None"],
  electivire: ["Electric", "None"],
  magmortar: ["Fire", "None"],
  togekiss: ["Fairy", "Flying"],
  yanmega: ["Bug", "Flying"],
  leafeon: ["Grass", "None"],
  glaceon: ["Ice", "None"],
  gliscor: ["Ground", "Flying"],
  mamoswine: ["Ice", "Ground"],
  "porygon-z": ["Normal", "None"],
  gallade: ["Psychic", "Fighting"],
  probopass: ["Rock", "Steel"],
  dusknoir: ["Ghost", "None"],
  froslass: ["Ice", "Ghost"],
  rotom: ["Electric", "Ghost"],
  uxie: ["Psychic", "None"],
  mesprit: ["Psychic", "None"],
  azelf: ["Psychic", "None"],
  dialga: ["Steel", "Dragon"],
  palkia: ["Water", "Dragon"],
  heatran: ["Fire", "Steel"],
  regigigas: ["Normal", "None"],
  "giratina-altered": ["Ghost", "Dragon"],
  cresselia: ["Psychic", "None"],
  phione: ["Water", "None"],
  manaphy: ["Water", "None"],
  darkrai: ["Dark", "None"],
  "shaymin-land": ["Grass", "None"],
  arceus: ["Normal", "None"],
  victini: ["Psychic", "Fire"],
  snivy: ["Grass", "None"],
  servine: ["Grass", "None"],
  serperior: ["Grass", "None"],
  tepig: ["Fire", "None"],
  pignite: ["Fire", "Fighting"],
  emboar: ["Fire", "Fighting"],
  oshawott: ["Water", "None"],
  dewott: ["Water", "None"],
  samurott: ["Water", "None"],
  patrat: ["Normal", "None"],
  watchog: ["Normal", "None"],
  lillipup: ["Normal", "None"],
  herdier: ["Normal", "None"],
  stoutland: ["Normal", "None"],
  purrloin: ["Dark", "None"],
  liepard: ["Dark", "None"],
  pansage: ["Grass", "None"],
  simisage: ["Grass", "None"],
  pansear: ["Fire", "None"],
  simisear: ["Fire", "None"],
  panpour: ["Water", "None"],
  simipour: ["Water", "None"],
  munna: ["Psychic", "None"],
  musharna: ["Psychic", "None"],
  pidove: ["Normal", "Flying"],
  tranquill: ["Normal", "Flying"],
  unfezant: ["Normal", "Flying"],
  blitzle: ["Electric", "None"],
  zebstrika: ["Electric", "None"],
  roggenrola: ["Rock", "None"],
  boldore: ["Rock", "None"],
  gigalith: ["Rock", "None"],
  woobat: ["Psychic", "Flying"],
  swoobat: ["Psychic", "Flying"],
  drilbur: ["Ground", "None"],
  excadrill: ["Ground", "Steel"],
  audino: ["Normal", "None"],
  timburr: ["Fighting", "None"],
  gurdurr: ["Fighting", "None"],
  conkeldurr: ["Fighting", "None"],
  tympole: ["Water", "None"],
  palpitoad: ["Water", "Ground"],
  seismitoad: ["Water", "Ground"],
  throh: ["Fighting", "None"],
  sawk: ["Fighting", "None"],
  sewaddle: ["Bug", "Grass"],
  swadloon: ["Bug", "Grass"],
  leavanny: ["Bug", "Grass"],
  venipede: ["Bug", "Poison"],
  whirlipede: ["Bug", "Poison"],
  scolipede: ["Bug", "Poison"],
  cottonee: ["Grass", "Fairy"],
  whimsicott: ["Grass", "Fairy"],
  petilil: ["Grass", "None"],
  lilligant: ["Grass", "None"],
  "basculin-red-striped": ["Water", "None"],
  sandile: ["Ground", "Dark"],
  krokorok: ["Ground", "Dark"],
  krookodile: ["Ground", "Dark"],
  darumaka: ["Fire", "None"],
  "darmanitan-standard": ["Fire", "None"],
  maractus: ["Grass", "None"],
  dwebble: ["Bug", "Rock"],
  crustle: ["Bug", "Rock"],
  scraggy: ["Dark", "Fighting"],
  scrafty: ["Dark", "Fighting"],
  sigilyph: ["Psychic", "Flying"],
  yamask: ["Ghost", "None"],
  cofagrigus: ["Ghost", "None"],
  tirtouga: ["Water", "Rock"],
  carracosta: ["Water", "Rock"],
  archen: ["Rock", "Flying"],
  archeops: ["Rock", "Flying"],
  trubbish: ["Poison", "None"],
  garbodor: ["Poison", "None"],
  zorua: ["Dark", "None"],
  zoroark: ["Dark", "None"],
  minccino: ["Normal", "None"],
  cinccino: ["Normal", "None"],
  gothita: ["Psychic", "None"],
  gothorita: ["Psychic", "None"],
  gothitelle: ["Psychic", "None"],
  solosis: ["Psychic", "None"],
  duosion: ["Psychic", "None"],
  reuniclus: ["Psychic", "None"],
  ducklett: ["Water", "Flying"],
  swanna: ["Water", "Flying"],
  vanillite: ["Ice", "None"],
  vanillish: ["Ice", "None"],
  vanilluxe: ["Ice", "None"],
  deerling: ["Normal", "Grass"],
  sawsbuck: ["Normal", "Grass"],
  emolga: ["Electric", "Flying"],
  karrablast: ["Bug", "None"],
  escavalier: ["Bug", "Steel"],
  foongus: ["Grass", "Poison"],
  amoonguss: ["Grass", "Poison"],
  frillish: ["Water", "Ghost"],
  jellicent: ["Water", "Ghost"],
  alomomola: ["Water", "None"],
  joltik: ["Bug", "Electric"],
  galvantula: ["Bug", "Electric"],
  ferroseed: ["Grass", "Steel"],
  ferrothorn: ["Grass", "Steel"],
  klink: ["Steel", "None"],
  klang: ["Steel", "None"],
  klinklang: ["Steel", "None"],
  tynamo: ["Electric", "None"],
  eelektrik: ["Electric", "None"],
  eelektross: ["Electric", "None"],
  elgyem: ["Psychic", "None"],
  beheeyem: ["Psychic", "None"],
  litwick: ["Ghost", "Fire"],
  lampent: ["Ghost", "Fire"],
  chandelure: ["Ghost", "Fire"],
  axew: ["Dragon", "None"],
  fraxure: ["Dragon", "None"],
  haxorus: ["Dragon", "None"],
  cubchoo: ["Ice", "None"],
  beartic: ["Ice", "None"],
  cryogonal: ["Ice", "None"],
  shelmet: ["Bug", "None"],
  accelgor: ["Bug", "None"],
  stunfisk: ["Ground", "Electric"],
  mienfoo: ["Fighting", "None"],
  mienshao: ["Fighting", "None"],
  druddigon: ["Dragon", "None"],
  golett: ["Ground", "Ghost"],
  golurk: ["Ground", "Ghost"],
  pawniard: ["Dark", "Steel"],
  bisharp: ["Dark", "Steel"],
  bouffalant: ["Normal", "None"],
  rufflet: ["Normal", "Flying"],
  braviary: ["Normal", "Flying"],
  vullaby: ["Dark", "Flying"],
  mandibuzz: ["Dark", "Flying"],
  heatmor: ["Fire", "None"],
  durant: ["Bug", "Steel"],
  deino: ["Dark", "Dragon"],
  zweilous: ["Dark", "Dragon"],
  hydreigon: ["Dark", "Dragon"],
  larvesta: ["Bug", "Fire"],
  volcarona: ["Bug", "Fire"],
  cobalion: ["Steel", "Fighting"],
  terrakion: ["Rock", "Fighting"],
  virizion: ["Grass", "Fighting"],
  "tornadus-incarnate": ["Flying", "None"],
  "thundurus-incarnate": ["Electric", "Flying"],
  reshiram: ["Dragon", "Fire"],
  zekrom: ["Dragon", "Electric"],
  "landorus-incarnate": ["Ground", "Flying"],
  kyurem: ["Dragon", "Ice"],
  "keldeo-ordinary": ["Water", "Fighting"],
  "meloetta-aria": ["Normal", "Psychic"],
  genesect: ["Bug", "Steel"],
  chespin: ["Grass", "None"],
  quilladin: ["Grass", "None"],
  chesnaught: ["Grass", "Fighting"],
  fennekin: ["Fire", "None"],
  braixen: ["Fire", "None"],
  delphox: ["Fire", "Psychic"],
  froakie: ["Water", "None"],
  frogadier: ["Water", "None"],
  greninja: ["Water", "Dark"],
  bunnelby: ["Normal", "None"],
  diggersby: ["Normal", "Ground"],
  fletchling: ["Normal", "Flying"],
  fletchinder: ["Fire", "Flying"],
  talonflame: ["Fire", "Flying"],
  scatterBug: ["Bug", "None"],
  spewpa: ["Bug", "None"],
  vivillon: ["Bug", "Flying"],
  litleo: ["Fire", "Normal"],
  pyroar: ["Fire", "Normal"],
  flabebe: ["Fairy", "None"],
  floette: ["Fairy", "None"],
  florges: ["Fairy", "None"],
  skiddo: ["Grass", "None"],
  gogoat: ["Grass", "None"],
  pancham: ["Fighting", "None"],
  pangoro: ["Fighting", "Dark"],
  furfrou: ["Normal", "None"],
  espurr: ["Psychic", "None"],
  "meowstic-male": ["Psychic", "None"],
  honedge: ["Steel", "Ghost"],
  doublade: ["Steel", "Ghost"],
  "aegislash-shield": ["Steel", "Ghost"],
  spritzee: ["Fairy", "None"],
  aromatisse: ["Fairy", "None"],
  swirlix: ["Fairy", "None"],
  slurpuff: ["Fairy", "None"],
  inkay: ["Dark", "Psychic"],
  malamar: ["Dark", "Psychic"],
  binacle: ["Rock", "Water"],
  barbaracle: ["Rock", "Water"],
  skrelp: ["Poison", "Water"],
  dragalge: ["Poison", "Dragon"],
  clauncher: ["Water", "None"],
  clawitzer: ["Water", "None"],
  helioptile: ["Electric", "Normal"],
  heliolisk: ["Electric", "Normal"],
  tyrunt: ["Rock", "Dragon"],
  tyrantrum: ["Rock", "Dragon"],
  amaura: ["Rock", "Ice"],
  aurorus: ["Rock", "Ice"],
  sylveon: ["Fairy", "None"],
  hawlucha: ["Fighting", "Flying"],
  dedenne: ["Electric", "Fairy"],
  carbink: ["Rock", "Fairy"],
  goomy: ["Dragon", "None"],
  sliggoo: ["Dragon", "None"],
  goodra: ["Dragon", "None"],
  klefki: ["Steel", "Fairy"],
  phantump: ["Ghost", "Grass"],
  trevenant: ["Ghost", "Grass"],
  "pumpkaboo-average": ["Ghost", "Grass"],
  "gourgeist-average": ["Ghost", "Grass"],
  bergmite: ["Ice", "None"],
  avalugg: ["Ice", "None"],
  noibat: ["Flying", "Dragon"],
  noivern: ["Flying", "Dragon"],
  xerneas: ["Fairy", "None"],
  yveltal: ["Dark", "Flying"],
  "zygarde-50": ["Dragon", "Ground"],
  diancie: ["Rock", "Fairy"],
  hoopa: ["Psychic", "Ghost"],
  volcanion: ["Fire", "Water"],
  rowlet: ["Grass", "Flying"],
  dartrix: ["Grass", "Flying"],
  decidueye: ["Grass", "Ghost"],
  litten: ["Fire", "None"],
  torracat: ["Fire", "None"],
  incineroar: ["Fire", "Dark"],
  popplio: ["Water", "None"],
  brionne: ["Water", "None"],
  primarina: ["Water", "Fairy"],
  pikipek: ["Normal", "Flying"],
  trumbeak: ["Normal", "Flying"],
  toucannon: ["Normal", "Flying"],
  yungoos: ["Normal", "None"],
  gumshoos: ["Normal", "None"],
  grubbin: ["Bug", "None"],
  charjaBug: ["Bug", "Electric"],
  vikavolt: ["Bug", "Electric"],
  crabrawler: ["Fighting", "None"],
  crabominable: ["Fighting", "Ice"],
  "oricorio-baile": ["Fire", "Flying"],
  cutiefly: ["Bug", "Fairy"],
  ribombee: ["Bug", "Fairy"],
  Rockruff: ["Rock", "None"],
  "lycanroc-midday": ["Rock", "None"],
  "wishiwashi-solo": ["Water", "None"],
  mareanie: ["Poison", "Water"],
  toxapex: ["Poison", "Water"],
  mudbray: ["Ground", "None"],
  mudsdale: ["Ground", "None"],
  dewpider: ["Water", "Bug"],
  araquanid: ["Water", "Bug"],
  fomantis: ["Grass", "None"],
  lurantis: ["Grass", "None"],
  morelull: ["Grass", "Fairy"],
  shiinotic: ["Grass", "Fairy"],
  salandit: ["Poison", "Fire"],
  salazzle: ["Poison", "Fire"],
  stufful: ["Normal", "Fighting"],
  bewear: ["Normal", "Fighting"],
  bounsweet: ["Grass", "None"],
  steenee: ["Grass", "None"],
  tsareena: ["Grass", "None"],
  comfey: ["Fairy", "None"],
  oranguru: ["Normal", "Psychic"],
  passimian: ["Fighting", "None"],
  wimpod: ["Bug", "Water"],
  golisopod: ["Bug", "Water"],
  sandygast: ["Ghost", "Ground"],
  palossand: ["Ghost", "Ground"],
  pyukumuku: ["Water", "None"],
  "type-null": ["Normal", "None"],
  silvally: ["Normal", "None"],
  "minior-red-meteor": ["Rock", "Flying"],
  komala: ["Normal", "None"],
  turtonator: ["Fire", "Dragon"],
  togedemaru: ["Electric", "Steel"],
  "mimikyu-disguised": ["Ghost", "Fairy"],
  bruxish: ["Water", "Psychic"],
  drampa: ["Normal", "Dragon"],
  dhelmise: ["Ghost", "Grass"],
  "jangmo-o": ["Dragon", "None"],
  "hakamo-o": ["Dragon", "Fighting"],
  "kommo-o": ["Dragon", "Fighting"],
  "tapu-koko": ["Electric", "Fairy"],
  "tapu-lele": ["Psychic", "Fairy"],
  "tapu-bulu": ["Grass", "Fairy"],
  "tapu-fini": ["Water", "Fairy"],
  cosmog: ["Psychic", "None"],
  cosmoem: ["Psychic", "None"],
  solgaleo: ["Psychic", "Steel"],
  lunala: ["Psychic", "Ghost"],
  nihilego: ["Rock", "Poison"],
  buzzwole: ["Bug", "Fighting"],
  pheromosa: ["Bug", "Fighting"],
  xurkitree: ["Electric", "None"],
  celeSteela: ["Steel", "Flying"],
  kartana: ["Grass", "Steel"],
  guzzlord: ["Dark", "Dragon"],
  necrozma: ["Psychic", "None"],
  magearna: ["Steel", "Fairy"],
  marshadow: ["Fighting", "Ghost"],
  poipole: ["Poison", "None"],
  naganadel: ["Poison", "Dragon"],
  stakataka: ["Rock", "Steel"],
  blacephalon: ["Fire", "Ghost"],
  zeraora: ["Electric", "None"],
  meltan: ["Steel", "None"],
  melmetal: ["Steel", "None"],
  grookey: ["Grass", "None"],
  thwackey: ["Grass", "None"],
  rillaboom: ["Grass", "None"],
  scorbunny: ["Fire", "None"],
  raboot: ["Fire", "None"],
  cinderace: ["Fire", "None"],
  sobble: ["Water", "None"],
  drizzile: ["Water", "None"],
  inteleon: ["Water", "None"],
  skwovet: ["Normal", "None"],
  greedent: ["Normal", "None"],
  rookidee: ["Flying", "None"],
  corvisquire: ["Flying", "None"],
  corviknight: ["Flying", "Steel"],
  blipBug: ["Bug", "None"],
  dottler: ["Bug", "Psychic"],
  orbeetle: ["Bug", "Psychic"],
  nickit: ["Dark", "None"],
  thievul: ["Dark", "None"],
  gossifleur: ["Grass", "None"],
  eldegoss: ["Grass", "None"],
  wooloo: ["Normal", "None"],
  dubwool: ["Normal", "None"],
  chewtle: ["Water", "None"],
  drednaw: ["Water", "Rock"],
  yamper: ["Electric", "None"],
  boltund: ["Electric", "None"],
  rolycoly: ["Rock", "None"],
  carkol: ["Rock", "Fire"],
  coalossal: ["Rock", "Fire"],
  applin: ["Grass", "Dragon"],
  flapple: ["Grass", "Dragon"],
  appletun: ["Grass", "Dragon"],
  silicobra: ["Ground", "None"],
  sandaconda: ["Ground", "None"],
  cramorant: ["Flying", "Water"],
  arrokuda: ["Water", "None"],
  barraskewda: ["Water", "None"],
  toxel: ["Electric", "Poison"],
  "toxtricity-amped": ["Electric", "Poison"],
  sizzlipede: ["Fire", "Bug"],
  centiskorch: ["Fire", "Bug"],
  clobbopus: ["Fighting", "None"],
  grapploct: ["Fighting", "None"],
  sinistea: ["Ghost", "None"],
  polteageist: ["Ghost", "None"],
  hatenna: ["Psychic", "None"],
  hattrem: ["Psychic", "None"],
  hatterene: ["Psychic", "Fairy"],
  impidimp: ["Dark", "Fairy"],
  morgrem: ["Dark", "Fairy"],
  grimmsnarl: ["Dark", "Fairy"],
  obstagoon: ["Dark", "Normal"],
  perrserker: ["Steel", "None"],
  cursola: ["Ghost", "None"],
  sirfetchd: ["Fighting", "None"],
  "mr-rime": ["Ice", "Psychic"],
  runerigus: ["Ground", "Ghost"],
  milcery: ["Fairy", "None"],
  alcremie: ["Fairy", "None"],
  falinks: ["Fighting", "None"],
  pincurchin: ["Electric", "None"],
  snom: ["Ice", "Bug"],
  frosmoth: ["Ice", "Bug"],
  stonjourner: ["Rock", "None"],
  "eiscue-ice": ["Ice", "None"],
  "indeedee-male": ["Psychic", "Normal"],
  "morpeko-full-belly": ["Electric", "Dark"],
  cufant: ["Steel", "None"],
  copperajah: ["Steel", "None"],
  dracozolt: ["Electric", "Dragon"],
  arctozolt: ["Electric", "Ice"],
  dracovish: ["Water", "Dragon"],
  arctovish: ["Water", "Ice"],
  duraludon: ["Steel", "Dragon"],
  dreepy: ["Dragon", "Ghost"],
  drakloak: ["Dragon", "Ghost"],
  dragapult: ["Dragon", "Ghost"],
  zacian: ["Fairy", "None"],
  zamazenta: ["Fighting", "None"],
  eternatus: ["Poison", "Dragon"],
  kubfu: ["Fighting", "None"],
  "urshifu-single-strike": ["Fighting", "Dark"],
  zarude: ["Dark", "Grass"],
  regieleki: ["Electric", "None"],
  regidrago: ["Dragon", "None"],
  glastrier: ["Ice", "None"],
  spectrier: ["Ghost", "None"],
  calyrex: ["Psychic", "Grass"],
  wyrdeer: ["Normal", "Psychic"],
  kleavor: ["Bug", "Rock"],
  ursaluna: ["Ground", "Normal"],
  "basculegion-male": ["Water", "Ghost"],
  sneasler: ["Fighting", "Poison"],
  overqwil: ["Dark", "Poison"],
  "enamorus-incarnate": ["Fairy", "Flying"],
  sprigatito: ["Grass", "None"],
  floragato: ["Grass", "None"],
  meowscarada: ["Grass", "Dark"],
  fuecoco: ["Fire", "None"],
  crocalor: ["Fire", "None"],
  skeledirge: ["Fire", "Ghost"],
  quaxly: ["Water", "None"],
  quaxwell: ["Water", "None"],
  quaquaval: ["Water", "Fighting"],
  lechonk: ["Normal", "None"],
  oinkologne: ["Normal", "None"],
  tarountula: ["Bug", "None"],
  spidops: ["Bug", "None"],
  nymble: ["Bug", "None"],
  lokix: ["Bug", "Dark"],
  pawmi: ["Electric", "None"],
  pawmo: ["Electric", "Fighting"],
  pawmot: ["Electric", "Fighting"],
  tandemaus: ["Normal", "None"],
  maushold: ["Normal", "None"],
  fidough: ["Fairy", "None"],
  dachsbun: ["Fairy", "None"],
  smoliv: ["Grass", "Normal"],
  dolliv: ["Grass", "Normal"],
  arboliva: ["Grass", "Normal"],
  squawkabilly: ["Normal", "Flying"],
  nacli: ["Rock", "None"],
  naclstack: ["Rock", "None"],
  garganacl: ["Rock", "None"],
  charcadet: ["Fire", "None"],
  armarouge: ["Fire", "Psychic"],
  ceruledge: ["Fire", "Ghost"],
  tadbulb: ["Electric", "None"],
  bellibolt: ["Electric", "None"],
  wattrel: ["Electric", "Flying"],
  kilowattrel: ["Electric", "Flying"],
  maschiff: ["Dark", "None"],
  mabosstiff: ["Dark", "None"],
  shroodle: ["Poison", "Normal"],
  grafaiai: ["Poison", "Normal"],
  bramblin: ["Grass", "Ghost"],
  brambleghast: ["Grass", "Ghost"],
  toedscool: ["Ground", "Grass"],
  toedscruel: ["Ground", "Grass"],
  klawf: ["Rock", "None"],
  capsakid: ["Grass", "None"],
  scovillain: ["Grass", "Fire"],
  rellor: ["Bug", "None"],
  rabsca: ["Bug", "Psychic"],
  flittle: ["Psychic", "None"],
  espathra: ["Psychic", "None"],
  tinkatink: ["Fairy", "Steel"],
  tinkatuff: ["Fairy", "Steel"],
  tinkaton: ["Fairy", "Steel"],
  wiglett: ["Water", "None"],
  wugtrio: ["Water", "None"],
  bombirdier: ["Flying", "Dark"],
  finizen: ["Water", "None"],
  palafin: ["Water", "None"],
  varoom: ["Steel", "Poison"],
  revavroom: ["Steel", "Poison"],
  cyclizar: ["Dragon", "Normal"],
  orthworm: ["Steel", "None"],
  glimmet: ["Rock", "Poison"],
  glimmora: ["Rock", "Poison"],
  greavard: ["Ghost", "None"],
  houndstone: ["Ghost", "None"],
  flamigo: ["Flying", "Fighting"],
  cetoddle: ["Ice", "None"],
  cetitan: ["Ice", "None"],
  veluza: ["Water", "Psychic"],
  dondozo: ["Water", "None"],
  tatsugiri: ["Dragon", "Water"],
  annihilape: ["Fighting", "Ghost"],
  clodsire: ["Poison", "Ground"],
  farigiraf: ["Normal", "Psychic"],
  dudunsparce: ["Normal", "None"],
  kingambit: ["Dark", "Steel"],
  "great-tusk": ["Ground", "Fighting"],
  "scream-tail": ["Fairy", "Psychic"],
  "brute-bonnet": ["Grass", "Dark"],
  "flutter-mane": ["Ghost", "Fairy"],
  "slither-wing": ["Bug", "Fighting"],
  "sandy-shocks": ["Electric", "Ground"],
  "iron-treads": ["Ground", "Steel"],
  "iron-bundle": ["Ice", "Water"],
  "iron-hands": ["Fighting", "Electric"],
  "iron-jugulis": ["Dark", "Flying"],
  "iron-moth": ["Fire", "Poison"],
  "iron-thorns": ["Rock", "Electric"],
  frigibax: ["Dragon", "Ice"],
  arctibax: ["Dragon", "Ice"],
  baxcalibur: ["Dragon", "Ice"],
  gimmighoul: ["Ghost", "None"],
  gholdengo: ["Steel", "Ghost"],
  "wo-chien": ["Dark", "Grass"],
  "chien-pao": ["Dark", "Ice"],
  "ting-lu": ["Dark", "Ground"],
  "chi-yu": ["Dark", "Fire"],
  "roaring-moon": ["Dragon", "Dark"],
  "iron-valiant": ["Fairy", "Fighting"],
  koraidon: ["Fighting", "Dragon"],
  miraidon: ["Electric", "Dragon"],
  "walking-wake": ["Water", "Dragon"],
  "iron-leaves": ["Grass", "Psychic"],
  dipplin: ["Grass", "Dragon"],
  poltchageist: ["Grass", "Ghost"],
  sinistcha: ["Grass", "Ghost"],
  okidogi: ["Poison", "Fighting"],
  munkidori: ["Poison", "Psychic"],
  fezandipiti: ["Poison", "Fairy"],
  ogerpon: ["Grass", "None"],
  archaludon: ["Steel", "Dragon"],
  hydrapple: ["Grass", "Dragon"],
  "gouging-Fire": ["Fire", "Dragon"],
  "raging-bolt": ["Electric", "Dragon"],
  "iron-boulder": ["Rock", "Psychic"],
  "iron-crown": ["Steel", "Psychic"],
  terapagos: ["Normal", "None"],
  pecharunt: ["Poison", "Ghost"]
};
var _default = typesList;
exports["default"] = _default;
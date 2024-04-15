const heightList = {
  bulbasaur: 0.7,
  ivysaur: 1,
  venusaur: 2,
  charmander: 0.6,
  charmeleon: 1.1,
  charizard: 1.7,
  squirtle: 0.5,
  wartortle: 1,
  blastoise: 1.6,
  caterpie: 0.3,
  metapod: 0.7,
  butterfree: 1.1,
  weedle: 0.3,
  kakuna: 0.6,
  beedrill: 1,
  pidgey: 0.3,
  pidgeotto: 1.1,
  pidgeot: 1.5,
  rattata: 0.3,
  raticate: 0.7,
  spearow: 0.3,
  fearow: 1.2,
  ekans: 2,
  arbok: 3.5,
  pikachu: 0.4,
  raichu: 0.8,
  sandshrew: 0.6,
  sandslash: 1,
  "nidoran-f": 0.4,
  nidorina: 0.8,
  nidoqueen: 1.3,
  "nidoran-m": 0.5,
  nidorino: 0.9,
  nidoking: 1.4,
  clefairy: 0.6,
  clefable: 1.3,
  vulpix: 0.6,
  ninetales: 1.1,
  jigglypuff: 0.5,
  wigglytuff: 1,
  zubat: 0.8,
  golbat: 1.6,
  oddish: 0.5,
  gloom: 0.8,
  vileplume: 1.2,
  paras: 0.3,
  parasect: 1,
  venonat: 1,
  venomoth: 1.5,
  diglett: 0.2,
  dugtrio: 0.7,
  meowth: 0.4,
  persian: 1,
  psyduck: 0.8,
  golduck: 1.7,
  mankey: 0.5,
  primeape: 1,
  growlithe: 0.7,
  arcanine: 1.9,
  poliwag: 0.6,
  poliwhirl: 1,
  poliwrath: 1.3,
  abra: 0.9,
  kadabra: 1.3,
  alakazam: 1.5,
  machop: 0.8,
  machoke: 1.5,
  machamp: 1.6,
  bellsprout: 0.7,
  weepinbell: 1,
  victreebel: 1.7,
  tentacool: 0.9,
  tentacruel: 1.6,
  geodude: 0.4,
  graveler: 1,
  golem: 1.4,
  ponyta: 1,
  rapidash: 1.7,
  slowpoke: 1.2,
  slowbro: 1.6,
  magnemite: 0.3,
  magneton: 1,
  farfetchd: 0.8,
  doduo: 1.4,
  dodrio: 1.8,
  seel: 1.1,
  dewgong: 1.7,
  grimer: 0.9,
  muk: 1.2,
  shellder: 0.3,
  cloyster: 1.5,
  gastly: 1.3,
  haunter: 1.6,
  gengar: 1.5,
  onix: 8.8,
  drowzee: 1,
  hypno: 1.6,
  krabby: 0.4,
  kingler: 1.3,
  voltorb: 0.5,
  electrode: 1.2,
  exeggcute: 0.4,
  exeggutor: 2,
  cubone: 0.4,
  marowak: 1,
  hitmonlee: 1.5,
  hitmonchan: 1.4,
  lickitung: 1.2,
  koffing: 0.6,
  weezing: 1.2,
  rhyhorn: 1,
  rhydon: 1.9,
  chansey: 1.1,
  tangela: 1,
  kangaskhan: 2.2,
  horsea: 0.4,
  seadra: 1.2,
  goldeen: 0.6,
  seaking: 1.3,
  staryu: 0.8,
  starmie: 1.1,
  "mr-mime": 1.3,
  scyther: 1.5,
  jynx: 1.4,
  electabuzz: 1.1,
  magmar: 1.3,
  pinsir: 1.5,
  tauros: 1.4,
  magikarp: 0.9,
  gyarados: 6.5,
  lapras: 2.5,
  ditto: 0.3,
  eevee: 0.3,
  vaporeon: 1,
  jolteon: 0.8,
  flareon: 0.9,
  porygon: 0.8,
  omanyte: 0.4,
  omastar: 1,
  kabuto: 0.5,
  kabutops: 1.3,
  aerodactyl: 1.8,
  snorlax: 2.1,
  articuno: 1.7,
  zapdos: 1.6,
  moltres: 2,
  dratini: 1.8,
  dragonair: 4,
  dragonite: 2.2,
  mewtwo: 2,
  mew: 0.4,
  chikorita: 0.9,
  bayleef: 1.2,
  meganium: 1.8,
  cyndaquil: 0.5,
  quilava: 0.9,
  typhlosion: 1.7,
  totodile: 0.6,
  croconaw: 1.1,
  feraligatr: 2.3,
  sentret: 0.8,
  furret: 1.8,
  hoothoot: 0.7,
  noctowl: 1.6,
  ledyba: 1,
  ledian: 1.4,
  spinarak: 0.5,
  ariados: 1.1,
  crobat: 1.8,
  chinchou: 0.5,
  lanturn: 1.2,
  pichu: 0.3,
  cleffa: 0.3,
  igglybuff: 0.3,
  togepi: 0.3,
  togetic: 0.6,
  natu: 0.2,
  xatu: 1.5,
  mareep: 0.6,
  flaaffy: 0.8,
  ampharos: 1.4,
  bellossom: 0.4,
  marill: 0.4,
  azumarill: 0.8,
  sudowoodo: 1.2,
  politoed: 1.1,
  hoppip: 0.4,
  skiploom: 0.6,
  jumpluff: 0.8,
  aipom: 0.8,
  sunkern: 0.3,
  sunflora: 0.8,
  yanma: 1.2,
  wooper: 0.4,
  quagsire: 1.4,
  espeon: 0.9,
  umbreon: 1,
  murkrow: 0.5,
  slowking: 2,
  misdreavus: 0.7,
  unown: 0.5,
  wobbuffet: 1.3,
  girafarig: 1.5,
  pineco: 0.6,
  forretress: 1.2,
  dunsparce: 1.5,
  gligar: 1.1,
  steelix: 9.2,
  snubbull: 0.6,
  granbull: 1.4,
  qwilfish: 0.5,
  scizor: 1.8,
  shuckle: 0.6,
  heracross: 1.5,
  sneasel: 0.9,
  teddiursa: 0.6,
  ursaring: 1.8,
  slugma: 0.7,
  magcargo: 0.8,
  swinub: 0.4,
  piloswine: 1.1,
  corsola: 0.6,
  remoraid: 0.6,
  octillery: 0.9,
  delibird: 0.9,
  mantine: 2.1,
  skarmory: 1.7,
  houndour: 0.6,
  houndoom: 1.4,
  kingdra: 1.8,
  phanpy: 0.5,
  donphan: 1.1,
  porygon2: 0.6,
  stantler: 1.4,
  smeargle: 1.2,
  tyrogue: 0.7,
  hitmontop: 1.4,
  smoochum: 0.4,
  elekid: 0.6,
  magby: 0.7,
  miltank: 1.2,
  blissey: 1.5,
  raikou: 1.9,
  entei: 2.1,
  suicune: 2,
  larvitar: 0.6,
  pupitar: 1.2,
  tyranitar: 2,
  lugia: 5.2,
  "ho-oh": 3.8,
  celebi: 0.6,
  treecko: 0.5,
  grovyle: 0.9,
  sceptile: 1.7,
  torchic: 0.4,
  combusken: 0.9,
  blaziken: 1.9,
  mudkip: 0.4,
  marshtomp: 0.7,
  swampert: 1.5,
  poochyena: 0.5,
  mightyena: 1,
  zigzagoon: 0.4,
  linoone: 0.5,
  wurmple: 0.3,
  silcoon: 0.6,
  beautifly: 1,
  cascoon: 0.7,
  dustox: 1.2,
  lotad: 0.5,
  lombre: 1.2,
  ludicolo: 1.5,
  seedot: 0.5,
  nuzleaf: 1,
  shiftry: 1.3,
  taillow: 0.3,
  swellow: 0.7,
  wingull: 0.6,
  pelipper: 1.2,
  ralts: 0.4,
  kirlia: 0.8,
  gardevoir: 1.6,
  surskit: 0.5,
  masquerain: 0.8,
  shroomish: 0.4,
  breloom: 1.2,
  slakoth: 0.8,
  vigoroth: 1.4,
  slaking: 2,
  nincada: 0.5,
  ninjask: 0.8,
  shedinja: 0.8,
  whismur: 0.6,
  loudred: 1,
  exploud: 1.5,
  makuhita: 1,
  hariyama: 2.3,
  azurill: 0.2,
  nosepass: 1,
  skitty: 0.6,
  delcatty: 1.1,
  sableye: 0.5,
  mawile: 0.6,
  aron: 0.4,
  lairon: 0.9,
  aggron: 2.1,
  meditite: 0.6,
  medicham: 1.3,
  electrike: 0.6,
  manectric: 1.5,
  plusle: 0.4,
  minun: 0.4,
  volbeat: 0.7,
  illumise: 0.6,
  roselia: 0.3,
  gulpin: 0.4,
  swalot: 1.7,
  carvanha: 0.8,
  sharpedo: 1.8,
  wailmer: 2,
  wailord: 14.5,
  numel: 0.7,
  camerupt: 1.9,
  torkoal: 0.5,
  spoink: 0.7,
  grumpig: 0.9,
  spinda: 1.1,
  trapinch: 0.7,
  vibrava: 1.1,
  flygon: 2,
  cacnea: 0.4,
  cacturne: 1.3,
  swablu: 0.4,
  altaria: 1.1,
  zangoose: 1.3,
  seviper: 2.7,
  lunatone: 1,
  solrock: 1.2,
  barboach: 0.4,
  whiscash: 0.9,
  corphish: 0.6,
  crawdaunt: 1.1,
  baltoy: 0.5,
  claydol: 1.5,
  lileep: 1,
  cradily: 1.5,
  anorith: 0.7,
  armaldo: 1.5,
  feebas: 0.6,
  milotic: 6.2,
  castform: 0.3,
  kecleon: 1,
  shuppet: 0.6,
  banette: 1.1,
  duskull: 0.8,
  dusclops: 1.6,
  tropius: 2,
  chimecho: 0.6,
  absol: 1.2,
  wynaut: 0.6,
  snorunt: 0.7,
  glalie: 1.5,
  spheal: 0.8,
  sealeo: 1.1,
  walrein: 1.4,
  clamperl: 0.4,
  huntail: 1.7,
  gorebyss: 1.8,
  relicanth: 1,
  luvdisc: 0.6,
  bagon: 0.6,
  shelgon: 1.1,
  salamence: 1.5,
  beldum: 0.6,
  metang: 1.2,
  metagross: 1.6,
  regirock: 1.7,
  regice: 1.8,
  registeel: 1.9,
  latias: 1.4,
  latios: 2,
  kyogre: 4.5,
  groudon: 3.5,
  rayquaza: 7,
  jirachi: 0.3,
  "deoxys-normal": 1.7,
  turtwig: 0.4,
  grotle: 1.1,
  torterra: 2.2,
  chimchar: 0.5,
  monferno: 0.9,
  infernape: 1.2,
  piplup: 0.4,
  prinplup: 0.8,
  empoleon: 1.7,
  starly: 0.3,
  staravia: 0.6,
  staraptor: 1.2,
  bidoof: 0.5,
  bibarel: 1,
  kricketot: 0.3,
  kricketune: 1,
  shinx: 0.5,
  luxio: 0.9,
  luxray: 1.4,
  budew: 0.2,
  roserade: 0.9,
  cranidos: 0.9,
  rampardos: 1.6,
  shieldon: 0.5,
  bastiodon: 1.3,
  burmy: 0.2,
  "wormadam-plant": 0.5,
  mothim: 0.9,
  combee: 0.3,
  vespiquen: 1.2,
  pachirisu: 0.4,
  buizel: 0.7,
  floatzel: 1.1,
  cherubi: 0.4,
  cherrim: 0.5,
  shellos: 0.3,
  gastrodon: 0.9,
  ambipom: 1.2,
  drifloon: 0.4,
  drifblim: 1.2,
  buneary: 0.4,
  lopunny: 1.2,
  mismagius: 0.9,
  honchkrow: 0.9,
  glameow: 0.5,
  purugly: 1,
  chingling: 0.2,
  stunky: 0.4,
  skuntank: 1,
  bronzor: 0.5,
  bronzong: 1.3,
  bonsly: 0.5,
  "mime-jr": 0.6,
  happiny: 0.6,
  chatot: 0.5,
  spiritomb: 1,
  gible: 0.7,
  gabite: 1.4,
  garchomp: 1.9,
  munchlax: 0.6,
  riolu: 0.7,
  lucario: 1.2,
  hippopotas: 0.8,
  hippowdon: 2,
  skorupi: 0.8,
  drapion: 1.3,
  croagunk: 0.7,
  toxicroak: 1.3,
  carnivine: 1.4,
  finneon: 0.4,
  lumineon: 1.2,
  mantyke: 1,
  snover: 1,
  abomasnow: 2.2,
  weavile: 1.1,
  magnezone: 1.2,
  lickilicky: 1.7,
  rhyperior: 2.4,
  tangrowth: 2,
  electivire: 1.8,
  magmortar: 1.6,
  togekiss: 1.5,
  yanmega: 1.9,
  leafeon: 1,
  glaceon: 0.8,
  gliscor: 2,
  mamoswine: 2.5,
  "porygon-z": 0.9,
  gallade: 1.6,
  probopass: 1.4,
  dusknoir: 2.2,
  froslass: 1.3,
  rotom: 0.3,
  uxie: 0.3,
  mesprit: 0.3,
  azelf: 0.3,
  dialga: 5.4,
  palkia: 4.2,
  heatran: 1.7,
  regigigas: 3.7,
  "giratina-altered": 4.5,
  cresselia: 1.5,
  phione: 0.4,
  manaphy: 0.3,
  darkrai: 1.5,
  "shaymin-land": 0.2,
  arceus: 3.2,
  victini: 0.4,
  snivy: 0.6,
  servine: 0.8,
  serperior: 3.3,
  tepig: 0.5,
  pignite: 1,
  emboar: 1.6,
  oshawott: 0.5,
  dewott: 0.8,
  samurott: 1.5,
  patrat: 0.5,
  watchog: 1.1,
  lillipup: 0.4,
  herdier: 0.9,
  stoutland: 1.2,
  purrloin: 0.4,
  liepard: 1.1,
  pansage: 0.6,
  simisage: 1.1,
  pansear: 0.6,
  simisear: 1,
  panpour: 0.6,
  simipour: 1,
  munna: 0.6,
  musharna: 1.1,
  pidove: 0.3,
  tranquill: 0.6,
  unfezant: 1.2,
  blitzle: 0.8,
  zebstrika: 1.6,
  roggenrola: 0.4,
  boldore: 0.9,
  gigalith: 1.7,
  woobat: 0.4,
  swoobat: 0.9,
  drilbur: 0.3,
  excadrill: 0.7,
  audino: 1.1,
  timburr: 0.6,
  gurdurr: 1.2,
  conkeldurr: 1.4,
  tympole: 0.5,
  palpitoad: 0.8,
  seismitoad: 1.5,
  throh: 1.3,
  sawk: 1.4,
  sewaddle: 0.3,
  swadloon: 0.5,
  leavanny: 1.2,
  venipede: 0.4,
  whirlipede: 1.2,
  scolipede: 2.5,
  cottonee: 0.3,
  whimsicott: 0.7,
  petilil: 0.5,
  lilligant: 1.1,
  "basculin-red-striped": 1,
  sandile: 0.7,
  krokorok: 1,
  krookodile: 1.5,
  darumaka: 0.6,
  "darmanitan-standard": 1.3,
  maractus: 1,
  dwebble: 0.3,
  crustle: 1.4,
  scraggy: 0.6,
  scrafty: 1.1,
  sigilyph: 1.4,
  yamask: 0.5,
  cofagrigus: 1.7,
  tirtouga: 0.7,
  carracosta: 1.2,
  archen: 0.5,
  archeops: 1.4,
  trubbish: 0.6,
  garbodor: 1.9,
  zorua: 0.7,
  zoroark: 1.6,
  minccino: 0.4,
  cinccino: 0.5,
  gothita: 0.4,
  gothorita: 0.7,
  gothitelle: 1.5,
  solosis: 0.3,
  duosion: 0.6,
  reuniclus: 1,
  ducklett: 0.5,
  swanna: 1.3,
  vanillite: 0.4,
  vanillish: 1.1,
  vanilluxe: 1.3,
  deerling: 0.6,
  sawsbuck: 1.9,
  emolga: 0.4,
  karrablast: 0.5,
  escavalier: 1,
  foongus: 0.2,
  amoonguss: 0.6,
  frillish: 1.2,
  jellicent: 2.2,
  alomomola: 1.2,
  joltik: 0.1,
  galvantula: 0.8,
  ferroseed: 0.6,
  ferrothorn: 1,
  klink: 0.3,
  klang: 0.6,
  klinklang: 0.6,
  tynamo: 0.2,
  eelektrik: 1.2,
  eelektross: 2.1,
  elgyem: 0.5,
  beheeyem: 1,
  litwick: 0.3,
  lampent: 0.6,
  chandelure: 1,
  axew: 0.6,
  fraxure: 1,
  haxorus: 1.8,
  cubchoo: 0.5,
  beartic: 2.6,
  cryogonal: 1.1,
  shelmet: 0.4,
  accelgor: 0.8,
  stunfisk: 0.7,
  mienfoo: 0.9,
  mienshao: 1.4,
  druddigon: 1.6,
  golett: 1,
  golurk: 2.8,
  pawniard: 0.5,
  bisharp: 1.6,
  bouffalant: 1.6,
  rufflet: 0.5,
  braviary: 1.5,
  vullaby: 0.5,
  mandibuzz: 1.2,
  heatmor: 1.4,
  durant: 0.3,
  deino: 0.8,
  zweilous: 1.4,
  hydreigon: 1.8,
  larvesta: 1.1,
  volcarona: 1.6,
  cobalion: 2.1,
  terrakion: 1.9,
  virizion: 2,
  "tornadus-incarnate": 1.5,
  "thundurus-incarnate": 1.5,
  reshiram: 3.2,
  zekrom: 2.9,
  "landorus-incarnate": 1.5,
  kyurem: 3,
  "keldeo-ordinary": 1.4,
  "meloetta-aria": 0.6,
  genesect: 1.5,
  chespin: 0.4,
  quilladin: 0.7,
  chesnaught: 1.6,
  fennekin: 0.4,
  braixen: 1,
  delphox: 1.5,
  froakie: 0.3,
  frogadier: 0.6,
  greninja: 1.5,
  bunnelby: 0.4,
  diggersby: 1,
  fletchling: 0.3,
  fletchinder: 0.7,
  talonflame: 1.2,
  scatterbug: 0.3,
  spewpa: 0.3,
  vivillon: 1.2,
  litleo: 0.6,
  pyroar: 1.5,
  flabebe: 0.1,
  floette: 0.2,
  florges: 1.1,
  skiddo: 0.9,
  gogoat: 1.7,
  pancham: 0.6,
  pangoro: 2.1,
  furfrou: 1.2,
  espurr: 0.3,
  "meowstic-male": 0.6,
  honedge: 0.8,
  doublade: 0.8,
  "aegislash-shield": 1.7,
  spritzee: 0.2,
  aromatisse: 0.8,
  swirlix: 0.4,
  slurpuff: 0.8,
  inkay: 0.4,
  malamar: 1.5,
  binacle: 0.5,
  barbaracle: 1.3,
  skrelp: 0.5,
  dragalge: 1.8,
  clauncher: 0.5,
  clawitzer: 1.3,
  helioptile: 0.5,
  heliolisk: 1,
  tyrunt: 0.8,
  tyrantrum: 2.5,
  amaura: 1.3,
  aurorus: 2.7,
  sylveon: 1,
  hawlucha: 0.8,
  dedenne: 0.2,
  carbink: 0.3,
  goomy: 0.3,
  sliggoo: 0.8,
  goodra: 2,
  klefki: 0.2,
  phantump: 0.4,
  trevenant: 1.5,
  "pumpkaboo-average": 0.4,
  "gourgeist-average": 0.9,
  bergmite: 1,
  avalugg: 2,
  noibat: 0.5,
  noivern: 1.5,
  xerneas: 3,
  yveltal: 5.8,
  "zygarde-50": 5,
  diancie: 0.7,
  hoopa: 0.5,
  volcanion: 1.7,
  rowlet: 0.3,
  dartrix: 0.7,
  decidueye: 1.6,
  litten: 0.4,
  torracat: 0.7,
  incineroar: 1.8,
  popplio: 0.4,
  brionne: 0.6,
  primarina: 1.8,
  pikipek: 0.3,
  trumbeak: 0.6,
  toucannon: 1.1,
  yungoos: 0.4,
  gumshoos: 0.7,
  grubbin: 0.4,
  charjabug: 0.5,
  vikavolt: 1.5,
  crabrawler: 0.6,
  crabominable: 1.7,
  "oricorio-baile": 0.6,
  cutiefly: 0.1,
  ribombee: 0.2,
  rockruff: 0.5,
  "lycanroc-midday": 0.8,
  "wishiwashi-solo": 0.2,
  mareanie: 0.4,
  toxapex: 0.7,
  mudbray: 1,
  mudsdale: 2.5,
  dewpider: 0.3,
  araquanid: 1.8,
  fomantis: 0.3,
  lurantis: 0.9,
  morelull: 0.2,
  shiinotic: 1,
  salandit: 0.6,
  salazzle: 1.2,
  stufful: 0.5,
  bewear: 2.1,
  bounsweet: 0.3,
  steenee: 0.7,
  tsareena: 1.2,
  comfey: 0.1,
  oranguru: 1.5,
  passimian: 2,
  wimpod: 0.5,
  golisopod: 2,
  sandygast: 0.5,
  palossand: 1.3,
  pyukumuku: 0.3,
  "type-null": 1.9,
  silvally: 2.3,
  "minior-red-meteor": 0.3,
  komala: 0.4,
  turtonator: 2,
  togedemaru: 0.3,
  "mimikyu-disguised": 0.2,
  bruxish: 0.9,
  drampa: 3,
  dhelmise: 3.9,
  "jangmo-o": 0.6,
  "hakamo-o": 1.2,
  "kommo-o": 1.6,
  "tapu-koko": 1.8,
  "tapu-lele": 1.2,
  "tapu-bulu": 1.9,
  "tapu-fini": 1.3,
  cosmog: 0.2,
  cosmoem: 0.1,
  solgaleo: 3.4,
  lunala: 4,
  nihilego: 1.2,
  buzzwole: 2.4,
  pheromosa: 1.8,
  xurkitree: 3.8,
  celesteela: 9.2,
  kartana: 0.3,
  guzzlord: 5.5,
  necrozma: 2.4,
  magearna: 1,
  marshadow: 0.7,
  poipole: 0.6,
  naganadel: 3.6,
  stakataka: 5.5,
  blacephalon: 1.8,
  zeraora: 1.5,
  meltan: 0.2,
  melmetal: 2.5,
  grookey: 0.3,
  thwackey: 0.7,
  rillaboom: 2.1,
  scorbunny: 0.3,
  raboot: 0.6,
  cinderace: 1.4,
  sobble: 0.3,
  drizzile: 0.7,
  inteleon: 1.9,
  skwovet: 0.3,
  greedent: 0.6,
  rookidee: 0.2,
  corvisquire: 0.8,
  corviknight: 2.2,
  blipbug: 0.4,
  dottler: 0.4,
  orbeetle: 0.4,
  nickit: 0.6,
  thievul: 1.2,
  gossifleur: 0.4,
  eldegoss: 0.5,
  wooloo: 0.6,
  dubwool: 1.3,
  chewtle: 0.3,
  drednaw: 1,
  yamper: 0.3,
  boltund: 1,
  rolycoly: 0.3,
  carkol: 1.1,
  coalossal: 2.8,
  applin: 0.2,
  flapple: 0.3,
  appletun: 0.4,
  silicobra: 2.2,
  sandaconda: 3.8,
  cramorant: 0.8,
  arrokuda: 0.5,
  barraskewda: 1.3,
  toxel: 0.4,
  "toxtricity-amped": 1.6,
  sizzlipede: 0.7,
  centiskorch: 3,
  clobbopus: 0.6,
  grapploct: 1.6,
  sinistea: 0.1,
  polteageist: 0.2,
  hatenna: 0.4,
  hattrem: 0.6,
  hatterene: 2.1,
  impidimp: 0.4,
  morgrem: 0.8,
  grimmsnarl: 1.5,
  obstagoon: 1.6,
  perrserker: 0.8,
  cursola: 1,
  sirfetchd: 0.8,
  "mr-rime": 1.5,
  runerigus: 1.6,
  milcery: 0.2,
  alcremie: 0.3,
  falinks: 3,
  pincurchin: 0.3,
  snom: 0.3,
  frosmoth: 1.3,
  stonjourner: 2.5,
  "eiscue-ice": 1.4,
  "indeedee-male": 0.9,
  "morpeko-full-belly": 0.3,
  cufant: 1.2,
  copperajah: 3,
  dracozolt: 1.8,
  arctozolt: 2.3,
  dracovish: 2.3,
  arctovish: 2,
  duraludon: 1.8,
  dreepy: 0.5,
  drakloak: 1.4,
  dragapult: 3,
  zacian: 2.8,
  zamazenta: 2.9,
  eternatus: 20,
  kubfu: 0.6,
  "urshifu-single-strike": 1.9,
  zarude: 1.8,
  regieleki: 1.2,
  regidrago: 2.1,
  glastrier: 2.2,
  spectrier: 2,
  calyrex: 1.1,
  wyrdeer: 1.8,
  kleavor: 1.8,
  ursaluna: 2.4,
  "basculegion-male": 3,
  sneasler: 1.3,
  overqwil: 2.5,
  "enamorus-incarnate": 1.6,
  sprigatito: 0.4,
  floragato: 0.9,
  meowscarada: 1.5,
  fuecoco: 0.4,
  crocalor: 1,
  skeledirge: 1.6,
  quaxly: 0.5,
  quaxwell: 1.2,
  quaquaval: 1.8,
  lechonk: 0.5,
  oinkologne: 1,
  tarountula: 0.3,
  spidops: 1,
  nymble: 0.2,
  lokix: 1,
  pawmi: 0.3,
  pawmo: 0.4,
  pawmot: 0.9,
  tandemaus: 0.3,
  maushold: 0.3,
  fidough: 0.3,
  dachsbun: 0.5,
  smoliv: 0.3,
  dolliv: 0.6,
  arboliva: 1.4,
  squawkabilly: 0.6,
  nacli: 0.4,
  naclstack: 0.6,
  garganacl: 2.3,
  charcadet: 0.6,
  armarouge: 1.5,
  ceruledge: 1.6,
  tadbulb: 0.3,
  bellibolt: 1.2,
  wattrel: 0.4,
  kilowattrel: 1.4,
  maschiff: 0.5,
  mabosstiff: 1.1,
  shroodle: 0.2,
  grafaiai: 0.7,
  bramblin: 0.6,
  brambleghast: 1.2,
  toedscool: 0.9,
  toedscruel: 1.9,
  klawf: 1.3,
  capsakid: 0.3,
  scovillain: 0.9,
  rellor: 0.2,
  rabsca: 0.3,
  flittle: 0.2,
  espathra: 1.9,
  tinkatink: 0.4,
  tinkatuff: 0.7,
  tinkaton: 0.7,
  wiglett: 1.2,
  wugtrio: 1.2,
  bombirdier: 1.5,
  finizen: 1.3,
  palafin: 1.3,
  varoom: 1,
  revavroom: 1.8,
  cyclizar: 1.6,
  orthworm: 2.5,
  glimmet: 0.7,
  glimmora: 1.5,
  greavard: 0.6,
  houndstone: 2,
  flamigo: 1.6,
  cetoddle: 1.2,
  cetitan: 4.5,
  veluza: 2.5,
  dondozo: 12,
  tatsugiri: 0.3,
  annihilape: 1.2,
  clodsire: 1.8,
  farigiraf: 3.2,
  dudunsparce: 3.6,
  kingambit: 2,
  "great-tusk": 2.2,
  "scream-tail": 1.2,
  "brute-bonnet": 1.2,
  "flutter-mane": 1.4,
  "slither-wing": 3.2,
  "sandy-shocks": 2.3,
  "iron-treads": 0.9,
  "iron-bundle": 0.6,
  "iron-hands": 1.8,
  "iron-jugulis": 1.3,
  "iron-moth": 1.2,
  "iron-thorns": 1.6,
  frigibax: 0.5,
  arctibax: 0.8,
  baxcalibur: 2.1,
  gimmighoul: 0.3,
  gholdengo: 1.2,
  "wo-chien": 1.5,
  "chien-pao": 1.9,
  "ting-lu": 2.7,
  "chi-yu": 0.4,
  "roaring-moon": 2,
  "iron-valiant": 1.4,
  koraidon: 2.5,
  miraidon: 3.5,
  "walking-wake": 3.5,
  "iron-leaves": 1.5,
  dipplin: 0.4,
  poltchageist: 0.1,
  sinistcha: 0.2,
  okidogi: 1.8,
  munkidori: 1,
  fezandipiti: 1.4,
  ogerpon: 1.2,
  archaludon: 2,
  hydrapple: 1.8,
  "gouging-fire": 3.5,
  "raging-bolt": 5.2,
  "iron-boulder": 1.5,
  "iron-crown": 1.6,
  terapagos: 0.2,
  pecharunt: 0.3,
};

export default heightList;
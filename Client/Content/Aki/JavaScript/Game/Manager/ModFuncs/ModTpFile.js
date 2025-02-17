"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.ModTpFile = void 0);
//const puerts_1 = require("puerts"),
//  UE = require("ue"),
//  Info_1 = require("../../../Core/Common/Info"),
//  Log_1 = require("../../../Core/Common/Log"),
//  ModManager_1 = require("../ModManager"),
//  ModCustomTp_1 = require("./ModCustomTp");

//Farm echoes set
const C1_Farm = require("./CustomTpData/c1-farm"),
  C4_Boss = require("./CustomTpData/allboss"),
  Aero = require("./CustomTpData/FarmSet/aero"),
  Fusion = require("./CustomTpData/FarmSet/fusion"),
  Glacio = require("./CustomTpData/FarmSet/glacio"),
  Havoc = require("./CustomTpData/FarmSet/havoc"),
  Moonlith = require("./CustomTpData/FarmSet/moonlith"),
  Spectro = require("./CustomTpData/FarmSet/spectro"),
  VoidThunder = require("./CustomTpData/FarmSet/voidThunder"),
  C3_Farm = require("./CustomTpData/c3-farm");

//V1.0 100% MAP
const CentralPlains = require("./CustomTpData/v10/100-exploration/central-plains"),
  Desorock = require("./CustomTpData/v10/100-exploration/desorock"),
  WimingArea = require("./CustomTpData/v10/100-exploration/wiming-area"),
  WhumingBay = require("./CustomTpData/v10/100-exploration/whuming-bay"),
  TigersMaw = require("./CustomTpData/v10/100-exploration/tigers-maw"),
  NorfallArea = require("./CustomTpData/v10/100-exploration/norfall-area"),
  DimForest = require("./CustomTpData/v10/100-exploration/dim-forest"),
  JinzhouArea = require("./CustomTpData/v10/100-exploration/jinzhou-area"),
  GuixuiArea = require("./CustomTpData/v10/100-exploration/guixui-area"),
  GeorgesArea = require("./CustomTpData/v10/100-exploration/georges-area"),
  Firmament = require("./CustomTpData/v10/100-exploration/firmament"),
  { Blackshore, Blackshore_Under } = require("./CustomTpData/v10/100-exploration/black-shore"),
  MutterflyAio = require("./CustomTpData/v10/100-exploration/Mutterfly-aio"),
  //Ores
  Orev10 = require("./CustomTpData/v10/ore"),
  //Monster echoes
  RedElite = require("./CustomTpData/v10/monster/redelite");

//v2.0 Challenge
const EchoChallenge = require("./CustomTpData/v20/challenge/echo-challenge"),
  SimulationTraining = require("./CustomTpData/v20/challenge/simulation-training"),
  //Materials
  FirecrackerJewelweed = require("./CustomTpData/v20/materials/firecracker-jewelweed"),
  GoldenFleece = require("./CustomTpData/v20/materials/golden-fleece"),
  SwordAurus = require("./CustomTpData/v20/materials/sword-aurus"),
  //Echoes
  Abyssal = require("./CustomTpData/v20/monster/abyssal"),
  Chopchop = require("./CustomTpData/v20/monster/chopchop"),
  Cuddle = require("./CustomTpData/v20/monster/cuddle"),
  Knight = require("./CustomTpData/v20/monster/knight"),
  Phantom = require("./CustomTpData/v20/monster/phantom"),
  Vitreumdance = require("./CustomTpData/v20/monster/vitreumdance"),
  NightmareBoss = require("./CustomTpData/v20/monster/nightmare"),
  //Ores
  FoolsGold = require("./CustomTpData/v20/ore/fools-gold"),
  ResonanceCaltice = require("./CustomTpData/v20/ore/resonance-caltice"),
  //Treasure
  ChestRinascita = require("./CustomTpData/v20/treasure/chest-rinascita"),
  //TidalRinascita = require("./CustomTpData/v20/treasure/tidal-rinascita"),
  SonanceCasket = require("./CustomTpData/v20/treasure/sonanceCasket");

// V2.1
const Treasure_Monster = require("./CustomTpData/v21/Echo/zC3_下层_v21"),
  Treasure_Monster_Under = require("./CustomTpData/v21/Echo/zC3_宝箱怪_v21"),
  Cuddle_v21 = require("./CustomTpData/v21/Echo/zC3_巨布偶_CuddleWuddle_v21"),
  Abyssal_v21 = require("./CustomTpData/v21/Echo/zC3_毒贵族_AbyssalPatricius_v21"),
  Chopchop_v21 = require("./CustomTpData/v21/Echo/zC3_浮灵偶_ChopChop_v21"),
  Vitreumdance_v21 = require("./CustomTpData/v21/Echo/zC3_琉璃刀伶_VitreumDancer_v21"),
  Rage = require("./CustomTpData/v21/Echo/zC3_重塑雕像的拳砾_RageAgainstTheStatue_v21"),
  Knight_v21 = require("./CustomTpData/v21/Echo/zC3_黑白骑士_Knight_v21"),
  //Treasure
  TreasureChest_V21 = require("./CustomTpData/v21/Collection/TreasureChest"),
  TreasureChest_V21_Under = require("./CustomTpData/v21/Collection/TreasureChest_under"),
  TidalHeritage_v21 = require("./CustomTpData/v21/Collection/TidalHeritage_v21"),
  TidalHeritage_v21_Under = require("./CustomTpData/v21/Collection/TidalHeritage_v21_under"),
  MusicFly_V21 = require("./CustomTpData/v21/Collection/MusicFly"),
  MusicFly_V21_Under = require("./CustomTpData/v21/Collection/MusicFly_Under");

class ModTpFile {
  //Echoes
  static C4_Boss = C4_Boss();
  static C1_Farm = C1_Farm;
  static C3_Farm = C3_Farm;
  static Aero = Aero;
  static Fusion = Fusion;
  static Glacio = Glacio;
  static Havoc = Havoc;
  static Moonlith = Moonlith;
  static Spectro = Spectro;
  static VoidThunder = VoidThunder;

  //1.0
  //Echoes
  static RedElite = RedElite;
  //Ore
  static Orev10 = Orev10;
  //100% map
  static CentralPlains = CentralPlains;
  static Desorock = Desorock;
  static WimingArea = WimingArea;
  static WhumingBay = WhumingBay;
  static TigersMaw = TigersMaw;
  static NorfallArea = NorfallArea;
  static DimForest = DimForest;
  static JinzhouArea = JinzhouArea;
  static GuixuiArea = GuixuiArea;
  static GeorgesArea = GeorgesArea;
  static Firmament = Firmament;
  static Blackshore_Under = Blackshore_Under;
  static Blackshore = Blackshore;
  static MutterflyAio = MutterflyAio;
  //end 1.0

  //v2.0
  //Treasure
  static ChestRinascita = ChestRinascita;
  //static TidalRinascita = TidalRinascita;
  static SonanceCasket = SonanceCasket;
  static EchoChallenge = EchoChallenge;
  static SimulationTraining = SimulationTraining;
  //Materials
  static FirecrackerJewelweed = FirecrackerJewelweed;
  static GoldenFleece = GoldenFleece;
  static SwordAurus = SwordAurus;
  //Ores
  static FoolsGold = FoolsGold;
  static ResonanceCaltice = ResonanceCaltice;
  //Echoes
  static Abyssal = Abyssal;
  static Chopchop = Chopchop;
  static Cuddle = Cuddle;
  static Knight = Knight;
  static Phantom = Phantom;
  static Vitreumdance = Vitreumdance;
  static NightmareBoss = NightmareBoss(100);
  //end 2.0
  // v2.1
  static Treasure_Monster = Treasure_Monster;
  static Treasure_Monster_Under = Treasure_Monster_Under;
  static Cuddle_v21 = Cuddle_v21;
  static Abyssal_v21 = Abyssal_v21;
  static Chopchop_v21 = Chopchop_v21;
  static Vitreumdance_v21 = Vitreumdance_v21;
  static Rage = Rage;
  static Knight_v21 = Knight_v21;
  static TreasureChest_V21 = TreasureChest_V21;
  static TreasureChest_V21_Under = TreasureChest_V21_Under;
  static MusicFly_V21 = MusicFly_V21;
  static MusicFly_V21_Under = MusicFly_V21_Under;
  static TidalHeritage_v21 = TidalHeritage_v21;
  static TidalHeritage_v21_Under = TidalHeritage_v21_Under;
  // end 2.1

  static CustomTpList = [
    //Echoes
    this.C4_Boss,
    this.C1_Farm,
    this.C3_Farm,
    this.Aero,
    this.Fusion,
    this.Glacio,
    this.Havoc,
    this.Moonlith,
    this.Spectro,
    this.VoidThunder,

    //1.0
    //Echoes
    this.RedElite,
    //Ore
    this.Orev10,
    //100% map
    this.CentralPlains,
    this.Desorock,
    this.WimingArea,
    this.WhumingBay,
    this.TigersMaw,
    this.NorfallArea,
    this.DimForest,
    this.JinzhouArea,
    this.GuixuiArea,
    this.GeorgesArea,
    this.Firmament,
    this.Blackshore_Under,
    this.Blackshore,
    this.MutterflyAio,
    //end 1.0
    //v2.0
    //Treasure
    this.ChestRinascita,
    //this.TidalRinascita,
    this.SonanceCasket,
    this.EchoChallenge,
    this.SimulationTraining,
    //Materials
    this.FirecrackerJewelweed,
    this.GoldenFleece,
    this.SwordAurus,
    //Ores
    this.FoolsGold,
    this.ResonanceCaltice,
    //Echoes
    this.NightmareBoss,
    this.Abyssal,
    this.Chopchop,
    this.Cuddle,
    this.Knight,
    this.Phantom,
    this.Vitreumdance,
    //end 2.0
    // V2.1
    this.MusicFly_V21,
    this.MusicFly_V21_Under,
    this.TreasureChest_V21,
    this.TreasureChest_V21_Under,
    this.TidalHeritage_v21,
    this.TidalHeritage_v21_Under,
    this.Treasure_Monster,
    this.Treasure_Monster_Under,
    this.Cuddle_v21,
    this.Abyssal_v21,
    this.Chopchop_v21,
    this.Vitreumdance_v21,
    this.Rage,
    this.Knight_v21,
    //end
  ];
}
exports.ModTpFile = ModTpFile;

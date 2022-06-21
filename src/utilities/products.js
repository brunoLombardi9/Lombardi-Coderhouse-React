// BASSES
import TMB100 from '../images/Ibanez TMB100.jpg';
import SR300E from '../images/Ibanez SR300E.jpg';
import SR400EQM from '../images/Ibanez SR400EQM.jpg';
import JazzBass from '../images/Fender Jazz Bass.jpg';
import PrecisionBass from '../images/Fender Precision Bass.jpg';

// --------------------------------------------------------------------------------------------------------

// GUITARS
import LesPaul from '../images/Gibson Les Paul.jpg';
import SgStandard from '../images/Gibson SG Standard.jpg';
import Es335 from '../images/Gibson ES-335.jpg';
import Stratocaster from '../images/Fender Stratocaster.jpg';
import Telecaster from '../images/Fender Telecaster.jpg';
// --------------------------------------------------------------------------------------------------------

// DRUMS
import Pocket from '../images/Ludwig Pocket.jpg';
import Breakbeats from '../images/Ludwig Breakbeats.jpg';
import Classic from '../images/Ludwig Classic.jpg';
import Performance from '../images/DW Performance.jpg';
import Collector from '../images/DW Collector.jpg';
// --------------------------------------------------------------------------------------------------------

// KEYBOARDS
import Cdps100 from '../images/Casio CDP-S100.jpg';
import Cdps350 from '../images/Casio CDP-S350.jpg';
import CtS200 from '../images/Casio CT-S200.jpg';
import PsrE273 from '../images/Yamaha PSR-E273.jpg';
import PsrF51 from '../images/Yamaha PSR-F51.jpg';
// --------------------------------------------------------------------------------------------------------

// MICS
import SM57 from '../images/Shure SM57.jpg';
import SM58 from '../images/Shure SM58.jpg';
import Beta52A from '../images/Shure BETA 52A.jpg';
import E835 from '../images/Sennheiser e 835.jpg';
import E935 from '../images/Sennheiser e 935.jpg';
// --------------------------------------------------------------------------------------------------------

// CONSOLES
import DJM750MK2 from '../images/Pioneer DJ DJM-750MK2.jpg';
import DJM450 from '../images/Pioneer DJ DJM-450.jpg';
import DJM250MK2 from '../images/Pioneer DJ DJM-250MK2.jpg';
import Mixtrack from '../images/Numark Mixtrack Platinum.webp';
import Mixstream from '../images/Numark Mixstream Pro.webp';
// --------------------------------------------------------------------------------------------------------

// AMPLIFIERS
import Rumble15 from '../images/Fender Rumble 15.jpg';
import Rumble40 from '../images/Fender Rumble 40.jpg';
import Rumble25 from '../images/Fender Rumble 25.jpg';
import Crush50 from '../images/Orange Amplifiers Crush Bass 50.webp';
import Crush25 from '../images/Orange Amplifiers Crush Bass 25.webp';
// --------------------------------------------------------------------------------------------------------

// PEDALS
import Ds1 from '../images/BOSS DS-1.webp';
import Bd2 from '../images/BOSS BD-2.webp';
import Rc1 from '../images/BOSS RC-1.webp';
import HxStomp from '../images/Line 6 HX Stomp.webp';
import PodGo from '../images/Line 6 POD Go Wireless.webp';
// --------------------------------------------------------------------------------------------------------

const products = [

    {
        id: 0,
        brand: "Ibanez",
        title: "TMB100",
        price: 250,
        pictureUrl: TMB100,
        description: "Texto generico",
        category: "Basses"
    },
    {
        id: 1,
        brand: "Ibanez",
        title: "SR400EQM",
        price: 480,
        pictureUrl: SR400EQM,
        description: "Texto generico",
        category: "Basses"
    },
    {
        id: 2,
        brand: "Ibanez",
        title: "SR300E",
        price: 350,
        pictureUrl: SR300E,
        description: "Texto generico",
        category: "Basses"
    },
    {
        id: 3,
        brand: "Fender",
        title: "Precison Bass",
        price: 850,
        pictureUrl: PrecisionBass,
        description: "Texto generico",
        category: "Basses"
    },
    {
        id: 4,
        brand: "Fender",
        title: "Jazz Bass",
        price: 650,
        pictureUrl: JazzBass,
        description: "Texto generico",
        category: "Basses"
    },
    {
        id: 5,
        brand: "Gibson",
        title: "LesPaul",
        price: 1700,
        pictureUrl: LesPaul,
        description: "Texto generico",
        category: "Guitars"
    },
    {
        id: 6,
        brand: "Gibson",
        title: "SG Standard",
        price: 1600,
        pictureUrl: SgStandard,
        description: "Texto generico",
        category: "Guitars"
    },
    {
        id: 7,
        brand: "Gibson",
        title: "ES-335",
        price: 3500,
        pictureUrl: Es335,
        description: "Texto generico",
        category: "Guitars"
    },
    {
        id: 8,
        brand: "Fender",
        title: "Stratocaster",
        price: 910,
        pictureUrl: Stratocaster,
        description: "Texto generico",
        category: "Guitars"
    },
    {
        id: 9,
        brand: "Fender",
        title: "Fender Telecaster",
        price: 1800,
        pictureUrl: Telecaster,
        description: "Texto generico",
        category: "Guitars"
    },
    {
        id: 10,
        brand: "Ludwig",
        title: "Pocket",
        price: 400,
        pictureUrl: Pocket,
        description: "Texto generico",
        category: "Drums"
    },
    {
        id: 11,
        brand: "Ludwig",
        title: "Breakbeats",
        price: 430,
        pictureUrl: Breakbeats,
        description: "Texto generico",
        category: "Drums"
    },
    {
        id: 12,
        brand: "Ludwig",
        title: "Classic",
        price: 3150,
        pictureUrl: Classic,
        description: "Texto generico",
        category: "Drums"
    },
    {
        id: 13,
        brand: "DW",
        title: "Performance",
        price: 3125,
        pictureUrl: Performance,
        description: "Texto generico",
        category: "Drums"
    },
    {
        id: 14,
        brand: "DW",
        title: "Collector",
        price: 3125,
        pictureUrl: Collector,
        description: "Texto generico",
        category: "Drums"
    },
    {
        id: 15,
        brand: "Casio",
        title: "CDP-S100",
        price: 450,
        pictureUrl: Cdps100,
        description: "Texto generico",
        category: "Keyboards"
    },
    {
        id: 16,
        brand: "Casio",
        title: "CDP-S350",
        price: 450,
        pictureUrl: Cdps350,
        description: "Texto generico",
        category: "Keyboards"
    },
    {
        id: 17,
        brand: "Casio",
        title: "CT-S200",
        price: 140,
        pictureUrl: CtS200,
        description: "Texto generico",
        category: "Keyboards"
    },
    {
        id: 18,
        brand: "Yamaha",
        title: "PSR-E273",
        price: 140,
        pictureUrl: PsrE273,
        description: "Texto generico",
        category: "Keyboards"
    },
    {
        id: 19,
        brand: "Yamaha",
        title: "Yamaha PSR-F51",
        price: 120,
        pictureUrl: PsrF51,
        description: "Texto generico",
        category: "Keyboards"
    },
    {
        id: 20,
        brand: "Shure",
        title: "SM57",
        price: 100,
        pictureUrl: SM57,
        description: "Texto generico",
        category: "Mics"
    },
    {
        id: 21,
        brand: "Shure",
        title: "SM58",
        price: 100,
        pictureUrl: SM58,
        description: "Texto generico",
        category: "Mics"
    },
    {
        id: 22,
        brand: "Shure",
        title: "BETA 52A",
        price: 200,
        pictureUrl: Beta52A,
        description: "Texto generico",
        category: "Mics"
    },
    {
        id: 23,
        brand: "Sennheiser",
        title: "E835",
        price: 100,
        pictureUrl: E835,
        description: "Texto generico",
        category: "Mics"
    },
    {
        id: 24,
        brand: "Sennheiser",
        title: "E935",
        price: 200,
        pictureUrl: E935,
        description: "Texto generico",
        category: "Mics"
    },
    {
        id: 25,
        brand: "Pioneer",
        title: "DJM-750MK2",
        price: 1300,
        pictureUrl: DJM750MK2,
        description: "Texto generico",
        category: "Consoles"
    },
    {
        id: 26,
        brand: "Pioneer",
        title: "DJM-450",
        price: 770,
        pictureUrl: DJM450,
        description: "Texto generico",
        category: "Consoles"
    },
    {
        id: 27,
        brand: "Pioneer",
        title: "DJM-250MK2",
        price: 390,
        pictureUrl: DJM250MK2,
        description: "Texto generico",
        category: "Consoles"
    },
    {
        id: 28,
        brand: "Numark",
        title: "Mixtrack Platinum",
        price: 290,
        pictureUrl: Mixtrack,
        description: "Texto generico",
        category: "Consoles"
    },
    {
        id: 29,
        brand: "Numark",
        title: "Mixstream Pro",
        price: 700,
        pictureUrl: Mixstream,
        description: "Texto generico",
        category: "Consoles"
    },
    {
        id: 30,
        brand: "Fender",
        title: "Rumble 15",
        price: 80,
        pictureUrl: Rumble15,
        description: "Texto generico",
        category: "Amplifiers"
    },
    {
        id: 31,
        brand: "Fender",
        title: "Rumble 40",
        price: 200,
        pictureUrl: Rumble40,
        description: "Texto generico",
        category: "Amplifiers"
    },
    {
        id: 32,
        brand: "Fender",
        title: "Rumble 25",
        price: 120,
        pictureUrl: Rumble25,
        description: "Texto generico",
        category: "Amplifiers"
    },
    {
        id: 33,
        brand: "Orange",
        title: "Amplifiers Crush Bass 50",
        price: 330,
        pictureUrl: Crush50,
        description: "Texto generico",
        category: "Amplifiers"
    },
    {
        id: 34,
        brand: "Orange",
        title: "Amplifiers Crush Bass 25",
        price: 220,
        pictureUrl: Crush25,
        description: "Texto generico",
        category: "Amplifiers"
    },
    {
        id: 35,
        brand: "Boss",
        title: "DS-1",
        price: 63,
        pictureUrl: Ds1,
        description: "Texto generico",
        category: "Pedals"
    },
    {
        id: 36,
        brand: "Boss",
        title: "BD-2",
        price: 120,
        pictureUrl: Bd2,
        description: "Texto generico",
        category: "Pedals"
    },
    {
        id: 37,
        brand: "Boss",
        title: "RC-1",
        price: 120,
        pictureUrl: Rc1,
        description: "Texto generico",
        category: "Pedals"
    },
    {
        id: 38,
        brand: "Line 6",
        title: "HX Stomp",
        price: 650,
        pictureUrl: HxStomp,
        description: "Texto generico",
        category: "Pedals"
    },
    {
        id: 39,
        brand: "Line 6",
        title: "POD Go Wireless",
        price: 550,
        pictureUrl: PodGo,
        description: "Texto generico",
        category: "Pedals"
    }

]


export default products;
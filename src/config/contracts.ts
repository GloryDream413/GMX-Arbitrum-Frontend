import { ARBITRUM, ARBITRUM_TESTNET, FANTOM_TESTNET, MAINNET, TESTNET } from "./chains";

export const XGMT_EXCLUDED_ACCOUNTS = [
  "0x330eef6b9b1ea6edd620c825c9919dc8b611d5d5",
  "0xd9b1c23411adbb984b1c4be515fafc47a12898b2",
  "0xa633158288520807f91ccc98aa58e0ea43acb400",
  "0xffd0a93b4362052a336a7b22494f1b77018dd34b",
];

const CONTRACTS = {
  [MAINNET]: {
    //Ethereum
    Vault: "0x2D0afF409BdE00451334011D55c141AfF2103744",//replaced 
    Router: "0x13cec16f5a479e6cF28c82FC28183565cAAd72A9",//replaced 
    VaultReader: "0x4E39cB0ae3d1b24B5E567Eb6e2aa17DB021777d2",//replaced 
    Reader: "0xc1B6Ed02Af16078eC208091BD5c8F1DC2FF55b35",//replaced 
    GlpManager: "0xb6F9EF9b9dCb86863a66C4027b02B751fF504e52",//replaced 
    RewardRouter: "0xa20Eb4e8faeDAb0970Cb7695190Febb24B0ADfeF",//replaced 
    RewardReader: "0x3A4cf4362625413b525691378AB70F91f5a40441",//replaced 
    NATIVE_TOKEN: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    GLP: "0xfbC42698A1cA8E18CDEB406DC68D7cDd351C12f4",//replaced 
    GMX: "0x6d8ebbaab26a1f40abd1ed14b702a84c7b4f2107", //replaced 
    ES_GMX: "0x298f0FbFD6058218878745592a9455C6dCf45899",//replaced 
    BN_GMX: "0x40e52C96C2011c6d42b87886A04fDdD1FA8c2Fa6",//replaced 
    USDG: "0x790275Ef6bDb0142C4068E9343BCa9747de2998f", //replaced 
    ES_GMX_IOU: "0xc7F3f819967B033acd1A827F6C1171d9aF9364Fc", // placeholder address

    StakedGmxTracker: "0xcCBBcf0Ef91d6CbE85B2F2E14D68618F8d1dC7c4",//replaced 
    BonusGmxTracker: "0x41Bf5F8F9E3EC63612647cE9a6817c4646fFd016",//replaced 
    FeeGmxTracker: "0xF38A6040A917f582BBd331fbfE002A32d49D4AcC",//replaced 
    StakedGlpTracker: "0x6cF1f55f9a26455e540EA4800Ba4e8f72b6BB761",//replaced 
    FeeGlpTracker: "0x28F57Cb83A47aD7d060840437Be85F58C45d0fAe",//replaced 

    StakedGmxDistributor: "0x1D0F7723A92EF7DCF05f52c0D651B379c9627f47",//replaced 
    StakedGlpDistributor: "0xaff1a5B9C0DC649F854eA9168D8D5B40b2c93B7C",//replaced 

    GmxVester: "0x4d9E0a6eEc99bE24E02DB1BeAeb50E38Cd556c1E",//replaced 
    GlpVester: "0x5511c7EeC732896a780831634E245172872E109A",//replaced 

    OrderBook: "0x0bbB18cD75eD43872a7b76369a1FdA4526697542",//replaced 
    OrderExecutor: "0x0bbB18cD75eD43872a7b76369a1FdA4526697542",//replaced
    OrderBookReader: "0xeD803B2D1A25de4B257E59B7D07915410365B7F5",//replaced 

    PositionRouter: "0x6db945a97b65A4D987A741CF087cf3a9059370C3",//replaced 
    PositionManager: "0xFE945E585d0CEd45ae29A73650599Eaa29914bCA",//replaced 

    TraderJoeGmxAvaxPool: "0x3e9a5E7e1f264817E64B2A4249a55D5f6FA01A40",//replaced
    ReferralStorage: "0x9b2d60bdB48aABf3D0CF675B41b7a900d2b0f7CC",//replaced 
    ReferralReader: "0x6F405aFfe0305149586CfF7f21920f02DEafB529",//replaced 
  },
  [TESTNET]: {
    // bsc testnet
    Vault: "0x1B183979a5cd95FAF392c8002dbF0D5A1C687D9a",
    Router: "0x10800f683aa564534497a5b67F45bE3556a955AB",
    Reader: "0x98D4742F1B6a821bae672Cd8721283b91996E454",
    AmmFactory: "0x6725f303b657a9451d8ba641348b6761a6cc7a17",
    AmmFactoryV2: "0x1111111111111111111111111111111111111111",
    OrderBook: "0x9afD7B4f0b58d65F6b2978D3581383a06b2ac4e9",
    OrderBookReader: "0x0713562970D1A802Fa3FeB1D15F9809943982Ea9",
    GmxMigrator: "0xDEF2af818514c1Ca1A9bBe2a4D45E28f260063f9",
    USDG: "0x2D549bdBf810523fe9cd660cC35fE05f0FcAa028",
    GMT: "0xedba0360a44f885ed390fad01aa34d00d2532817",
    NATIVE_TOKEN: "0x612777Eea37a44F7a95E3B101C39e1E2695fa6C2",
    XGMT: "0x28cba798eca1a3128ffd1b734afb93870f22e613",
    GMT_USDG_PAIR: "0xe0b0a315746f51932de033ab27223d85114c6b85",
    XGMT_USDG_PAIR: "0x0108de1eea192ce8448080c3d90a1560cf643fa0",
    GMT_USDG_FARM: "0xbe3cB06CE03cA692b77902040479572Ba8D01b0B",
    XGMT_USDG_FARM: "0x138E92195D4B99CE3618092D3F9FA830d9A69B4b",
    USDG_YIELD_TRACKER: "0x62B49Bc3bF252a5DB26D88ccc7E61119e3179B4f",
    XGMT_YIELD_TRACKER: "0x5F235A582e0993eE9466FeEb8F7B4682993a57d0",
    GMT_USDG_FARM_TRACKER_XGMT: "0x4f8EE3aE1152422cbCaFACd4e3041ba2D859913C",
    GMT_USDG_FARM_TRACKER_NATIVE: "0xd691B26E544Fe370f39A776964c991363aF72e56",
    XGMT_USDG_FARM_TRACKER_XGMT: "0xfd5617CFB082Ba9bcD62d654603972AE312bC695",
    XGMT_USDG_FARM_TRACKER_NATIVE: "0x0354387DD85b7D8aaD1611B3D167A384d6AE0c28",
    GMT_GMX_IOU: "0x47052469970C2484729875CC9E2dd2683fcE71fb",
    XGMT_GMX_IOU: "0xeB3733DFe3b68C9d26898De2493A3Bb59FDb4A7B",
    GMT_USDG_GMX_IOU: "0x481312655F81b5e249780A6a49735335BF6Ca7f4",
    XGMT_USDG_GMX_IOU: "0x8095F1A92526C304623483018aA28cC6E62EB1e1",
  },
  
  [ARBITRUM]: {
    // arbitrum mainnet
    Vault: "0x489ee077994B6658eAfA855C308275EAd8097C4A",
    Router: "0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064",
    VaultReader: "0xfebB9f4CAC4cD523598fE1C5771181440143F24A",
    Reader: "0x2b43c90D1B727cEe1Df34925bcd5Ace52Ec37694",
    GlpManager: "0x321F653eED006AD1C29D174e17d96351BDe22649",
    RewardRouter: "0xA906F338CB21815cBc4Bc87ace9e68c87eF8d8F1",
    RewardReader: "0x8BFb8e82Ee4569aee78D03235ff465Bd436D40E0",
    NATIVE_TOKEN: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    GLP: "0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258",
    GMX: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    ES_GMX: "0xf42Ae1D54fd613C9bb14810b0588FaAa09a426cA",
    BN_GMX: "0x35247165119B69A40edD5304969560D0ef486921",
    USDG: "0x45096e7aA921f27590f8F19e457794EB09678141",
    ES_GMX_IOU: "0x6260101218eC4cCfFF1b778936C6f2400f95A954",
    StakedGmxTracker: "0x908C4D94D34924765f1eDc22A1DD098397c59dD4",
    BonusGmxTracker: "0x4d268a7d4C16ceB5a606c173Bd974984343fea13",
    FeeGmxTracker: "0xd2D1162512F927a7e282Ef43a362659E4F2a728F",
    StakedGlpTracker: "0x1aDDD80E6039594eE970E5872D247bf0414C8903",
    FeeGlpTracker: "0x4e971a87900b931fF39d1Aad67697F49835400b6",

    StakedGmxDistributor: "0x23208B91A98c7C1CD9FE63085BFf68311494F193",
    StakedGlpDistributor: "0x60519b48ec4183a61ca2B8e37869E675FD203b34",

    GmxVester: "0x199070DDfd1CFb69173aa2F7e20906F26B363004",
    GlpVester: "0xA75287d2f8b217273E7FCD7E86eF07D33972042E",

    OrderBook: "0x09f77E8A13De9a35a7231028187e9fD5DB8a2ACB",
    OrderExecutor: "0x7257ac5D0a0aaC04AA7bA2AC0A6Eb742E332c3fB",
    OrderBookReader: "0xa27C20A7CF0e1C68C0460706bB674f98F362Bc21",

    PositionRouter: "0xb87a436B93fFE9D75c5cFA7bAcFff96430b09868",
    PositionManager: "0x75E42e6f01baf1D6022bEa862A28774a9f8a4A0C",

    UniswapGmxEthPool: "0x80A9ae39310abf666A87C743d6ebBD0E8C42158E",
    ReferralStorage: "0xe6fab3f0c7199b0d34d7fbe83394fc0e0d06e99d",
    ReferralReader: "0x8Aa382760BCdCe8644C33e6C2D52f6304A76F5c8",
  },

  [FANTOM_TESTNET]: {
    // FANTOM TESTNET
    Vault: "0x853Ee7Dea68E4e3021690134dfD8DDFAD9d1D4fA",//replaced 0x9e34FDE4Bf55061a1805C11654C21acCd34d511E
    Router: "0x55768B7ecD0314C7984B775B5119dB6A3308F6F5",//replaced 0x6A154CE91003Cf4b8787280fd7C96D9BFb3f88C3
    VaultReader: "0xBB9c564a205f40A744AF79C546128bE833b70E41",//replaced 0x9DFEbCA2fa5318093016892dC772CC7132dDcE43
    Reader: "0xDf51687c2556d27e562C86463321626102816CC4",//replaced 0x8D88Aa3F648e751f989E528a32577Ee434B8e47F
    GlpManager: "0xA43E397E938F94801891113f8bf0Db242a17375D",//replaced 0x3a417b2949d59B129e5C6c0A52114335C780B9AE
    RewardRouter: "0x71B4f9057E2373b1589a4C066C7795025396F2f4",//replaced 0x0AB63435EbA15CCedb44d86Cf3e2f1d8DBeB9e08
    RewardReader: "0x0A2bD1bC080D6C052dD15Fb22158F8f50B64bdc6",//replaced 0x4Ee70052E9c64602Ab96a2A61850E72A051bbd89
    NATIVE_TOKEN: "0xe31bf8f9c0d036b0b3a0e0a76c131cb919af6134",
    GLP: "0xD3A1570bab71FDD33A608B80e59d49F0060547C7",//replaced 0xA63FbC76dDaf2F800B3699a4a46C5f260E04050C
    GMX: "0x2083a1a936E72Aa77e134A1e18CD4E19B7C562A0", //replaced 0x39E1Da9a034Fd5ADba01C7F6cFA8B5dE16dD908c
    ES_GMX: "0xB0aa339E84c3641772bcD9a896FA3c105075fFB3",//replaced 0x6CdEf99C74CcF3FA65211fF547Be5dDB4A73770C
    BN_GMX: "0x082aED80276a9Db161264Cbe3fB904f683d572D1",//replaced 0x6e29e6db1Ea778fCC17BA575C8fB22A4dfeAE08f
    USDG: "0x4173bd3DC0557560Ba219325F8b6bC14869Cbec3", //replaced 0x775003195F41AFa4f75F751c35F06B3dF76F8e04
    ES_GMX_IOU: "0x5f96D7A3DF2D35CF975421144db8f174DC07999e", // placeholder address

    StakedGmxTracker: "0x9B018480c74f1E8E2D328f97298bB1ef8fe24d71",//replaced 0x48d7f4529f6149c5EB96AeF38534b90AD7562b4d
    BonusGmxTracker: "0x567c1b5AB4ba7487981eBA6a787e801C3193af84",//replaced 0xC5fcC14560781C4c9FD55d7466d781539177A3a4
    FeeGmxTracker: "0x6E246C9b0F47BCa56dE5cA68a73cE72DE5804204",//replaced 0xb31018C29500a565e511a0800dA87e1457CdE9b1
    StakedGlpTracker: "0xa75A0B74451314d0692A0C09cEC8faB250782C91",//replaced 0x8b498C45465f4a7e9CEc0D12Aa6a695A6b563A34
    FeeGlpTracker: "0x96ec1f2368ac41CCf37230A0d0030D2D7c1C80fF",//replaced 0x82b84dc1A46D43747496E62BBEE2c70Ef8EE4EAD

    StakedGmxDistributor: "0x28b59D359FaeaF7da2EA1ffAD009F4e5Ff7313f7",//replaced 0x4e11F35A9c226be709078787cC44375FD7c22424
    StakedGlpDistributor: "0x8a56e513C1FB7bF8361ae47a2D03FaC515d8e4D9",//replaced 0x7ed80C511359db0E34e2FbF14aB12Ee9AfAB0Baa

    GmxVester: "0x1e7Bf7061aA800c88a8731f33BCE7F0A39Afb068",//replaced 0x957C9a17fc5A5Fda190D1Bc4Fc1AF2B6282C2743
    GlpVester: "0xe1Ae7F1D7Fb01dd4B54De5F144AE07Ae20cDc758",//replaced 0xcf920DC4df556267A82783c4647cbe9Ce55cB1A2

    OrderBook: "0xbf711925E0B4cc345C985AbD1a524fF94d484f8A",//replaced 0xA76fB4882bcb66fBe68948B71eBe7f3B80e329Ea
    OrderExecutor: "0xbf711925E0B4cc345C985AbD1a524fF94d484f8A",//replaced
    OrderBookReader: "0x092B909Be4CD6C2187Ae27F20664E729b13BA717",//replaced 0x1d47908DC429b00611bd11AF78A7D39E7Dc6bCa2

    PositionRouter: "0x33A250a2aB2dD1c31C6717A901e132ba49b899fc",//replaced 0xD3D403595ccBB99537Af13099aC89A102AAd70D1
    PositionManager: "0x580ff55e35fC29b9C0C60EBadfE069C7d49E6990",//replaced 0xD5326A526f78667375D9D5dA7C739e261Df52fe6

    TraderJoeGmxAvaxPool: "0x153DA2C6B4Ed40B4C67a8c95EE45E93B5c85786F",//replaced
    ReferralStorage: "0x0F1D1B6efE75c69Eb9148Ba6158162F7ddF31465",//replaced 0xa4Ac7025c01e8fa2bfB7f274913e76b5d4d719de
    ReferralReader: "0xefafD064d301Ea4eE092E2CD1dF2D1d6AeF1559C",//replaced 0xDe0D6DbCCB35b92e0952C51ddDD81C7A86C5E480
  },
};

export function getContract(chainId: number, name: string): string {
  if (!CONTRACTS[chainId]) {
    throw new Error(`Unknown chainId ${chainId}`);
  }

  if (!CONTRACTS[chainId][name]) {
    throw new Error(`Unknown contract "${name}" for chainId ${chainId}`);
  }

  return CONTRACTS[chainId][name];
}

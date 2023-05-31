import { ARBITRUM, AVALANCHE, MAINNET } from "./chains";

export const SUBGRAPH_URLS = {
  [ARBITRUM]: {
    stats: "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-stats",
    referrals: "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-arbitrum-referrals",
    nissohVault: "https://api.thegraph.com/subgraphs/name/nissoh/gmx-vault",
  },

  [AVALANCHE]: {
    stats: "https://api.thegraph.com/subgraphs/name/hspdev0814/mmx_state_test",
    // stats: "https://api.thegraph.com/subgraphs/name/hspdev0814/mmx_avalanche_trade_info_test",
    referrals: "https://api.thegraph.com/subgraphs/name/hspdev0814/minmaxtest",
    trades:"https://api.thegraph.com/subgraphs/name/hspdev0814/mmx_avalanche_trade_info_test",
  },

  [MAINNET]: {
    stats: "https://api.thegraph.com/subgraphs/name/strongnezha/zomi-stats",
    // stats: "https://api.thegraph.com/subgraphs/name/hspdev0814/mmx_avalanche_trade_info_test",
    referrals: "https://api.thegraph.com/subgraphs/name/strongnezha/zomi-referrals",
    trades:"https://api.thegraph.com/subgraphs/name/strongnezha/zomi-trades",
  },

  common: {
    chainLink: "https://api.thegraph.com/subgraphs/name/deividask/chainlink",
  },
};

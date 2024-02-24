import {
  playerCheatsPS,
  worldCheatsPS,
  vehicleCheatsPS,
  playerCheatsXBX,
  worldCheatsXBX,
  vehicleCheatsXBX,
  playerCheatsCOMP,
  worldCheatsCOMP,
  vehicleCheatsCOMP,
} from "../api_cheats/dados_gta5.js";

import {
  createBannerCard,
  createCheatsCard,
  createModalVehicles,
} from "./script.js";

const cheatsCardConfig = [
  // PS
  { listCheats: playerCheatsPS, idCard: "card_player_ps" },
  { listCheats: worldCheatsPS, idCard: "card_world_ps" },
  { listCheats: vehicleCheatsPS, idCard: "card_vehicle_ps" },

  // XBX
  { listCheats: playerCheatsXBX, idCard: "card_player_xbx" },
  { listCheats: worldCheatsXBX, idCard: "card_world_xbx" },
  { listCheats: vehicleCheatsXBX, idCard: "card_vehicle_xbx" },

  // COMP
  { listCheats: playerCheatsCOMP, idCard: "card_player_comp" },
  { listCheats: worldCheatsCOMP, idCard: "card_world_comp" },
  { listCheats: vehicleCheatsCOMP, idCard: "card_vehicle_comp" },
];

const cheatsBannerConfig = [
  // PS
  {
    listCheats: playerCheatsPS,
    idCardBanner: "card_player_banner_ps",
    title: "Player Cheats",
    imgSrc: "../assets/img/gta5.jpg",
  },
  {
    listCheats: worldCheatsPS,
    idCardBanner: "card_world_banner_ps",
    title: "World Cheats",
    imgSrc: "../assets/img/gta5.jpg",
  },
  {
    listCheats: vehicleCheatsPS,
    idCardBanner: "card_vehicle_banner_ps",
    title: "Vehicle Cheats",
    imgSrc: "../assets/img/gta5.jpg",
  },

  // XBX
  {
    listCheats: playerCheatsXBX,
    idCardBanner: "card_player_banner_xbx",
    title: "Player Cheats",
    imgSrc: "../assets/img/gta5.jpg",
  },
  {
    listCheats: worldCheatsXBX,
    idCardBanner: "card_world_banner_xbx",
    title: "World Cheats",
    imgSrc: "../assets/img/gta5.jpg",
  },
  {
    listCheats: vehicleCheatsXBX,
    idCardBanner: "card_vehicle_banner_xbx",
    title: "Vehicle Cheats",
    imgSrc: "../assets/img/gta5.jpg",
  },

  // COMP
  {
    listCheats: playerCheatsCOMP,
    idCardBanner: "card_player_banner_comp",
    title: "Player Cheats",
    imgSrc: "../assets/img/gta5.jpg",
  },
  {
    listCheats: worldCheatsCOMP,
    idCardBanner: "card_world_banner_comp",
    title: "World Cheats",
    imgSrc: "../assets/img/gta5.jpg",
  },
  {
    listCheats: vehicleCheatsCOMP,
    idCardBanner: "card_vehicle_banner_comp",
    title: "Vehicle Cheats",
    imgSrc: "../assets/img/gta5.jpg",
  },
];

cheatsCardConfig.forEach((CardCheatsConfig) => {
  createCheatsCard(CardCheatsConfig.listCheats, CardCheatsConfig.idCard);
});

cheatsBannerConfig.forEach((bannerCheatsConfig) => {
  createBannerCard(
    bannerCheatsConfig.listCheats,
    bannerCheatsConfig.idCardBanner,
    bannerCheatsConfig.title,
    bannerCheatsConfig.imgSrc
  );
});

createModalVehicles("card_vehicle_ps");
createModalVehicles("card_vehicle_xbx");
createModalVehicles("card_vehicle_comp");

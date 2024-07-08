// import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

// const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: {
    id: "",
    name: "",
  },
});

export const jwtTokenState = atom({
  key: "jwt",
  default: {
    accessToken: "",
    refreshToken: "",
  },
});

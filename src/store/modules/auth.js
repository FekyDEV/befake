import axios from "axios";
const axiosAuth = axios.create({
  headers: {
    "content-type": "application/json",
    "x-firebase-client":
      "apple-platform/ios apple-sdk/19F64 appstore/true deploy/cocoapods device/iPhone9,1 fire-abt/8.15.0 fire-analytics/8.15.0 fire-auth/8.15.0 fire-db/8.15.0 fire-dl/8.15.0 fire-fcm/8.15.0 fire-fiam/8.15.0 fire-fst/8.15.0 fire-fun/8.15.0 fire-install/8.15.0 fire-ios/8.15.0 fire-perf/8.15.0 fire-rc/8.15.0 fire-str/8.15.0 firebase-crashlytics/8.15.0 os-version/14.7.1 xcode/13F100",
    accept: "*/*",
    "x-client-version": "iOS/FirebaseSDK/8.15.0/FirebaseCore-iOS",
    "x-firebase-client-log-type": "0",
    "x-ios-bundle-identifier": "AlexisBarreyat.BeReal",
    "accept-language": "en",
    "user-agent":
      "FirebaseAuth.iOS/8.15.0 AlexisBarreyat.BeReal/0.22.4 iPhone/14.7.1 hw/iPhone9_1",
    "x-firebase-locale": "en",
  },
});

const state = {
  user: null,
  posts: null,
  token: null,
  refreshToken: null,
};
const getters = {};
const actions = {
  async sendCode({ commit }, phone) {
    const body = {
      phoneNumber: phone,
      iosReceipt:
        "AEFDNu9QZBdycrEZ8bM_2-Ei5kn6XNrxHplCLx2HYOoJAWx-uSYzMldf66-gI1vOzqxfuT4uJeMXdreGJP5V1pNen_IKJVED3EdKl0ldUyYJflW5rDVjaQiXpN0Zu2BNc1c",
      iosSecret: "KKwuB8YqwuM3ku0z",
    };

    axiosAuth
      .post(
        "https://warm-scrubland-06418.herokuapp.com/https://www.googleapis.com/identitytoolkit/v3/relyingparty/sendVerificationCode?key=AIzaSyDwjfEeparokD7sXPVQli9NsTuhT6fJ6iA",
        body
      )
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          throw Error(data.error.message);
        }
        return data;
      });
  },
  async verifyCode({ commit }, { sessionInfo, code }) {
    const body = {
      sessionInfo: sessionInfo,
      code: code,
      operation: "SIGN_UP_OR_IN",
    };
    axiosAuth
      .post(
        "https://warm-scrubland-06418.herokuapp.com/https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPhoneNumber?key=AIzaSyDwjfEeparokD7sXPVQli9NsTuhT6fJ6iA",
        body
      )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw Error(data.error.message);
        }
        dispatch("login", {
          token: data.idToken,
          refreshToken: data.refreshToken,
          expiration: Date.now() + parseInt(data.expiresIn) * 1000,
        });
        return data;
      });
  },
  async login({ commit }, { token, refreshToken }) {
    commit("login", { token, refreshToken });
    axiosAuth.defaults.headers.common["Authorization"] = `${token}`;
    axiosAuth
      .get(
        "https://warm-scrubland-06418.herokuapp.com/https://mobile.bereal.com/api/person/me"
      )
      .then((res) => res.json())
      .then((data) => {
        commit("setUser", data);
      });
  },
};
const mutations = {
  login(state, { token, refreshToken, expiration }) {
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
  },
  setUser(state, user) {
    state.user = user;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};

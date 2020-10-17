export default (options) => {
  return {
    id: "facebook",
    name: "Facebook",
    preface:
      "Since instagram is a facebook application, we figure this is a safe way to log you in. If you don't have a facebook account though, you can use another method.",
    type: "oauth",
    version: "2.0",
    scope: "email",
    accessTokenUrl: "https://graph.facebook.com/oauth/access_token",
    authorizationUrl:
      "https://www.facebook.com/v7.0/dialog/oauth?response_type=code",
    profileUrl: "https://graph.facebook.com/me?fields=email,name,picture",
    profile: (profile) => {
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        image: profile.picture.data.url,
      };
    },
    ...options,
  };
};

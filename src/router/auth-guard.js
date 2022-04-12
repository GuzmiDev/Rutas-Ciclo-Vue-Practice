export const isAuthenticatedGuard = async (to, from, next) => {
  return new Promise(() => {
    const random = Math.random() * 100;

    if (random > 50) {
      console.log("está autenticdaao");
      next();
    } else {
      console.log("Bloqueado por el isAuthenticatedGuard", random);
      next({ name: "pokemon-home" });
    }
  });
};

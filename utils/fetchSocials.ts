import { server } from "../config";
import { Social } from "../typings";

export const fetchSocial = async () => {
  const res = await fetch(`${server}/api/getSocials`);
  const data = await res.json();
  const socials: Social[] = data.socials;
  return socials;
};

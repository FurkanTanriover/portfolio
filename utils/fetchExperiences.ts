import { server } from "../config";
import { Experience } from "../typings";

export const fetchExperience = async () => {
  const res = await fetch(`${server}/api/getExperiences`);
  const data = await res.json();
  const experiences: Experience[] = data.experiences;
  return experiences;
};

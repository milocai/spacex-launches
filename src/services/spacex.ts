
import { type Doc, type Company, type APIResults } from "../types/api";

export const getLaunchById = async ({id}: {id: string}) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  
  const launch = (await res.json()) as Doc;
  return launch;
}

export const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: {},
    options: {
      sort: {
        date_unix: "asc",
      },
      limit: 20,
    },
  }),
  });

  const { docs: launches } = (await res.json()) as APIResults;
  return launches
}

export const getCompanyInfo = async () => {
  const res = await fetch("https://api.spacexdata.com/v4/company");

  const info = (await res.json()) as Company;
  return info;
}
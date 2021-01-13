import { fetchAPI } from "./api.js";

export async function getGeneral()
{
    const data = await fetchAPI(
        `query MyQuery {
  allSettings {
    generalSettingsTitle
    generalSettingsDescription
  }
}`
    )
    return data?.allSettings
}
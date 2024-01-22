import { unstable_noStore as noStore } from "next/cache";

export async function fetchCardData() {
  noStore();
  const url = `https://gist.githubusercontent.com/bnmrly/017a87ef0b50c39e778c427a6b4bee60/raw/2f316eae029b7cedd6e0b808b07655e2d40f7281/holidays.json`;

  try {
    const response = await fetch(url);
    const staysData = await response.json();
    return { staysData };
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}

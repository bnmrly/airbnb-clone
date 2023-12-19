import { fetchCardData } from "../lib/data";

export default async function Cards() {
  const { staysData } = await fetchCardData();
  console.log("----Cards --- staysData:", staysData);
  return (
    <>
      <div>My card</div>
    </>
  );
}

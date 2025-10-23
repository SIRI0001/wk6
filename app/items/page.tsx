async function getItems() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/items", { cache: "no-store" });
  return res.json();
}
export default async function Page(){
  const items = await getItems();
  return <section style={{maxWidth:840,margin:"0 auto",padding:24}}>
    <h1>Prisma Items</h1>
    <pre style={{background:"#0d0f14",color:"#eaeef7",padding:12,borderRadius:8}}>{JSON.stringify(items,null,2)}</pre>
  </section>;
}
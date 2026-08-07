export default async function OneWork(props: {
    params: Promise<{ id: string }>
}) {
  const { id } = await props.params
  return <div>Work Page, id: {id}</div>
}

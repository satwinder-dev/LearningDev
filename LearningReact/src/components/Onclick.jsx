export const Onclick = () => {

    const fruit = (name) => {
        alert(name)
    }

  return (
    <>
    <button onClick={()=>fruit("apple")}>Apple</button>
    <button onClick={()=>fruit('banana')}>banana</button>
    </>
  )
}

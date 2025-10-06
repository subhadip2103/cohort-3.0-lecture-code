//SELECTOR Family

import { RecoilRoot, useRecoilValue } from 'recoil';
import { todosAtomsFamily } from './store/atoms';

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
    </RecoilRoot>
  )
}

function Todo({ id }) {
  const todo = useRecoilValue(todosAtomsFamily(id))
  return (
    <>
      This is todo no.{todo.userId}
      {todo.title}

      <br />

    </>
  )

}

export default App



















//Atom Family
// import { RecoilRoot, useRecoilValue } from 'recoil';
// import { todosAtomFamily } from './store/atom';

// function App() {
//   return <RecoilRoot>
//     <Todo id={1}/>
//     <Todo id={2} />
//     <Todo id={2} />
//     <Todo id={1} />
//     <Todo id={1} />
//     <Todo id={2} />
//   </RecoilRoot>
// }

// function Todo({id}) {
//    const todo = useRecoilValue(todosAtomFamily(id));

//   return (
//     <>
//       {todo.title}
//       {todo.description}
//       <br />
//     </>
//   )
// }

// export default App
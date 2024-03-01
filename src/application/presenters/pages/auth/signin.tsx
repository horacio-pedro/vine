import { App } from '@app/presenters/App'

export const Title: JSXTE.Component<{ tag: string }> = (props) => {
  return <h2>{ props.tag }</h2>
}

export default (props: { title: string }) => {
  return (
    <App >
      <div class="main-container">
        <h1>HELLO VINE</h1>
        <h2>Testing Node --watch 2</h2>
        <Title tag={ props.title } />
      </div>
    </App>
  )
}

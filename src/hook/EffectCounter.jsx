import useCounter from './useCounter'

export default function EffectCounter() {
  const count = useCounter()
  return <h1>{count}</h1>
}

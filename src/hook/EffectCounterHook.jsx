import useCounterHook from './useCounterHook'

export default function EffectCounterHook() {
  const count = useCounterHook(2, 2)
  return <h1>{count}</h1>
}

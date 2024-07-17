import './index.css';
import { Button } from '@andromeda/react'

export function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline text-softisLight">
        Hello world!
      </h1>
      <Button colors='secondary' sizes='full'>Click me!</Button>
      <Button colors='primary' sizes='default'>Click me!</Button>
    </div>
  );
}
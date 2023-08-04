import { SekeletonTile } from './skeleton'

export default function MockTiles() {
  return (
    <>
      {new Array(9).fill(true).map((_item, index) => (
        <SekeletonTile key={index} />
      ))}
    </>
  )
}

export function SekeletonTile() {
  return (
    <div className="animate-pulse w-full border border-theme-light rounded-lg overflow-hidden bg-theme-light hover:scale-105 transition-all duration-150">
      <div className="h-[160px] bg-theme flex items-center justify-center gap-x-2 animate-pulse"></div>
      <div className="py-2 px-4">
        <div className="flex justify-between gap-x-4 flex-wrap">
          <DetailPiece skeletonWidth="w-16" text="Brand: " />
          <DetailPiece skeletonWidth="w-12" text="Brand: " />
        </div>
        <DetailPiece skeletonWidth="w-28" text="Registered at: " />
        <div className="flex justify-between">
          <DetailPiece skeletonWidth="w-16" text="Fuel: " />
          <DetailPiece skeletonWidth="w-12" text="Power: " />
        </div>
        <DetailPiece skeletonWidth="w-16" text="Consumption: " />
        <DetailPiece skeletonWidth="w-24" text="CC: " />
      </div>
    </div>
  )
}

function DetailPiece({
  text,
  skeletonWidth,
}: {
  text: string
  skeletonWidth: string
}) {
  return (
    <span className="flex items-center gap-x-2">
      {text}:{' '}
      <b
        className={`block ${skeletonWidth} h-5 bg-theme rounded animate-pulse`}
      />
    </span>
  )
}

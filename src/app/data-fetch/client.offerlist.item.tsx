export default function OfferListItem({ offer }: { offer: IOfferObject }) {
  if (!offer) {
    return null
  }

  return (
    <li className="truncate px-4 py-1 rounded border border-gray-400 mb-2">
      {JSON.stringify(offer)}
    </li>
  )
}

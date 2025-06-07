import { useEffect, useState } from "react"
import type { Skip, SkipsResponse } from "../../../api/skips/types"
import { useCart } from "../../../context/cartContext"
import { getSkipsByLocation } from "../../../api/skips"
import Cards from "../../cells/Cards"
import SkipModal from "../../molecules/SkipModal"

type ProductSelection = Skip & {
  isSelected: boolean
}

export default function ProductList() {
  const [skips, setSkips] = useState<SkipsResponse>([]);
  const { cart, addToCart } = useCart();
  
  useEffect(() => {
    const queryString = `postcode=LE10&area=Hinckley`; // Note: This query string can be improved using 'qs'
    getSkipsByLocation(queryString).then((res) => {
      setSkips(res)
    })
  }, []);

  return (
    <div className="m-4">
      <Cards skips={skips} />
    </div>
  )
}
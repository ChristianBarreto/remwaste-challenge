import type { Skip } from "../../../api/skips/types"
import { imgUrl } from "../../../api"
import ImageryTooltip from "../../atoms/ImageryTooltip"
import RoadAlert from "../../atoms/RoadAlert"
import { useCart } from '../../../context/cartContext'


export default function SkipModal({
  skip,
}: {
  skip: Skip
}) {
  const {cart, dispatch} = useCart();
  const added = cart.items.some((s) => s.id === skip.id);

  return (
    <dialog id={`skip-modal-${skip.id}`} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h2 className="card-title font-bold text-lg pb-2">{`${skip.size} Yard Skip`}</h2>
        <figure className="h-1/2">  
          <img
            src={`${imgUrl}${skip.size}-yarder-skip.jpg`}
            alt={`${skip.size} Yard Skip`}
          />
        </figure>
        <div className="card-body p-0 pt-4">
          <div className="flex flex-row justify-between">
            <ImageryTooltip />
            {!skip.allowed_on_road && <RoadAlert />}
          </div>
          <p className="font-bold">{`${skip.hire_period_days} day hire period`}</p>
          <p>
            I decided to create this modal to have more space to add a good description 
            technical and specifications of the skip not only for common customers but for civil constructors.
            I also decided to create a Cart to be able to purchase more then one product.
          </p>
          <p className="text-primary text-xl font-bold text-right pb-4">Price: &#163;{`${skip.price_before_vat}`}</p>
        </div>
        <div className="card-actions flex justify-end">
          <form method="dialog">
            <button
              className="btn btn-primary w-30"
              onClick={() => dispatch({type: 'add', skip})}
              disabled={added}
            >
              {added ? <>Added</> : <>Add to cart</>}
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}
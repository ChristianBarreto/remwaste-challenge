import type { Skip } from "../../../api/skips/types"
import { imgUrl } from "../../../api"
import IconInfo from "../../atoms/IconInfo"
import ImageryTooltip from "../../atoms/ImageryTooltip"
import RoadAlert from "../../atoms/RoadAlert"

export default function SkipModal({
  skip,
}: {
  skip: Skip
}) {
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
          <p>{`${skip.hire_period_days} day hire period`}</p>
          <p>
            I decided to create this modal to have more space to add a good description 
            technical specifications of the skip not only for common customers but for civil constructors.
          </p>
          <p className="text-primary text-xl font-bold">&#163;{`${skip.price_before_vat}`}</p>
        </div>
        <div className="card-actions flex justify-end">
          <button className="btn btn-primary w-30">Add to cart</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}
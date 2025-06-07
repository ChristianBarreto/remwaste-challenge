import { imgUrl } from "../../../api";
import type { Skip } from "../../../api/skips/types";
import RoadAlert from "../../atoms/RoadAlert";
import SkipModal from "../SkipModal";

export default function SkipCard({
  skip,
}: {
  skip: Skip
}) {
  return (
    <div key={skip.id}>
    <div
      key={skip.id}
      className={`card shadow-md cursor-pointer hover:bg-lime-200 hover:outline-1 hover:outline-lime-300`}
      onClick={()=> (document?.getElementById(`skip-modal-${skip.id}`) as HTMLDialogElement).showModal()}
    >
      <figure className="">  
        <img
          src={`${imgUrl}${skip.size}-yarder-skip.jpg`}
          alt={`${skip.size} Yard Skip`}
          height="200"
        />
      </figure>
      <div className="card-body pb-0">
        <div className="flex justify-between">
          <h2 className="card-title">{`${skip.size} Yard Skip`}</h2>
          {!skip.allowed_on_road && (<RoadAlert />)}
        </div>
        <p>{`${skip.hire_period_days} day hire period`}</p>
        <p className="text-xl font-bold text-right">{skip.size} Yards</p>
        <p className="text-primary text-xl font-bold text-right">&#163;{`${skip.price_before_vat}`}</p>
      </div>
      <div className="card-actions px-8 pb-6 flex justify-center">
        <p className="font-light">(click to see more)</p>
      </div>
    </div>
    <SkipModal skip={skip}/>
  </div>
  )
}
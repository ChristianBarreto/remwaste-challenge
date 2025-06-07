import IconInfo from "../IconInfo";

export default function ImageryTooltip() {
  return (
    <div className="tooltip">
      <div className="tooltip-content" style={{left: '200px'}}>
        <div className="">Imagery and information shown throughout this website may not reflect the exact shape
          or size specification, colours may vary, options and/or accessories may be featured at
          additional cost.</div>
      </div>
      <div className="flex flex-row">
        <IconInfo />
        <p className="text-primary ml-2">Imagery Information</p>
      </div>
    </div>
  )
}
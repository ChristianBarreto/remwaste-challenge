export default function Hero({
  hello,
}: {
  hello: string
}) {
  return (
    <div className="hero bg-base-200 py-8">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{hello}</h1>
          <p className="py-6">
            Wellcome, add to cart and click in next.
          </p>
        </div>
      </div>
    </div>
  )
}
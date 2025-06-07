import { useEffect, useState } from "react"
import type { SkipsResponse } from "../../../api/skips/types"
import { getSkipsByLocation } from "../../../api/skips"
import SkipCard from "../../molecules/SkipCard"
import CardSkeleton from "../../cells/CardSkeleton"

export default function ProductList() {
  const [skips, setSkips] = useState<SkipsResponse>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    const queryString = `postcode=LE10&area=Hinckley`; // Note: This query string can be improved using 'qs'
    getSkipsByLocation(queryString)
      .then((res) => {
        setSkips(res);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return (
    <div className="m-4">
      {isError ? (
        <div className="container">
          <div role="alert" className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Unexpected error. Please try again later.</span>
          </div>
        </div>
      ): (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ): (
            <>
              {skips
                .map((skip) => (
                  <SkipCard key={skip.id} skip={skip} />
                ))
              }
            </>
          )}
        </div>
      )}
    </div>
  )
}
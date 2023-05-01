import Image from "next/image"
import { aboutDetails } from "./data"

export const About = () => {
  return (
    <div className="flex flex-col pl-[0.7em] md:flex-row pt-3 md:w-full">
      <div className="flex flex-col space-y-2 md-3/12">
        <h1 className="font-serif text-title font-thin text-title-orange">
          Quiénes somos
        </h1>
        <Image
          alt="about-us"
          className="w-[90%] h-auto"
          height={100}
          src={'https://qmartek.com/img/art3.svg'}
          width={100}
        />
      </div>

      <div className="py-2 pl-2 pr-6 md:px-8 md:w-9/12">
        <div className="flex flex-col space-y-8">
          {
            aboutDetails.map(item => (
              <>
                <div 
                  className="flex flex-col space-y-4"
                  key={item.item}
                >
                  <div className="flex space-x-1 items-center">
                    <div className="rounded-full bg-orange-400 text-white text-center w-[30px] height-[30px] p-[2px] shadow-sm shadow-gray-200">
                      {item.item}
                    </div>
                    <span className="uppercase font-bold"> {item.title}</span>
                  </div>
                  <div>
                    <div className="font-[300] text-justify pl-4">
                      {item.detail}
                    </div>
                    {
                      (item.detailItems != undefined) && <div className="flex flex-col pl-4">
                        {
                          item.detailItems.map(detailItem => (
                            <>
                              <div className="font-[300]">- {detailItem} </div>
                            </>
                          ))
                        }
                      </div>
                    }
                  </div>

                </div>
              </>
            ))
          }

        </div>
      </div>
    </div>
  )
}
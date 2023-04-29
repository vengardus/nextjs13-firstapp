import Image from "next/image"

const aboutDetails = [
  {
    item: '1',
    title: 'Experiencia',
    detail: 'Somos profesionales con más de 22 años de experiencia en implantar soluciones tecnológicas acorde a las necesidades de nuestros clientes.'
  },
  {
    item: '2',
    title: 'Tecnología',
    detail: 'A la vanguardia en el desarrollo e integración de productos y soluciones de captura automatizada de información mediante: códigos de barra, códigos QR, biometría para asistencia y acceso, inventarios patrimoniales y de almacén, identificación, video vigilancia y desarrollo a la medida mobile, web ó PC.'
  },
  {
    item: '3',
    title: 'Soluciones',
    detail: 'Brindamos soluciones comerciales y servicios para:',
    detailItems: [
      'Controlar la asistencia de su personal',
      'Inventario de sus activos fijos, bienes muebles y almacenes',
      'Software para gestión de sus Activos Fijos',
      'Controlar el acceso del personal y video vigilancia',
      'Equipos para punto de venta',
      'Desarrollo de Software a Medida',
    ]
  },

]

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

      <div className="py-2 px-8 md:w-9/12">
        <div className="flex flex-col space-y-8">
          {
            aboutDetails.map(item => (
              <>
                <div className="flex flex-col space-y-4">
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
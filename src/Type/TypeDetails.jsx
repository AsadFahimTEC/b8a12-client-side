

const TypeDetails = ({ service }) => {
    const {
        service_image_url,
        service_name,
        service_description,
        service_area,
        service_price,
      } = service || {};

    return (
         <div className="mt-6 mr-6 ml-6">
      <div
        className="relative flex w-76 h-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        data-aos="zoom-out-down"
      >
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={service_image_url} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="mt-2 block text-red-500 text-xl font-bebasneue font-bold leading-normal antialiased p-[2px] mb-2">
              {service_name}
            </h3>

            <p className="block text-base font-avenir font-bold leading-relaxed text-gray-900 antialiased">
              {service_price}
            </p>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base font-semibold leading-relaxed antialiased">
              <p>{service_description}</p>
            </p>
          </div>
          <div className="flex items-center justify-between">
            {/* <button
              onClick={handleBookService}
              className="bg-[red] hover:bg-[green] font-avenir text-[white] rounded px-5 py-2"
            >
              Book Now
            </button> */}
            <p>{service_area}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default TypeDetails;
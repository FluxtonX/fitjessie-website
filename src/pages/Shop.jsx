const Shop = () => {
  const officialProducts = [
    {
      name: "Fitjessie Balance Yoga Shirt",
      image: "/balanceyogashirt.jpeg",
      color: "bg-neutral-100",
    },
    {
      name: "Yoga Water Bottle",
      image: "/waterbottle.jpeg",
      color: "bg-neutral-100",
    },
    {
      name: "Fitjessie Shirt",
      image: "/fitjessieshirt.jpeg",
      color: "bg-neutral-100",
    },
  ];

  const affiliateProducts = [
    {
      name: "CHRLEISURE 3 Piece Workout Set",
      price: "$31.99",
      saved: "$19.99",
      image: "/cher.jpg",
      link: "https://www.amazon.com/shop/fitjessie/list/2MRNSZ809OPL6?ref_=aip_sf_list_spv_s_ofs_mixed_d&ccs_id=78865ce0-3bc2-4791-b7de-5ceb679a9146", // Example Amazon link
    },
    {
      name: "OLCHEE Womens Workout Sets",
      price: "$17.99",
      saved: "$19.99",
      image: "/olchee.jpg",
      link: "https://www.amazon.com/shop/fitjessie/list/2MRNSZ809OPL6?ref_=aip_sf_list_spv_s_ofs_mixed_d&ccs_id=78865ce0-3bc2-4791-b7de-5ceb679a9146",
    },
    {
      name: "Ekouaer Ribbed Knit Lounge Sets",
      price: "$14.49",
      saved: "$20.99",
      image: "/ek.jpg",
      link: "https://www.amazon.com/shop/fitjessie/list/2MRNSZ809OPL6?ref_=aip_sf_list_spv_s_ofs_mixed_d&ccs_id=78865ce0-3bc2-4791-b7de-5ceb679a9146",
    },
    {
      name: "THE GYM PEOPLE Joggers Pants",
      price: "$23.99",
      saved: "$29.99",
      image: "/gym.jpg",
      link: "https://www.amazon.com/shop/fitjessie/list/2MRNSZ809OPL6?ref_=aip_sf_list_spv_s_ofs_mixed_d&ccs_id=78865ce0-3bc2-4791-b7de-5ceb679a9146",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 font-display">
            Fitjessie Official store
          </h1>
          <p className="text-xl text-secondary">
            Fitjessie Yoga and Workout products
          </p>
        </div>

        {/* Official Products Grid */}
        {/* Official Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {officialProducts.map((product, index) => (
            <a
              key={index}
              href="https://fitjessie.myspreadshop.com/all"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`aspect-square ${product.color} flex items-center justify-center p-8`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Amazon Affiliate Section */}
        <div className="relative py-16 px-8 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4 font-display">
              Fitjessie Amazon Affiliate Store Deals
            </h2>
          </div>

          {/* Amazon Logo */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <svg
                className="w-48 h-32"
                viewBox="0 0 200 100"
                fill="currentColor"
              >
                <path
                  d="M120 60c-10 8-25 12-38 12-18 0-34-6-46-17-1-1 0-2 1-1 13 8 29 12 46 12 11 0 23-2 34-7 2-1 3 1 1 2z"
                  fill="#FF9900"
                />
                <path
                  d="M125 55c-1-2-9-1-12 0-1 0-1-1 0-1 6-4 16-3 17-2 1 2-1 12-6 17-1 1-2 0-1-1 4-5 6-13 5-15z"
                  fill="#FF9900"
                />
                <text
                  x="40"
                  y="50"
                  fontSize="40"
                  fontWeight="bold"
                  fill="#232F3E"
                >
                  amazon
                </text>
              </svg>
            </div>
          </div>

          <p className="text-center text-xl text-secondary mb-8">
            Click amazon picture to store
          </p>

          {/* Affiliate Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {affiliateProducts.map((product, index) => (
              <a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
              >
                <div className="aspect-square bg-neutral-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-sm font-semibold text-neutral-800 mb-2 line-clamp-2">
                  {product.name}
                </h4>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-primary">
                    {product.price}
                  </p>
                  <p className="text-xs text-neutral-500">
                    Save {product.saved}
                  </p>
                  <div className="bg-secondary/20 text-secondary text-xs font-semibold px-2 py-1 rounded inline-block">
                    Limited time deal
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Digital Magazine Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-12 font-display">
            Fitjessie Digital Mini Magazine Issue 1: Yoga wellness
          </h2>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-8">
              <a
                href="https://balletje.gumroad.com/l/ugthtx?_gl=1*i5ddbx*_ga*MjI5NDAzMjA4LjE3NDYzODIyMzI.*_ga_6LJN6D94N6*czE3NDczNTU5NjckbzQkZzEkdDE3NDczNTU5OTMkajAkbDAkaDA."
                target="_blank"
              >
                <img
                  src="/magazine.jpeg"
                  alt="Fitjessie Digital Magazine"
                  className="w-full h-full object-cover rounded-lg shadow-lg "
                />
              </a>
            </div>

            <div className="p-8">
              <p className="text-xl text-secondary mb-6">
                Click the picture to buy.
              </p>
              <a
                href="https://balletje.gumroad.com/l/ugthtx?_gl=1*i5ddbx*_ga*MjI5NDAzMjA4LjE3NDYzODIyMzI.*_ga_6LJN6D94N6*czE3NDczNTU5NjckbzQkZzEkdDE3NDczNTU5OTMkajAkbDAkaDA."
                target="_blank"
              >
                <button className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
                  Purchase Magazine
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

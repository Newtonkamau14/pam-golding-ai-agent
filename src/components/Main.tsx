import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";


export default function Main() {
  return (
    <main className="container mx-auto p-4 space-y-8">
      <section className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Pam Golding</h2>
        <p className="text-lg text-gray-700 mb-6">
          Your trusted real estate partner in Kenya.
        </p>
        <button className="btn bg-[#015121] text-white">Explore Properties</button>
      </section>
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={h1}
              alt="Property 1"
              className="rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">Luxury Villa</h3>
            <p className="text-gray-700 mt-2">4 beds | 3 baths | $500,000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={h2}
              alt="Property 2"
              className="rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">Modern Apartment</h3>
            <p className="text-gray-700 mt-2">2 beds | 2 baths | $300,000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={h3}
              alt="Property 3"
              className="rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">Cozy Cottage</h3>
            <p className="text-gray-700 mt-2">3 beds | 2 baths | $200,000</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 mb-6">
          We offer a wide range of properties, personalized service, and expert
          advice to help you find your dream home.
        </p>
      </section>
    </main>
  );
}
